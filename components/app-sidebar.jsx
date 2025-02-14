"use client"

import * as React from "react"
import {
  ArrowDownFromLine,
  ArrowDownToLine,
  BookOpen,
  Bot,
  ChartNoAxesCombined,
  CircleDollarSign,
  Coins,
  Command,
  CreditCard,
  Frame,
  HandCoins,
  IdCard,
  Landmark,
  LayoutDashboard,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareMenu,
  SquareTerminal,
  TvMinimal,
  Users,
  Wallet,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"


const data = {
  navMain: [
   
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      url: "/dashboard",
      isActive: true,
    },
    {
      title: "Make Deposit",
      icon: ArrowDownToLine,
      url: "/dashboard/deposit",
    },
    {
      title: "Deposit History",
      icon: TvMinimal,
      url: "/dashboard/desposit-history",
    },
    {
      title: "Investment",
      icon: CircleDollarSign,
      url: "/dashboard/investment",
    },
    {
      title: "Investment History",
      icon: ChartNoAxesCombined,
      url: "/dashboard/investment-history",
    },
    {
      title: "Withdraw Funds",
      icon: HandCoins,
      url: "/dashboard/withdraw",
    },
    {
      title: "Withdraw History",
      icon: SquareMenu,
      url: "/dashboard/withdraw-history",
    },
    {
      title: "Manage Assets",
      icon: Wallet,
      url: "/dashboard/manage-wallet",
    },
    {
      title: "Manage KYC",
      icon: IdCard,
      url: "/dashboard/kyc",
    },
    {
      title: "Manage Accounts",
      icon: Users,
      url: "/dashboard/accounts",
    },
    {
      title: "Manage Bank",
      icon: Landmark,
      url: "/dashboard/bank",
    },
    {
      title: "Manage Cards",
      icon: CreditCard,
      url: "/dashboard/cards",
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],

}

export function AppSidebar({
  ...props
}) {
  return (
    (<Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/dashboard">
                <div
                  className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">InvestJar</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser  />
      </SidebarFooter>
    </Sidebar>)
  );
}
