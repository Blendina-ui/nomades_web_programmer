
import { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(0)

  function add(){
    setNumber(number +1)
  }

  function sub(){
    if (number>0) {
      setNumber(number -1)
    }
  }
  const disabled = number<=0

  return (
    <>
      <h1>Coounter</h1>
      {number} <br />
      <button onClick={add}>+</button>
      <button onClick={sub} disabled={disabled} >-</button>
    </>
  )
}

export default App
