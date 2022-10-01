const nextSlideBtn = document.querySelector(".next-slide");
const previousSlideBtn = document.querySelector(".previous-slide");
nextSlideBtn.addEventListener("click", () => {
    changeSlides(1)
}
)
previousSlideBtn.addEventListener("click", () => {
    changeSlides(-1)
}
)
function changeSlides(direction){
    const currentSlide = document.querySelector("[data-active-slide]");
    delete currentSlide.dataset.activeSlide;
    const allSlides = document.querySelectorAll(".slide");
    const arr = Array.from(allSlides);
    let newIndex = arr.indexOf(currentSlide) + direction;
    if (newIndex < 0){
        newIndex = arr.length - 1
    }
    if (newIndex > arr.length - 1){
        newIndex = 0;
    }
    arr[newIndex].dataset.activeSlide = true;
}
