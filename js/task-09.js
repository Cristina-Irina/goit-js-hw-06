const button = document.querySelector('button.change-color');
const body = document.querySelector('body');
const colorSpan = document.querySelector('span.color');

colorSpan.textContent = body.style.backgroundColor || '-';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function onChangeColor() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
}

button.addEventListener('click', onChangeColor);
