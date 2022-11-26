import React from "react";
import create from "zustand";
import { MANAGER_USER } from "../../App";
import { Conversation } from "../core/conversation";


// Define store types
interface ConversationState {
    tabConv: Conversation[] | undefined;
    setTabConv: (tabConv: Conversation[]) => void;
    resetTabConv: () => void;
  }

// Define store data and methods
export const useConversationStore = create<ConversationState>()((set, get) => ({
    tabConv: undefined,
    setTabConv: (tabConv) => set((state) => ({ tabConv: tabConv })),
    resetTabConv: () => set((state) => ({tabConv: undefined})),
}));

