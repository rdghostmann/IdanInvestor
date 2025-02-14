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
import { ArrowUpRight } from "lucide-react";


import { getUserFromSession, getUserBalance } from "@/lib/actions";
import { getServerSession } from "next-auth";



export default async function Page() {
  const session = await getServerSession();
  if (!session?.user?.email) return <p>Please log in to invest.</p>;

  const user = await getUserFromSession();
  const { balance } = await getUserBalance(session.user.email);

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
                <p className="text-sm/8 text-gray-500">ACCOUNT BALANCE</p>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold md:text-3xl">${balance}</h2>
                  <span className="flex items-center text-sm text-green-500">
                    <ArrowUpRight className="h-4 w-4" />
                    1.25%
                  </span>
                </div>
              </div>
              <div className="flex-1 p-2 w-1/2 lg:px-2">
                <p className="text-sm/8 text-gray-500">TOTAL PROFIT</p>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold md:text-3xl">$7,472</h2>
                  <span className="flex items-center text-sm text-green-500">
                    <ArrowUpRight className="h-4 w-4" />
                    1.25%
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full mx-auto px-4">
              {/* Main Stats */}
              {/* <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-4 gap-4 mb-6">

                <div className="bg-gradient-to-tr from-[#525252] via-[#a3a3a3] to-[#e5e5e5] p-4 rounded-lg shadow">
                  <div className="gap-2 mb-4">
                    <div className="text-center">
                      <p className="text-lg/5 md:text-xl font-bold">$5789</p>
                      <p className="text-sm text-gray-600">Active Expenses</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-tr from-[#525252] via-[#a3a3a3] to-[#e5e5e5] p-4 rounded-lg shadow">
                  <div className="gap-2 mb-4">
                    <div className="text-center">
                      <p className="text-lg/5 md:text-xl font-bold">$2500</p>
                      <p className="text-sm text-gray-600">Earn Total</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-tr from-[#525252] via-[#a3a3a3] to-[#e5e5e5] p-4 rounded-lg shadow">
                  <div className="gap-2 mb-4">
                    <div className="text-center">
                      <p className="text-lg/5 md:text-xl font-bold">$7000</p>
                      <p className="text-sm text-gray-600">Total Deposit</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-tr from-[#525252] via-[#a3a3a3] to-[#e5e5e5] p-4 rounded-lg shadow">
                  <div className="gap-2 mb-4">
                    <div className="text-center">
                      <p className="text-lg/5 md:text-xl font-bold">$7000</p>
                      <p className="text-sm text-gray-600">Total Withdraw</p>
                    </div>
                  </div>
                </div>


              </div> */}
            </div>
            {/* <CryptoList /> */}

            {/* Portfolio Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-white shadow-md p-4 rounded-lg">
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
              <div className="bg-white shadow-md p-4 rounded-lg">
              </div>
            </div>



          </div>


        </div>
      </SidebarInset>
    </SidebarProvider>)
  );
}
