/* Custom JS - runs after Webflow scripts */
(function () {
  function initMarquee() {
    // There are MULTIPLE .partner-component-grid elements — grab ALL of them
    var grids = document.querySelectorAll('.partner-component-grid');
    if (grids.length === 0) return;

    // 1. Extract ALL logo image sources from ALL grids
    var sources = [];
    grids.forEach(function (grid) {
      var imgs = grid.querySelectorAll('img.partner-logo');
      imgs.forEach(function (img) {
        if (img.src) sources.push(img.src);
      });
    });

    console.log('Marquee: found ' + sources.length + ' logos across ' + grids.length + ' grids');
    if (sources.length === 0) return;

    // 2. Build marquee track with 2 copies for seamless loop
    var marquee = document.createElement('div');
    marquee.className = 'marquee-track';

    for (var copy = 0; copy < 2; copy++) {
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

    // 3. Hide ALL original grids
    grids.forEach(function (grid) {
      grid.style.display = 'none';
    });

    // 4. Insert marquee into the partner container
    var container = document.querySelector('.partner-container');
    if (container) {
      container.appendChild(marquee);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMarquee);
  } else {
    initMarquee();
  }
})();
