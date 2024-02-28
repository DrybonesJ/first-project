document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    document.querySelector(".next").addEventListener("click", function () {
        showSlide(currentIndex + 1);
    });

    document.querySelector(".prev").addEventListener("click", function () {
        showSlide(currentIndex - 1);
    });

    function showSlide(index) {
        slides[currentIndex].classList.remove("active");
        currentIndex = (index + slides.length) % slides.length;
        slides[currentIndex].classList.add("active");
    }
});
