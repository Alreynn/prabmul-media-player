function declareError(errorTitleMsg, errorDescriptionMsg) {
    errorMessage.innerText = errorTitleMsg;
    errorMessageDescription.innerText = errorDescriptionMsg;
}
const errorTitle = {
    iconNotLoaded: 'Kayaknya kamu error nih.',
    mediaTooSmall: 'Layar terlalu kecil!',
}
const errorDescription = {
    iconNotLoaded: 'Coba refresh?',
    mediaTooSmall: 'Gunakan perangkat lain.',
}

const errorMessage = document.querySelector('.errorScreen .errorContainer h2');
const errorMessageDescription = document.querySelector('.errorScreen .errorContainer p');
window.onload = document.fonts.addEventListener('loadingdone', () => {
    document.getElementById('errorScreen').style.display = 'none';
    
    const elementCheck = document.createElement('i');
        elementCheck.className = 'fa-solid';
        document.body.appendChild(elementCheck);
        const fontFamily = window.getComputedStyle(elementCheck).getPropertyValue('font-family');
    if (!fontFamily.includes('Font Awesome')) {
        document.getElementById('errorScreen').style.display = 'block';
        declareError(errorTitle.iconNotLoaded, errorDescription.iconNotLoaded);
    }
    elementCheck.remove();
})

const mediaLimit = window.matchMedia("(max-width: 240px)");
function media() {
    if (mediaLimit.matches) {
        document.getElementById('errorScreen').style.display = 'block';
        declareError(errorTitle.mediaTooSmall, errorDescription.mediaTooSmall);
    }
}
setInterval(() => {
    media();
}, 100)

function reload() {
    window.location.reload();
}