const toggleNavbar = document.querySelector(".toggle-navbar");
const navbar = document.querySelector(".navbar")
toggleNavbar.addEventListener("click", (e) => {
    e.preventDefault()
    navbar.classList.toggle("active");
})
const navbarLinks = document.querySelectorAll(".link-underline-effect");
navbarLinks.forEach(link => link.addEventListener("click", () => {
    if (navbar.classList.contains("active")){
        navbar.classList.remove("active");
    }
}
))