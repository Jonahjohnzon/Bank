import React, { useEffect, useState } from 'react'
import Box from './Box'
import { Cart } from './Cart'
import Footer from '../Frontpage/Footer'
import Loading from '../Loading'

const About = () => {
  const [load, setload] = useState(true)
  useEffect(()=>{
   window.scrollTo(0,0)
   setTimeout(()=>{
      setload(false)
   },3000)
  },[])
    const Data=()=>{
     const data=Cart.map((dat)=>{
         return(
            <div key={dat.id} className="laptop:w-1/3 border-[1px] border-gray-300">
            <Box cart={dat}/>
            </div>
         )
     })
     return data
    }
  return (
    <div>{load&&<Loading/>}
        <div className='mt-40'>
            <div className='text-center mb-32 text-5xl font-semibold text-cyan-900'>About Us</div>
             <div className='laptop:flex-row  flex-col flex  items-center'>
                <div className='w-full flex flex-col mb-3 laptop:mb-0 items-center'><div className='w-1/2 text-white bg-cyan-900 py-2 flex justify-center font-semibold'>WHO WE ARE</div>
                 <div className='laptop:w-1/2 w-4/5 text-center laptop:text-left text-lg'>&nbsp; &nbsp; We have built a type of credit-led digital bank: as people need loans to fund their business or for personal reasons, we offer them what they need with no collateral to make their lives easier. They cannot access those quick services from traditional banks so Heritage covers that unmet needs to help them thrive.</div></div>
                 <div className=' justify-center flex  w-full'><img src='/Images/two.jpg' alt='happiness' className='w-1/2 rounded-lg'/></div>
             </div>
             <div className='flex flex-col items-center mb-10'>
                <div>
                <div className='px-40 mt-20 text-white bg-cyan-900 py-2 flex justify-center font-semibold'>OUR VISION</div></div>
             </div>
             <div className='flex justify-center mb-20'>
             <div className='flex flex-wrap w-2/3'><Data/></div>
             </div>
             <div>
              <Footer/>
             </div>
        </div>
    </div>
  )
}

export default About