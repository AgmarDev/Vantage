"use client";

import { Summary } from "@/components/Summary";
import { GoalForm } from "@/components/GoalForm";
import { useAssetStore } from "@/store/useAssetStore";

export default function Home() {
  const assets = useAssetStore((state) => state.assets);
  const removeAsset = useAssetStore((state) => state.removeAsset);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 p-4 md:p-12">
      <div className="max-w-2xl mx-auto space-y-8">
        <header className="border-b border-slate-800 pb-6">
          <h1 className="text-3xl font-bold tracking-tight text-blue-500">
            Vantage{" "}
            <span className="text-slate-500 text-lg font-light">
              | Control Panel
            </span>
          </h1>
          <p className="text-slate-400 mt-2">
            Manage your strategic assets and goals.
          </p>
        </header>

        <section>
          <GoalForm />
          <Summary />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-300">
            Active Assets
          </h2>

          {assets.length === 0 ? (
            <div className="p-8 border-2 border-dashed border-slate-800 rounded-xl text-center text-slate-500">
              No assets tracked yet. Start by adding one above.
            </div>
          ) : (
            <div className="grid gap-3">
              {assets.map((asset) => (
                <div
                  key={asset.id}
                  className="flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors"
                >
                  <div>
                    <h3 className="font-bold text-slate-100">{asset.title}</h3>
                    <span className="text-xs px-2 py-0.5 bg-slate-800 text-slate-400 rounded-full">
                      {asset.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="font-mono text-blue-400 font-bold text-lg">
                      ${asset.amount.toLocaleString()}
                    </span>
                    <button
                      onClick={() => removeAsset(asset.id)}
                      className="text-slate-600 hover:text-red-500 transition-colors p-1"
                      title="Delete asset"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
