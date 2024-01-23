import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")
  
  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}>

        <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2'>
            <button 
            onClick={()=> setcolor("red")}
            className='outline-none px-4 py-2 rounded-full text-white' style={{backgroundColor: "red"}}>Red</button>

            <button
            onClick={()=> setcolor("green")} 
            className='outline-none px-4 py-2 rounded-full text-white' style={{backgroundColor: "green"}}>Green</button>

            <button 
            onClick={()=> setcolor("black")} 
            className='outline-none px-4 py-2 rounded-full text-white' style={{backgroundColor: "black"}}>Black</button>

            <button
            onClick={()=> setcolor("blue")} 
            className='outline-none px-4 py-2 rounded-full text-white' style={{backgroundColor: "blue"}}>Blue</button>

            <button 
            onClick={()=> setcolor("purple")} 
            className='outline-none px-4 py-2 rounded-full text-white' style={{backgroundColor: "purple"}}>Purple</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
