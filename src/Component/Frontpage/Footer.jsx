import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center w-full h-[60vh] text-white bg-slate-800 items-center  '>
        <div className='flex w-[90%] items-center h-full pb-14'>
            <div className='w-full flex flex-col items-center text-center border-x-2 border-white h-[80%]'>      
            <div><div className=''>
            <img src='/Images/default1.png' className='w-96 hover:cursor-pointer' alt='logo'/></div></div>
            <div className=' text-sm w-[80%]'>Heritage was founded with the objective of providing effective technology solutions that span the entire lending process and ultimately, to lower total cost of lending.</div>
          </div>
            <div className='w-full flex justify-center'>
                <ul className=' font-medium text-lg text-center'>
                    <li className='mb-3 hover:text-cyan-700 cursor-pointer'>Home</li>
                    <li className='mb-3 hover:text-cyan-700 cursor-pointer'>About Us</li>
                    <li className='mb-3 hover:text-cyan-700 cursor-pointer' >Services</li>
                    <li className='mb-3 hover:text-cyan-700 cursor-pointer'>Terms & Conditions</li>
                    <li className='mb-3 hover:text-cyan-700 cursor-pointer'>Investment</li>
                    <li className='mb-3 hover:text-cyan-700 cursor-pointer'>Apply for loan</li>
                </ul>
            </div>
            <div className='w-full flex flex-col items-center border-white border-x-2 h-[80%]' >
              <div className='font-medium text-2xl mb-5'>Send Us an Email</div>
              <div className='w-full'>
              <form className='flex flex-col items-center text-black'>
                <div className='w-5/6'>
                <textarea className='w-full h-40 bg-[rgba(250,250,250,0.01)] outline-none border-2 border-slate-400 rounded-lg placeholder:text-gray-100 placeholder:font-semibold pl-3' placeholder='Comment'/>
                </div>
                <div className='w-5/6 '><input type="email" className='w-full h-12 bg-[rgba(250,250,250,0.01)] outline-none  border-2 border-slate-400 rounded-lg placeholder:text-gray-100 placeholder:font-semibold pl-3' placeholder='Email'/></div>
                <input type="submit" value="Send"  className=' border-2 border-white px-20 mt-2 py-2 rounded-lg font-semibold text-white cursor-pointer  hover:bg-white hover:text-cyan-900 ' />
                </form>
              </div>
            </div>
        </div>
        <div className='bg-black w-full h-9 flex justify-center items-center'>
          <div>&copy; 2022 Heritage Bank. All right reserved</div>
        </div>
    </div>
  )
}

export default Footer