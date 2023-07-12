import RecordCard from "@/components/RecordCard";
import { Record } from "@/types/record";
import React, { memo } from "react";

const ListRecord = memo(() => {
  const list: Record[] = [
    {
      title: "BODY RECORD",
      img: "/images/MyRecommend-1.png",
      textButton: "自分のカラダの記録",
      onClick: () => {},
    },
    {
      title: "MY EXERCISE",
      img: "/images/MyRecommend-2.png",
      textButton: "自分の運動の記録",
      onClick: () => {},
    },
    {
      title: "MY DIARY",
      img: "/images/MyRecommend-3.png",
      textButton: "自分の日記",
      onClick: () => {},
    },
  ];
  return (
    <div className="grid grid-cols-3 container gap-12 w-full ">
      {list.map((item) => (
        <RecordCard item={item} />
      ))}
    </div>
  );
});

export default ListRecord;
