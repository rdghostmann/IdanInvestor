import React from 'react'

const BuySellSwap = () => {
  return (
    <div className="w-full lg:w-1/3 space-y-6 basis-0">
    <div className="mb-2 bg-white shadow-md p-4 rounded-lg">
      <div className="flex justify-around mb-6">
        <button className="text-purple-600 font-medium border-b-2 border-purple-600 pb-2">
          Buy
        </button>
        <button className="text-gray-500 pb-2">Sell</button>
        <button className="text-gray-500 pb-2">Convert</button>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold text-gray-800">$0</h2>
        <p className="text-gray-500 text-sm">You can buy up to $25,000</p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap justify-between items-center bg-gray-50 p-4 rounded-lg">
          <div className="w-full">
            <p className="text-sm text-gray-500">Buy</p>
            <select className="bg-transparent p-2 rounded w-full">
              <option>Ethereum</option>
              <option>Bitcoin</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center bg-gray-50 p-4 rounded-lg">
          <div className="w-full">
            <p className="text-sm text-gray-500">Pay with</p>
            <select className="bg-transparent p-2 rounded w-full">
              <option>PayPal</option>
              <option>Credit Card</option>
            </select>
          </div>
        </div>
      </div>

      {/* Buy Button */}
      <button className="w-full bg-purple-600 text-white font-medium py-3 rounded-lg mt-6">
        Buy
      </button>
    </div>

    {/* Recent Transactions */}
    <div className="my-6 bg-white shadow-md p-4 rounded-lg lg:mx-0">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-medium">Recent Transactions</h3>
        <button className="text-sm text-indigo-600">See all</button>
      </div>

      {/* Transactions List */}
      {/* <div className="mt-4 space-y-4 overflow-x-auto">
        <div className="flex items-center justify-between min-w-[320px]">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-green-100 p-2">
              <ArrowUpRight className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <p className="font-medium">Deposit Bitcoin</p>
              <p className="text-sm text-gray-500">Oct 1 2023, 8:00 AM</p>
            </div>
          </div>
          <p className="font-medium text-green-600">+0.00048724 BTC</p>
        </div>

        <div className="flex items-center justify-between min-w-[320px]">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-red-100 p-2">
              <ArrowUpRight className="h-4 w-4 rotate-45 text-red-600" />
            </div>
            <div>
              <p className="font-medium">Withdraw Ethereum</p>
              <p className="text-sm text-gray-500">Sep 20 2022, 2:23 PM</p>
            </div>
          </div>
          <p className="font-medium text-red-600">-0.02034675 ETH</p>
        </div>
      </div> */}
    </div>
  </div>
  )
}

export default BuySellSwap
