"use client";

import { Tooltip, TooltipProvider } from "@/components/ui/tooltip";
import { useUserStore } from "@/store/userStore";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";

export default function SessionProviderWrapper({ children, session }) {
  const { setSessionUser } = useUserStore(); // Zustand function to set user
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (session?.user) {
      setSessionUser(session.user); // Store session.user in Zustand
    }
    setInitialized(true);
  }, [session, setSessionUser]);
  
  if (!initialized) return null; // Prevents hydration mismatch

  return (
    <SessionProvider session={session}>
      <TooltipProvider>
        {children}
      </TooltipProvider>
    </SessionProvider>
  );
}
