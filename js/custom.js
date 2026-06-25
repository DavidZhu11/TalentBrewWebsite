/* Custom JS - runs after Webflow scripts */
(function () {
  function initMarquee() {
    var grid = document.querySelector('.partner-component-grid');
    if (!grid) return;

    // 1. Extract all logo image sources from the grid
    var imgs = Array.from(grid.querySelectorAll('img.partner-logo'));
    var sources = [];
    imgs.forEach(function (img) {
      // Use the base src (not srcset) for simplicity and reliability
      if (img.src) sources.push(img.src);
    });

    console.log('Marquee: found ' + sources.length + ' logo images');
    if (sources.length === 0) return;

    // 2. Build a fresh marquee track with clean img elements
    //    Repeat 3x to ensure there's always enough content visible
    var marquee = document.createElement('div');
    marquee.className = 'marquee-track';

    for (var copy = 0; copy < 3; copy++) {
      sources.forEach(function (src) {
        var img = document.createElement('img');
        img.src = src;
        img.className = 'partner-logo';
        img.alt = '';
        img.loading = 'eager';
        img.decoding = 'async';
        marquee.appendChild(img);
      });
    }

    console.log('Marquee: ' + marquee.children.length + ' total images in track');

    // 3. Hide original grid and insert marquee after it
    grid.style.display = 'none';
    grid.parentNode.insertBefore(marquee, grid.nextSibling);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMarquee);
  } else {
    initMarquee();
  }
})();
