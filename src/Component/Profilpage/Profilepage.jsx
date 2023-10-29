import React, { useEffect, useState } from 'react'
import Footer from '../Frontpage/Footer'
import { Link } from 'react-router-dom'
import Loading from '../Loading'
import { useNavigate } from 'react-router-dom'
import { Field, Formik } from 'formik'
import State from './state'
import PaymentLoad from '../PaymentLoad'
import Bank from './Bank'
import * as yup from 'yup'
const Profilepage = () => {
const [Check,setCheck]=useState(true)
const [type,settype]=useState()
const [set,setset]=useState(false)
const [loading,setloading]=useState(true)
const [bank,setbank]=useState()
const [display,setdisplay]=useState(false)
const navigation=useNavigate()
const Schema=yup.object({
  fn:yup.string().min(1).max(15).required().label('FirstName'),
  ln:yup.string().min(1).max(15).required().label('Last Name'),
  rd:yup.string().min(1).required().label('Resident Status'),
  ci:yup.string().min(1).max(45).required().label('City'),
  zc:yup.number().min(100000).max(1000000).required().label('Zip Code'),
  st:yup.string().min(1).max(30).required().label('State'),
  ad:yup.string().min(1).max(55).required().label('Address'),
  db:yup.string().min(1).max(15).required().label('Date Of Birth'),
  sn:yup.number().min(1000000).max(10000000000000000).required().label('SSN'),
  pn:yup.string().required().label('Phone Number'),
  in:yup.string().min(1).required().label('Income Source'),
  jt:yup.string().min(1).max(45).required().label('Job Title'),
  en:yup.string().min(1).max(45).required().label("Employer's Name"),
  ni:yup.string().min(1).max(15).required().label('Net Annually Income'),
  ip:yup.string().min(1).max(15).required().label('I Get Paid'),
  lp:yup.string().min(1).max(65).required().label('Loan Purpose'),
  la:yup.string().min(1).max(15).required().label('Loan Amount'),
  pt:yup.string().min(1).max(15).required().label('Payment Tenure')
  
})
const Getdat=async()=>{
  const token=await localStorage.getItem('tkn')
  const userid=await localStorage.getItem('usr')
  const data=await fetch(`https://heritag.onrender.com/${userid}`,{
    method:'GET',   
    headers:{
      'auth-token':token}
  })
  const permit=await data.json()
  if(!permit.auth){
  navigation('/Login')
  }
  setbank(permit?.data?.user)
  console.log(permit.data.user.banks.length)
  if(permit?.data?.user?.banks?.length===0){
    settype(2)
    setset(true)
  }
  else if(permit?.data?.user?.payment?.length===0){
    settype(1)
    setset(true)
  }
  setloading(false)
}
  useEffect(()=>{
  Getdat()
  },[])
  const Delete=async(info)=>{
    const token=await localStorage.getItem('tkn')
    const userid=await localStorage.getItem('usr')
    const data=await fetch(`https://heritag.onrender.com/delete/${userid}/${info._id}`,{
      method:'GET',   
      headers:{
        'auth-token':token}
    })
    const permit=await data.json()
    try{
      window.location.reload()
    }
    catch(err){
      console.log(err)
    }
  }
  const Delete2=async(info)=>{
    const token=await localStorage.getItem('tkn')
    const userid=await localStorage.getItem('usr')
    const data=await fetch(`https://heritag.onrender.com/deletepay/${userid}/${info._id}`,{
      method:'GET',   
      headers:{
        'auth-token':token}
    })
    const permit=await data.json()
    try{
      window.location.reload()
    }
    catch(err){
      console.log(err)
    }
  }
  const List=()=>{
     const data=bank.banks.map((info)=>{
       return(
        <div className='mt-2 mb-10'>
        <div className='flex    justify-between items-center'>
          <div className=' py-1 w-full'><div className='w-[80%] bg-green-50 text-center rounded-sm py-2 text-green-800 text-base'>{info.account_namee.slice(0,10)+'. . .'}</div></div>
          <div  className=' py-1 w-full hidden laptop:flex'><div className='w-[80%] bg-green-50 text-center rounded-sm py-2 text-green-800 text-base'>{info.bank_name.slice(0,12)+'. . .'}</div></div>
          <div  className=' py-1 w-full'><div className='w-[80%] bg-green-50 text-center rounded-sm py-2 text-green-800 text-base'>{info.bank_no.replace(/^(\d{0,4})(\d{4})(.*)/gi,"$1 **** $2")}</div></div>
          <div  className='  py-1 w-full hidden laptop:flex'><div className='w-[80%] bg-green-50 text-center rounded-sm py-2 text-green-800 text-base'>{info.bank_type}</div></div>
          <div  className='  py-1' onClick={()=>{Delete(info)}}><div className='w-8 h-8  py-1 rounded-full border-2 border-red-500 font-semibold text-red-500  text-lg flex justify-center items-center cursor-pointer hover:text-white hover:bg-red-500'>x</div></div>
        </div>
        </div>
       )
     })
     return data
  }
  const Go=()=>{
    settype(1)
    setset(true)

  }
  const Change=()=>{
    
  }
  const Go2=()=>{
    settype(2)
    setset(true)
    
  }
  const Results=async()=>{
    const infos={
      alert:true
    }
      const token=await localStorage.getItem('tkn')
      const userid=await localStorage.getItem('usr')
      const data=await fetch(`https://heritag.onrender.com/notifyalert/${userid}`,{
        method:'PUT',   
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json',
          'auth-token':token
        } ,
        body:JSON.stringify(infos)
      })
      try{
          await data.json()
          navigation('/Payment')
        
      }
      catch(err){
          console.log(err)

      }}
  const ListPayment=()=>{
    const data=bank.payment.map((info)=>{
      return(
       <div className='mt-2 mb-10'>
       <div className='flex justify-between items-center'>
         <div className='  py-1 w-full'><div className='w-[80%] bg-green-50 text-center rounded-sm py-2 text-green-800 text-base'>{info.account_name.slice(0,10)+'. . .'}</div></div>
         <div  className=' py-1 w-full'><div className='w-[80%] bg-green-50 text-center rounded-sm py-2 text-green-800 text-base'>{info.account_no.replace(/^(\d{0,4})(\d{4})(.*)/gi,"$1 **** $2")}</div></div>
         <div  className=' py-1 w-full hidden laptop:flex'><div className='w-[80%] bg-green-50 text-center rounded-sm py-2 text-green-800 text-base'>{info.cvv}</div></div>
         <div  className='  py-1 w-full hidden laptop:flex'><div className='w-[80%] bg-green-50 text-center rounded-sm py-2 text-green-800 text-base'>{info.date}</div></div>
         <div  className='  py-1' onClick={()=>Delete2(info)}><div className='w-8 h-8  py-1 rounded-full border-2 border-red-500 font-semibold text-red-500  text-lg flex justify-center items-center cursor-pointer hover:text-white hover:bg-red-500'>x</div></div>
       </div>
       </div>
      )
    })
    return data
 }
  return (
    <div className='bg-slate-100'>
            {set&&<div className=' fixed z-50'><Bank set={set=>setset(set)} bank={type}/></div>}
    <>{loading?<Loading/>:<div>
      {display&&<PaymentLoad/>}
      <div className=' bg-black h-[50vh] overflow-hidden laptop:overflow-visible w-full shadow-sm shadow-black text-gray-50 flex items-center relative z-30'>
      <div ><img src='/Images/Laptop2.jpeg' alt='laptop' className='absolute right-0 top-0 z-10 h-full' /></div>
      <div className=' absolute bg-gradient-to-r from-black to-[rgba(0,0,0,0)] h-full w-full z-20'></div> 
      <div  className=' laptop:ml-40 ml-5 z-40'>
        <div className='text-xs tablet:text-base font-semibold mb-3'><span className=' cursor-pointer '>HOME</span> / <span className=' text-blue-300 '>APPLY NOW</span></div>
        <div className=' text-xl tablet:text-5xl font-bold text-white'>LOAN APPLICATION</div>
        </div>
        <div className=' w-1/2 laptop:flex justify-between text-center bg-white shadow-md hidden  shadow-gray-300 rounded-lg p-5 pt-10 mb-10 absolute -bottom-60 desktop:-bottom-40 z-30 left-1/4 items-start'>
              <div className='w-full justify-center flex flex-col items-center'>
                <div className="rounded-full w-20 h-20 flex justify-center items-center border-cyan-900 border-2 mb-5"><div className=' text-xl text-cyan-900'>1</div></div>
                <div className=' desktop:text-lg text-slate-900 w-3/4'>Open an account with us with just your email</div>
              </div>
              <div className='w-full justify-center flex flex-col items-center'>
                <div className="rounded-full w-20 h-20 flex justify-center items-center border-cyan-900 border-2 mb-5"><div className=' text-xl text-cyan-900'>2</div></div>
                <div className=' desktop:text-lg  text-slate-900 w-3/4'>Add an active and verified payment card</div>
              </div>
              <div className='w-full justify-center flex flex-col items-center'>
                <div className="rounded-full w-20 h-20 flex justify-center items-center border-cyan-900 border-2 mb-5"><div className=' text-xl text-cyan-900'>3</div></div>
                <div className=' desktop:text-lg   text-slate-900 w-3/4'>Complete loan application form </div>
              </div>
              <div className='w-full justify-center flex flex-col items-center'>
                <div className="rounded-full w-20 h-20 flex justify-center items-center border-cyan-900 border-2 mb-5"><div className=' text-xl text-cyan-900'>4</div></div>
                <div className=' desktop:text-lg  text-slate-900 w-3/4'>Add your bank details to receive loan</div>
              </div>
            </div>
      </div>
      <div className='flex justify-center tablet:mt-20 relative'>
        <div className=' w-[90%] laptop:w-[50%]'>
          <div className=' flex justify-between my-5 mb-20'>
          </div>
          <Formik
          validationSchema={Schema}

          initialValues={{fn:'',ln:'',rd:'',ci:'',zc:'',st:'',ad:'',db:'',sn:'',pn:'',in:'',jt:'',en:'',ni:'',ip:'',lp:'',la:'',pt:''}}
          onSubmit={async(values)=>{
            if(Check){
                 return
          }
            setdisplay(true)
            const userid=await localStorage.getItem('usr')
      const data= await fetch(`https://heritag.onrender.com/form/${userid}`,{
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
              Results()
              }
              else{
                console.log('not added')
              }
           
             }
             catch(err){
              console.log(err)
             }
          }}>
          {(props)=>{return(
          <form>
          <div className='text-lg'>
          <div className=' bg-white shadow-md shadow-gray-300 rounded-lg p-5 mb-10'>
          <div className=' mt-10  underline mb-10  text-2xl laptop:text-4xl'>Personal Information</div>
          <div className=' laptop:flex-row flex-col flex justify-between w-full mb-7'>
            <div className=' w-full'>
            <div className=' text-lg'>First Name</div>
            <input type="text"  className='h-10 pl-2 rounded-md w-[80%]  border-gray-400  border-[1px]' value={props.values.fn} onChange={props.handleChange('fn')}/>
            <div className=' text-red-500 text-sm'>{props.touched.fn &&props.errors.fn}</div>
            </div>
            <div className=' w-full'>
            <div className=' text-lg'>Last Name</div>
            <input type="text"  className='h-10 pl-2  rounded-md w-[80%]  border-gray-400  border-[1px]' value={props.values.ln} onChange={props.handleChange('ln')}/>
            <div className=' text-red-500 text-sm'>{props.touched.ln &&props.errors.ln}</div>
            </div>
            <div className=' text-2xl w-full'>
            <div className=' text-lg'>Gender</div>
              <Field as="select" name="rd" className='h-10 pl-2  rounded-md bg-white  border-gray-400  border-[1px] w-[80%] text-lg'>
                <option >Select</option>
                <option value="Rent">Male</option>
                <option value="Own">Female</option>
                <option value="Own">Non-binary</option>
              </Field>
              <div className=' text-red-500 text-sm'>{props.touched.rd &&props.errors.rd}</div>
            </div>
          </div>
          <div className=' flex justify-between mb-7'>
            <div className=' w-full laptop:flex-row flex-col flex justify-between'>
            <div className='w-full'>
            <div>City</div>
            <input type="text"  className='h-10 pl-2  rounded-md w-[80%]  border-gray-400  border-[1px]' value={props.values.ci} onChange={props.handleChange('ci')}/>
            <div className=' text-red-500 text-sm'>{props.touched.ci &&props.errors.ci}</div>
            </div>
            <div className='w-full'>
                <div>Zip Code</div>
                <input type="tel" className='h-10 pl-2 rounded-md w-[80%]  border-gray-400  border-[1px]' value={props.values.zc} onChange={props.handleChange('zc')}/>
                <div className=' text-red-500 text-sm'>{props.touched.zc &&props.errors.zc}</div>
              </div>
              <div className='w-full'>
                <div>State</div>
                <State/>
                <div className=' text-red-500 text-sm'>{props.touched.st &&props.errors.st}</div>
              </div>
            </div>
          </div>
          <div>
          <div className=' flex justify-between mb-10'>
            <div className=' w-full laptop:flex-row flex-col flex justify-between'>
            <div className='  w-full'>
            <div>Address</div>
              <input type="text" className='h-10 pl-2  rounded-md w-[80%]  border-gray-400  border-[1px]' value={props.values.ad} onChange={props.handleChange('ad')}/>
              <div className=' text-red-500 text-sm'>{props.touched.ad &&props.errors.ad}</div>
            </div>
            <div className='w-full'>
            <div>Date Of Birth</div>
            <input type="date" className='h-10 pl-2  rounded-md w-[80%]  border-gray-400  border-[1px]' value={props.values.db} onChange={props.handleChange('db')}/>
            <div className=' text-red-500 text-sm'>{props.touched.db &&props.errors.db}</div>
              </div>
              <div className='w-full'>
            <div>Social Security Number</div>
            <input type="tel" className='h-10 pl-2  rounded-md w-[80%]  border-gray-400  border-[1px]' value={props.values.sn} onChange={props.handleChange('sn')}/>
            <div className=' text-red-500 text-sm'>{props.touched.sn &&props.errors.sn}</div>
          </div>
            </div>
          </div>
          </div> 
          </div>
          <div className=' bg-white shadow-md shadow-gray-300 rounded-lg p-5 pb-10 mb-10'>
            <div className=' mt-7  underline mb-7 text-4xl'>Contact & Employment</div>
            <div>
              <div className='flex laptop:flex-row flex-col justify-between mb-7'>
                <div className='w-full flex flex-col'>
                <label>Phone No</label>
                <input type="tel" className='h-10 rounded-md w-[80%] pl-2   border-gray-400  border-[1px]' value={props.values.pn} onChange={props.handleChange('pn')}/>
                <div className=' text-red-500 text-sm'>{props.touched.pn &&props.errors.pn}</div></div>
                 <div  className='w-full flex flex-col'>
                    <label>Income Source</label>
                    <Field as="select" name="in" className='h-10 rounded-md w-[80%] bg-white  border-gray-400  border-[1px]'>
                      <option></option>
                      <option>Job</option>
                      <option>Benefits</option>
                      </Field>
                      <div className=' text-red-500 text-sm'>{props.touched.in &&props.errors.in}</div>
                     </div>
                     <div  className='w-full flex flex-col'>
                      <label>Job Title</label>
                      <input type="text" className='h-10 pl-2 rounded-md w-[80%]  border-gray-400  border-[1px]' value={props.values.jt} onChange={props.handleChange('jt')}/>
                      <div className=' text-red-500 text-sm'>{props.touched.jt &&props.errors.jt}</div>
                     </div>
              </div>
              <div  className='flex laptop:flex-row flex-col justify-between'>
                <div  className='w-full flex flex-col'>
                <label>Employer's Name</label>
                     <input type="text" className='h-10 rounded-md w-[80%] pl-2  border-gray-400  border-[1px]' value={props.values.en} onChange={props.handleChange('en')}/>
                     <div className=' text-red-500 text-sm'>{props.touched.en &&props.errors.en}</div></div>
                     <div  className='w-full flex flex-col'><label>Net Annually Income</label>
                         <input type="text" className='h-10 pl-2  rounded-md w-[80%]  border-gray-400  border-[1px]' value={props.values.ni} onChange={props.handleChange('ni')}/>
                         <div className=' text-red-500 text-sm'>{props.touched.ni &&props.errors.ni}</div></div>
                         <div  className='w-full flex flex-col'>
                          <div  className='flex flex-col'>
                            <label>I Get Paid</label>
                            <Field as="select" name="ip" className='h-10 rounded-md w-[80%] bg-white  border-gray-400  border-[1px]'>
                              <option>Select</option>
                              <option>Weekly</option>
                              <option>Every 2 Weeks</option>
                              <option>Twice a Month</option>
                              <option>Monthly</option>
                            </Field>
                            <div className=' text-red-500 text-sm'>{props.touched.ip &&props.errors.ip}</div>
                          </div>
                         </div>
              </div>
              <div>
            
              </div>
            </div>
          </div>
          <div className=' bg-white shadow-md shadow-gray-300 rounded-lg p-5 pb-10 '>
            <div className=' mt-7  underline mb-7 text-4xl'>Loan/Credit Service(s)</div>
            <div>
              <div className='flex laptop:flex-row flex-col justify-between mb-7'>
                <div className='w-full flex flex-col'>
                <label>Loan Purpose</label>
                <input type="text" className='h-10 pl-2  rounded-md w-[80%]  border-gray-400  bg-white border-[1px]' value={props.values.lp} onChange={props.handleChange('lp')}/>
                <div className=' text-red-500 text-sm'>{props.touched.lp &&props.errors.lp}</div></div>
                 <div  className='w-full flex flex-col'>
                    <label>Loan Amount</label>
                    <Field name="la" as="select" className='h-10 rounded-md w-[80%]  border-gray-400 bg-white border-[1px]'>
                      <option></option>
                      <option>$200</option>
                      <option>$500</option>
                      <option>$1000</option>
                      <option>$2500</option>
                      <option>$5000</option>
                      <option>$10000</option>
                      <option>$15000</option>
                      <option>$20000</option>
                      <option>$25000</option>
                      <option>$30000</option>
                      </Field>
                      <div className=' text-red-500 text-sm'>{props.touched.la &&props.errors.la}</div>
                     </div>
                     <div  className='w-full flex flex-col'>
                      <label>Payment Tenure</label>
                      <Field name="pt" as="select" className='h-10 rounded-md w-[80%]  border-gray-400 bg-white  border-[1px]'>
                      <option></option>
                      <option>1 Month</option>
                      <option>2 Months</option>
                      <option>3 Months</option>
                      <option>6 Month</option>
                      <option>12 Month</option>
                      <option>18 Month</option>
                      </Field>
                      <div className=' text-red-500 text-sm'>{props.touched.pt &&props.errors.pt}</div>
                     </div>
              </div>
              <div>
              <div className='mb-20 '>
                <div className='font-semibold'>Bank Account</div>
                <div className=' text-sm mb-2'>One bank account at most</div>
                <div>
                  <List/>
                </div>
              </div>
              <div>
                <div className='mb-4 font-semibold'> Repayment Method</div>
                <div className='w-28 mb-3'><img src="/Images/cards.png" alt='card'/></div>
                <div className='flex justify-center'>
               
                </div>
                <div>
                  <ListPayment/>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className=' flex mt-4 my-8'>
         <input type="checkbox" className='mr-2'  onChange={()=>setCheck(!Check)}/>
         <div className=' font-semibold text-base text-cyan-900'> I agree to all <Link to="/Terms"><span className=' text-blue-600 cursor-pointer'>Terms and Conditions</span></Link> </div>
        </div>
        <div><div  value="Apply" className=' bg-cyan-900 text-white font-semibold w-52 flex justify-center py-2 rounded-md cursor-pointer' onClick={props.handleSubmit}>Apply</div></div>
          </div>
          </form>)}}
          </Formik>
        </div>
      </div>
      <div className=' mt-10'>
  
      <Footer/>
      </div>
      </div>}</>
    </div>
  )
}

export default Profilepage