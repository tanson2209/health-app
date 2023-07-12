import FoodCard from "@/components/FoodCard";
import { FoodDetail } from "@/types/homepage";
import React, { memo } from "react";

const ListFood = memo(() => {
  const list: FoodDetail[] = [
    { titleBottom: "05.21.Dinner", img: "/images/food-banner.png" },
    { titleBottom: "05.21.Dinner", img: "/images/food-banner.png" },
    { titleBottom: "05.21.Dinner", img: "/images/food-banner.png" },
    { titleBottom: "05.21.Dinner", img: "/images/food-banner.png" },
    { titleBottom: "05.21.Dinner", img: "/images/food-banner.png" },
    { titleBottom: "05.21.Dinner", img: "/images/food-banner.png" },
    { titleBottom: "05.21.Dinner", img: "/images/food-banner.png" },
    { titleBottom: "05.21.Dinner", img: "/images/food-banner.png" },
  ];
  return (
    <div className="grid grid-cols-4 gap-2 w-full container">
      {list.map((item) => (
        <FoodCard data={item} />
      ))}
    </div>
  );
});

export default ListFood;
