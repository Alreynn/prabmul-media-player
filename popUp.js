// Import the tracks from tracks.js, and then merges them into an array
import { track1, track2, track3, track4 } from "./tracks.js";
const tracks = [track1, track2, track3, track4];

// Declare variables.
let audio = document.getElementById('audio');
const container = document.querySelectorAll('.container');
const musicFloat = document.getElementById('musicFloat');
let musicMini = document.getElementById('musicMini');
let musicTitleMini = document.getElementById('musicTitleMini');
let artistMini = document.getElementById('artistMini');
let coverMini = document.getElementById('coverMini');

// A function to automatically fill the value of the containers.
function containerNames() {
    const containerImg = document.querySelectorAll('#containerImg');
    const containerTitle = document.querySelectorAll('#containerTitle');
    for (let i = 0; i < tracks.length; i++) {
        containerImg[i].src = tracks[i].cover;
        containerTitle[i].innerText = tracks[i].musicTitle;
    }
}
function playIcon() {
    if (!musicMini.classList.contains('show')) { // Detect if musicMini does not contain the className 'show'
        audio.currentTime = 0;
        musicMini.classList.add('show');
        buttonPlayMini.className = "fa-solid fa-circle-pause";
        buttonPlay.className = "fa-solid fa-circle-pause";
    }
    
    if (musicMini.style.display === 'none') {
        audio.pause();
        buttonPlay.className = "fa-solid fa-circle-play";
        buttonPlayMini.className = "fa-solid fa-circle-play";
    } else {
        audio.play();
        buttonPlay.className = "fa-solid fa-circle-pause";
        buttonPlayMini.className = "fa-solid fa-circle-pause";
    }
}
container.forEach((item, index) => {
    item.addEventListener('click', () => { // Adds the click event to each container
        audio.src = tracks[index].audioFile;
        musicTitleMini.innerText = tracks[index].musicTitle;
        artistMini.innerText = tracks[index].artistName;
        coverMini.src = tracks[index].cover;
    
        musicTitleFloat.innerText = tracks[index].musicTitle;
        artistFloat.innerText = tracks[index].artistName;
        coverFloat.src = tracks[index].cover;
        playIcon();
    })
});
function pop() { // If user clicks musicMini, it'll lead to this function.
    musicFloat.classList.add('show');
}
function slideDownMini() { // That lil white thing on musicMini, used to close it (this function)
    musicFloat.classList.remove('show');
    musicMini.classList.remove('show');
    audio.pause();
    audio.currentTime = 0;
}
function slideDown() { // The arrow button on musicFloat used to close it.
    musicFloat.classList.remove('show');
}
// Execute on load
containerNames();

// idk why it gives error if this one removed
window.pop = pop;
window.slideDown = slideDown;
window.slideDownMini = slideDownMini;