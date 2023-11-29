const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
const replace = document.getElementById('replace');

function isLampBroken() {
    return lamp.src.indexOf('broken') > -1
}

function turnLampOn() {
    if (!isLampBroken()) {
        lamp.src = '../assets/img/lampOn.jpg';
    }
}

function turnLampOff() {
    if (!isLampBroken()) {
        lamp.src = '../assets/img/lampOff.jpg';
    }
}

function lampBroken() {
    lamp.src = '../assets/img/lampbroken.jpg';
}

function fixIt() {
    if (!lampBroken()) {
        lamp.src = '../assets/img/lampOff.jpg'
    }

}

turnOn.addEventListener('click', turnLampOn);
turnOff.addEventListener('click', turnLampOff);
lamp.addEventListener('mouseover', turnLampOn);
lamp.addEventListener('mouseleave', turnLampOff);
lamp.addEventListener('dblclick', lampBroken);
replace.addEventListener('click', fixIt);
