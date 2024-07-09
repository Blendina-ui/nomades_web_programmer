import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState({
    firstName: 'Antonio',
    lastName: 'Pisanello',
    age: 28
  });
   
  const incrementAge = () => {
    setPerson({...person, age: person.age+1});
  }

  const incrementCount = () => {
    setCount(count+1);
  }

  return <>
    <p>Age of {person.firstName} is {person.age}</p>
    <button onClick={incrementAge}>Increment age</button>
    <p>Counter: {count}</p>
    <button onClick={incrementCount}>Increment</button>
  </>
}

export default App