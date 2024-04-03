import { useState } from 'react'
import './App.css'

const Label = [
  "Green",
  "Blue",
  "Black"
]

function Button({
  label = "Input Label",
  onClick = () => { },
}) {
  return (
    <button onClick={onClick}>{label}</button>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full h-screen duration-200 bg-black">
      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-md bg-slate-300 py-2 px-4 rounded-3xl'>
              <Button label='Green' />
              <Button label='Yellow' />
              <Button label='Blue' />
          </div>
      </div>
    </div>
  )
}

export default App
