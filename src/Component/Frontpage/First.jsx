import React, { useRef } from 'react'
const First = ({Slide}) => {

  return (
    <div className='flex justify-center h-full mt-40 '>
        <div className='flex  laptop:w-[60%] w-[80%] justify-center laptop:justify-between items-center'>
            <div className=' laptop:w-[60%] w-[80%]'>
                <div className=' laptop:text-5xl text-3xl text-center laptop:text-left  font-bold mb-7'>
                    <div>Digital Bank</div>
                    <div>Get Instant Loans,</div>
                    <div>No Collateral Needed.</div>
                </div>
                <div className='text-center laptop:text-left  font-medium text-gray-600  laptop:w-[90%] mb-7'>
                    Get loans up to $30,000 with an APR as low as 7.15% APR, no hidden costs or fees.
                </div>
                <div className=' font-semibold border-2 border-cyan-800 rounded-lg bg-cyan-800 text-white flex justify-center laptop:w-[80%] hover:cursor-pointer hover:bg-cyan-900 h-14 items-center shadow-sm shadow-gray-600' onClick={Slide}>Download Heritage  app</div>
                <div>
                <div className='flex justify-center laptop:w-[80%]  my-3 items-center'>
                    <div className='w-4 mx-6'><img src="/Images/android.png" alt='android'/></div>
 
                </div>
                </div>
                <div className='font-medium laptop:text-2xl'>
                    <div className='my-2 flex items-center'><div><img src='/Images/correct.png' className='laptop:w-6 w-3 mr-3' alt='correct'/></div><div>Loans For Daily Expenses</div></div>
                    <div  className='my-2 flex items-center'><div><img src='/Images/correct.png' className='laptop:w-6 w-3 mr-3' alt='correct'/></div><div>Educational Loan</div></div>
                    <div  className='my-2 flex items-center'><div><img src='/Images/correct.png' className='laptop:w-6 w-3 mr-3' alt='correct'/></div><div>Business Loan</div></div>
                    <div  className='my-2 flex items-center'><div><img src='/Images/correct.png' className='laptop:w-6 w-3 mr-3' alt='correct'/></div><div>Low Interest</div></div>
                </div>
            </div>
            <div className='w-full hidden laptop:flex'><div className='w-full flex justify-end'>
                <img src="/Images/App1.png" className=' w-[100%]' alt='app'/>
            </div></div>
        </div>
    </div>
  )
}

export default First