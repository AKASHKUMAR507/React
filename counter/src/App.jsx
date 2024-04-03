import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const add = () => {
    if (count === 10 ) {alert('You have reached the limit'); return};
    setCount(count + 1)

    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)

    // setCount((prevCount) => prevCount + 1)
    // setCount((prevCount) => prevCount + 1)
    // setCount((prevCount) => prevCount + 1)
    // setCount((prevCount) => prevCount + 1)
    // setCount((prevCount) => prevCount + 1)
  }

  const remove = () => {
    if (count === 0) return;
    setCount(count - 1);
  }
  return (
    <>
      <div>
        <h1>{count}</h1>
        <p>Clicked {count} times</p>
        <button onClick={add}>Add</button> {" "}
        <button onClick={remove}>Remove</button>
      </div>
    </>
  )
}

export default App
