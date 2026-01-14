import { create } from "zustand";
import { AssetCategory } from "@/types/goals";
import { persist } from "zustand/middleware";
import { arrayMove } from "@dnd-kit/sortable"; // Не забудь цей імпорт

export interface Asset {
  id: string;
  title: string;
  amount: number;
  category: AssetCategory;
}

interface AssetStore {
  assets: Asset[];
  addAsset: (asset: Asset) => void;
  removeAsset: (id: string) => void;
  reorderAssets: (activeId: string, overId: string) => void; // Тепер тут void
}

export const useAssetStore = create<AssetStore>()(
  persist(
    (set) => ({
      assets: [],

      addAsset: (newAsset) =>
        set((state) => ({
          assets: [...state.assets, newAsset],
        })),

      removeAsset: (id) =>
        set((state) => ({
          assets: state.assets.filter((asset) => asset.id !== id),
        })),

      // Додаємо реалізацію методу перетягування
      reorderAssets: (activeId, overId) =>
        set((state) => {
          const oldIndex = state.assets.findIndex((a) => a.id === activeId);
          const newIndex = state.assets.findIndex((a) => a.id === overId);

          return {
            assets: arrayMove(state.assets, oldIndex, newIndex),
          };
        }),
    }),
    {
      name: "vantage-storage",
    }
  )
);
