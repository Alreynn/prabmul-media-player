const play = document.getElementById('audio');

function duration() {
    const durationSlider = document.getElementById('durationSlider');
    let durationStart = document.getElementById('durationStart');
    let durationEnd = document.getElementById('durationEnd');

    play.onloadedmetadata = () => {
        durationSlider.max = Math.floor(audio.duration);
    }
    play.ontimeupdate = () => {
        let minuteCurrent = Math.floor(play.currentTime / 60);
            if (minuteCurrent < 10) { minuteCurrent = `0${minuteCurrent}` }
        let secondCurrent = Math.floor(play.currentTime % 60);
            if (secondCurrent < 10) { secondCurrent = `0${secondCurrent}` }
        let currentTime = `${minuteCurrent}:${secondCurrent}`;
        durationSlider.value = Math.floor(play.currentTime);
        durationStart.innerText = currentTime;

        let minutesEnd = Math.floor(play.duration / 60);
            if (minutesEnd < 10) { minutesEnd = `0${minutesEnd}` }
        let secondsEnd = Math.floor(play.duration % 60);
            if (secondsEnd < 10) { secondsEnd = `0${secondsEnd}` }
        let musicDuration = `${minutesEnd}:${secondsEnd}`;
            if (musicDuration === 'NaN:NaN') { musicDuration = '00:00'; }
        durationEnd.innerText = musicDuration;
    }
    durationSlider.oninput = () => {
        play.currentTime = durationSlider.value;
    }
};

function restart() { play.currentTime = 0; }
function minusTen() { play.currentTime -= 10; }
let isPlaying = true;
function playAudio() {
    const buttonPlay = document.getElementById('pause');
    const buttonPlayMini = document.getElementById('pauseMini');
    if (isPlaying === false) { // Deteksi jika isPlaying itu false, dan memulai audio
        play.play();
        buttonPlay.className = "fa-solid fa-circle-pause";
        buttonPlayMini.className = "fa-solid fa-circle-pause";
        isPlaying = true;
    } else {
        play.pause();
        buttonPlay.className = "fa-solid fa-circle-play";
        buttonPlayMini.className = "fa-solid fa-circle-play";
        isPlaying = false;
    }
}
function plusTen() { play.currentTime += 10; }
let isOnLoop = false;
function loop() {
    const loopButton = document.getElementById('loop');
    if (isOnLoop === false) {
        play.loop = true;
        loopButton.classList.add('active');
        isOnLoop = true;
    } else {
        play.loop = false;
        loopButton.classList.remove('active');
        isOnLoop = false;
    }
}