import '../css/style.css';
import './scripts/animation.js';
import './scripts/preloader.js';
import './scripts/audio.js';


if (import.meta.hot) {
    import.meta.hot.accept(() => {
        console.log("HMR");
    });
}
