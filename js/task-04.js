let counterValue = 0;

const decrementButton = document.querySelector("button[data-action='decrement']");
const incrementButton = document.querySelector("button[data-action='increment']");
const counterValueEl = document.querySelector('#value');

const onDecrementValue = () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
};

const onIncrementValue = () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
};

decrementButton.addEventListener('click', onDecrementValue);
incrementButton.addEventListener('click', onIncrementValue);
