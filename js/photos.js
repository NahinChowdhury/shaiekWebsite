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

const line_red = document.querySelector('.line-red');

const top_btn = document.querySelector('.top-btn');


top_btn.addEventListener("click", ()=>{
    window.scrollTo(0,0);
})


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
 
observerLine.observe(line_red);

// --- Image modal logic ---
(function () {
  const imageModal = document.getElementById('imageModal');
  const imageModalImg = document.getElementById('imageModalImg');
  const imageModalClose = imageModal ? imageModal.querySelector('.image-modal-close') : null;
  if (!imageModal || !imageModalImg || !imageModalClose) return;

  function handleImageModalEsc(e) {
    if (e.key === 'Escape') closeImageModal();
  }

  function openImageModal(src, alt) {
    imageModalImg.src = src;
    imageModalImg.alt = alt || '';
    imageModal.classList.add('open');
    imageModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', handleImageModalEsc);
    // focus for accessibility
    imageModalClose.focus();
  }

  function closeImageModal() {
    imageModal.classList.remove('open');
    imageModal.setAttribute('aria-hidden', 'true');
    imageModalImg.src = '';
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', handleImageModalEsc);
    // return focus to previously focused element if possible
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  // Open modal when clicking any photo image
  const photoImages = document.querySelectorAll('.photo img');
  photoImages.forEach(img => {
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

  // Close handlers
  imageModalClose.addEventListener('click', closeImageModal);
  imageModal.addEventListener('click', (e) => {
    // Ignore clicks on the image itself or the close button
    if (
      e.target === imageModalImg ||
      imageModalImg.contains(e.target) ||
      e.target === imageModalClose ||
      imageModalClose.contains(e.target)
    ) {
      return;
    }
    // Any other click inside the modal (overlay or whitespace around the image) closes it
    closeImageModal();
  });
})();