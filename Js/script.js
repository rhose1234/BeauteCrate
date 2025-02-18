document.getElementById('filterButton').addEventListener('click', function() {
  console.log('Filter button clicked!'); // Debugging line
  const linkProduct = document.getElementById('linkProduct');
  linkProduct.classList.toggle('active');
});

//navigation menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  console.log("CLICK");

  menuToggle.addEventListener("click", function () {
    console.log("CLICK ME");
    mobileMenu.classList.toggle("show");
  });
});