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
// Assigning each container element
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
// Execute on load
containerNames();