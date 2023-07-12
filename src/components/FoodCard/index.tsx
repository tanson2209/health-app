import { FoodDetail } from "@/types/homepage";
import Image from "next/image";
import React, { memo } from "react";
interface Props {
  data: FoodDetail;
}

const FoodCard = memo((props: Props) => {
  const { titleBottom, img } = props.data;
  return (
    <div className="relative pb-[100%]">
      <Image src={img} alt="" fill className="object-cover" />
      <div className="absolute bg-primary bottom-0 left-0 py-[7px] pl-[8px] pr-[22px]">
        {titleBottom}
      </div>
    </div>
  );
});

export default FoodCard;
