/* Custom JS - runs after Webflow scripts */
(function () {
  // Override Webflow IX2 animation on partner logo grid
  // and replace with continuous one-direction CSS marquee
  var grid = document.querySelector('.partner-component-grid');
  if (grid) {
    // Use MutationObserver to strip inline transform set by Webflow IX2
    var observer = new MutationObserver(function () {
      if (grid.style.transform) {
        grid.style.transform = '';
      }
    });
    observer.observe(grid, { attributes: true, attributeFilter: ['style'] });

    // Activate CSS marquee animation
    grid.classList.add('marquee-active');
  }
})();
