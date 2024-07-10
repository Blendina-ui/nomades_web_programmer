let counter = 0;
let step = 1;

const increment = () => {
  counter += step;
}

const decrement = () => {
  if(counter === 0)
    return;
  
  counter -= step;
}

export { 
  increment, 
  decrement, 
  counter 
};