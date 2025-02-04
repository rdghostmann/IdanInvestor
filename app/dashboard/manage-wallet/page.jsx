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
<<<<<<< HEAD
import { ManageWallet } from "../_components/ManageWallet/ManageWallet";
=======
import { ManageWallet } from "@/components/manage-wallet"
>>>>>>> fe0d724dda18327d7901e4c41299fcae34f0d95f

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
                  <BreadcrumbPage>Manage Wallet</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="text-sm/5">
<<<<<<< HEAD
            <h2>Manage Wallet</h2>
            <p>Manage Where your money goes to</p>
=======
          <h2>Manage Wallet</h2>
          <p>Manage Where your money goes to</p>
          </div>
          <div>
            <ManageWallet />
>>>>>>> fe0d724dda18327d7901e4c41299fcae34f0d95f
          </div>
          <ManageWallet />
        </div>
      </SidebarInset>
    </SidebarProvider>)
  );
}
