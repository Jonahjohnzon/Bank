import React from 'react'
import Form from './Form'
import Footer from '../Frontpage/Footer'
const Profilepage = () => {
  return (
    <div className=''>
      <div className=' bg-black h-[50vh] shadow-sm shadow-black text-gray-50 flex items-center relative overflow-hidden z-30'>
      <div><img src='/Images/Laptop2.jpeg' alt='laptop' className='absolute right-0 top-0 z-10' /></div>
      <div className=' absolute bg-gradient-to-r from-black to-[rgba(0,0,0,0)] h-full w-full z-20'></div> 
      <div  className=' ml-40 z-40'>
        <div className=' font-semibold mb-3'><span className=' cursor-pointer '>HOME</span> / <span className=' text-blue-300 '>PROFILE</span></div>
        <div className=' text-5xl font-bold text-white'>MY ACCOUNT</div>
        </div>
      </div>
      <div className='flex justify-center mt-20'>
        <div className=' w-[60%]'>
        <div className=' text-xl font-semibold mb-5'>|| MY INFO ||</div>
        <div className=' text-5xl'>Personal Details</div>
          <div className=' flex justify-between my-5'>
            <div className=' w-full'>
            <div className=' text-2xl'>Name</div>
            <div className=' text-sm'>Jonah Ominyi</div>
            </div>
          </div>
          <div className=' flex justify-between w-1/2'>
            <div className=' w-full'>
            <div className=' text-2xl'>Email</div>
            <div className=' text-sm'>Jonah@gmail.com</div>
            </div>
            <div className=' w-full'>
            <div className=' text-2xl'>Phone No</div>
            <div className=' text-sm'>08023435678</div>
            </div>
          </div>
          <div>
           <Form/>
          </div>
        </div>
      </div>
      <div className=' mt-20'>
      <Footer/>
      </div>
    </div>
  )
}

export default Profilepage