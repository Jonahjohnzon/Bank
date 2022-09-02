import React from 'react'
import { Link } from 'react-router-dom'
import List from './List'
import { useState } from 'react'
import Profile from './Profile'
import Bank from '../Profilpage/Bank'
const Navbar = () => {
  const [show,setShow]=useState(false)
  const [display,setDisplay]=useState(false)
  const [clos,setclos]=useState(false)
  const [bank,setbank]=useState(false)
  return (
    <div>
    <div className=' flex justify-between h-28 fixed top-0 w-full z-40 shadow-sm shadow-slate-200 bg-white '>
        <div>
         <div className=''><img src='/Images/default1.png' className='w-96 hover:cursor-pointer' alt='logo'/></div>
        </div>
        <div className='w-full h-full flex justify-end'>
            <ul className='flex items-center justify-around w-1/2 font-sans font-semibold'>
                <Link to="/"><li className=' hover:cursor-pointer hover:text-cyan-900'>Home</li></Link>
                <Link to="/Profile"><li className=' hover:cursor-pointer hover:text-cyan-900' >Apply Now</li></Link>
                <li className='flex items-center hover:cursor-pointer hover:text-cyan-900 relative h-full' onMouseOver={()=>{setShow(true)}} onMouseLeave={()=>{setShow(false)}}><div>Download App</div>{show&&<div className=' absolute w-60 text-center -left-20 -bottom-20'><List/> </div>}</li>
                <Link to="/About"><li className=' hover:cursor-pointer hover:text-cyan-900'>About Us</li></Link>
            </ul>
        </div>
        <div className='w-2/6 h-full flex items-center'>
                <ul className='flex justify-around w-full h-full items-center'>
                <Link to="/Signup"><li className=' hover:cursor-pointer border-2 border-cyan-900 px-8 py-2 rounded-lg hover:bg-cyan-900 hover:text-white font-semibold text-cyan-900'>Sign Up</li></Link>
                <Link to="/Login"><li className=' hover:cursor-pointer border-2 border-cyan-900 px-8 py-2 rounded-lg hover:bg-cyan-900 hover:text-white font-semibold text-cyan-900'>Log In</li></Link>
                <div  className='w-10 h-full flex flex-col items-center justify-center cursor-pointer relative' onMouseOver={()=>{setDisplay(true)}} onMouseLeave={()=>{setDisplay(false)}}>
                  <img src="/Images/profile.png" alt='profile'/>
                  <div className=' font-semibold'>User</div>
                  {display&&<div className=' absolute w-60 text-center -right-5 -bottom-36 '><Profile sets={(clos)=>setclos(clos)} bank={bank} setbank={(bank)=>setbank(bank)}/></div>}
                </div>
                </ul>
            </div>
            {clos&&<Bank  set={(clos)=>setclos(clos)} bank={bank} setbank={(bank)=>setbank(bank)}/>}
            </div>
    </div>
  )
}

export default Navbar