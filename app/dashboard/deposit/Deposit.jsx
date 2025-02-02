import { Label } from '@/components/ui/label'
import Image from 'next/image'
import React from 'react'


const Deposit = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="text-sm/5 mb-2 bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-purple-600 font-bold text-xl">Deposit Funds to Wallet </h2>
        <p className="text-slate-700">Top up your Account Balance Instantly</p>
      </div>

      <div className="w-full lg:w-1/3 space-y-6 basis-0">
        {/* Make Deposit */}
       
      </div>
    </div>
  )
}

export default Deposit

{/* Pay With */ }
{/* <div className="flex flex-wrap justify-between items-center bg-gray-50 p-4 rounded-lg">
  <div className="w-full">
    <p className="text-sm text-gray-500">Pay with:</p>
    <select className="bg-transparent p-2 rounded w-full">
      <option>PayPal</option>
      <option>Credit Card</option>
    </select>
  </div>
</div> */}