import { increment, decrement, counter } from "./lib.js";

const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

incrementButton.addEventListener("click", () => {
  increment();
  document.getElementById("counter").textContent = counter;
})

decrementButton.addEventListener("click", () => {
  decrement();
  document.getElementById("counter").textContent = counter;
})

document.getElementById("counter").textContent = counter;