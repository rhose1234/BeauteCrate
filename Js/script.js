document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  console.log("CLICK");

  menuToggle.addEventListener("click", function () {
    console.log("CLICK ME");
    mobileMenu.classList.toggle("show");
  });
});

//product page js
document.getElementById('filterButton').addEventListener('click', function() {
  console.log('Filter button clicked!'); // Debugging line
  const linkProduct = document.getElementById('linkProduct');
  linkProduct.classList.toggle('active');
});

//filter

document.getElementById("filterbin").addEventListener("click", 
  function () {
  let filterContent = document.getElementById("filter-content");

 filterContent.style.display = (filterContent.style.display === "block") ? "none" : "block";
 });

