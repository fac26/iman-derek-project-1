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

// allows you to navigate through the portfolio by clicking on the left and right arrow keys
const nextSlideBtn = document.querySelector(".next-slide");
const previousSlideBtn = document.querySelector(".previous-slide");
nextSlideBtn.addEventListener("click", () => {
    changeSlides(1);
}
)
previousSlideBtn.addEventListener("click", () => {
    changeSlides(-1);
}
)
function changeSlides(direction){
    const currentSlide = document.querySelector("[data-active-slide]");
    delete currentSlide.dataset.activeSlide;
    const allSlides = document.querySelectorAll(".slide");
    const arr = Array.from(allSlides);
    let newIndex = arr.indexOf(currentSlide) + direction;
    if (newIndex < 0){
        newIndex = arr.length - 1;
    }
    if (newIndex > arr.length - 1){
        newIndex = 0;
    }
    arr[newIndex].dataset.activeSlide = true;
    const currentIndicator = document.querySelector("[data-active-indicator]");
    delete currentIndicator.dataset.activeIndicator;
    const slideIndicators = document.querySelectorAll(".slide-indicator");
    const indicatorArr = Array.from(slideIndicators);
    indicatorArr[newIndex].dataset.activeIndicator = true;
}

// this piece of code allows you click on dots or use keyboard to navigate through instead of relying on the arrows
const slideIndicators = document.querySelectorAll(".slide-indicator");
slideIndicators.forEach(indicator => indicator.addEventListener(("click"), (e) => {
    changeSlidesViaIndicators(e.target);
}))
function changeSlidesViaIndicators(indicator){
    const currentIndicator = document.querySelector("[data-active-indicator]");
    const currentSlide = document.querySelector("[data-active-slide]");
    const allSlides = document.querySelectorAll(".slide");
    const arr = Array.from(allSlides);
    const indicatorArr = Array.from(slideIndicators);
    const newIndicatorindex = indicatorArr.indexOf(indicator);
    delete currentIndicator.dataset.activeIndicator;
    indicator.dataset.activeIndicator = true;
    delete currentSlide.dataset.activeSlide;
    arr[newIndicatorindex].dataset.activeSlide = true;
}

// adding validation rules to form


