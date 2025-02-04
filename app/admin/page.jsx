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
                  <BreadcrumbPage>Admin ControlPanel</BreadcrumbPage>
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
        
        </div>
      </SidebarInset>
    </SidebarProvider>)
  );
}
