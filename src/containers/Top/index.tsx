import React, { memo, useEffect } from "react";

import Banner from "./components/Banner";
import ListMeal from "./components/ListMeal";
import ListFood from "./components/ListFood";
import Button from "@/components/Button";
import { useHompageAction } from "@/store/homepage";
import { FoodDetail } from "@/types/homepage";
import ScrollTop from "@/components/ScrollTop";
import { getDataListHomepage } from "@/services/homepage-api";

const HomepageDetail = memo(() => {
  const { addDataFoodList } = useHompageAction();

  const onClickGetData = async (first?: boolean) => {
    //call api to get data

    const mockData: FoodDetail[] = await getDataListHomepage();
    addDataFoodList(mockData, first);
  };

  useEffect(() => {
    onClickGetData(true);
  }, []);

  return (
    <div className="flex flex-col w-1/1 items-center bg-white">
      <Banner />
      <ListMeal />
      <ListFood />
      <div className=" mt-7 mb-16">
        <Button title="記録をもっと見る" onClick={() => onClickGetData()} />
      </div>
      <ScrollTop />
    </div>
  );
});

export default HomepageDetail;
