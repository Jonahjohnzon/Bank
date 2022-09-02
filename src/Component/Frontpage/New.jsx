import React from 'react'
import { Vision } from '../Abouts/Cart'
import Box from '../Abouts/Box'
const New = () => {
    const Data=()=>{
          const news= Vision.map((e)=>{
            return(
                <div key={e.id} className='w-1/4 border-gray-400 bg-white shadow-md  mr-2'>
                    <Box cart={e}/>
                </div>
            )
          }
          )
          return news
    }
  return (
    <div className='h-[60vh] bg-slate-100 shadow-inner relative flex items-center w-full'>
        <div className=' absolute w-80  h-80 bg-indigo-200 left-40 top-40   rounded-full'></div>
        <div className=' absolute w-40  h-40 bg-indigo-200 right-40 bottom-40   rounded-full'></div>
        <div className=' absolute w-40  h-40 bg-indigo-200 left-20 bottom-20   rounded-full'></div>
        <div className=' absolute w-60  h-60 bg-indigo-200 right-96 bottom-60   rounded-full'></div>
        <div className=' absolute w-20  h-20 bg-indigo-200 right-[40vw] bottom-20   rounded-full'></div>
    <div className='flex justify-center w-full relative z-20'>
       <div className='flex w-[85%] items-center justify-center'>
        <div className=' font-semibold text-4xl w-full flex justify-center'>
        <div className='z-40 w-[70%]'>
        <div className='text-2xl text-cyan-900 mb-5 '> Our Strength</div>
        <div className=' '>Why Our Customers Choose and Trust Us</div></div>
        </div>
        <div className='w-full '>
        <div className=' flex flex-wrap'>
            <Data/>
        </div>
        </div>
        </div>
    </div>
 
    </div>
  )
}

export default New