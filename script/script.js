const navLinks = document.querySelector(".nav-links");
const menuIcon = document.querySelector("#fa-menu-icon");

menuIcon.addEventListener("click", (event) => {
  navLinks.classList.toggle("active");
});

// Close menu when clicking anywhere else
document.addEventListener("click", (event) => {
  if (
    navLinks.classList.contains("active") &&
    !navLinks.contains(event.target) &&
    event.target !== menuIcon
  ) {
    navLinks.classList.remove("active");
  }
});
