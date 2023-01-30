gsap.registerPlugin(ScrollTrigger);
const mediaQuery = window.matchMedia("(max-width: 600px)");

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


const playFlourishHistorySummary = () => {
    bodymovin.loadAnimation({
        container: document.querySelector(".ancestors__summary-flourish"),
        renderer: 'svg',
        loop: false,
        path: '../../assets/svg-animations/flourish-1.json',
    });
};

const playAmatiFlourishTop = () => {
    bodymovin.loadAnimation({
        container: document.querySelector(".amati-flourish-top"),
        renderer: 'svg',
        loop: false,
        path: '../../assets/svg-animations/flourish-2.json',
    });
};
const playAmatiFlourishBottom = () => {
    bodymovin.loadAnimation({
        container: document.querySelector(".amati-flourish-bottom"),
        renderer: 'svg',
        loop: false,
        path: '../../assets/svg-animations/flourish-2.json',
    });
};

const playStradivariFlourishTop = () => {
    bodymovin.loadAnimation({
        container: document.querySelector(".stradivari-flourish-top"),
        renderer: 'svg',
        loop: false,
        path: '../../assets/svg-animations/flourish-2.json',
    });
};

const playStradivariFlourishBottom = () => {
    bodymovin.loadAnimation({
        container: document.querySelector(".stradivari-flourish-bottom"),
        renderer: 'svg',
        loop: false,
        path: '../../assets/svg-animations/flourish-2.json',
    });
};

const playModernFlourishTop = () => {
    bodymovin.loadAnimation({
        container: document.querySelector(".modern-flourish-top"),
        renderer: 'svg',
        loop: false,
        path: '../../assets/svg-animations/flourish-2.json',
    });
};

const playModernFlourishBottom = () => {
    bodymovin.loadAnimation({
        container: document.querySelector(".modern-flourish-bottom"),
        renderer: 'svg',
        loop: false,
        path: '../../assets/svg-animations/flourish-2.json',
    });
};



const revealOriginsImage = () => {
    const $originsImage = document.querySelector(".origins__image");
    $originsImage.style.opacity = 1;
    gsap.from(".origins__image", 1, {
        y: 40,
        opacity: 0,
        ease: "ease-in-out",
    });
};

const revealOriginsText = () => {
    const $originsText = document.querySelector(".origins__text");
    $originsText.style.opacity = 1;
    gsap.from(".origins__text", 1, {
        delay: 0.4,
        y: 40,
        opacity: 0,
        ease: "ease-in-out",
    });
};

gsap.to(".origins__text", {
    transformOrigin: "bottom center",
    scrollTrigger: {
        trigger: ".origins__text",
        start: "top 80%",
        end: "bottom 80% ",
        // markers: true,
        onEnter: revealOriginsText,
        once: true,
    }
});

gsap.to(".origins__image", {
    transformOrigin: "bottom center",
    scrollTrigger: {
        trigger: ".origins__image",
        start: "top 80%",
        end: "bottom 80% ",
        // markers: true,
        onEnter: revealOriginsImage,
        once: true,
    }
});

const revealAmatiImage = () => {
    const $amatiImage = document.querySelector(".builder__image-amati");
    $amatiImage.style.opacity = 1;
    gsap.from(".builder__image-amati", 1, {
        y: 40,
        opacity: 0,
        ease: "ease-in-out",
    });
};

const revealAmatiText = () => {
    setTimeout(playAmatiFlourishTop, 400);
    setTimeout(playAmatiFlourishBottom, 400);
    const $amatiText = document.querySelector(".builder__text-amati");
    $amatiText.style.opacity = 1;
    gsap.from(".builder__text-amati", 1, {
        delay: 0.4,
        y: 40,
        opacity: 0,
        ease: "ease-in-out",
    });
};

gsap.to(".builder__image-amati", {
    transformOrigin: "bottom center",
    scrollTrigger: {
        trigger: ".builder__image-amati",
        start: "top 80%",
        end: "bottom 80% ",
        // markers: true,
        onEnter: revealAmatiImage,
        once: true,
    }
});

gsap.to(".builder__text-amati", {
    transformOrigin: "bottom center",
    scrollTrigger: {
        trigger: ".builder__text-amati",
        start: "top 80%",
        end: "bottom 80% ",
        // markers: true,
        onEnter: revealAmatiText,
        once: true,
    }
});

const revealStradivariImage = () => {
    const $stradivariImage = document.querySelector(".builder__image-stradivari");
    $stradivariImage.style.opacity = 1;
    gsap.from(".builder__image-stradivari", 1, {
        y: 40,
        opacity: 0,
        ease: "ease-in-out",
    });
};

const revealStradivariText = () => {
    setTimeout(playStradivariFlourishTop, 400);
    setTimeout(playStradivariFlourishBottom, 400);
    const $stradivariText = document.querySelector(".builder__text-stradivari");
    $stradivariText.style.opacity = 1;
    gsap.from(".builder__text-stradivari", 1, {
        delay: 0.4,
        y: 40,
        opacity: 0,
        ease: "ease-in-out",
    });
};

gsap.to(".builder__image-stradivari", {
    transformOrigin: "bottom center",
    scrollTrigger: {
        trigger: ".builder__image-stradivari",
        start: "top 80%",
        end: "bottom 80% ",
        // markers: true,
        onEnter: revealStradivariImage,
        once: true,
    }
});

