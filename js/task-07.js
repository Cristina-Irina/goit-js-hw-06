const inputElement = document.getElementById('font-size-control');
const textElement = document.getElementById('text');

inputElement.addEventListener('input', function () {
  const fontSize = `${this.value}px`;
  textElement.style.fontSize = fontSize;
});
