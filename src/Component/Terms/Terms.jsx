import React from 'react'
import Policy from './Policy'
import Footer from '../Frontpage/Footer'
const Terms = () => {
  return (
    <div className=' mt-32'>
        <div className='flex justify-center mb-10 '>
            <div className='w-5/6 border-gray-400 border-[1px] p-5 shadow-md shadow-gray-300'>
                <div><Policy/></div>
            </div>
           
        </div>
        <Footer/>
    </div>
  )
}

export default Terms