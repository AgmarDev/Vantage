"use client";
import { useMemo } from "react";
import { useAssetStore } from "@/store/useAssetStore";
import type { Asset } from "@/store/useAssetStore";

export const Summary = () => {
  const assets = useAssetStore((state) => state.assets);
  const totalAmount = useMemo(() => {
    return assets.reduce((acc: number, asset: Asset) => {
      return acc + asset.amount;
    }, 0);
  }, [assets]);
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl mb-6 my-5">
      <h2 className="text-slate-400 text-sm uppercase tracking-wider">
        Total Strategic Value
      </h2>
      <p className="text-3xl font-bold text-blue-500">
        ${totalAmount.toLocaleString()}
      </p>
      <p className="text-slate-500 text-xs mt-1 font-mono italic">
        Assets tracked: {assets.length}
      </p>
    </div>
  );
};
