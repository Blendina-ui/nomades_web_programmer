
import { useState } from 'react'
import './App.css'

function App() {
 
  const [number, setNumber] = useState(0)
  function add() {
    setNumber(number+1)
  }
  function sub() {
    setNumber(number-1)
  }

  return (
    <>
      <h1>Counter</h1>
      {number}<br /><br />
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
    </>
  )
}

export default App
