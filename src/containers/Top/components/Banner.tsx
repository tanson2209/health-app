import SampleLine from "@/components/Chart";
import Image from "next/image";
import React, { memo } from "react";
import { ApexOptions } from "apexcharts";
import { Progress, Space } from "antd";

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
  const categoriesWithTime = categories.map((item) => {
    return `${item}月`;
  });
  return (
    <div className="flex w-full bg-dark-600 h-[316px]">
      <div className="w-[40%] relative">
        <Image
          src={"/images/food-banner.png"}
          alt=""
          fill
          className="object-cover h-[316px] fill-banner"
        />
        <div className="absolute top-0 w-full h-full">
          <Space wrap className="flex justify-center items-center h-full">
            <Progress
              type="circle"
              strokeColor="white"
              trailColor="transparent"
              percent={75}
              size={200}
              showInfo={false}
              strokeWidth={1}
            />
          </Space>
        </div>
        <div className="absolute top-0 w-full h-full">
          <div className="flex justify-center items-center h-full">
            <div className="text-white text-lg">
              05/21 <span className="text-3xl">75%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[60%] h-[316px]">
        <SampleLine series={series} categories={categoriesWithTime} />
      </div>
    </div>
  );
});

export default Banner;
