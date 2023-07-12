import { Record } from "@/types/record";
import Image from "next/image";
import React, { memo } from "react";
interface Props {
  item: Record;
}

const RecordCard = memo((props: Props) => {
  const { title, img, textButton, onClick } = props.item;
  return (
    <div className="relative pb-[100%] border-[24px] border-primary-300">
      <Image
        src={img}
        alt=""
        fill
        className="object-cover bg-black opacity-100"
      />
      <div className="absolute w-full h-full ">
        <div className="flex flex-col w-full h-full justify-center items-center">
          <div className="text-primary-300 text-2xl mb-3 ">{title}</div>
          <div
            className="bg-primary-400 min-w-[160px] text-sm px-2 text-center cursor-pointer"
            onClick={onClick}
          >
            {textButton}
          </div>
        </div>
      </div>
    </div>
  );
});

export default RecordCard;
