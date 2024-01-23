import { useState } from 'react'
import './App.css'

function App() {
 
  const [counter, setcounter] = useState(15); 

  // let counter = 15;

  const addValue=()=>{
    if(counter>=20){
      setcounter(counter== 0)
    }else{
      setcounter(counter+1)
    }
    // console.log("clicked", counter)
    // counter = counter+1;

    // setcounter(counter+1);
    // setcounter(counter+1);
    // setcounter(counter+1);
    // setcounter(counter+1);
    // setcounter(counter+1);

    // setcounter(precounter => precounter+1);
    // setcounter(precounter => precounter+1);
    // setcounter(precounter => precounter+1);
    // setcounter(precounter => precounter+1);
  }

  const removeValue =()=>{
    // console.log("Remove", counter)
    // setcounter(counter-1);
    if(counter<=0){
      setcounter(counter==0)
    }else{
      setcounter(counter-1);
    }
  }

  return (
    <>
     <h2>Counter Value: {counter}</h2>

     <button onClick={addValue}>Add Value</button>
     <br></br>
     <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
