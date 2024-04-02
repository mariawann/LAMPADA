const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function lampOn(){
    lamp.src ='./img/lampon.jpg';
}

function lampOff(){
    lamp.src ='./img/lampoff.jpg';
}

function lampBroken(){
    lamp.src= './img/broken.png';
}


turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
