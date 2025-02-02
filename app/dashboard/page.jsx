import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Watchlist from "./_components/WatchList/WatchList";
import { ArrowUpRight } from "lucide-react";

export default function Page() {
  return (
    (<SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    InvestJar
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        {/* Left Section */}
        <div className="flex-1 space-y-6 basis-0">
            {/* Portfolio Overview */}
            <div className="flex justify-between bg-white shadow-md p-4 rounded-lg">
              <div className="border-r-2 flex-1 p-2 w-1/2 lg:px-2">
                <p className="text-sm/8 text-gray-500">WALLET BALANCE</p>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold md:text-3xl">$5,260</h2>
                  {/* <span className="flex items-center text-sm text-green-500">
                <ArrowUpRight className="h-4 w-4" />
                1.25%
              </span> */}
                </div>
              </div>
              <div className="flex-1 p-2 w-1/2 lg:px-2">
                <p className="text-sm/8 text-gray-500">VOLUME (24H)</p>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold md:text-3xl">$7,472</h2>
                  {/* <span className="flex items-center text-sm text-green-500">
                <ArrowUpRight className="h-4 w-4" />
                1.25%
              </span> */}
                </div>
              </div>
            </div>

            {/* Portfolio Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-white shadow-md p-4 rounded-lg">
              <div className="bg-white p-4">
                <div className="flex flex-wrap justify-between items-center mb-4">
                  <h3 className="font-semibold text-gray-800">Portfolio Stats</h3>
                  <div className="flex items-center space-x-2">
                    <button className="bg-gray-100 px-3 py-1 rounded text-sm">
                      Bitcoin
                    </button>
                    <button className="bg-gray-100 px-3 py-1 rounded text-sm">
                      Weekly
                    </button>
                  </div>
                </div>
                <div className="h-fit bg-gray-50 rounded-lg flex items-center justify-center">
                  {/* Replace with graph component */}
                  <span className="text-gray-400">Graph Placeholder</span>
                </div>
              </div>
              <div className="bg-white shadow-md p-4 rounded-lg">
                {/* Watchlist */}
                {/* <Watchlist /> */}
              </div>
            </div>

            {/* My Portfolio */}
            <div className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-4">My Portfolio</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 rounded-full bg-purple-500"></div>
                    <div>
                      <p className="font-semibold text-gray-800">Ethereum (ETH)</p>
                      <p className="text-gray-500 text-sm">46%</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-800">0.124567 ETH</p>
                    <p className="text-green-500 text-sm">+0.25%</p>
                  </div>
                </div>
                <div className="flex flex-wrap justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                    <div>
                      <p className="font-semibold text-gray-800">XRP</p>
                      <p className="text-gray-500 text-sm">24%</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-800">0.6567 XRP</p>
                    <p className="text-red-500 text-sm">-0.19%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
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
          <div className="w-full mx-auto px-4">
            {/* Main Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Activity Statistics */}
              <div className="bg-white rounded-lg p-4 shadow">
                <h3 className="text-gray-600 font-semibold mb-4">Activity Statistics</h3>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">43</div>
                    <div className="text-xs text-gray-500">This month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">77</div>
                    <div className="text-xs text-gray-500">Jan 2023</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">61</div>
                    <div className="text-xs text-gray-500">Jan 2022</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-customPurple p-2 rounded">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Total Activities</div>
                    <div className="text-xl font-bold">724</div>
                  </div>
                </div>
              </div>

              {/* Expense Statistics */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-gray-600 font-semibold mb-4">Expense Statistics</h2>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold">$0</p>
                    <p className="text-xs text-gray-500">This month</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">$0</p>
                    <p className="text-xs text-gray-500">Jan 2023</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">$0</p>
                    <p className="text-xs text-gray-500">Jan 2022</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-customPurple p-2 rounded mr-2">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Expenses</p>
                    <p className="text-xl font-bold">$0</p>
                  </div>
                </div>
              </div>

              {/* Income Statistics */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-gray-600 font-semibold mb-4">Income Statistics</h2>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold">$8</p>
                    <p className="text-xs text-gray-500">This month</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">$17</p>
                    <p className="text-xs text-gray-500">Jan 2023</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">$200</p>
                    <p className="text-xs text-gray-500">Jan 2022</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-customPurple p-2 rounded mr-2">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Incomes</p>
                    <p className="text-xl font-bold">$217</p>
                  </div>
                </div>
              </div>
            </div>



            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Income vs Expenses Chart */}
              <div className="bg-white rounded-lg p-4 shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-600">Incomes vs Expenses</h3>
                  <div className="flex items-center space-x-2">
                    <button className="px-3 py-1 rounded bg-customPurple text-white text-sm">2025</button>
                  </div>
                </div>
                {/* <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={incomeExpenseData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="income" stackId="1" stroke="#7474BA" fill="#7474BA" fillOpacity={0.5} />
                      <Area type="monotone" dataKey="expenses" stackId="2" stroke="#5235E8" fill="#5235E8" fillOpacity={0.3} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div> */}
              </div>

              {/* Activities Chart */}
              <div className="bg-white rounded-lg p-4 shadow">
                <h3 className="text-gray-600 mb-4">Activities in this week</h3>
                <div className="h-[300px]">
                  {/* <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={activityData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="activities" className='bg-customPurple' fill="#5235E8" />
                    </BarChart>
                  </ResponsiveContainer> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>)
  );
}
