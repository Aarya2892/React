import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards'

function App() {

  let obj = {
    username: "Aarya",
    age: 21,
    city: "Mumbai"
  }

  return (
    <>
      <h1 className='bg-blue-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Cards username="Isha" Someobj={obj} btntext="Click Me" cardimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCMaSTnWh9wnEyRGeWToUpi8bQSrKAYPdV-w&usqp=CAU"/>
      <Cards username="Aarya" btntext="Visit Me" cardimg="https://cdn4.sharechat.com/ae438aeb-4f8c-4e0f-a366-3c083fe7ac2c-bb1d3a31-2878-4d42-bfac-245d0809587c?tenant=sc&referrer=pwa-sharechat-service&f=5d0809587c"/>
         

      {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww" alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}

    </>
  )
}


export default App
