import React,{useState} from 'react'
import Design from './Design'
import { Link } from 'react-router-dom'
import {Formik} from "formik"
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

const Signup = () => {
  const [check,setCheck]=useState(true)
  const [load,setload]=useState('auto')
  const[name,setname]=useState('Create Account')
  const [info,setinfo]=useState('')
  const navigation=useNavigate()
  const Schema=yup.object({
    firstname:yup.string().min(1).max(15).required().label('Firstname'),
    lastname:yup.string().min(1).max(15).required().label('Lastname'),
    email:yup.string().email().required().label('Email'),
    phone:yup.string().min(1).max(15).required().label('Phone'),
    password:yup.string().min(1).max(15).required().label('Password'),
    comfirmpassword:yup.string().oneOf([yup.ref('password'),null],'Password must match').required().label('Password 2')
  })
  const Sign=()=>{
    return(<div>
      <div className=' w-6 h-6 border-2 border-white rounded-full border-r-0 animate-spin'></div>
    </div>)
  }
  return (
    <div className=' flex'>
    
    <div className=' w-full h-full flex items-center justify-center pt-20'>
    <div  className='w-[85%] mt-16'>
      <div className=' text-4xl text-cyan-900  '>Register New Account</div>
      <div className='mt-9 font-semibold text-cyan-900 text-lg'>Open an account with heritage</div>
      <div className=' text-sm mt-1 mb-8 laptop:font-semibold text-cyan-900'>let's get you all set up so you can begin setting up your profile</div>
      <Formik 
      initialValues={{firstname:'',lastname:'',email:'',phone:'',password:'',comfirmpassword:''}}
      validationSchema={Schema}
      onSubmit={async(values)=>{  
        if(check){
          return
        }
        setload('none')
        setname(<Sign/>) 
        const data=await fetch(`https://heritageapp.herokuapp.com/signup`,{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
          },
          body:JSON.stringify(values)
        })
        try{
          const account=await data.json()
          setname('Create Account')
          if(account.accounts){
          navigation('/Login',{state:{
            mgs:true
          }})}
          else{
            setinfo(account.data)
          }

       
        }
        catch(err){
          console.log(err)
        }

      }}
      >
      {(props)=>{return(<div className='w-full'>
      <div className=' flex justify-center'>
      <div className='flex font-semibold text-red-500 justify-center mb-5 w-1/3'>{info}</div></div>
        <div className='flex justify-between mb-10'>
        <div className='flex flex-col w-[45%]'>
           <label for="fn" className=' laptop:font-semibold text-cyan-900'>First Name</label>
          <input  type="text" id="fn" className=' border-gray-400 rounded-md w-full h-12  border-[1px]' value={props.values.firstname} onChange={props.handleChange('firstname')} />
          <div className=' text-red-500 text-sm'>{props.touched.firstname &&props.errors.firstname}</div>
          </div>
          <div className='flex flex-col w-[45%]'>
           <label for="ln"  className=' laptop:font-semibold text-cyan-900'>Last Name</label>
          <input  type="text" id="ln" className=' border-gray-400 rounded-md w-full h-12  border-[1px]' value={props.values.lastname} onChange={props.handleChange('lastname')}/>
          <div className=' text-red-500 text-sm'>{props.touched.lastname &&props.errors.lastname}</div>
          </div>
        </div>
        <div className='flex justify-between mb-10'>
        <div className='flex flex-col w-[45%]'>
           <label for="fn"  className=' laptop:font-semibold text-cyan-900' >Phone Number</label>
          <input  type="tel" id="pn" className=' border-gray-400 rounded-md w-full h-12  border-[1px]' value={props.values.phone} onChange={props.handleChange('phone')}/>
          <div className=' text-red-500 text-sm'>{props.touched.phone &&props.errors.phone}</div>
          </div>
          <div className='flex flex-col w-[45%]'>
           <label for="ln"  className=' laptop:font-semibold text-cyan-900'>Email</label>
          <input  type="email" id="em" className=' border-gray-400 rounded-md w-full h-12  border-[1px]' value={props.values.email} onChange={props.handleChange('email')}/>
          <div className=' text-red-500 text-sm'>{props.touched.email && props.errors.email}</div>
          </div>
        </div>
        <div className='flex justify-between'>
        <div className='flex flex-col w-[45%]'>
           <label for="fn"  className=' laptop:font-semibold text-cyan-900'>Password</label>
          <input  type="password" id="pw" className=' border-gray-400 rounded-md w-full h-12  border-[1px]' value={props.values.password} onChange={props.handleChange('password')}/>
          <div className=' text-red-500 text-sm'>{props.touched.password &&props.errors.password}</div>
          </div>
          <div className='flex flex-col w-[45%]'>
           <label for="ln"  className=' laptop:font-semibold text-cyan-900' >Comfirm Password</label>
          <input  type="password" id="cpw" className=' border-gray-400 rounded-md w-full h-12  border-[1px]' value={props.values.comfirmpassword} onChange={props.handleChange('comfirmpassword')}/>
          <div className=' text-red-500 text-sm'>{props.touched.comfirmpassword &&props.errors.comfirmpassword}</div>
          </div>
        </div>
        <div className=' flex my-4'>
         <input type="checkbox" className='mr-2' onChange={()=>{setCheck(false)}}/>
         <div className=' laptop:font-semibold text-cyan-900'> I agree to all <Link to="/Terms"><span className=' text-blue-600 cursor-pointer'>Terms and Conditions</span></Link> </div>
        </div>
        <div><div   className=' bg-cyan-900 text-white font-semibold w-44 flex justify-center py-2 rounded-md cursor-pointer' onClick={props.handleSubmit}  style={{pointerEvents:load}}>{name}</div></div>
       
      </div>)}}
      </Formik>
      <Link to="/Login"><div className=' laptop:font-semibold text-cyan-900 mt-3'>Already have an account? <span className=' text-blue-600 cursor-pointer'>Log in</span></div></Link>
    </div>
    </div>
    <Design/>
    </div>
  )
}

export default Signup