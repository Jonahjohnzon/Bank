import React from 'react'

const Design = () => {
  return (
    <div className=' w-full text-center bg-cyan-900 h-full shadow-md shadow-black relative flex flex-col items-center'>
    <div className=' z-10'>
    <img src="/Images/App1.png" className='w-[65%] rotate-45 mt-20 z-50' alt="design"/>
    </div>
    <div className=' absolute bg-green-300 top-36 right-10 w-80 h-80  rounded-full opacity-40'></div>
    <div className=' absolute bg-green-300 bottom-36 right-10 w-40 h-40  rounded-full opacity-40'></div>
    <div className=' absolute bg-green-300 bottom-20 left-40 w-80 h-80  rounded-full opacity-40'></div>
    <div className=' absolute bg-green-300 top-10 right-10 w-60 h-60  rounded-full opacity-40'></div>
    <div className=' absolute bg-green-300 top-36 left-10 w-60 h-60  rounded-full opacity-40'></div>
    <div className=' absolute bg-green-300 bottom-1 left-20 w-20 h-20  rounded-full opacity-40'></div>
    <div className=' absolute bg-green-300 bottom-40 right-60 w-20 h-20  rounded-full opacity-40'></div>
    <div className=' w-[60%] z-50 flex flex-col items-center'>
    <div className=' text-green-600 font-semibold text-4xl mt-10'>5 Minute Application</div>
    <div className='text-white text-base mb-3  '> You can complete its application process within 5 minute and receive your loan directly into your regular bank account.</div>
    <div className=' w-20 h-[1px]  bg-white rounded-lg'></div>
    </div>
    </div> 
  )
}

export default Design