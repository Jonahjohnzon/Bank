import React from 'react'
import Pay from './Pay'
import Form from './Form'
const Bank = ({set,bank,setbank}) => {
    const Close=()=>{
       set(false)
    }
  return (
    <div className=' fixed w-full h-[100vh] backdrop-blur-sm bg-black/30  flex justify-center items-center'>
        <div className=' w-[24%] h-[55vh] rounded-lg bg-white shadow-md shadow-gray-500 '>
        <div className=' flex justify-end' >
        <div className=' mr-3 mt-2 w-7 h-7 shadow-md flex  cursor-pointer justify-center items-center rounded-full hover:shadow-xl'   onClick={Close}>
        <div className='text-2xl text-gray-500'>x</div></div>
        </div>
         {bank||<Pay Close={Close}/>}
         {bank&&<Form Close={Close}/>}
        </div>
    </div>
  )
}

export default Bank