import { useState } from 'react'
import './App.css'

function App() {
  let [counter, Setcounter] = useState(0)
  function addCounter() {
    Setcounter(counter + 1)
    if (counter === 20) {
      alert('Counter value is 20')
    }
  }
  function RemoveCounter() {
    Setcounter(counter - 1)
    if (counter === 0) {
      alert('Counter value is 0')
    }
  }
  return (
    <>
      <h1>counter value {counter}</h1>
      <button onClick={addCounter}>Increment</button>
      <button onClick={RemoveCounter}>Decrement</button>
    </>
  )
}

export default App
