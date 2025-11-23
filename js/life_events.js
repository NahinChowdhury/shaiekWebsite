// === Mobile Drawer Menu ===
(function () {
  const toggler = document.getElementById('drawerToggler');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  let lastFocusedElement = null;

  function openDrawer() {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.add('drawer-open');
    toggler.setAttribute('aria-expanded', 'true');
    overlay.setAttribute('aria-hidden', 'false');
    drawer.setAttribute('aria-hidden', 'false');
    lastFocusedElement = document.activeElement;
    document.addEventListener('keydown', handleEsc);
    overlay.addEventListener('click', closeDrawer);
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('drawer-open');
    toggler.setAttribute('aria-expanded', 'false');
    overlay.setAttribute('aria-hidden', 'true');
    drawer.setAttribute('aria-hidden', 'true');
    if (lastFocusedElement) lastFocusedElement.focus();
    document.removeEventListener('keydown', handleEsc);
    overlay.removeEventListener('click', closeDrawer);
  }

  function handleEsc(e) {
    if (e.key === 'Escape') {
      closeDrawer();
    }
  }

  if (toggler && drawer && overlay) {
    toggler.addEventListener('click', function (e) {
      e.preventDefault();
      if (drawer.classList.contains('active')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
    // Close drawer when clicking a link
    drawer.addEventListener('click', function (e) {
      if (e.target.classList.contains('nav-link')) {
        closeDrawer();
      }
    });
  }
})();

const line_blue = document.querySelector('.line-blue');

const observerLine = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('line-animation');
      }
    });
});

observerLine.observe(line_blue);

// --- Image modal logic for life_events page ---
(function () {
  const imageModal = document.getElementById('imageModal');
  const imageModalImg = imageModal ? imageModal.querySelector('#imageModalImg') : null;
  const imageModalClose = imageModal ? imageModal.querySelector('.image-modal-close') : null;
  if (!imageModal || !imageModalImg || !imageModalClose) return;

  let lastFocusedElement = null;

  function handleEsc(e) {
    if (e.key === 'Escape') closeImageModal();
  }

  function openImageModal(src, alt) {
    imageModalImg.src = src;
    imageModalImg.alt = alt || '';
    imageModal.classList.add('open');
    imageModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', handleEsc);
    imageModalClose.focus();
  }

  function closeImageModal() {
    imageModal.classList.remove('open');
    imageModal.setAttribute('aria-hidden', 'true');
    imageModalImg.src = '';
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', handleEsc);
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  // target images on this page
  const pageImages = document.querySelectorAll('.image img, .img-size');
  pageImages.forEach(img => {
    img.setAttribute('tabindex', '0');
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      lastFocusedElement = img;
      openImageModal(img.src, img.alt);
    });
    img.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        lastFocusedElement = img;
        openImageModal(img.src, img.alt);
      }
    });
  });

  // Close handlers: button, overlay click (outside image)
  imageModalClose.addEventListener('click', closeImageModal);
  imageModal.addEventListener('click', (e) => {
    if (
      e.target === imageModalImg ||
      imageModalImg.contains(e.target) ||
      e.target === imageModalClose ||
      imageModalClose.contains(e.target)
    ) {
      return;
    }
    closeImageModal();
  });
})();