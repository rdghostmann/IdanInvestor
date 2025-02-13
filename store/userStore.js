import { create } from "zustand";
import { persist } from "zustand/middleware";
import { shallow } from "zustand/shallow"; // Prevent unnecessary re-renders

export const useUserStore = create(
  persist(
    (set) => ({
      sessionUser: null, // Stores session.user
      balance: 0, // Stores user's wallet balance

      setSessionUser: (user) => set({ sessionUser: user }),
      setBalance: (balance) => set({ balance }),

      clearUser: () => set({ sessionUser: null, balance: 0 }), // Logout/reset state
    }),
    { name: "user-store" } // Persist user session in localStorage
  )
);
