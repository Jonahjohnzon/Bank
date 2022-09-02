import React from 'react'

const Fifth = () => {
  return (
    <div className='flex w-full justify-center text-lg my-10'>
    <div>
        <div className='mb-3'>Loan amounts range between $200 to $30,000 with repayment periods from 61 days to 18 months  (APRs from 5% to 10.15%)</div>
        <div className=' text-xl font-semibold mb-3'>An example of a Heritage loan</div>
        <ul>
            <li className='mb-2'>Borrow $1,000 over 3 months</li>
            <li className='mb-2'>Interest (total cost of the loan): $101.5 (10.15% rate)</li>
            <li className='mb-2'>Three monthly repayments: $304.5</li>
            <li className='mb-2'>Total amount payable: $1304.5</li>
        </ul>
        </div>
    </div>
  )
}

export default Fifth