import '../css/style.css';
import './scripts/animation.js';


if (import.meta.hot) {
    import.meta.hot.accept(() => {
        console.log("HMR");
    });
}
