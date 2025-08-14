// Initialize Pagefind search UI on the header input

document.addEventListener('DOMContentLoaded', function () {
  if (typeof PagefindUI === 'undefined') {
    console.error('PagefindUI script not loaded');
    return;
  }

  new PagefindUI({
    element: '#search-form',
    input: '#search-input'
  });
});
