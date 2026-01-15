"use client";
import { Summary } from "@/components/Summary/Summary";
import { GoalForm } from "@/components/GoalForm";
import { AssetList } from "@/components/AssetList";

export default function Home() {
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
          <AssetList />
        </section>
      </div>
    </main>
  );
}
