import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import * as yup from 'yup'
const Pay = ({Close}) => {
  const [load,setload]=useState('auto')
  const[name,setname]=useState('Add')
  const Schema=yup.object({
    acna:yup.string().min(3).max(50).required().label('Card Name'),
    cvv:yup.string().min(3).max(3).required().label('CVC'),
    acno:yup.number().min(1000000000000000,'Card Number must be atleast 16 numbers').max(10000000000000000,'Card Number must be atleast 16 numbers').required().label('Card Number'),
    date:yup.string().required().label('Date')
    })
  const Sign=()=>{
    return(<div>
      <div className=' w-6 h-6 border-2 border-white rounded-full border-r-0 animate-spin'></div>
    </div>)
  }
  return (
    <div className=' flex justify-center items-center h-[90%] overflow-hidden'>
     <Formik
     initialValues={{acna:'',acno:'',cvv:'',date:''}}
     validationSchema={Schema}
     onSubmit={async(values)=>{
      setname(<Sign/>)
      setload('none')
      const userid=await localStorage.getItem('usr')
      const data= await fetch(`https://heritageapp.herokuapp.com/payment/${userid}`,{
              method:'PUT',
              headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
              },
              body:JSON.stringify(values)
             })
             try{
              const info=await data.json()
              if(info){
              window.location.reload()
              Close()
              }
              else{
                console.log('not added')
              }
           
             }
             catch(err){
              console.log(err)
             }
             }}
            
     
     >
    {(props)=>{return(
    <div className=' w-4/5'>
   <div>
    <div className=' font-bold text-3xl mb-3'>Setup payment account</div>
    <div className=' text-lg mb-1'>Register a card for repayment</div>
    <div className='w-28'><img src="/Images/cards.png" alt='card'/></div>
    </div>
    <div className='flex flex-col my-4'>
    <label for="creditname" className=''>Card Name</label>
      <input text="text" id="creditname" className=' h-10 rounded-lg pl-2 border-gray-400 border-[1px]' value={props.values.acna} onChange={props.handleChange('acna')}/>
      <div className=' text-red-500 text-sm'>{props.touched.acna &&props.errors.acna}</div>
    </div>
    <div className='flex flex-col mb-4'>
    <label for="ccn" className=' text-lg '>Card Number</label>
     <input id="ccn" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="xxxx xxxx xxxx xxxx" className=' pl-2 h-10 rounded-lg border-gray-400 border-[1px]' value={props.values.acno} onChange={props.handleChange('acno')}/>
     <div className=' text-red-500 text-sm'>{props.touched.acno &&props.errors.acno}</div>
     </div>
     <div className=' flex justify-between mb-7'>
      <div className='flex flex-col'>
        <label>CCV/CVC</label>
        <input type="tel" className='h-10 rounded-lg border-gray-400 border-[1px] w-[80%] pl-2' value={props.values.cvv} onChange={props.handleChange('cvv')}/>
        <div className=' text-red-500 text-sm'>{props.touched.cvv &&props.errors.cvv}</div>
      </div>
      <div className='flex flex-col'>
        <label>Expiration Date</label>
        <input type="month" className='h-10 rounded-lg border-gray-400 border-[1px] pl-2 w-[100%]' value={props.values.date} onChange={props.handleChange('date')}/>
        <div className=' text-red-500 text-sm'>{props.touched.date &&props.errors.date}</div>
      </div>
     </div>
     <div className='mb-3'>
        <div className=' font-semibold text-cyan-900  text-center text-xs'> By adding your bank detail you agree to all Heritage's <Link to="/Terms"><span className=' text-blue-600 cursor-pointer '>Terms and Conditions</span></Link></div>
        </div>
     <div className='flex justify-between items-center'>
      <div className=' w-36 flex justify-center py-2 bg-cyan-900 text-white font-semibold rounded-md hover:bg-cyan-800 cursor-pointer'  onClick={Close}>Cancel</div>
      <div type="submit" value="Add" className=' w-36 flex justify-center py-2 bg-cyan-900 text-white font-semibold rounded-md hover:bg-cyan-800 cursor-pointer' onClick={props.handleSubmit} style={{pointerEvents:load}}>{name}</div>
     </div>
    </div>
    )}}
     </Formik>
    </div>
  )
}

export default Pay