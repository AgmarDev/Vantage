import { z } from "zod";

export const assetSchema = z.object({
  title: z.string().min(3, "Название слишком короткое"),
  amount: z.number().positive("Сумма должна быть больше нуля"),
  category: z.enum([
    "Transport",
    "Real Estate",
    "Security",
    "Relocation",
    "Investment",
  ]),
  priority: z.enum(["low", "medium", "high", "critical"]),
});
