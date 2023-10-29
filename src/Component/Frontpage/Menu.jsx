import React, { useState ,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Bank from '../Profilpage/Bank'
import Aos from "aos"
import "aos/dist/aos.css"
const Menu = ({permit,log,open,set,setset}) => {
    
    useEffect(()=>{
        Aos.init({duration:300})
            },[])
  return (
    <div className='absolute z-50 right-0 top-[120%] bg-white shadow-gray-700 shadow-md w-[80%] ' data-aos="fade-left"  >
        <div>
            <ul className=' text-sm font-semibold flex flex-col justify-center text-center items-center mt-5 py-2'>
                <Link to="/"><li className='my-2' onClick={()=>open(false)}>Home</li></Link>
                <a href='"https://drive.google.com/file/d/1hotCO4l3Ngcp1YwkpRUScOyPvq1SGvef/view?usp=sharing'><li className='my-2' onClick={()=>open(false)}>Download Android App</li></a>
                <Link to="/About"><li className='my-2' onClick={()=>open(false)}>About</li></Link>
                <Link to='/Profile'><li className='my-2' onClick={()=>open(false)}>Apply Now</li></Link>
                {permit&&<li className='my-2' onClick={()=>{
                    setset(true)
                    set(2)
                    open(false)
            
                }}>Add Bank</li>}
                {permit&&<li className='my-2' onClick={()=>{
                    setset(true)
                    set(1)
                    open(false)
                
                }}>Add Payment</li>}
                {permit&&<li className='my-2'onClick={()=>{
                    setset(true)
                    set(3)
                    open(false)
                }}>Repayment</li>}
                {permit&&<li className='my-2' onClick={log}>Log Out</li>}
                {permit||<Link to="/Login"><li className='my-2' onClick={()=>open(false)}>Log In</li></Link>}
                {permit||<Link to="/Signup"><li className='my-2' onClick={()=>open(false)}>Sign In</li></Link>}
            </ul>
        </div>
    </div>
  )
}

export default Menu