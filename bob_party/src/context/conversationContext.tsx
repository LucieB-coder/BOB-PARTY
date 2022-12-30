import React from "react";
import create from "zustand";
import { Conversation } from "../core/conversation";


// Define store types
interface ConversationState {
    tabConv: Conversation[] | null;
    currentConv: Conversation | null;
    setTabConv: (tabConv: Conversation[]) => void;
    resetTabConv: () => void;
    setCurrentConv: (currentConv: Conversation | null) => void;
    resetCurrentConv: () => void;
  }

// Define store data and methods
export const useConversationStore = create<ConversationState>()((set) => ({
    tabConv: null,
    currentConv: null,
    setTabConv: (tabConv) => set((state) => ({ tabConv: tabConv })),
    resetTabConv: () => set((state) => ({tabConv: null})),
    setCurrentConv: (currentConv) => set((state) => ({ currentConv: currentConv })),
    resetCurrentConv: () => set((state) => ({currentConv: null})),
}));

