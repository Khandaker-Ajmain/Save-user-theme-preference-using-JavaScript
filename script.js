const settingBtn = document.querySelector('#settings-btn');
const settingBox = document.querySelector('.color-box');
const selectColors = document.querySelectorAll('li#color');

const applyColor = () => {
    let existingColor = localStorage.getItem('themeColor');
    document.querySelector(':root').style.setProperty('--primary-color', existingColor);
}

if(localStorage.getItem('themeColor')) {
    applyColor();
}

const toggleBox = () => {
    settingBtn.addEventListener('click', () => {
        settingBtn.classList.toggle('active');
        settingBox.classList.toggle('active');
    })
}
toggleBox();

const setColor = () => {
    for(const colorOption of selectColors) {
        colorOption.addEventListener('click', (e) => {
            let dataColor = colorOption.getAttribute('data-color');
            localStorage.setItem('themeColor', dataColor);
            document.querySelector(':root').style.setProperty('--primary-color', dataColor);
        })
    }
}
setColor();