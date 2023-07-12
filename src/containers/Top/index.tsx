import React, { memo } from "react";

import Banner from "./components/Banner";
import ListMeal from "./components/ListMeal";
import ListFood from "./components/ListFood";
import Button from "@/components/Button";

const HomepageDetail = memo(() => {
  return (
    <div className="flex flex-col w-1/1 items-center bg-white">
      <Banner />
      <ListMeal />
      <ListFood />
      <div className=" mt-7 mb-16">
        <Button title="記録をもっと見る" />
      </div>
    </div>
  );
});

export default HomepageDetail;
