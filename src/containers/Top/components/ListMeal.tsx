import Hex from "@/components/Hex";
import Image from "next/image";
import React, { memo } from "react";

const ListMeal = memo(() => {
  const list = [
    { title: "Morning", icon: "/svgs/icon-1.svg" },
    { title: "Lunch", icon: "/svgs/icon-1.svg" },
    { title: "Dinner", icon: "/svgs/icon-1.svg" },
    { title: "Snack", icon: "/svgs/icon-2.svg" },
  ];
  return (
    <div className="my-7 grid grid-cols-4 gap-16">
      {list.map((item, key) => (
        <div className="relative" key={key}>
          <Image src="/svgs/hex.svg" alt="" width={136} height={136} />
          <div className="absolute top-0 w-full h-full">
            <div className="flex flex-col justify-center items-center w-full h-full">
              <Image src={item.icon} alt="" width={56} height={56} />
              <div className="text-xl mt-2">{item.title}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

export default ListMeal;
