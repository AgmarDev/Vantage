export type AssetCategory =
  | "Transport"
  | "Real Estate"
  | "Security"
  | "Relocation"
  | "Investment";
export type PriorityLevel = "low" | "medium" | "high" | "critical";

export interface FinancialGoal {
  id: string;
  title: string;
  category: AssetCategory;
  targetAmount: number;
  priority: PriorityLevel;
}
