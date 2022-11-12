import React, { useEffect, useState } from 'react'
import Pay from './Pay'
import Form from './Form'
import Repay from './Repay'
import { useNavigate } from 'react-router-dom'
const Bank = ({set,bank}) => {
  const [bankform,setbankform]=useState(false)
  const [payform,setpaybank]=useState(false)
  const [repayform,setrepaybank]=useState(false)
  const navigate=useNavigate()
    const Close=()=>{
       set(false)
       navigate('/')
    }
    useEffect(()=>{
     if(bank===1){
      setbankform(true)
     }
     if(bank===2){
      setpaybank(true)
     }
     if(bank===3){
      setrepaybank(true)
     }
    },[])
  return (
    <div className=' fixed w-[100vw] left-0 z-50 h-[100vh] top-0 backdrop-blur-sm bg-black/30  flex justify-center items-center'>
        <div className=' laptop:w-[450px] w-full h-[640px] rounded-lg bg-white shadow-md shadow-gray-500 overflow-hidden '>
        <div className=' flex justify-end' >
        <div className=' mr-3 mt-2 w-7 h-7 shadow-md flex  cursor-pointer justify-center items-center rounded-full hover:shadow-xl'   onClick={Close}>
        <div className='text-2xl text-gray-500'>x</div></div>
        </div>
         {bankform&&<Pay Close={Close}/>}
         {payform&&<Form Close={Close}/>}
         {repayform&&<Repay Close={Close}/>}
        </div>
    </div>
  )
}

export default Bank