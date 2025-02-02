import { Inter } from "next/font/google";
import SessionProviderWrapper from "./SessionProviderWrapper";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Investor5",
  description: "Generated by create next app",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProviderWrapper>{children}</SessionProviderWrapper>
      </body>
    </html>
  );
}
