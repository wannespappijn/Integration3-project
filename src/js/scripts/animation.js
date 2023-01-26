gsap.registerPlugin(ScrollTrigger);

const playFlourish1 = () => {
    bodymovin.loadAnimation({
        container: document.querySelector(".history__intro-flourish-top"),
        renderer: 'svg',
        loop: false,
        path: '../../assets/svg-animations/flourish-1.json',
    });
};

const playFlourish2 = () => {
    bodymovin.loadAnimation({
        container: document.querySelector(".history__intro-flourish-bottom"),
        renderer: 'svg',
        loop: false,
        path: '../../assets/svg-animations/flourish-1.json',
    });
};




const revealTitle = () => {

    gsap.to(".history__intro-title", 1, {
        delay: 0.4,
        y: 0,
        opacity: 1,
        ease: "ease-in-out",
    });
    setTimeout(playFlourish1, 650);
    setTimeout(playFlourish2, 650);
};




gsap.to(".history__intro-title", {
    transformOrigin: "bottom center",
    scrollTrigger: {
        trigger: ".history__intro-title",
        start: "top 90%",
        end: "bottom 90% ",
        scrub: 1,
        pinPosition: false,
        // markers: true,
        onEnter: revealTitle,
        once : true,
    }
});




const revealAncestors = () => {

    gsap.to(".ancestors__intro", 1.5, {
        y: 0,
        opacity: 1,
        ease: "ease-in",
    });
};


gsap.to(".ancestors__intro", {
    transformOrigin: "bottom center",
    scrollTrigger: {
        trigger: ".ancestors__intro",
        start: "top 65%",
        end: "bottom 30% ",
        scrub: 1,
        pinPosition: false,
        markers: true,
        onEnter: revealAncestors,
        once: true,
    }
});
