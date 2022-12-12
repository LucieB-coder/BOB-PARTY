import create from "zustand";
import { Game } from "../core/game";



// Define store types
interface GameState {
    tabGame: Game[] | undefined;
    setTabGame: (tabGame: Game[]) => void;
    resetTabGame: () => void;
    tabGameSolo: Game[] | undefined;
    setTabGameSolo: (tabGame: Game[]) => void;
    resetTabGameSolo: () => void;
    tabGameMulti: Game[] | undefined;
    setTabGameMulti: (tabGame: Game[]) => void;
    resetTabGameMulti: () => void;
  }

// Define store data and methods
export const useGameStore = create<GameState>()((set, get) => ({
    tabGame: undefined,
    setTabGame: (tabGame) => set((state) => ({ tabGame: tabGame })),
    resetTabGame: () => set((state) => ({ tabGame: undefined })),
    tabGameSolo: undefined,
    setTabGameSolo: (tabGame) => set((state) => ({ tabGameSolo: tabGame })),
    resetTabGameSolo: () => set((state) => ({ tabGameSolo: undefined })),
    tabGameMulti: undefined,
    setTabGameMulti: (tabGame) => set((state) => ({ tabGameMulti: tabGame })),
    resetTabGameMulti: () => set((state) => ({ tabGameMulti: undefined })),
}));

