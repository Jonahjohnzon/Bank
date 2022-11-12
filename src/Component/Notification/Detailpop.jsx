import React,{useEffect} from 'react'
import TimeAgo from 'timeago-react'
import Aos from "aos"
import "aos/dist/aos.css"
const Detailpop = ({value,Drop}) => {
    const Dropnow=()=>{
        Drop(false)
    }
    useEffect(()=>{
      Aos.init({duration:300})
      },[])
  return (
    <div className='fixed w-[500px] h-[260px] bg-white border-gray-400 border-[1px] bottom-3 right-[305px] overflow-y-scroll rounded-md' data-aos="fade-left">
        <div className='relative h-full'>
        <div className=' absolute flex items-center justify-between w-full'>
        <div className='w-8 ml-4'><img src="/Images/profile.png" alt='profile'/></div>
        <div onClick={Dropnow} className=" cursor-pointer"><img src="/Images/close.png"/></div></div>
        <div className=' flex flex-col items-center h-full'>
        <div className=' font-semibold text-xl text-center w-full mt-10 mb-2'>Message</div>
             <div className='w-[80%]'>
            <div className=' font-semibold underline mb-2'>{value.title}</div>
            <div className='mb-2'>{value.message}</div>
            <div className=' text-sm font-semibold'><TimeAgo datetime={value.date}/></div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Detailpop