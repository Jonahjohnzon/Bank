import React from 'react'
import Design from './Design'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div className=' flex h-[100vh]'>
    <div className=' w-full h-full flex items-center justify-center'>
    <div  className='w-[85%]'>
      <div className=' text-4xl text-cyan-900  '>Register New Account</div>
      <div className='mt-9 font-semibold text-cyan-900 text-lg'>Open an account with heritage</div>
      <div className=' text-sm mt-1 mb-8 font-semibold text-cyan-900'>let's get you all set up so you can begin setting up your profile</div>
      <form className='w-full'>
        <div className='flex justify-between mb-10'>
        <div className='flex flex-col w-[45%]'>
           <label for="fn" className=' font-semibold text-cyan-900'>First Name</label>
          <input  type="text" id="fn" className=' border-gray-400 rounded-md w-full h-12  border-[1px]'/>
          </div>
          <div className='flex flex-col w-[45%]'>
           <label for="ln"  className=' font-semibold text-cyan-900'>Last Name</label>
          <input  type="text" id="ln" className=' border-gray-400 rounded-md w-full h-12  border-[1px]'/>
          </div>
        </div>
        <div className='flex justify-between mb-10'>
        <div className='flex flex-col w-[45%]'>
           <label for="fn"  className=' font-semibold text-cyan-900'>Phone Number</label>
          <input  type="tel" id="pn" className=' border-gray-400 rounded-md w-full h-12  border-[1px]'/>
          </div>
          <div className='flex flex-col w-[45%]'>
           <label for="ln"  className=' font-semibold text-cyan-900'>Email</label>
          <input  type="email" id="em" className=' border-gray-400 rounded-md w-full h-12  border-[1px]'/>
          </div>
        </div>
        <div className='flex justify-between'>
        <div className='flex flex-col w-[45%]'>
           <label for="fn"  className=' font-semibold text-cyan-900'>Password</label>
          <input  type="password" id="pw" className=' border-gray-400 rounded-md w-full h-12  border-[1px]'/>
          </div>
          <div className='flex flex-col w-[45%]'>
           <label for="ln"  className=' font-semibold text-cyan-900'>Comfirm Password</label>
          <input  type="password" id="cpw" className=' border-gray-400 rounded-md w-full h-12  border-[1px]'/>
          </div>
        </div>
        <div className=' flex my-4'>
         <input type="checkbox" className='mr-2'/>
         <div className=' font-semibold text-cyan-900'> I agree to all the<Link to="/Terms"><span className=' text-blue-600 cursor-pointer'>Terms and Conditions</span></Link> </div>
        </div>
        <div><input type="submit"  value="Create Account" className=' bg-cyan-900 text-white font-semibold px-16 py-2 rounded-md cursor-pointer'/></div>
      </form>
      <Link to="/Login"><div className=' font-semibold text-cyan-900 mt-3'>Already have an account? <span className=' text-blue-600 cursor-pointer'>Log in</span></div></Link>
    </div>
    </div>
    <Design/>
    </div>
  )
}

export default Signup