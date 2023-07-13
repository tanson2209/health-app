import FoodCard from "@/components/FoodCard";
import { useHompageListFood, useHompageSelector } from "@/store/homepage";
import { FoodDetail } from "@/types/homepage";
import React, { memo } from "react";

const ListFood = memo(() => {
  const listFood: FoodDetail[] = useHompageListFood();

  return (
    <div className="grid grid-cols-4 gap-2 w-full container">
      {listFood?.map((item, key) => (
        <FoodCard key={key} data={item} />
      ))}
    </div>
  );
});

export default ListFood;
