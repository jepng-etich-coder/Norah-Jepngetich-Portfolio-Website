const navLinks = document.querySelector(".nav-links");
const menuIcon = document.querySelector("#fa-menu-icon");

menuIcon.addEventListener("click", (event) => {
  navLinks.classList.toggle("active");
});
