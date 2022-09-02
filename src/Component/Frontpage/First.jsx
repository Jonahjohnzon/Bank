import React from 'react'
const First = () => {
  return (
    <div className='flex justify-center h-full mt-40 '>
        <div className='flex w-[60%] justify-between items-center'>
            <div className=' w-[60%]'>
                <div className=' text-5xl font-bold mb-7'>
                    <div>Digital Bank</div>
                    <div>Get Instant Loans,</div>
                    <div>No Collateral Needed.</div>
                </div>
                <div className=' font-medium text-gray-600 w-[90%] mb-7'>
                    Get loans up to $30,000 with an APR as low as 7.15% APR, no hidden costs or fees.
                </div>
                <div className=' font-semibold border-2 border-cyan-800 rounded-lg bg-cyan-800 text-white flex justify-center w-[80%] hover:cursor-pointer hover:bg-cyan-900 h-14 items-center shadow-sm shadow-gray-600'>Download Heritage app</div>
                <div>
                <div className='flex justify-center w-[80%] my-3 items-center'>
                    <div className='w-4 mx-6'><img src="/Images/android.png" alt='android'/></div>
                    <div className='w-4 mx-6'><img src="/Images/apple.png" alt='mac'/></div>
                </div>
                </div>
                <div className='font-medium text-2xl'>
                    <div className='my-2 flex items-center'><div><img src='/Images/correct.png' className='w-6 mr-3' alt='correct'/></div><div>Loans For Daily Expenses</div></div>
                    <div  className='my-2 flex items-center'><div><img src='/Images/correct.png' className='w-6 mr-3' alt='correct'/></div><div>Educational Loan</div></div>
                    <div  className='my-2 flex items-center'><div><img src='/Images/correct.png' className='w-6 mr-3' alt='correct'/></div><div>Business Loan</div></div>
                    <div  className='my-2 flex items-center'><div><img src='/Images/correct.png' className='w-6 mr-3' alt='correct'/></div><div>Low Interest</div></div>
                </div>
            </div>
            <div className='w-full'><div className='w-full flex justify-end'>
                <img src="/Images/App1.png" className=' w-[100%]' alt='app'/>
            </div></div>
        </div>
    </div>
  )
}

export default First