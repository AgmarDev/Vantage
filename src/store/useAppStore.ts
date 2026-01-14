import { create } from "zustand";

interface AppState {
  isDemoMode: boolean;
  toggleDemoMode: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  isDemoMode: true,
  toggleDemoMode: () => set((state) => ({ isDemoMode: !state.isDemoMode })),
}));
