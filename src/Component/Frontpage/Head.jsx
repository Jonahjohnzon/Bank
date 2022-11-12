import React, { useEffect, useState,useRef } from 'react'
import First from './First'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'
import Fifth from './Fifth'
import Footer from './Footer'
import New from './New'
import { useLocation } from 'react-router-dom'

const Head = () => {
  const slide=useRef();
  const Slide=()=>{
   if(slide.current){
slide.current.scrollIntoView(
  {
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest'
    }
)
   }
      
  }
  const location=useLocation()
  const [show,setshow]=useState(true)
  useEffect(()=>{
    if(location?.state != null ){
      setshow(location?.state?.data)
      console.log(location.state)
    }
    
    else{
      setshow(true)
    }
    console.log(location.state)
window.scrollTo(0,0)
  },[])

  return (
    <div className='font-nunito'>
        {show||<div className='fixed w-full z-40 laptop:w-[500px] rounded-xl laptop:right-[37vw]  bg-red-200 laptop:top-10 top-32  flex-col  items- font-nunito'>
        <div className='font-semibold w-[20px] ml-2 mt-1 rounded-full flex justify-center items-center shadow-sm cursor-pointer shadow-black h-[20px] bg-white' onClick={()=>{setshow(!show)}}><div>x</div></div>
        <div className='text-center w-[90%]'>
        <div className='text-lg font-semibold'>{location?.state?.msg}</div>
        <div>{location?.state?.text}</div></div>
        </div>}
        <First Slide={Slide}/>
        <Second/>
        <Third/>
        <Fourth/>
        <New/>
        <Fifth/>
        <Footer slide={slide}/>
    </div>
  )
}

export default Head