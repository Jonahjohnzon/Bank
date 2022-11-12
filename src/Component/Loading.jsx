import React from 'react'

const Loading = () => {
  return (
    <div className='fixed z-50 bg-cyan-900 w-full h-full top-0 flex justify-center items-center '>
         <div className=' font-extrabold text-white fixed'>. . . . .</div>
      <div className='w-40 h-40 border-4 border-white animate-spin rounded-full border-b-0 border-l-0'>
      <div className='w-40 h-40 border-4 border-white animate-spin rounded-full flex  justify-center items-center '>
      </div>
      </div>
    </div>
  )
}

export default Loading