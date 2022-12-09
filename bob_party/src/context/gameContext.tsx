import React from "react";
import create from "zustand";
import { MANAGER_USER } from "../../App";
import tabSkinApp from "../constSkin";
import { Game } from "../core/game";
import { Skin } from "../core/Skin";
import { User } from "../core/User/user";


// Define store types
interface GameState {
    tabGame: Game[] | undefined;
    setTabGame: (tabGame: Game[]) => void;
    resetTabGame: () => void;
  }

// Define store data and methods
export const useGameStore = create<GameState>()((set, get) => ({
    tabGame: undefined,
    setTabGame: (tabGame) => set((state) => ({ tabGame: tabGame })),
    resetTabGame: () => set((state) => ({ tabGame: undefined })),
}));

