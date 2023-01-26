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



const revealRebab = () => {
    const $rebab = document.querySelector(".image-rebab");
    $rebab.style.opacity = 1;
    gsap.from(".image-rebab", 1, {
        x: -200,
        opacity: 0,
        ease: "ease-in-out",
        rotate: -3,
    });

};

const revealRebabText = () => {
    const $textRebab = document.querySelector(".text-rebab");
    $textRebab.style.opacity = 1;
    gsap.from(".text-rebab", 1, {
        delay : 0.4,
        y: 40,
        opacity: 0,
        ease: "ease-in-out",
    });
};



gsap.to(".rebab-image", {
    transformOrigin: "bottom center",
    scrollTrigger: {
        trigger: ".image-rebab",
        start: "top 50%",
        end: "bottom 50% ",
        scrub: 1,
        pinPosition: false,
        // markers: true,
        onEnter: revealRebab,
        once: true,
    }
});

gsap.to(".rebab-text", {
    transformOrigin: "bottom center",
    scrollTrigger: {
        trigger: ".image-rebab",
        start: "top 50%",
        end: "bottom 50% ",
        scrub: 1,
        pinPosition: false,
        markers: true,
        onEnter: revealRebabText,
        once: true,
    }
});

const revealRebec = () => {
    const $rebab = document.querySelector(".image-rebec");
    $rebab.style.opacity = 1;
    gsap.from(".image-rebec", 1, {
        x: 200,
        opacity: 0,
        ease: "ease-in-out",
        rotate: 6,
    });

};

const revealRebecText = () => {
    const $textRebab = document.querySelector(".text-rebec");
    $textRebab.style.opacity = 1;
    gsap.from(".text-rebec", 1, {
        delay: 0.4,
        y: 40,
        opacity: 0,
        ease: "ease-in-out",
    });
};



gsap.to(".rebec-image", {
    transformOrigin: "bottom center",
    scrollTrigger: {
        trigger: ".image-rebec",
        start: "top 50%",
        end: "bottom 50% ",
        scrub: 1,
        pinPosition: false,
        // markers: true,
        onEnter: revealRebec,
        once: true,
    }
});

gsap.to(".rebec-text", {
    transformOrigin: "bottom center",
    scrollTrigger: {
        trigger: ".image-rebec",
        start: "top 50%",
        end: "bottom 50% ",
        scrub: 1,
        pinPosition: false,
        markers: true,
        onEnter: revealRebecText,
        once: true,
    }
});


const revealLyra = () => {
    const $lyra = document.querySelector(".image-lyra");
    $lyra.style.opacity = 1;
    gsap.from(".image-lyra", 1, {
        x: -200,
        opacity: 0,
        ease: "ease-in-out",
        rotate: -3,
    });

};

const revealLyraText = () => {
    const $textLyra = document.querySelector(".text-lyra");
    $textLyra.style.opacity = 1;
    gsap.from(".text-lyra", 1, {
        delay: 0.4,
        y: 40,
        opacity: 0,
        ease: "ease-in-out",
    });
};



gsap.to(".image-lya", {
    transformOrigin: "bottom center",
    scrollTrigger: {
        trigger: ".image-lyra",
        start: "top 50%",
        end: "bottom 50% ",
        scrub: 1,
        pinPosition: false,
        // markers: true,
        onEnter: revealLyra,
        once: true,
    }
});

gsap.to(".text-lyra", {
    transformOrigin: "bottom center",
    scrollTrigger: {
        trigger: ".image-lyra",
        start: "top 50%",
        end: "bottom 50% ",
        scrub: 1,
        pinPosition: false,
        markers: true,
        onEnter: revealLyraText,
        once: true,
    }
});








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
        once: true,
    }
});




const revealAncestors = () => {

    gsap.to(".ancestors__intro", 1, {
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
        pinPosition: false,
        // markers: true,
        onEnter: revealAncestors,
        once: true,
    }
});


const playInstrumentFlourish = () => {
    bodymovin.loadAnimation({
        container: document.querySelector(".instrument__text-flourish"),
        renderer: 'svg',
        loop: false,
        path: '../../assets/svg-animations/flourish-1.json',
    });
};

playInstrumentFlourish();