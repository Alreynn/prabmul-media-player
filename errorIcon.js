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
    }
    elementCheck.remove();
})
const mediaQueryList = window.matchMedia("(max-width: 240px)");
function handleMediaQueryChange(event) {
    const errorMessage = document.querySelector('.errorScreen .errorContainer h2');
    if (event.matches) {
        document.getElementById('errorScreen').style.display = 'block';
        errorMessage.innerText = 'Layar terlalu kecil!';
    }
}
mediaQueryList.addEventListener("change", handleMediaQueryChange);