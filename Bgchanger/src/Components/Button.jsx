import React from 'react'
import { useState } from 'react'

function Button({color,changebg}) {
   
  return (
    <div>
       <button 
       onClick={()=>changebg(color)}
       className=' 
 border-b-green-950 rounded-3xl
 text-black font-bold
  hover:bg-black '
  style={{backgroundColor:color}}

>{color}</button>
    </div>
  )
}

export default Button
