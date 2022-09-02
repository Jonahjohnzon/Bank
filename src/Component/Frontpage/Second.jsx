import React from 'react'

const Second = () => {
    const word={
        a:'Access Up To $30,000 In Loans '
    }
  return (
    <div className='mt-10 w-full flex justify-center bg-slate-100 items-center shadow-inner relative'>
    <div className=' absolute w-1/6 left-80 h-80 bg-indigo-200 bottom-0  z-10 rounded-t-3xl'></div>
    <div className=' absolute w-80  h-80 bg-indigo-200 right-40 top-4  z-10  rounded-full'></div>
    <div className=' w-[80%] flex justify-around items-center mt-5 z-20'>
        <div><img alt='img' src='/Images/image2.png' className=' w-[90%]'/></div>
        <div>
        <div className=' text-2xl text-cyan-900  font-semibold mb-4'>Get Instant Loan</div>
        <div className='text-4xl font-bold mb-5'>{word.a}</div>
        <div className=' border-2 border-cyan-900 bg-cyan-800 w-[65%] h-14 flex justify-center items-center text-lg text-white font-semibold rounded-md shadow-sm shadow-gray-600 cursor-pointer hover:bg-cyan-900'>Get a Loan Now</div>
        </div>
        </div>
    </div>
  )
}

export default Second