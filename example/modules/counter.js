// counter.js
let counter = 0;

export function increment() {
  counter++;
  return counter;
}

export function decrement() {
  counter--;
  return counter;
}

export function getCounter() {
  return counter;
}
