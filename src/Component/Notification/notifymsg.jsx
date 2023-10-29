import React, { useEffect, useState } from 'react'
import TimeAgo from 'timeago-react'; 
import Detailpop from './Detailpop';
const Notifymsg = ({item}) => {
    const [msg,setmsg]=useState('')
    const [show,setshow]=useState(false)
    useEffect(()=>{
        const data=item.message.slice(0,60)
        setmsg(data+' . . .')

    },[])
  return (
    <div className='w-[80%] border-b-[1px] border-gray-200' onMouseEnter={()=>setshow(true)}  onMouseLeave={()=>setshow(false)}>
        <div className=' font-semibold text-sm '>{item.title}</div>
        <div className=' text-sm mb-1'>{msg}</div>
        <div className=' text-xs mb-1'><TimeAgo datetime={item.date}/></div>
        {show&&<Detailpop value={item} Drop={show=>setshow(show)}/>}
    </div>
  )
}

export default Notifymsg