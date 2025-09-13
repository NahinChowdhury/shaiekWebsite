// === Mobile Drawer Menu ===
(function () {
  const toggler = document.getElementById('drawerToggler');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const focusableSelectors = 'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])';
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