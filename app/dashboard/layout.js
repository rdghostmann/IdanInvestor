import { Inter } from "next/font/google";
import { Suspense } from "react";
import SessionProviderWrapper from "../SessionProviderWrapper";
import Loading from "../loading";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Investor5",
  description: "Generated by create next app",
};

export default async function DashboardLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={inter.className} suppressHydrationWarning>
        {/* <Suspense fallback={<Loading />}> */}
          <SessionProviderWrapper suppressHydrationWarning>{children}</SessionProviderWrapper>
        {/* </Suspense> */}
      </body>
    </html>
  );
}
