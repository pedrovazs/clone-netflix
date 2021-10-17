const lightModeClass = "light-mode";
const iconClass = "fas fa-moon";
const icon = document.getElementById("icon");
const button = document.getElementById("mode-selector");
let ancor = document.getElementsByClassName("dark-mode");
const body = document.querySelector("body");

const changeClass = () => {
    body.classList.toggle(lightModeClass);


    if (icon.className !== iconClass) {
        icon.className = iconClass;

    }else {
        icon.className = "far fa-sun";

    }
}

const changeMode = () => {
    changeClass();
}

button.addEventListener('click', changeMode);


