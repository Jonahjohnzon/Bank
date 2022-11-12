import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Footer = ({slide}) => {
  return (
    <div className='flex flex-col justify-center w-full laptop:h-full text-white bg-slate-800 items-center  ' ref={slide}>
        <div className='flex flex-col tablet:flex-row w-[78%] items-center h-full pb-14'>
            <div className='w-full flex flex-col items-center text-center  border-white h-[80%]'>      
            <div><div className=''>
            <img src='/Images/default1.png' className='w-96 hover:cursor-pointer' alt='logo'/></div></div>
            <div className=' text-sm w-[90%] mb-5'>Heritage was founded with the objective of providing effective technology solutions that span the entire lending process and ultimately, to lower total cost of lending.</div>
            <div className='flex flex-col items-left w-[97%]'>
            <form>
              <div className=" font-semibold   text-lg mb-3">Subscribe to for newsletters</div>
              <input className='w-[100%] rounded-3xl border-black border-2 shadow-inner h-10 pl-3 mb-3' placeholder='Email'/>
              <input type="submit" value="Subscribe" className='bg-black font-semibold py-2 px-16 rounded-lg'/>
              </form>
            </div>
          </div>
            <div className='w-full flex justify-center text-center laptop:text-left'>
                <ul className=' font-medium laptop:text-lg text-sm'>
                 <div className='mb-5 font-semibold text-lg'>Company</div>
                 <Link to='/'> <li className='mb-3 hover:text-cyan-700 cursor-pointer'>Home</li></Link>
                 <Link to="/About"><li className='mb-3 hover:text-cyan-700 cursor-pointer'>About Us</li></Link>
                    <Link to="/Terms"> <li className='mb-3 hover:text-cyan-700 cursor-pointer'>Terms & Conditions</li></Link>
                </ul>
            </div>
            <div className='w-full laptop:flex  items-center justify-center h-[80%] hidden  text-lg' >
              
              <div><div className='font-semibold text-lg mb-5'>Product</div>
              <Link to="/About"><div className='laptop:text-lg text-smtext-lg  hover:text-cyan-700 cursor-pointer  mb-3'>Services</div></Link>
              <Link to="/Profile"><div className='mb-3 laptop:text-lg text-sm hover:text-cyan-700 cursor-pointer'>Apply for loan</div></Link></div>
            </div>
            <div className='w-full flex justify-center text-center laptop:text-left'>
                <ul className=' font-medium laptop:text-lg text-sm '>
                  <div className='mb-5 font-semibold text-lg'>App</div>
                    <a href="https://drive.google.com/file/d/1hotCO4l3Ngcp1YwkpRUScOyPvq1SGvef/view?usp=sharing"><li className='mb-3 hover:text-cyan-700 cursor-pointer'>Get Android App</li></a>

                </ul>
            </div>
        </div>
        <div className='bg-black w-full h-20 flex justify-center items-center'>
          <div>&copy; 2022 Heritage Bank. All right reserved</div>
        </div>
    </div>
  )
}

export default Footer