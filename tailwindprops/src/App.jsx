import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  const myArr = [1,2,3,4,5]

  return (
    <>
      <h1 className="text-3xl font-bold bg-green-300 p-3 rounded-md">
        Hello world!
      </h1>
      <Card label='Akash' myArr={myArr} name={"Akahs"} />
      <Card label='Aman' myArr={myArr} />
    </>
  )
}

export default App
