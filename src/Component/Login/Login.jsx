import React from 'react'
import Design from '../Signup/Design'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='flex h-[100vh]'>
      <div className=' w-full h-full flex justify-center items-center'>
        <div className='w-[60%]'>
          <div className=' text-center font-semibold text-cyan-900 text-4xl'>Welcome to Heritage</div>
          <form className=' flex flex-col items-center'>
           <div  className='flex flex-col w-full my-5'>
           <label for="em"  className=' font-semibold text-cyan-900'>Email</label>
           <input type="email" id="em" className='h-14 rounded-md w-full  border-gray-400  border-[1px]'/></div>
           <div className='flex flex-col w-full mb-5'>
           <label for="pass"  className=' font-semibold text-cyan-900' >Password</label>
           <input type="password" id="pass" className='h-14 rounded-md border-gray-400  border-[1px]'/></div>
           <div  className=' font-semibold text-cyan-900 text-end w-full cursor-pointer mb-5'>Forget Password?</div>
           <div><input type="submit" value="Log in" className='bg-cyan-900 font-semibold text-white py-3 px-20 rounded-md mb-5'/></div>
           <Link to="/Signup"><div  className=' font-semibold text-cyan-900 text-center w-full cursor-pointer mb-8 underline'>Create Account</div></Link>
           <div className=' font-semibold text-cyan-900 w-2/3 text-center'> By logging in you agree to all Heritage's <Link to="/Terms"><span className=' text-blue-600 cursor-pointer'>Terms and Conditions</span></Link></div>
          </form>
          <div></div>
        </div>
      </div>
      <Design/>
    </div>
  )
}

export default Login