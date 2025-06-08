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
        if (minuteCurrent < 10) {
            minuteCurrent = `0${minuteCurrent}`
        }
        let secondCurrent = Math.floor(play.currentTime % 60);
        if (secondCurrent < 10) {
            secondCurrent = `0${secondCurrent}`
        }
        let currentTime = `${minuteCurrent}:${secondCurrent}`;
        durationSlider.value = Math.floor(play.currentTime);
        durationStart.innerText = currentTime;

        let minutesEnd = Math.floor(play.duration / 60);
        if (minutesEnd < 10) {
            minutesEnd = `0${minutesEnd}`
        }
        let secondsEnd = Math.floor(play.duration % 60);
        if (secondsEnd < 10) {
            secondsEnd = `0${secondsEnd}`
        }
        let musicDuration = `${minutesEnd}:${secondsEnd}`;
        durationEnd.innerText = musicDuration;
    }
    durationSlider.oninput = () => {
        play.currentTime = durationSlider.value;
    }
};

function restart() {
    play.currentTime = 0
}
function minusTen() {
    play.currentTime -= 10
}
function playAudio() {
    const buttonPlay = document.getElementById('pause');
    const buttonPlayMini = document.getElementById('pauseMini');
    if (play.paused) {
        play.play();
        buttonPlay.className = "fa-solid fa-circle-pause";
        buttonPlayMini.className = "fa-solid fa-circle-pause";
    } else {
        play.pause();
        buttonPlay.className = "fa-solid fa-circle-play";
        buttonPlayMini.className = "fa-solid fa-circle-play";
    }
}
function plusTen() {
    const buttonForwardMini = document.querySelector('forwardMini');
    play.currentTime += 10
}
function loop() {
    const loopButton = document.getElementById('loop');

    play.loop = !play.loop;
    if (play.loop === true) {
        loopButton.style.backgroundColor = 'white';
        loopButton.style.borderRadius = '10px';
        loopButton.style.color = '#87CEEB';
        loopButton.style.boxSizing = 'border-box';
    } else {
        loopButton.style.backgroundColor = 'transparent';
        loopButton.style.color = 'white';
    }
}