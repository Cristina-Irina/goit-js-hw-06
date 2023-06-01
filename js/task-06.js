const inputElement = document.getElementById('validation-input');

inputElement.addEventListener('blur', function () {
  const enteredValue = this.value.trim();
  const expectedLength = parseInt(this.getAttribute('data-length'));

  if (enteredValue.length === expectedLength) {
    this.classList.remove('invalid');
    this.classList.add('valid');
  } else {
    this.classList.remove('valid');
    this.classList.add('invalid');
  }
});
