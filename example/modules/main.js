// main.js
import { increment, decrement, getCounter } from './counter.js';

document.addEventListener('DOMContentLoaded', () => {
  const counterDisplay = document.createElement('div');
  const incrementButton = document.createElement('button');
  const decrementButton = document.createElement('button');

  counterDisplay.textContent = getCounter();
  incrementButton.textContent = 'Increment';
  decrementButton.textContent = 'Decrement';

  document.body.appendChild(counterDisplay);
  document.body.appendChild(incrementButton);
  document.body.appendChild(decrementButton);

  incrementButton.addEventListener('click', () => {
    counterDisplay.textContent = increment();
  });

  decrementButton.addEventListener('click', () => {
    counterDisplay.textContent = decrement();
  });
});
