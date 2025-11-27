import React from 'react'
import { useState } from 'react'
import Button from './Button'
function Bg() {
    const[color,setColor]=useState("yellow")
  return (
    <>
      <div className=' text-black 
    h-[700px] w-[900px]
    flex justify-center items-center
    fixed top-1/2 left-1/2
    -translate-x-1/2 -translate-y-1/2
    rounded-xl ' style={{backgroundColor:color}}>
{/* */}

    <div className='fixed flex flex-wrap justify-center bottom-12 indext-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl'>
            <Button color="red" changebg={setColor}/>
             <Button color="green" changebg={setColor}/>
              <Button color="blue" changebg={setColor}/>
               <Button text="black" color="white" changebg={setColor}/>
            
        </div>
    </div>

      </div>
    </>
  )
}

export default Bg

