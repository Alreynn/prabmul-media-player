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
function reload() {
    window.location.reload();
}