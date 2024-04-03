import { useState } from 'react'
import './App.css'

const Label = [
  "Green",
  "Blue",
  "Black"
]
const colors = {
  White: "#FFFFFF",
  Black: "#000000",
  Red: "#FF0000",
  Green: "#00FF00",
  Blue: "#0000FF",
  Yellow: "#FFFF00",
  Orange: "#FFA500",
  Purple: "#800080",
  Pink: "#FFC0CB",
  Gray: "#808080",
  Brown: "#A52A2A",
  Cyan: "#00FFFF",
  Magenta: "#FF00FF",
  DarkGray: "#A9A9A9",
  LightGray: "#D3D3D3",
};

function Button({
  label = "Input Label",
  onClick = () => { },
  bgColor = "white"
}) {
  return (
    <button style={{backgroundColor: bgColor, color: (bgColor === "#000000" && "#FFFFFF")}} className='px-2 py-0.5 rounded-full' onClick={onClick}>{label}</button>
  )
}

function App() {
  const [color, setColor] = useState("olive")

  console.log(Object.entries(colors))

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-md bg-slate-300 py-2 px-4 rounded-3xl'>
              {
                Object.entries(colors).map(([colorName, colorValue]) => <Button key={colorName} label={colorName} bgColor={colorValue} onClick={() => setColor(colorValue)} />)
              }
          </div>
      </div>
    </div>
  )
}

export default App
