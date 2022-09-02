import React from 'react'

const Box = ({cart}) => {
  return (
    <div className='w-[90%] mb-10 p-5'>
    <div className=''>
    <div className=' text-xl font-semibold mb-5' >{cart.title}</div>
    <div className=' text-lg'>{cart.comment}</div>
    </div>
    </div>
  )
}

export default Box