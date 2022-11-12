import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import List from './List'
import { useState } from 'react'
import Profile from './Profile'
import Bank from '../Profilpage/Bank'
import Loading from '../Loading'
import Notify from '../Notification/notify'
import Menu from './Menu'
const Navbar = ({permit,username}) => {
  const [menuview,setmenuview]=useState(false)
  const [show,setShow]=useState(false)
  const [display,setDisplay]=useState(false)
  const [clos,setclos]=useState(false)
  const [bank,setbank]=useState(0)
  const navigation=useNavigate()
  const [Load,setLoad]=useState(false)
  const [notice,setnotice]=useState(false)
  const [alert,setalert]=useState(false)
  const Logout=()=>{
    setLoad(true)
    setmenuview(false)
    localStorage.removeItem('tkn')
    navigation('/Login')
    navigation(0)

  }
  const Getalert=()=>{
    setalert(username?.notification?.alert)
  }

  const open=()=>{
    setnotice(!notice)
    setalert(false)
  }
  useEffect(()=>{
    Getalert()
  },[])

  return (
    <div>
    {Load&&<Loading/>}
    <div className=' flex justify-between items-center laptop:h-28 fixed top-0 w-full z-40 shadow-sm shadow-slate-200 bg-white  '>
        <div className=''>
         <div className=''><img src='/Images/default1.png' className='laptop:w-96 w-40 hover:cursor-pointer' alt='logo'/></div>
        </div>
        <div className='w-full h-full laptop:flex justify-end hidden'>
            <ul className='flex items-center justify-around w-2/3 font-sans font-semibold'>
                <Link to="/"><li className=' hover:cursor-pointer hover:text-cyan-900'>Home</li></Link>
                <Link to="/Profile"><li className=' hover:cursor-pointer hover:text-cyan-900' >Apply Now</li></Link>
                <li className='flex items-center hover:cursor-pointer hover:text-cyan-900 relative h-full' onMouseOver={()=>{setShow(true)}} onMouseLeave={()=>{setShow(false)}}><div>Download App</div>{show&&<div className=' absolute w-60 text-center -left-20 -bottom-8'><List/> </div>}</li>
                <Link to="/About"><li className=' hover:cursor-pointer hover:text-cyan-900'>About Us</li></Link>
            </ul>
        </div>
        <div className=' laptop:hidden flex justify-end  relative py-3'>
          <img src='/Images/menu2.png' className='w-1/6 mr-9' onClick={()=>setmenuview(!menuview)}/>
          {menuview&&<Menu set={bank=>setbank(bank)} setset={clos=>setclos(clos)} log={Logout} permit={permit}  open={menuview=>setmenuview(menuview)}/>}
        </div>
        <div className='w-3/6 h-full laptop:flex  items-center hidden'>
                <ul className='flex justify-around w-full h-full items-center'>
                {permit&&<li className=' hover:cursor-pointer border-2 border-cyan-900 px-8 py-2 rounded-lg hover:bg-cyan-900 hover:text-white font-semibold text-cyan-900' onClick={Logout}>Log Out</li>}
               {permit||<Link to="/Signup"><li className=' hover:cursor-pointer border-2 border-cyan-900 px-8 py-2 rounded-lg hover:bg-cyan-900 hover:text-white font-semibold text-cyan-900'>Sign Up</li></Link>}
               {permit||<Link to="/Login"><li className=' hover:cursor-pointer border-2 border-cyan-900 px-8 py-2 rounded-lg hover:bg-cyan-900 hover:text-white font-semibold text-cyan-900'>Log In</li></Link>}
               {permit&&<div className='w-8 relative cursor-pointer' onClick={open}><img src="/Images/notify.png" className='w-full'/>{alert&&<div className=' absolute w-3 h-3 rounded-full bg-red-500 bottom-0 right-0 cursor-pointer'></div>}</div>}
                {permit&&<div  className='w-10 h-full flex flex-col items-center justify-center cursor-pointer relative' onMouseOver={()=>{setDisplay(true)}} onMouseLeave={()=>{setDisplay(false)}}>
                  <img src="/Images/profile.png" alt='profile'/>
                  {display&&<div className=' absolute w-60 text-center -right-5 -bottom-36 '><Profile sets={(clos)=>setclos(clos)} bank={bank} setbank={(bank)=>setbank(bank)}/></div>}
                </div>}
                </ul>
            </div>
            {clos&&<Bank  set={(clos)=>setclos(clos)} bank={bank} setbank={(bank)=>setbank(bank)}/>}
            {notice&&<Notify Drop={open} info={username}/>}
           
            </div>
    </div>
  )
}

export default Navbar