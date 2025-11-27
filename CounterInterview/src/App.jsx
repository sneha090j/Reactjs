import { useState } from 'react'

import './App.css'

function App() {
 const[counter,setCounter]=useState(0);
const addvalue=()=>{

  // It makes a bunch then increase

  setCounter(counter+1);
  setCounter(counter+1);
  setCounter(counter+1);
  setCounter(counter+1);
  setCounter(counter+1);
  setCounter(counter+1);

  //It increases value one by one
  //It is just a propogation of updation how state update
  // setCounter(prevCounter=>prevCounter+1)
  //  setCounter(prevCounter=>prevCounter+1)
  //   setCounter(prevCounter=>prevCounter+1)
  //    setCounter(prevCounter=>prevCounter+1)
  //     setCounter(prevCounter=>prevCounter+1)

}
const removevalue=()=>{
  setCounter(counter-1);
}
  return (
    <>
    <h1>Counter_value: {counter}</h1>
     <button onClick={addvalue}>Add value</button>
     <button onClick={removevalue}>Decrease value</button>
    </>
  )
}

export default App
