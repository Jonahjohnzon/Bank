import React from 'react'

const Form = () => {
  return (
    <div>
    <div>Add your bank account</div>
        <form>
        <div className='flex flex-col'>
          <label for="sbank">Bank Nme</label>
          <input type="text" id="sbank"/>
        </div>
        <div className='flex flex-col'>
        <label for="nbank">Bank Acount No</label>
          <input type="tel" id="nbank"/>
        </div>
            
        </form>
    </div>
  )
}

export default Form