/* Custom JS - runs after Webflow scripts */
(function () {
  var grid = document.querySelector('.partner-component-grid');
  if (!grid) return;

  // 1. Duplicate all logo items for seamless infinite scroll
  var items = grid.querySelectorAll('.partner-item');
  items.forEach(function (item) {
    var clone = item.cloneNode(true);
    grid.appendChild(clone);
  });

  // 2. Use MutationObserver to strip inline transform set by Webflow IX2
  var observer = new MutationObserver(function () {
    if (grid.style.transform) {
      grid.style.transform = '';
    }
  });
  observer.observe(grid, { attributes: true, attributeFilter: ['style'] });

  // 3. Activate CSS marquee animation
  grid.classList.add('marquee-active');
})();
