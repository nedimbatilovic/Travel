let controller;
let slideScene;

function animateSlides() {
    // controller init
    controller = new ScrollMagic.Controller();
    //selectors
    const sliders = document.querySelectorAll(".slide");
    const nav = document.querySelector(".nav-header");

    sliders.forEach((slide) => {
        const revealImg = slide.querySelector(".reveal-img");
        const revealText = slide.querySelector(".reveal-text");
        const img = slide.querySelector("img");
    });
}
