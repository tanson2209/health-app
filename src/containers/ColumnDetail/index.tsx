import React, { memo } from "react";
import ListRecommended from "./components/ListRecommended";
import ListFoodCard from "./components/ListFoodCard";
import Button from "@/components/Button";

const ColumnDetail = memo(() => {
  return (
    <div className="flex flex-col w-full items-center  justify-center my-14 space-y-14 bg-white">
      <ListRecommended />
      <ListFoodCard />
      <div className=" mt-7 mb-16">
        <Button title="コラムをもっと見る" />
      </div>
    </div>
  );
});

export default ColumnDetail;
