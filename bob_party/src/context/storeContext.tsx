import React from "react";
import create from "zustand";
import { MANAGER_USER } from "../../App";
import tabSkinApp from "../constSkin";
import { Skin } from "../core/Skin";
import { User } from "../core/User/user";


// Define store types
interface StoreState {
    tabSkin: Skin[];
    setTabSkin: (tabSkin: Skin[]) => void;
    resetTabSkin: () => void;
  }

// Define store data and methods
export const useStoreStore = create<StoreState>()((set, get) => ({
    tabSkin: tabSkinApp,
    setTabSkin: (tabSkin) => set((state) => ({ tabSkin: tabSkin })),
    resetTabSkin: () => set((state) => ({ tabSkin: tabSkinApp })),
}));

