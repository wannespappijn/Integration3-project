
const $rebecAudio = document.querySelector(".audio-rebec");
const $rebecPlayButton = document.querySelector(".play-button-rebec");
const $rebecImage = document.querySelector(".image-rebec");

console.log($rebecAudio);
console.log($rebecPlayButton);

$rebecPlayButton.addEventListener("click", function () {
    if ($rebecAudio.paused) {
        $rebecAudio.play();
        $rebecPlayButton.classList.add("spin");
        $rebecImage.classList.add("wiggle");
    } else {
        $rebecAudio.pause();
        $rebecPlayButton.classList.remove("spin");
        $rebecImage.classList.remove("wiggle");
    }
});


const $rebabAudio = document.querySelector(".audio-rebab");
const $rebabPlayButton = document.querySelector(".play-button-rebab");
const $rebabImage = document.querySelector(".image-rebab");

console.log($rebabAudio);
console.log($rebabPlayButton);

$rebabPlayButton.addEventListener("click", function () {
    if ($rebabAudio.paused) {
        $rebabAudio.play();
        $rebabPlayButton.classList.add("spin");
        $rebabImage.classList.add("wiggle");
    } else {
        $rebabAudio.pause();
        $rebabPlayButton.classList.remove("spin");
        $rebabImage.classList.remove("wiggle");
    }
});



const $lyraAudio = document.querySelector(".audio-lyra");
const $lyraPlayButton = document.querySelector(".play-button-lyra");
const $lyraImage = document.querySelector(".image-lyra");

console.log($lyraAudio);
console.log($lyraPlayButton);

$lyraPlayButton.addEventListener("click", function () {
    if ($rebabAudio.paused) {
        $lyraAudio.play();
        $lyraPlayButton.classList.add("spin");
        $lyraImage.classList.add("wiggle");
    } else {
        $lyraAudio.pause();
        $lyraPlayButton.classList.remove("spin");
        $lyraImage.classList.remove("wiggle");
    }
});