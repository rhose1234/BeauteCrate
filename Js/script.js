document.getElementById('filterButton').addEventListener('click', function() {
  console.log('Filter button clicked!'); // Debugging line
  const linkProduct = document.getElementById('linkProduct');
  linkProduct.classList.toggle('active');
});
