document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  console.log("CLICK");

  menuToggle.addEventListener("click", function () {
    console.log("CLICK ME");
    mobileMenu.classList.toggle("show");
  });
});
