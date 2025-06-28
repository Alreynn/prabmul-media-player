const errorMessage = document.querySelector('.errorScreen .errorContainer h2');
const errorMessageDescription = document.querySelector('.errorScreen .errorContainer p');

function reload() {
    window.location.reload();
}
window.onload = document.fonts.addEventListener('loadingdone', () => {
    document.getElementById('errorScreen').style.display = 'none';

    const elementCheck = document.createElement('i');
    elementCheck.className = 'fa-solid';
    document.body.appendChild(elementCheck);
    const fontFamily = window.getComputedStyle(elementCheck).getPropertyValue('font-family');
    if (!fontFamily.includes('Font Awesome')) {
        document.getElementById('errorScreen').style.display = 'block';
        errorMessage.innerText = 'Kayaknya kamu error nih.';
        errorMessageDescription.innerText = 'Coba refresh?';
    }
    elementCheck.remove();
})
const mediaLimit = window.matchMedia("(max-width: 240px)");
function media() {
    if (mediaLimit.matches) {
        document.getElementById('errorScreen').style.display = 'block';
        errorMessage.innerText = 'Layar terlalu kecil!';
        errorMessageDescription.innerText = 'Harap ubah resolusi layar dan refresh.';
    }
}
setInterval(() => {
    mediaLimit.addEventListener("change", media);
}, 100)