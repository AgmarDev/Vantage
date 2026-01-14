"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAssetStore } from "@/store/useAssetStore";
import {
  assetSchema,
  type AssetFormValues,
} from "@/lib/validations/assetSchema";

export const GoalForm = () => {
  const addAsset = useAssetStore((state) => state.addAsset);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AssetFormValues>({
    resolver: zodResolver(assetSchema),
    defaultValues: {
      amount: 0,
    },
  });

  const onSubmit = (data: AssetFormValues) => {
    addAsset({
      ...data,
      id: crypto.randomUUID(),
    });

    console.log("Asset successfully added!");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-6 bg-slate-900 rounded-xl border border-slate-800"
    >
      <div>
        <label className="block text-sm font-medium mb-1 text-slate-300">
          Target Title
        </label>
        <input
          {...register("title")}
          className="w-full bg-slate-800 border border-slate-700 rounded p-2 outline-none focus:border-blue-500"
          placeholder="e.g. Relocation Fund"
        />
        {errors.title && (
          <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-300">
            Amount (USD)
          </label>
          <input
            type="number"
            {...register("amount", { valueAsNumber: true })}
            className="w-full bg-slate-800 border border-slate-700 rounded p-2 outline-none focus:border-blue-500"
          />
          {errors.amount && (
            <p className="text-red-500 text-xs mt-1">{errors.amount.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-slate-300">
            Category
          </label>
          <select
            {...register("category")}
            className="w-full bg-slate-800 border border-slate-700 rounded p-2 outline-none focus:border-blue-500"
          >
            <option value="Transport">Transport</option>
            <option value="Relocation">Relocation</option>
            <option value="Security">Security</option>
            <option value="Investment">Investment</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all active:scale-95"
      >
        Add to Strategy
      </button>
    </form>
  );
};
