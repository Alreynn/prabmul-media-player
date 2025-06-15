const track1 = {
    musicTitle: 'Oke Gas 2',
    artistName: 'Richard Jersey',
    audioFile: 'Richard_Jersey-Oke_Gas_2.mp3',
    cover: 'images/okegas2.jpg',
};
const track2 = {
    musicTitle: 'Oke Gas Prabowo-Gibran Paling Pas',
    artistName: 'Richard Jersey',
    audioFile: 'Richard_Jersey-Oke_Gas_Prabowo_Gibran_Paling_Pas.mp3',
    cover: 'images/oke_gas_prabowo_gibran_paling_pas.webp',
};
const track3 = {
    musicTitle: 'Terima Kasih Pak Jokowi',
    artistName: 'Kang Lidan',
    audioFile: 'terima_kasih_pak_jokowi.m4a',
    cover: 'images/terima_kasih_pak_jokowi.jpg',
};
const track4 = {
    musicTitle: 'Tak Ingin Sendiri',
    artistName: 'Dian Piesesha',
    audioFile: 'Dian_Piesesha-Tak_Ingin_Sendiri.mp3',
    cover: 'images/Tak_Ingin_Sendiri.jpg',
};

let play = document.getElementById('audio');
const musicFloat = document.getElementById('musicFloat');
let musicMini = document.getElementById('musicMini');
let musicTitleMini = document.getElementById('musicTitleMini');
let artistMini = document.getElementById('artistMini');
let coverMini = document.getElementById('coverMini');

let buttonPlay = document.getElementById('pause');
let buttonPlayMini = document.getElementById('pauseMini');

function containerNames() {
    document.getElementById('containerImg1').src = track1.cover;
    document.getElementById('containerTitle1').innerText = track1.musicTitle;
    document.getElementById('containerImg2').src = track2.cover;
    document.getElementById('containerTitle2').innerText = track2.musicTitle;
    document.getElementById('containerImg3').src = track3.cover;
    document.getElementById('containerTitle3').innerText = track3.musicTitle;
    document.getElementById('containerImg4').src = track4.cover;
    document.getElementById('containerTitle4').innerText = track4.musicTitle;
}
function playIcon() {
    if (!musicMini.classList.contains('show')) {
        play.currentTime = 0;
        musicMini.classList.add('show');
        buttonPlayMini.className = "fa-solid fa-circle-pause";
        buttonPlay.className = "fa-solid fa-circle-pause";
    } else {
        buttonPlayMini.className = "fa-solid fa-circle-pause";
        buttonPlay.className = "fa-solid fa-circle-pause";
    }
}
function popOpen() {
    // Assign track names and img to container
    play.src = track1.audioFile;
    musicTitleMini.innerText = track1.musicTitle;
    artistMini.innerText = track1.artistName;
    coverMini.src = track1.cover;

    musicTitleFloat.innerText = track1.musicTitle;
    artistFloat.innerText = track1.artistName;
    coverFloat.src = track1.cover;

    playIcon();
    if (musicMini.style.display === 'none') {
        play.pause();
    } else {
        play.play();
    }
}
function popOpen2() {
    // Assign track names and img to container
    play.src = track2.audioFile;
    musicTitleMini.innerText = track2.musicTitle;
    artistMini.innerText = track2.artistName;
    coverMini.src = track2.cover;

    musicTitleFloat.innerText = track2.musicTitle;
    artistFloat.innerText = track2.artistName;
    coverFloat.src = track2.cover;

    playIcon();
    if (musicMini.style.display === 'none') {
        play.pause();
    } else {
        play.play();
    }
}
function popOpen3() {
    // Assign track names and img to container
    play.src = track3.audioFile;
    musicTitleMini.innerText = track3.musicTitle;
    artistMini.innerText = track3.artistName;
    coverMini.src = track3.cover;

    musicTitleFloat.innerText = track3.musicTitle;
    artistFloat.innerText = track3.artistName;
    coverFloat.src = track3.cover;

    playIcon();
    if (musicMini.style.display === 'none') {
        play.pause();
    } else {
        play.play();
    }
}
function popOpen4() {
    // Assign track names and img to container
    play.src = track4.audioFile;
    musicTitleMini.innerText = track4.musicTitle;
    artistMini.innerText = track4.artistName;
    coverMini.src = track4.cover;

    musicTitleFloat.innerText = track4.musicTitle;
    artistFloat.innerText = track4.artistName;
    coverFloat.src = track4.cover;

    playIcon();
    if (musicMini.style.display === 'none') {
        play.pause();
    } else {
        play.play();
    }
}
function pop() {
    musicFloat.classList.add('show');
}
function slideDownMini() {
    musicMini.classList.remove('show');
    play.pause();
    play.currentTime = 0;
}
function slideDown() {
    musicFloat.classList.remove('show');
}
window.pop = pop;
window.slideDown = slideDown;
window.slideDownMini = slideDownMini;
window.popOpen = popOpen;
window.popOpen2 = popOpen2;
window.popOpen3 = popOpen3;
window.popOpen4 = popOpen4;
window.containerNames = containerNames;