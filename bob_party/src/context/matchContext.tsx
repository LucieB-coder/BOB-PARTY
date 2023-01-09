import React from "react";
import create from "zustand";
import { Match } from "../core/Match/match";
import { User } from "../core/User/user";


// Define store types
interface MatchState {
    match: Match | null;
    tabUser: any[];
    setMatch: (match: Match|null) => void;
    resetMatch: () => void;
    setTabUser: (tabUser: any[]) => void;
    resetTabUser: () => void;
  }

// Define store data and methods
export const useMatchStore = create<MatchState>()((set, get) => ({
    match: null,
    tabUser: [],
    setMatch: (match) => set((state) => ({ match: match })),
    resetMatch: () => set((state) => ({ match: null })),
    setTabUser: (tabUser) => set((state) => ({ tabUser: tabUser })),
    resetTabUser: () => set((state) => ({ tabUser: [] })),
}));
