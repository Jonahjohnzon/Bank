import React from 'react'
import { Link } from 'react-router-dom'
const Profile = ({sets,bank,setbank}) => {
  const Click=()=>{
    sets(true)
    setbank(1)
  }
  const Click2=()=>{
    sets(true)
    setbank(2)
  }
  const Click1=()=>{
    sets(true)
    setbank(3)
  }
  return (
    <div className='  bg-white shadow-lg border-[1px] border-gray-200 '>
        <ul>
        <li className=' font-semibold text-black hover:text-cyan-900 my-5' onClick={Click2}>My Bank Account</li>
        <li className=' font-semibold text-black hover:text-cyan-900 my-5' onClick={Click}>Add Payment Card</li>
        <li className=' font-semibold text-black hover:text-cyan-900 my-5' onClick={Click1}>Repay Loan</li>
            <li className=' font-normal text-xs text-black my-5'>&copy; 2022 Heritage</li>
        </ul>
    </div>
  )
}

export default Profile