gsap.to(".builder__text-stradivari", {
    transformOrigin: "bottom center",
    scrollTrigger: {
        trigger: ".builder__text-stradivari",
        start: "top 80%",
        end: "bottom 80% ",
        // markers: true,
        onEnter: revealStradivariText,
        once: true,
    }
});


const revealModernImage = () => {
    const $modernImage = document.querySelector(".builder__image-modern");
    $modernImage.style.opacity = 1;
    gsap.from(".builder__image-modern", 1, {
        y: 40,
        opacity: 0,
        ease: "ease-in-out",
    });
};

const revealModernText = () => {
    setTimeout(playModernFlourishTop, 400);
    setTimeout(playModernFlourishBottom, 400);
    const $modernText = document.querySelector(".builder__text-modern");
    $modernText.style.opacity = 1;
    gsap.from(".builder__text-modern", 1, {
        delay: 0.4,
        y: 40,
        opacity: 0,
        ease: "ease-in-out",
    });
};

gsap.to(".builder__image-modern", {
    transformOrigin: "bottom center",
    scrollTrigger: {
        trigger: ".builder__image-modern",
        start: "top 80%",
        end: "bottom 80% ",
        // markers: true,
        onEnter: revealModernImage,
        once: true,
    }
});

gsap.to(".builder__text-modern", {
    transformOrigin: "bottom center",
    scrollTrigger: {
        trigger: ".builder__text-modern",
        start: "top 80%",
        end: "bottom 80% ",
        // markers: true,
        onEnter: revealModernText,
        once: true,
    }
});






const revealAncestorsSummary = () => {
    playFlourishHistorySummary();
    const $textAncestorsSummary = document.querySelector(".ancestors__summary-text");
    $textAncestorsSummary.style.opacity = 1;
    gsap.from(".ancestors__summary-text", 1, {
        delay: 0.4,
        y: 40,
        opacity: 0,
        ease: "ease-in-out",
    });
};



gsap.to(".ancestors__summary-text", {
    transformOrigin: "bottom center",
    scrollTrigger: {
        trigger: ".ancestors__summary-text",
        start: "top 80%",
        end: "bottom 80% ",
        scrub: 1,
        pinPosition: false,
        // markers: true,
        onEnter: revealAncestorsSummary,
        once: true,
    }
});


const revealRebab = () => {
    const $rebab = document.querySelector(".image-rebab");
    $rebab.style.opacity = 1;
    if (mediaQuery.matches) {
        gsap.from(".image-rebab", 1, {
            x: -100,
            opacity: 0,
            ease: "ease-in-out",
            rotate: -3,
        });
    } else {
        gsap.from(".image-rebab", 1, {
            x: -200,
            opacity: 0,
            ease: "ease-in-out",
            rotate: -3,
        });
    };
};

const revealRebabText = () => {
    setTimeout(playInstrumentFlourishRebab, 400)
    const $textRebab = document.querySelector(".text-rebab");
    $textRebab.style.opacity = 1;
    if (mediaQuery.matches) {
        gsap.from(".text-rebab", 1, {
            delay: 0.4,
            y: 20,
            opacity: 0,
            ease: "ease-in-out",
        });
    } else {
        gsap.from(".text-rebab", 1, {
            delay: 0.4,
            y: 40,
            opacity: 0,
            ease: "ease-in-out",
        });
    }
};


if (mediaQuery.matches) {
    gsap.to(".rebab-image", {
        transformOrigin: "bottom center",
        scrollTrigger: {
            trigger: ".text-rebab",
            start: "top 70%",
            end: "bottom 70% ",
            // markers: true,
            onEnter: revealRebab,
            once: true,
        }
    });


    gsap.to(".rebab-text", {
        transformOrigin: "bottom center",
        scrollTrigger: {
            trigger: ".text-rebab",
            start: "top 70%",
            end: "bottom 70% ",
            // markers: true,
            onEnter: revealRebabText,
            once: true,
        }
    });

} else {
    gsap.to(".rebab-image", {
        transformOrigin: "bottom center",
        scrollTrigger: {
            trigger: ".image-rebab",
            start: "top 50%",
            end: "bottom 50% ",
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
            // markers: true,
            onEnter: revealRebabText,
            once: true,
        }
    });
}




const revealLyra = () => {
    const $lyra = document.querySelector(".image-lyra");
    $lyra.style.opacity = 1;
    setTimeout(playInstrumentFlourishLyra, 400)
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
        // markers: true,
        onEnter: revealAncestors,
        once: true,
    }
});


const playInstrumentFlourishRebab = () => {
    bodymovin.loadAnimation({
        container: document.querySelector(".instrument__text-flourish-rebab"),
        renderer: 'svg',
        loop: false,
        path: '../../assets/svg-animations/flourish-1.json',
    });
};


const playInstrumentFlourishRebec = () => {
    bodymovin.loadAnimation({
        container: document.querySelector(".instrument__text-flourish-rebec"),
        renderer: 'svg',
        loop: false,
        path: '../../assets/svg-animations/flourish-1.json',
    });
};


const playInstrumentFlourishLyra = () => {
    bodymovin.loadAnimation({
        container: document.querySelector(".instrument__text-flourish-lyra"),
        renderer: 'svg',
        loop: false,
        path: '../../assets/svg-animations/flourish-1.json',
    });
};


