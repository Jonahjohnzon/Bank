import React from 'react'
import { Link } from 'react-router-dom'
const List = () => {
  return (
    <div className='  bg-white shadow-lg border-[1px] border-gray-200'>
        <ul>
            <li className=' font-semibold text-black hover:text-cyan-900 my-5'>Get Android Version</li>
            <li className=' font-semibold text-black hover:text-cyan-900 my-5'>Get IOS Version</li>
        </ul>
    </div>
  )
}

export default List