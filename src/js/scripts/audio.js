let currentAudio;
let currentButton;
let currentImage;

const playAudio = (audio, playButton, image) => {
    const $audio = document.querySelector(audio);
    const $playButton = document.querySelector(playButton);
    const $image = document.querySelector(image);

    $playButton.addEventListener("click", function () {
        if (currentAudio === $audio && currentButton === $playButton && currentImage === $image) {
            $audio.pause();
            $playButton.classList.remove("spin");
            $image.classList.remove("wiggle");
        } else {
            if (currentAudio) {
                currentAudio.pause();
                currentButton.classList.remove("spin");
                currentImage.classList.remove("wiggle");
            }
            $audio.play();
            $playButton.classList.add("spin");
            $image.classList.add("wiggle");
            currentAudio = $audio;
            currentButton = $playButton;
            currentImage = $image;
        }
    });

    
}

playAudio(".audio-rebec", ".play-button-rebec", ".image-rebec");
playAudio(".audio-rebab", ".play-button-rebab", ".image-rebab");
playAudio(".audio-lyra", ".play-button-lyra", ".image-lyra");
