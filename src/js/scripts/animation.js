


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

    gsap.from(".history__intro-title", 1, {
        delay: 0.4,
        y: 30,
        opacity: 0,
        ease: "ease-in-out",
    });
    setTimeout(playFlourish1, 650);
    setTimeout(playFlourish2, 650);
};


revealTitle();





