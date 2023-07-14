import SampleLine from "@/components/Chart";
import React, { memo, useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import ButtonTime from "@/components/ButtonTime";
import { randomInt } from "crypto";

const BodyRecord = memo(() => {
  const [series, setSeries] = useState<ApexOptions["series"]>([
    {
      name: "Desktops",
      data: [148, 80, 51, 49, 62, 69, 41, 35, 20],
    },
    {
      name: "Notebooks",
      data: [148, 91, 82, 75, 68, 47, 60, 49, 10],
    },
  ]);
  const categories = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [active, setActive] = useState<string>("日");

  const categoriesWithTime = categories.map((item) => {
    return `${item}${active}`;
  });

  useEffect(() => {
    const randomInt = Math.floor(Math.random() * (60 - 30 + 1)) + 30;
    const randomInt2 = Math.floor(Math.random() * (65 - 30 + 1)) + 30;

    //const data =  getApiSerirs()
    setSeries([
      {
        name: "Desktops",
        data: [148, 80, 51, randomInt2, 55, randomInt, 49, 35, 20],
      },
      {
        name: "Notebooks",
        data: [148, 91, 82, 60, randomInt, randomInt2, 60, 49, 10],
      },
    ]);
  }, [active]);

  const time = ["日", "週", "月", "年"];

  return (
    <div className="w-full container flex justify-center">
      <div className="w-full bg-dark-600 py-4 px-6">
        <div className="flex items-center">
          <div className="mr-4">
            MY <br></br> RECORD
          </div>
          <div className="text-xl">2021.05.21</div>
        </div>
        <SampleLine series={series} categories={categoriesWithTime} />
        <div className="flex">
          {time.map((item, key) => (
            <ButtonTime
              onClick={() => {
                setActive(item);
              }}
              key={`${"btnt"}-${key}`}
              title={item}
              active={item === active}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default BodyRecord;
