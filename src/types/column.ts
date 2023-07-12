import { FoodDetail } from "./homepage";

export interface ICol extends FoodDetail {
  description: string;
  tags: string[];
}
