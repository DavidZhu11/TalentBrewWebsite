/* Custom JS - runs after Webflow scripts */
(function () {
  // Wait for DOM to be fully ready
  function initMarquee() {
    var grid = document.querySelector('.partner-component-grid');
    if (!grid) return;

    // Collect ALL partner items
    var items = Array.from(grid.querySelectorAll('.partner-item'));
    console.log('Marquee: found ' + items.length + ' partner items');
    if (items.length === 0) return;

    // Build marquee track
    var marquee = document.createElement('div');
    marquee.className = 'marquee-track';

    // Add original items + duplicate for seamless loop
    for (var copy = 0; copy < 2; copy++) {
      items.forEach(function (item) {
        var clone = item.cloneNode(true);
        // Ensure images load (remove lazy loading)
        var imgs = clone.querySelectorAll('img');
        imgs.forEach(function (img) {
          img.setAttribute('loading', 'eager');
          // Remove srcset sizes that reference 100vw — force a reasonable size
          img.removeAttribute('sizes');
        });
        marquee.appendChild(clone);
      });
    }

    console.log('Marquee: total items in track = ' + marquee.children.length);

    // Replace the grid with marquee (this removes grid from DOM — no CSS hide needed)
    grid.parentNode.replaceChild(marquee, grid);
  }

  // Run on DOMContentLoaded or immediately if already loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMarquee);
  } else {
    initMarquee();
  }
})();
