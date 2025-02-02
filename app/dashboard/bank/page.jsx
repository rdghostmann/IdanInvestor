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
                    Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Bank</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="text-sm/5">
            <h2 className="text-purple-600 font-bold text-xl">Manage Bank</h2>
            <p className="text-slate-700">Manage Where your money goes to</p>
          </div>
          <div>
            <div className="max-w-3xl md:w-screen mx-auto overflow-x-scroll my-6 bg-white shadow-md p-4 rounded-lg  ">
              <table className="min-w-full">
                <thead>
                  <tr className="text-slate-600 text-sm/5">
                    <th>#</th>
                    <th>Coin</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>

                  </tr>
                </tbody>
              </table>
            </div>

            <div className="max-w-3xl md:w-screen mx-auto overflow-x-scroll my-6 bg-white shadow-md p-4 rounded-lg  ">
              <table className="min-w-full">
                <thead>
                  <tr className="text-slate-600 text-sm/5">
                    <th>#</th>
                    <th>Bank Name</th>
                    <th>Account Number</th>
                    <th>Account Name</th>
                    <th>Bank Address</th>
                    <th>Routing Number</th>
                    <th>Swift Code</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>

                  </tr>
                </tbody>
              </table>
            </div>


            <div className="mb-2 bg-white shadow-md p-4 rounded-lg">
              {/* Add Wallet Section */}
              <div className="space-y-4">
                {/* Add Wallet Option */}
                <div className="flex flex-wrap justify-between items-center bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">Add New Wallet</h3>
                  <div className="w-full">
                    <p className="text-sm text-gray-500">Select Crypto type:</p>
                    <select className="bg-transparent p-2 rounded w-full">
                      <option>Bitcoin</option>
                      <option>Ethereum</option>
                      <option>USDT</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-wrap justify-between items-center bg-gray-50 p-4 rounded-lg">
                  <div className="w-full">
                    <p className="text-sm text-gray-500">Amount:</p>
                    <input
                      placeholder="Enter Amount"
                      type="number"
                      className="bg-transparent p-2 rounded w-full"
                    />
                  </div>
                </div>

                <button className="w-full bg-purple-600 text-white font-medium py-3 rounded-lg mt-6">
                  Add Wallet
                </button>
              </div>

              {/* Add Bank Section */}
              <div className="space-y-4 mb-4">
                {/* Add Bank Option */}
                <div className="flex flex-wrap justify-between items-center bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">Add Bank Account</h3>
                  <div className="w-full">
                    <p className="text-sm text-gray-500">Bank Name:</p>
                    <input
                      placeholder="Enter Bank Name"
                      type="text"
                      className="bg-transparent p-2 rounded w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap justify-between items-center bg-gray-50 p-4 rounded-lg">
                  <div className="w-full">
                    <p className="text-sm text-gray-500">Account Number:</p>
                    <input
                      placeholder="Enter Account Number"
                      type="number"
                      className="bg-transparent p-2 rounded w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap justify-between items-center bg-gray-50 p-4 rounded-lg">
                  <div className="w-full">
                    <p className="text-sm text-gray-500">Account Name:</p>
                    <input
                      placeholder="Enter Account Name"
                      type="text"
                      className="bg-transparent p-2 rounded w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap justify-between items-center bg-gray-50 p-4 rounded-lg">
                  <div className="w-full">
                    <p className="text-sm text-gray-500">Bank Address:</p>
                    <input
                      placeholder="Enter Bank Address"
                      type="text"
                      className="bg-transparent p-2 rounded w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap justify-between items-center bg-gray-50 p-4 rounded-lg">
                  <div className="w-full">
                    <p className="text-sm text-gray-500">Routing No.:</p>
                    <input
                      placeholder="Enter Routing Number"
                      type="number"
                      className="bg-transparent p-2 rounded w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap justify-between items-center bg-gray-50 p-4 rounded-lg">
                  <div className="w-full">
                    <p className="text-sm text-gray-500">Swift Code:</p>
                    <input
                      placeholder="Enter Swift Code"
                      type="number"
                      className="bg-transparent p-2 rounded w-full"
                    />
                  </div>
                </div>

                <button className="w-full bg-purple-600 text-white font-medium py-3 rounded-lg mt-6">
                  Add Bank Account
                </button>
              </div>


            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>)
  );
}
