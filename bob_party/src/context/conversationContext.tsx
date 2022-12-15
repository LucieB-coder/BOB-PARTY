import React from "react";
import create from "zustand";
import { Conversation } from "../core/conversation";


// Define store types
interface ConversationState {
    tabConv: Conversation[] | null;
    setTabConv: (tabConv: Conversation[]) => void;
    resetTabConv: () => void;
  }

// Define store data and methods
export const useConversationStore = create<ConversationState>()((set, get) => ({
    tabConv: null,
    setTabConv: (tabConv) => set((state) => ({ tabConv: tabConv })),
    resetTabConv: () => set((state) => ({tabConv: null})),
}));

