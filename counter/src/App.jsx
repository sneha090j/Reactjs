import { useState } from 'react'

import './App.css'
//react also used for UI updation
function App() {
  let [counter,setCounter]=useState(0)
const addValue=()=>{
    setCounter(counter+1)
  if(counter>=20){
    setCounter(0)
  }


    console.log("add value",counter)
}
const removeValue=()=>{
  setCounter(counter-1)
  if(counter<=0){
    setCounter(0)
  }
  console.log("removed value",counter)
}

  return (
    <>
     <h1>Chotu and motu</h1>
     <h3>Abhinay: {counter}</h3>
     <h3>Adarsh</h3>
     <button onClick={addValue}>Add value</button>
     <br></br>
     <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
