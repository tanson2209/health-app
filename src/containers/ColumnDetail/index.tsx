import React, { memo, useEffect } from "react";
import ListRecommended from "./components/ListRecommended";
import ListFoodCard from "./components/ListFoodCard";
import Button from "@/components/Button";
import { ICol } from "@/types/column";
import { useColumnAction } from "@/store/column";
import ScrollTop from "@/components/ScrollTop";
import { getDataListFoodCard } from "@/services/column";

const ColumnDetail = memo(() => {
  const { addDataFoodList } = useColumnAction();

  const onClickGetData = async (first?: boolean) => {
    //call api to get data

    const mockData: ICol[] = await getDataListFoodCard();
    addDataFoodList(mockData, first);
  };

  useEffect(() => {
    onClickGetData(true);
  }, []);

  return (
    <div className="flex flex-col w-full items-center  justify-center my-14 space-y-14 bg-white">
      <ListRecommended />
      <ListFoodCard />
      <div className=" mt-7 mb-16">
        <Button title="コラムをもっと見る" onClick={() => onClickGetData()} />
      </div>
      <ScrollTop />
    </div>
  );
});

export default ColumnDetail;
