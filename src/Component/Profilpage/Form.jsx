import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Field, Formik } from 'formik'
import * as yup from 'yup'
const Form = ({Close}) => {
  const [load,setload]=useState('auto')
  const[name,setname]=useState('Add')
  const Schema=yup.object({
  bna:yup.string().min(3).max(80).required().label('Bank Name'),
  an:yup.string().min(3).max(50).required().label('Bank Account Name'),
  bn:yup.number().min(100000).max(10000000000000).required().label('Bank Account Number'),
  bt:yup.string().required().label('Bank Type')
  })
  const Sign=()=>{
    return(<div>
      <div className=' w-6 h-6 border-2 border-white rounded-full border-r-0 animate-spin'></div>
    </div>)
  }
  return (
    <div className="flex justify-center items-center h-[80%]">
    <div className="w-4/5 ">
    <div className='flex justify-center mb-3' ><img src="/Images/default1.png" className='w-[60%] ' alt='logo'/></div>
    <div className=" font-bold text-3xl mb-3">Add Bank Account</div>
        <Formik
        initialValues={{bna:'',bn:'',an:'',bt:''}}
        validationSchema={Schema}
        onSubmit={async(values)=>{
          setname(<Sign/>)
          setload('none')
          const userid=await localStorage.getItem('usr')
      const data= await fetch(`https://heritageapp.herokuapp.com/bank/${userid}`,{
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
          <div>
          
        <div className='flex flex-col mb-3'>
          <label for="sbank">Bank Name</label>
          <input type="text" id="sbank" className=' h-10 rounded-lg pl-2 border-gray-400 border-[1px]' value={props.values.bna} onChange={props.handleChange('bna')}/>
          <div className=' text-red-500 text-sm'>{props.touched.bna &&props.errors.bna}</div>
        </div>
        <div className='flex flex-col mb-5'>
        <label for="abank">Account Name</label>
          <input type="text" id="abank" className=' h-10 rounded-lg pl-2 border-gray-400 border-[1px]' value={props.values.an} onChange={props.handleChange('an')}/>
          <div className=' text-red-500 text-sm'>{props.touched.an &&props.errors.an}</div>
        </div>
        <div className='flex flex-col mb-5'>
        <label for="nbank">Bank Account No</label>
          <input type="tel" id="nbank" className=' h-10 rounded-lg pl-2 border-gray-400 border-[1px]' value={props.values.bn} onChange={props.handleChange('bn')}/>
          <div className=' text-red-500 text-sm'>{props.touched.bn &&props.errors.bn}</div>
        </div>
        <div className='my-3'>
          <div className='mb-1'>Account Type</div>
          <div className='flex justify-between w-2/3'><div>
          <Field type="radio" id="saving" name="bt" value="Savings" className='mr-2'  />
          <label htmlFor='saving' >Savings</label>
          </div>
          <div>
          <Field type="radio" id="checking" name="bt" value="Checkings" className='mr-2 '   />
          <label htmlFor='checking'>Checkings</label>
          </div></div>
          <div className=' text-red-500 text-sm'>{props.touched.bt &&props.errors.bt}</div>
        </div>
        <div className='mb-3'>
        <div className=' font-semibold text-cyan-900  text-center text-xs'> By adding your bank detail you agree to all Heritage's <Link to="/Terms"><span className=' text-blue-600 cursor-pointer '>Terms and Conditions</span></Link></div>
        </div>
            <div className=' flex justify-between'><div  className=' w-36 flex justify-center py-2 bg-cyan-900 text-white font-semibold rounded-md hover:bg-cyan-800 cursor-pointer ' onClick={Close}>Cancel</div>
            <div type="submit"  className=' w-36 flex justify-center py-2 bg-cyan-900 text-white font-semibold rounded-md hover:bg-cyan-800 cursor-pointer' onClick={props.handleSubmit} style={{pointerEvents:load}}>{name}</div></div></div>)}}
        </Formik>
    </div>
    </div>
  )
}

export default Form