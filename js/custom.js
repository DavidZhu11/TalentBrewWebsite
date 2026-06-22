/* Custom JS - runs after Webflow scripts */
(function () {
  var grid = document.querySelector('.partner-component-grid');
  if (!grid) return;

  // 1. Duplicate all logo items for seamless infinite scroll
  var items = Array.from(grid.querySelectorAll('.partner-item'));
  items.forEach(function (item) {
    grid.appendChild(item.cloneNode(true));
  });

  // 2. Replace the grid with a clean clone to disconnect ALL Webflow IX2 event listeners
  //    cloneNode copies DOM but NOT event listeners, so IX2 can't touch it anymore
  var cleanGrid = grid.cloneNode(true);
  cleanGrid.removeAttribute('style'); // remove any inline transforms IX2 already set
  cleanGrid.classList.add('marquee-active');
  grid.parentNode.replaceChild(cleanGrid, grid);
})();
