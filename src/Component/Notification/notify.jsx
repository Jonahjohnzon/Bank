import React, { useEffect, useState } from 'react'
import Notifymsg from './notifymsg'
import Detailpop from './Detailpop'
import {motion} from 'framer-motion'
const Notify = ({Drop,info}) => {
  const [message,setmessage]=useState()
  const [Shut,setShut]=useState(false)
  const Slide={
    start:{
      opacity:0,
      y:200
    },
    flow:{
       opacity:1,
       y:0,
       transition:{
        type:"tween"  ,
        stiffness:400,
        duration:0.3
       }
    }
  }
  const Send=async()=>{
    const info={
      alert:false
    }
      const token=await localStorage.getItem('tkn')
      const userid=await localStorage.getItem('usr')
      const data=await fetch(`https://heritageapp.herokuapp.com/notifypanel/${userid}`,{
        method:'PUT',   
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json',
          'auth-token':token}
          ,
      body:JSON.stringify(info)
      })
      try{
          const result=await data.json()
           console.log(result)
      }
      catch(err){
          console.log(err)

      }
  }
  useEffect(()=>{
  Send()

  },[]) 
  const Box=()=>{
    const data=info?.notification?.msg.map((items)=>{
      return(
        <div key={items._id} className="flex justify-center cursor-pointer hover:bg-gray-100" ><Notifymsg item={items}/></div>
      )
    })
    return data
  }

  return (
    <motion.div initial="start" animate="flow" variants={Slide} className='fixed z-30  w-[300px] h-[720px] border-[1px] border-r-0 border-gray-400 bg-white rounded-lg shadow-lg bottom-1 right-0 overflow-y-scroll'>
        <div className='flex flex-col items-center'>
            <div className='flex justify-between w-[80%] items-center mb-2 border-b-[1px] border-gray-200'>
                <div className='w-8'><img src="/Images/profile.png" alt='profile'/></div>
                <div className=' font-semibold'>Notification</div>
                <div onClick={Drop} className=" cursor-pointer"><img src="/Images/close.png"/></div>
            </div>
            <Box/>
           

        </div>
    </motion.div>
  )
}

export default Notify