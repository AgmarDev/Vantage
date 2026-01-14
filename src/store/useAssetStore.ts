import { create } from "zustand";
import { AssetCategory, PriorityLevel } from "@/types/goals";

interface Asset {
  id: string;
  title: string;
  amount: number;
  category: AssetCategory;
}

interface AssetStore {
  assets: Asset[];
  addAsset: (asset: Asset) => void;
  removeAsset: (id: string) => void;
}

export const useAssetStore = create<AssetStore>((set) => ({
  assets: [],

  addAsset: (newAsset) =>
    set((state) => ({
      assets: [...state.assets, newAsset],
    })),

  removeAsset: (id) =>
    set((state) => ({
      assets: state.assets.filter((asset) => asset.id !== id),
    })),
}));
