import React from 'react'
import {Link} from 'react-router-dom'
const Repay = () => {
  return (
    <div className="flex justify-center items-center h-[80%] flex-col ">
    <div className="w-4/5 ">
    <div className='flex justify-center ' ><img src="/Images/default1.png" className='w-[50%] ' alt='logo2'/></div>
    <div className=" font-bold text-3xl mb-5 text-center">Repay Loan</div>
       <div>
       <div className=' font-semibold text-lg '>Loan Amount</div>
        <div className=' font-semibold text-3xl mb-12 border-b-2 border-black'>$0</div>
        
        <Link to='/Profile'><div className='bg-cyan-900  text-white font-semibold py-3 rounded-lg flex justify-center hover:bg-cyan-800 cursor-pointer'>Get Loan</div></Link>
       </div>
    </div>
    </div>
   
  )
}

export default Repay