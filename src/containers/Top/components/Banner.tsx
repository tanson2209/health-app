import SampleLine from "@/components/Chart";
import Image from "next/image";
import React, { memo } from "react";
import { ApexOptions } from "apexcharts";

const Banner = memo(() => {
  const series: ApexOptions["series"] = [
    {
      name: "Desktops",
      data: [148, 80, 51, 49, 62, 69, 41, 35, 20],
    },
    {
      name: "Notebooks",
      data: [148, 91, 82, 75, 68, 47, 60, 49, 10],
    },
  ];
  const categories = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="flex w-full bg-dark-600 h-[316px]">
      <div className="w-[540px] h-[316px]">
        <Image
          src={"/images/food-banner.png"}
          alt=""
          width={540}
          height={316}
          className="object-cover h-[316px] fill-banner"
        />
      </div>
      <div className="w-[60%] h-[316px]">
        <SampleLine series={series} categories={categories} />
      </div>
    </div>
  );
});

export default Banner;
