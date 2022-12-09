import React from "react";
import create from "zustand";
import { Match } from "../core/Match/match";


// Define store types
interface MatchState {
    match: Match | null;
    setMatch: (match: Match|null) => void;
    resetMatch: () => void;
  }

// Define store data and methods
export const useMatchStore = create<MatchState>()((set, get) => ({
    match: null,
    setMatch: (match) => set((state) => ({ match: match })),
    resetMatch: () => set((state) => ({ match: null })),
}));
