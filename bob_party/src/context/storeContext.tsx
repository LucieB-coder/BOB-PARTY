import React from "react";
import create from "zustand";
import { MANAGER_SKIN } from "../../appManagers";
import { Skin } from "../core/Skin";
import { User } from "../core/User/user";


// Define store types
interface SkinState {
    tabSkin: Skin[] | null;
    setTabSkin: (tabSkin: Skin[]) => void;
    resetTabSkin: () => void;
  }

// Define store data and methods
export const useSkinStore = create<SkinState>()((set, get) => ({
    tabSkin: [],
    setTabSkin: (tabSkin) => set((state) => ({ tabSkin: tabSkin })),
    resetTabSkin: () => set((state) => ({ tabSkin: [] })),
}));

