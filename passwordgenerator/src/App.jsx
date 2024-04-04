import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [password, setPassword] = useState('')
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const char = "!@#$%^&*()_+";

    if (numberAllowed) str += number;
    if (charAllowed) str += char

    for( let i = 1; i < length; i++){
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  },[charAllowed, length, numberAllowed])

  useEffect(() => {
    generatePassword();
  },[numberAllowed, charAllowed, length])


  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select()
  }

  return (
    <div className='flex flex-wrap w-full justify-center py-5'>
      <div className='text-white bg-slate-700 px-4 py-8 items-start shadow-sm shadow-white rounded-sm'>
        <p className='text-3xl py-4'>Generate Random Password</p>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" name="" id="" value={password}  className='outline-none w-full px-1 py-2 text-black'  readOnly  placeholder='Password' ref={passwordRef}/>
          <button type="button" onClick={() => copyPasswordToClipboard()} className='bg-blue-500 px-2 cursor-pointer'>Copy</button>
        </div>
        <div className='flex flex-wrap items-start py-4 gap-x-2'>
          <div className='flex items-start'>
            <div className='flex items-center h-5'>
              <input type="range" min={8} max={20} name='' id='char' value={length} onChange={(e) => setLength(e.target.value)} />
            </div>
            <label htmlFor="char" className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>{length}</label>
          </div>
          <div className='flex items-start'>
            <div className='flex items-center h-5'>
              <input type="checkbox" name='' id='char' defaultChecked={numberAllowed} onChange={() => setNumberAllowed((prev) => !prev)} />
            </div>
            <label htmlFor="char" className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Number</label>
          </div>
          <div className='flex items-start'>
            <div className='flex items-center h-5'>
              <input type="checkbox" name='' id='char' defaultChecked={charAllowed} onChange={() => setCharAllowed((prev) => !prev)} />
            </div>
            <label htmlFor="char" className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Character</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
