"use client";
import {
  DndContext,
  closestCenter,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useAssetStore } from "@/store/useAssetStore";
import { SortableAssetItem } from "./SortableAssetItem";

export function AssetList() {
  const { assets, removeAsset, reorderAssets } = useAssetStore();

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      reorderAssets(active.id as string, over.id as string);
    }
  };

  if (assets.length === 0) {
    return (
      <div className="p-8 border-2 border-dashed border-slate-800 rounded-xl text-center text-slate-500">
        No assets tracked yet. Start by adding one above.
      </div>
    );
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={assets} strategy={verticalListSortingStrategy}>
        <div className="grid gap-3">
          {assets.map((asset) => (
            <SortableAssetItem key={asset.id} id={asset.id}>
              <div className="flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors cursor-grab active:cursor-grabbing">
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
                    onClick={(e) => {
                      e.stopPropagation();
                      removeAsset(asset.id);
                    }}
                    className="text-slate-600 hover:text-red-500 transition-colors p-1"
                  >
                    ✕
                  </button>
                </div>
              </div>
            </SortableAssetItem>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
