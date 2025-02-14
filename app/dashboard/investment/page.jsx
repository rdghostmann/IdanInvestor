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

import { getUserFromSession, getUserBalance } from "@/lib/actions";
import { getServerSession } from "next-auth";

import InvestForm from "./InvestForm";
import Investment from "./Investment";

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
                    Investment & Desposit
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Investment</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="w-full flex flex-col gap-4 p-4 pt-0">
          <div className="text-sm/5 mb-2 bg-white p-3 shadow-md rounded-lg">
            <h2 className="text-purple-600 font-bold text-xl">Investment Plans</h2>
            <p className="text-slate-700">Investment that Guarantee Wealth</p>
          </div>
          <InvestForm user={user} balance={balance} />
        </div>
      </SidebarInset>
    </SidebarProvider>)
  );
}
