const formElement = document.querySelector('.login-form');

function onFormSubmit(event) {
  event.preventDefault();

  const emailInput = event.currentTarget.elements.email;
  const passwordInput = event.currentTarget.elements.password;

  if (emailInput.value === '' || passwordInput.value === '') {
    alert('Please fill in all fields');
    return;
  }

  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  console.log(formData);

  event.currentTarget.reset();
}

formElement.addEventListener('submit', onFormSubmit);
