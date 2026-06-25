/* Custom JS - runs after Webflow scripts */
(function () {
  var grid = document.querySelector('.partner-component-grid');
  if (!grid) return;

  // 1. Collect all partner items
  var items = Array.from(grid.querySelectorAll('.partner-item'));
  if (items.length === 0) return;

  // 2. Build a new marquee container that replaces the grid
  var marquee = document.createElement('div');
  marquee.className = 'marquee-track';

  // Add original items
  items.forEach(function (item) {
    marquee.appendChild(item.cloneNode(true));
  });
  // Add duplicates for seamless loop
  items.forEach(function (item) {
    marquee.appendChild(item.cloneNode(true));
  });

  // 3. Replace the Webflow grid with our marquee track
  //    This also disconnects from IX2 since the original node is removed
  grid.parentNode.replaceChild(marquee, grid);
})();
