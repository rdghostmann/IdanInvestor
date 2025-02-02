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
                  <BreadcrumbPage>KYC Verification</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="text-sm/5 mb-2 bg-white shadow-md p-4 rounded-lg">
            <h2 className="text-purple-600 font-bold text-xl">KYC Verification</h2>
            <p className="text-slate-700">Complete KYC Verification</p>
          </div>

        
          <div className="w-full lg:w-1/3 space-y-6 my-2 basis-0">
            <h3 className="px-4 text-lg font-semibold">Upload Valid Identification</h3>
            <div className="mb-2 bg-white shadow-md p-4 rounded-lg">
              <div className="space-y-4">
               
                <div className="flex flex-wrap justify-between items-center bg-gray-50 p-4 rounded-lg">
                  <div className="w-full">
                    <p className="text-sm text-gray-500">Identification Type:</p>
                    <select className="bg-transparent p-2 rounded w-full">
                      <option>International Passport</option>
                      <option>Driver's License</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-wrap justify-between items-center bg-gray-50 p-4 rounded-lg">
                  <div className="w-full">
                    <p className="text-sm text-gray-500">Identity Front:</p>
                    <input
                      type="file"
                      className="bg-transparent p-2 rounded w-full"
                      disabled
                    />
                  </div>
                </div>
                <div className="flex flex-wrap justify-between items-center bg-gray-50 p-4 rounded-lg">
                  <div className="w-full">
                    <p className="text-sm text-gray-500">Identity Back:</p>
                    <input
                      type="file"
                      className="bg-transparent p-2 rounded w-full"
                      disabled
                    />
                  </div>
                </div>
                
              </div>

              <button className="w-full bg-purple-600 text-white font-medium py-3 rounded-lg mt-6">
                Upload
              </button>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>)
  );
}
