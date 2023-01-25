const $images = document.querySelectorAll("img");
let imagesLoaded = 0;

const playFlourish1 = () => {
    bodymovin.loadAnimation({
        container: document.querySelector(".landing__flourish"),
        renderer: 'svg',
        loop: false,
        path: '../../assets/svg-animations/flourish-1.json'
    });
};


const revealText = () => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    const $container = document.querySelector(".landing__wrapper-text");
    const tl = gsap.timeline();
    if (mediaQuery.matches) {
        tl.from($container, 1, {
            delay: 0.7,
            y: 15,
            opacity: 0,
            ease: "ease-in-out",
        })
    } else {
        tl.from($container, 1.5, {
            delay: 0.7,
            y: 100,
            opacity: 0,
            ease: "ease-in-out",
        })
    }
};


const revealImage = () => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    const $imageContainer = document.querySelector(".landing__wrapper-image");
    const tl = gsap.timeline();
    if (mediaQuery.matches) {
        // console.log("for phone")
        tl.from($imageContainer, 1, {
            delay: 0.7,
            y: -15,
            opacity: 0,
            ease: "ease-in-out",
        })
    } else {
        // console.log("for desktop");
        tl.from($imageContainer, 1.5, {
            delay: 0.7,
            x: 100,
            opacity: 0,
            ease: "ease-in-out",

        })
    }
};


const imageLoaded = () => {
    imagesLoaded++;
    let percentage = (imagesLoaded / $images.length) * 100;
    document.querySelector(".preloader__percentage").innerHTML = percentage + "%";
    if (imagesLoaded === $images.length) {
        console.log("images loaded");
        document.querySelector(".preloader").style.display = "none";
        preloadComplete();
    }
}

for (let i = 0; i < $images.length; i++) {
    const $image = new Image();
    $image.onload = imageLoaded;
    $image.src = $images[i].src;
}





const preloadComplete = async () => {
    playFlourish1();
    revealText();
    revealImage();
    // console.log("animation plays")
};
