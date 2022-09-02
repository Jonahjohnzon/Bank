import React from 'react'
import { Link } from 'react-router-dom'
const Profile = ({sets,bank,setbank}) => {
  const Click=()=>{
    sets(true)
    setbank(false)
  }
  const Click2=()=>{
    sets(true)
    setbank(true)
  }
  return (
    <div className='  bg-white shadow-lg border-[1px] border-gray-200 '>
        <ul>
        <li className=' font-semibold text-black hover:text-cyan-900 my-5' onClick={Click2}>My Bank Account</li>
        <li className=' font-semibold text-black hover:text-cyan-900 my-5' onClick={Click}>Add Payment Card</li>
        <Link to="/Login"><li className=' font-semibold text-black hover:text-cyan-900 my-5'>Log Out</li></Link>
            <li className=' font-normal text-xs text-black my-5'>&copy; 2022 Heritage</li>
        </ul>
    </div>
  )
}

export default Profile