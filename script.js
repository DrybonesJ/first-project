// document.addEventListener("DOMContentLoaded", function () {
//     const slides = document.querySelectorAll(".slide");
//     let currentIndex = 0;

//     document.querySelector(".next").addEventListener("click", function () {
//         showSlide(currentIndex + 1);
//     });

//     document.querySelector(".prev").addEventListener("click", function () {
//         showSlide(currentIndex - 1);
//     });

//     function showSlide(index) {
//         slides[currentIndex].classList.remove("active");
//         currentIndex = (index + slides.length) % slides.length;
//         slides[currentIndex].classList.add("active");
//     }
// });

// const prevArrow = document.getElementById("prev-arrow");
// const nextArrow = document.getElementById("next-arrow");

// prevArrow.addEventListener("click", scrollImages('left'));
// nextArrow.addEventListener("click", scrollImages('right'));

function scrollImages(direction) {
    const container = document.getElementById('scrollContainer');
    const scrollAmount = container.clientWidth;
    if (direction === 'left') {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

