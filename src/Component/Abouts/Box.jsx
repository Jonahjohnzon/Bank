import React from 'react'

const Box = ({cart}) => {
  return (
    <div className='w-[90%] mb-10 p-5'>
    <div className=''>
    <div className=' laptop:text-xl  font-semibold mb-2 laptop:mb-5' >{cart.title}</div>
    <div className='text-sm laptop:text-lg'>{cart.comment}</div>
    </div>
    </div>
  )
}

export default Box