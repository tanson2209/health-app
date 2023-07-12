import RecommendCard from "@/components/RecommendCard";
import React, { memo } from "react";

const ListRecommended = memo(() => {
  const list: any[] = [
    {
      title: "RECOMMENDED COLUMN",
      sub: "オススメ",
    },
    {
      title: "RECOMMENDED DIET",
      sub: "ダイエットg",
    },
    {
      title: "RECOMMENDED BEAUTY",
      sub: "美容",
    },
    {
      title: "RECOMMENDED HEALTH",
      sub: "健康",
    },
  ];
  return (
    <div className="grid grid-cols-4 container gap-8 w-full ">
      {list.map((item) => (
        <RecommendCard {...item} />
      ))}
    </div>
  );
});

export default ListRecommended;
