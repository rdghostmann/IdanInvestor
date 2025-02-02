"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function LogOutBtn() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false }); // Prevent NextAuth default redirection
    router.push("/login"); // Manually redirect to login page
  };

  return (
    <Button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded">
      Logout
    </Button>
  );
}
