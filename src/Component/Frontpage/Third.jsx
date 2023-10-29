import React from 'react'

const Third = () => {
  return (
    <div className='mt-10'>
        <div className='flex  laptop:flex-row flex-col items-center laptop:text-left text-center'>
            <div className='w-full flex justify-center laptop:justify-end'>
            <div className='laptop:w-1/2 w-[90%]'>
                <div className=' font-semibold text-2xl laptop:text-4xl mb-3 '>Are you a first timer?</div>
                <div className=' font-semibold text-lg mb-1'>Here is what you need to know.</div>
                <div className='mb-7 text-lg'>Heritage is an online lending platform that gives you loans of up to $30,000 in one transaction all within 5 minutes! No collateral, no paperwork and no visit to any office.</div>
                <div className=' text-lg'>With Heritage you can take care of urgent personal and business needs anywhere, anytime.</div>
            </div></div>
            <div className='w-full flex justify-center my-10'><img src="/Images/iconsnow.png" alt='icon' className='laptop:w-80 w-40 laptop:ml-12' /></div>
          
        </div>
    </div>
  )
}

export default Third