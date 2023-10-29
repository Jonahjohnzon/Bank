import React, { useEffect, useState } from 'react'
import Design from '../Signup/Design'
import { Link } from 'react-router-dom'
import {Formik} from 'formik'
import { useNavigate } from 'react-router-dom'
import Loading from '../Loading'
import { useLocation } from 'react-router-dom'

import * as yup from 'yup'
const Login = () => {
  const navigation=useNavigate()
  const location = useLocation()
  const [shoe,setshow]=useState(false)
  const [Load,setLoad]=useState(false)
  const [error,seterror]=useState('')
  const [display,setdisplay]=useState(false)
  

  const Schema=yup.object({
    email:yup.string().email().required().label('Email'),
    password:yup.string().min(1).max(15).required().label('Password'),})
 
  useEffect(()=>{
   if(location.state){
    setshow(true)
   }
  },[])

  return (
    <div className='flex laptop:h-[100vh]'>
    {Load&&<Loading/>}
      <div className=' w-full h-full flex justify-center items-center pt-48'>
        <div className='w-[60%]'>
        {shoe&&<div className='flex justify-center'>
        <div className='bg-green-100 text-center px-5 py-3 font-semibold mb-3'>Sign-Up Successfull</div></div>}
        {display&&<div className='flex justify-center'>
        <div className='bg-red-100 text-center px-5 py-3 font-semibold mb-3'>{error}</div></div>}
          <div className=' text-center font-semibold text-cyan-900 text-4xl'>Welcome to Heritage</div>
          <Formik 
          initialValues={{email:'',password:''}}
          validationSchema={Schema}
          onSubmit={async(values)=>{
            setLoad(true)
            console.log(values)
             const data= await fetch(`https://heritag.onrender.com/login`,{
              method:'POST',
              headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
              },
              body:JSON.stringify(values)
             })
             try{
              const info=await data.json()
              localStorage.setItem("tkn",info.token)
              localStorage.setItem("usr",info.data._id)
              if(info.auth){
              navigation('/',{info:info.data})
              navigation(0)
           
             }
             else{
              console.log('f')
              setLoad(false)
              seterror(info.data)
              setdisplay(true)
             }
             }
             catch(err){
              setdisplay(true)
              setLoad(false)
              console.log(err)
             }
          }}
          >
          {(props)=>{return(<div className=' flex flex-col items-center'>
           <div  className='flex flex-col w-full my-5'>
           <label for="em"  className=' laptop:font-semibold text-cyan-900'>Email</label>
           <input type="email" id="em" className='h-14 rounded-md w-full  border-gray-400  border-[1px]' value={props.values.email} onChange={props.handleChange('email')} />
           <div className=' text-red-500 text-sm'>{props.touched.email &&props.errors.email}</div>
           </div>
           <div className='flex flex-col w-full mb-5'>
           <label for="pass"  className=' laptop:font-semibold text-cyan-900' >Password</label>
           <input type="password" id="pass" className='h-14 rounded-md border-gray-400  border-[1px]' value={props.values.password} onChange={props.handleChange('password')}/>
           <div className=' text-red-500 text-sm'>{props.touched.password &&props.errors.password}</div>
           </div>
           <div><input type="submit" value="Log in" className='bg-cyan-900 font-semibold text-white py-3 px-20 rounded-md mb-5 cursor-pointer' onClick={props.handleSubmit}/></div>
           <Link to="/Signup"><div  className=' laptop:font-semibold text-cyan-900 text-center w-full cursor-pointer mb-8 underline'>Create Account</div></Link>
           <div className=' laptop:font-semibold text-cyan-900 w-2/3 text-center'> By logging in you agree to all Heritage's <Link to="/Terms"><span className=' text-blue-600 cursor-pointer'>Terms and Conditions</span></Link></div>
          </div>)}}
          </Formik>
          <div></div>
        </div>
      </div>
      <Design/>
    </div>
  )
}

export default Login