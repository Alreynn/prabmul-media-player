const buttonPlay = document.getElementById('pause');
const buttonPlayMini = document.getElementById('pauseMini');

function duration() {
    const durationSlider = document.getElementById('durationSlider');
    let durationStart = document.getElementById('durationStart');
    let durationEnd = document.getElementById('durationEnd');

    audio.onloadedmetadata = () => {
        durationSlider.max = Math.floor(audio.duration);
    }
    audio.ontimeupdate = () => {
        let minuteCurrent = Math.floor(audio.currentTime / 60);
            if (minuteCurrent < 10) { minuteCurrent = `0${minuteCurrent}` }
        let secondCurrent = Math.floor(audio.currentTime % 60);
            if (secondCurrent < 10) { secondCurrent = `0${secondCurrent}` }
        let currentTime = `${minuteCurrent}:${secondCurrent}`;
        durationSlider.value = Math.floor(audio.currentTime);
        durationStart.innerText = currentTime;

        let minutesEnd = Math.floor(audio.duration / 60);
            if (minutesEnd < 10) { minutesEnd = `0${minutesEnd}` }
        let secondsEnd = Math.floor(audio.duration % 60);
            if (secondsEnd < 10) { secondsEnd = `0${secondsEnd}` }
        let musicDuration = `${minutesEnd}:${secondsEnd}`;
            if (musicDuration === 'NaN:NaN') { musicDuration = '00:00'; }
        durationEnd.innerText = musicDuration;
    }
    durationSlider.oninput = () => {
        audio.currentTime = durationSlider.value;
    }
};

function restart() { audio.currentTime = 0; }
function minusTen() { audio.currentTime -= 10; }

let isPlaying = true;
function playAudio() {
    if (isPlaying === false) { // Detects if isPlaying is false, and plays the audio
        audio.play();
        buttonPlay.className = "fa-solid fa-circle-pause";
        buttonPlayMini.className = "fa-solid fa-circle-pause";
        isPlaying = true; // Makes it true.
    } else { // Else, stops the audio.
        audio.pause();
        buttonPlay.className = "fa-solid fa-circle-play";
        buttonPlayMini.className = "fa-solid fa-circle-play";
        isPlaying = false; // Makes it false, ready to be executed again.
    }
}
function plusTen() { audio.currentTime += 10; }

let isOnLoop = false;
function loop() {
    const loopButton = document.getElementById('loop');
    if (isOnLoop === false) { // Detects if isOnLoop is false, and them makes it on loop.
        audio.loop = true;
        loopButton.classList.add('active');
        isOnLoop = true;
    } else {
        audio.loop = false;
        loopButton.classList.remove('active');
        isOnLoop = false;
    }
}
// Execute on load.
duration();