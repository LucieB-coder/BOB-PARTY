import React from "react";
import create from "zustand";
import { User } from "../core/User/user";


// Define store types
interface UserState {
    user: User | null;
    setUser: (user: User|null) => void;
    resetUser: () => void;
  }

// Define store data and methods
export const useUserStore = create<UserState>()((set, get) => ({
    user: null,
    setUser: (user) => set((state) => ({ user: user })),
    resetUser: () => set((state) => ({ user: null })),
}));
