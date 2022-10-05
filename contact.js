const toggleNavbar = document.querySelector(".toggle-navbar");
const navbar = document.querySelector(".navbar")
toggleNavbar.addEventListener("click", () => {
    navbar.classList.toggle("active");
})