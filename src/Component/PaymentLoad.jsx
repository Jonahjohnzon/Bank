import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const PaymentLoad = () => {
    const[name,setname]=useState({a:'This will take only a few minutes',b:"Please  wait . . ."})
    const navigate=useNavigate()
    const Result=async()=>{
      const token=await localStorage.getItem('tkn')
      const userid=await localStorage.getItem('usr')
      const data=await fetch(`https://heritag.onrender.com/result/${userid}`,{
        method:'GET',   
        headers:{
          'auth-token':token}
      })
      try{
          const result=await data.json()
         navigate('/',{state:{data:result.data,msg:result.msg,text:result.text}})
         navigate(0)
          
      }
      catch(err){
          console.log(err)
          navigate('/',{state:{data:true,msg:"Error!!!. Something went wrong "}})
      }
  }

 

    const next=()=>{
        setTimeout(() => {
          Result()
         },50000);
    }
    const Getinfo=async()=>{
     setTimeout(() => {
        setname({a:'Verifying credentials',b:"This won't take long"})
        next()
     },20000);
    }
    useEffect(()=>{
   Getinfo()
    },[])
  return (
    <div className='fixed z-50 bg-cyan-900 w-full h-full top-0 flex flex-col justify-center items-center '>
             <div className='mb-10 fixed left-5 top-5'><img src='/Images/default1.png' className='w-60 hover:cursor-pointer' alt='logo'/></div>
       <> <div className=' font-extrabold text-white fixed'>. . . . .</div>
         <div className=' text-xl tablet:text-3xl font-light text-white text-center '>{name.a}</div>
      <div className='w-40 h-40 border-4 border-white animate-spin rounded-full border-b-0 border-l-0 my-14'>
      <div className='w-40 h-40 border-4 border-white animate-spin rounded-full flex  justify-center items-center '>

      </div>
      </div>
      <div className='text-xl tablet:text-3xl font-light text-white text-center'>{name.b}</div></>
    </div>
  )
}

export default PaymentLoad