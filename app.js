let themeButton = document.getElementById('mode');
let css = document.getElementById('theme');
let icon = document.getElementById('mode');

themeButton.addEventListener('click', () => {
    if (css.getAttribute('href') == "light.css") {
        css.setAttribute('href', "dark.css");
        icon.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        css.setAttribute('href', "light.css");
        icon.innerHTML = '<i class="fas fa-moon"></i>'

    }
})

let themeBtn = document.getElementById('modebtn');
let cssm = document.getElementById('theme');
let iconm = document.getElementById('modebtn');

themeBtn.addEventListener('click', () => {
    if (cssm.getAttribute('href') == "light.css") {
        cssm.setAttribute('href', "dark.css");
        iconm.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        cssm.setAttribute('href', "light.css");
        iconm.innerHTML = '<i class="fas fa-moon"></i>'

    }
})

let hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
    document.getElementById('m-nav').style.cssText = 'transform: translateY(0%); transition: 0.5s;';
})

let closebtn = document.getElementById('close');

closebtn.addEventListener('click', () => {
    document.getElementById('m-nav').style.cssText = 'transform: translateY(110%); transition: 0.5s;';
})