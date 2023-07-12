import Image from "next/image";
import React, { memo } from "react";

const Banner = memo(() => {
  return (
    <div className="flex w-full bg-slate-600 h-[316px]">
      <div className="w-[540px] h-[316px]">
        <Image
          src={"/images/food-banner.png"}
          alt=""
          width={540}
          height={316}
          className="object-cover h-[316px] fill-banner"
        />
      </div>
      <div className="w-[60%]">fafd</div>
    </div>
  );
});

export default Banner;
