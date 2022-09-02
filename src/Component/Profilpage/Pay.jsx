import React from 'react'

const Pay = ({Close}) => {
  return (
    <div className=' flex justify-center'>
    <div className=' w-4/5 mt-4'>
    <div>
    <div className=' font-bold text-3xl mb-3'>Setup payment account</div>
    <div className=' text-lg mb-1'>Register a card for repayment</div>
    <div className='w-28'><img src="/Images/cards.png"/></div>
    </div>
    <div className='flex flex-col my-4'>
    <label for="creditname" className=''>Card Name</label>
      <input text="text" id="creditname" className=' h-10 rounded-lg pl-2 border-gray-400 border-[1px]'/>
    </div>
    <div className='flex flex-col mb-4'>
    <label for="ccn" className=' text-lg '>Card Number</label>
     <input id="ccn" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="xxxx xxxx xxxx xxxx" className=' pl-2 h-10 rounded-lg border-gray-400 border-[1px]'/>
     </div>
     <div className=' flex justify-between mb-7'>
      <div className='flex flex-col'>
        <label>CCV/CVC</label>
        <input type="tel" className='h-10 rounded-lg border-gray-400 border-[1px] w-[80%] pl-2'/>
      </div>
      <div className='flex flex-col'>
        <label>Expiration Date</label>
        <input type="month" className='h-10 rounded-lg border-gray-400 border-[1px] pl-2 w-[100%]'/>
      </div>
     </div>
     <div className='flex justify-between items-center'>
      <div className=' w-36 flex justify-center py-2 bg-cyan-900 text-white font-semibold rounded-md hover:bg-cyan-800 cursor-pointer'  onClick={Close}>Cancel</div>
      <input type="submit" value="Add" className=' w-36 flex justify-center py-2 bg-cyan-900 text-white font-semibold rounded-md hover:bg-cyan-800 cursor-pointer'/>
     </div>
    </div>
    </div>
  )
}

export default Pay