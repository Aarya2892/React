import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
   
  const [password, setpassword] = useState("");
  const [length, setlength] = useState(8);
  const [numberAllow, setnumberAllow] = useState(false);
  const [characterAllow, setcharacterAllow] = useState(false);

  //use ref hook
  const passwordref = useRef(null)

  const passwordgenerator = useCallback(()=>{
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllow) str += "0123456789"
    if(characterAllow) str += "!@#$%&{}[]()"

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random()* str.length + 1)
      pass+= str.charAt(char)
    }
    setpassword(pass)

  }, [length, numberAllow, characterAllow, setpassword])

  const copypasstoclipboard= useCallback(()=>{
    passwordref.current?.select();
    // passwordref.current?.setSelectionRange(0,5);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{passwordgenerator()}, [length, numberAllow, characterAllow, passwordgenerator])

  return (
    <>
    <div className= 'w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-4 text-orange-500 bg-gray-500'>
    <div className='text-black text-center text-2xl my-3 py-2'>Password Generator</div>
      <div className='outline-none w-full py-5 px-3 text-xl my-2'>
        <input 
        type='text' 
        value={password} 
        placeholder='Password' 
        readOnly 
        ref={passwordref}></input>
        <button 
        onClick={copypasstoclipboard}
        className='bg-blue-900 text-ceter w-500 text-white text-xl px-2'>Copy</button>
        </div>
      <div className='flex text-sm gap-x-2'>

        <div className='flex item-center gap-x-2 text-xl text-bold'>
          <input type='range' min={8} max={100} value={length} className='cursor-pointer'
          onChange={(e)=>{setlength(e.target.value)}}/><label>Length:{length}</label>
        </div>

        <div className='text-xl'>
          <input type='checkbox' defaultChecked={numberAllow} id="numberInput" onChange={()=>{setnumberAllow((prev)=> !prev);}}></input>
          <label htmlFor='numberInput'>Number</label>
        </div>

        <div className='text-xl'>
          <input type='checkbox' defaultChecked={characterAllow} id="characterInput" onChange={()=>{setcharacterAllow((prev)=> !prev);}}></input>
          <label htmlFor='characterInput'>Character</label>
        </div>
      </div>
    </div>
   
    </>
  )
}

export default App
