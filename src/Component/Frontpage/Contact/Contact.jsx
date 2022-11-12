import React, { useState } from 'react'

function Contact() {
  const [show,setshow]=useState(false)
  return (
    <div className=' fixed hidden z-30 bottom-10 left-10 bg-black rounded-full shadow-md cursor-pointer shadow-gray-600 w-16 h-16 border-2 laptop:flex justify-center items-center border-white' onMouseLeave={()=>setshow(false)} onMouseEnter={()=>setshow(true)}>
        <div className='w-[80%] relative' >{show&&<div className=' absolute w-[350px] h-[300px] bg-white shadow-md rounded-t-2xl rounded-br-2xl bottom-10 border-gray-300 border-[1px] -right-80'>
          <form className=' flex flex-col items-center'>
            <div className=' font-semibold '>Send us an email</div>
            <div className='w-[90%] flex flex-col items-center'>
              <textarea className='w-full h-40 border-[1px] border-gray-400 rounded-xl pl-2 mb-2' placeholder='Comment'/>
              <input type="email" className='w-full h-12 border-[1px] border-gray-400 rounded-xl pl-2 mb-2' placeholder='Email'/>
              <input type='submit' value='Send' className='bg-cyan-900 text-white w-1/2 py-2 rounded-md flex justify-center'/>
            </div>
          </form>
        </div>}<img src='/Images/message-512.png'  alt="contact"/></div>
    </div>
  )
} 

export default Contact