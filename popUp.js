function playIcon() {
    if (!musicMini.classList.contains('show')) { // Detect if musicMini does not contain the className 'show'
        audio.currentTime = 0;
        musicMini.classList.add('show');
    } 
    musicMini.style.display === 'none' ? audio.pause() : audio.play();
}
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