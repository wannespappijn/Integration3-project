
const playFlourish1 = () => {

    bodymovin.loadAnimation({
        container: document.querySelector(".landing__flourish"),
        renderer: 'svg',
        loop: false,
        path: '../../assets/svg-animations/flourish-1.json'
    });
};


const revealText = () => {
const $container = document.querySelector(".landing__wrapper-left");
const tl = gsap.timeline();
    tl.from( $container, 1.5, {
        delay: 0.1,
        y: 100,
        opacity: 0,
        ease: "ease-in-out",
    })
};

const revealImage = () => {
    const $imageContainer = document.querySelector(".landing__wrapper-right");
    const tl = gsap.timeline();
    tl.from($imageContainer, 1.5, {
        delay: 0.1,
        x: 100,
        opacity: 0,
        ease: "ease-in-out",
    })
};
    





setTimeout(() => {
    playFlourish1();
    revealText();
    revealImage();
}, 100);