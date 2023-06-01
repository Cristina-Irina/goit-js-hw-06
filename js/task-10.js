const input = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxContainer = document.querySelector('div#boxes');

buttonCreate.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  const amount = parseInt(input.value);
  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid number.');
    return;
  }

  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxContainer.appendChild(box);

    width += 10;
    height += 10;
  }
}

function destroyBoxes() {
  input.value = '';
  boxContainer.innerHTML = '';
}
