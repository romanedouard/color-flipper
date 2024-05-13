const body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = 'red';

function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColor() {
    const red = Math.floor(Math.random() * 255) + 1;
    const green = Math.floor(Math.random() * 255) + 1;
    const blue = Math.floor(Math.random() * 255) + 1;

    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}