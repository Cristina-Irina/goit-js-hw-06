const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

const updateName = () => {
  const name = inputEl.value.trim();
  nameEl.textContent = name !== '' ? name : 'Anonymous';
};

inputEl.addEventListener('input', updateName);
