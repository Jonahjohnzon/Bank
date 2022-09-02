import React from 'react'

const Fourth = () => {
    const data={
        a:{
            msg:"I can boldly say Heritage is one of the fastest,trusted and reliant loan company out here, with really low interest rates.",
            name:"Michael Fisher",
            location:"New Yolk"

        },
        b:{
            msg:"This has been such a great relief. Very easy application process and loan approval with a great interest rate. This has allowed me to clean up several high interest rate debts that would have taken me the next 20 years to pay if ever.",
            name:"Emma Miller",
            location:"Texas"

        }
    }
  return (
    <div className='flex justify-center mt-10 w-full h-56  items-center  '>
        <div className=' text-center w-1/2'>
            <div className='w-full mb-3'>
                <div className=' text-4xl font-semibold mb-2'>Customer Reviews</div>
               
            </div>
            <div className=''>
                <div className=''>
                    <div className='flex '>
                        <div>"</div>
                        <div className=''>
                        <i className=' text-lg'>{data.a.msg}</i>
                        <div mx-5 className=' font-semibold mb-1'>{data.a.name}</div>
                        <div className=' text-xs font-semibold text-gray-700'>{data.a.location}</div>
                        </div>
                        <div>"</div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fourth