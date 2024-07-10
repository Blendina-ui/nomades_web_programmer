import { useState, useEffect, useId } from 'react'
import { Checkbox } from "./components/forms/Checkbox"
import { InputLabel } from "./components/forms/InputLabel" 
import confetti from "canvas-confetti"

// function App() {
//   const [showTitle, setShowTitle] = useState(true)

//   return <div className='container my-3'>
//     <Checkbox
//       label='Show Title'
//       onChange={setShowTitle}
//       checked={showTitle}
//     />
//     { showTitle && <EditTitle />}
//   </div>
// }

// function EditTitle() {
//   const [title, setTitle] = useState('')
//   const [firstname, setFirstname] = useState('')
//   const [y, setY] = useState(0)

//   useEffect(() => {
//     // onMounted
//     const scrollHandler = () => {
//       console.log('scroll', window.scrollY)
//       setY(window.scrollY)
//     }

//     window.addEventListener('scroll', scrollHandler)
    
//     return () => {
//       // onDestroy
//       window.removeEventListener('scroll', scrollHandler)
//     }
//   }, [])

//   useEffect(() => {
//     document.title = title
//   },)

//   return <div className='vstack gap-3'>
//     <div>Y: {y}</div>
//     <InputLabel
//       placeholder='Modify Title'
//       value={title}
//       onChange={setTitle}
//     />
//     <InputLabel
//       placeholder='Firstname'
//       value={firstname}
//       onChange={setFirstname}
//     />
//   </div>
// }


function App() {
  const [duration, setDuration] = useState(5)
  const [secondsLeft, setSecondsLeft] = useState(duration)

  const handleChange = (v) => {
    setDuration(v)
    setSecondsLeft(v)
  }
  
  console.log('render')
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft(v => {
        if(v === 0){
          confetti()
          clearInterval(interval)
          return 0;
        }

        return v-1
      })
      // setSecondsLeft(secondsLeft-1)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [duration])
  
  return <div className='vstack gap-2'>
    <InputLabel
      placeholder='Duration'
      value={duration}
      onChange={handleChange}
      />
    <div>Seconds Left: {secondsLeft}</div>
  </div>
}
export default App