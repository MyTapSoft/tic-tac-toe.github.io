let music = document.getElementById("bg-music");
let imgSoundBtnOff = document.getElementById("music-btn");
let isMusicPlaying = false;

function musicController() {
    if (isMusicPlaying === false) {
        music.play();
        imgSoundBtnOff.src = "images/music-btn.png";
        isMusicPlaying = true;
    } else {
        music.pause();
        imgSoundBtnOff.src = "images/music-btn-off.png";
        isMusicPlaying = false;
    }
}