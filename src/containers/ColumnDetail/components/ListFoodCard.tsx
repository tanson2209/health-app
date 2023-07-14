import ColCard from "@/components/ColCard";
import FoodCard from "@/components/FoodCard";
import { useColumnListFood } from "@/store/column";
import { ICol } from "@/types/column";
import React, { memo } from "react";

const ListFoodCard = memo(() => {
  const listFood: ICol[] = useColumnListFood();

  return (
    <div className="grid grid-cols-4 gap-x-2 gap-y-8 w-full container">
      {listFood.map((item, key) => (
        <ColCard item={item} key={`${"col"}-${key}`} />
      ))}
    </div>
  );
});

export default ListFoodCard;
