import DairyCard from "@/components/DairyCard";
import { useMyRecordListDiary } from "@/store/my-record";
import { DiaryDetail } from "@/types/diary";
import React, { memo } from "react";

const MyDiary = memo(() => {
  const listFood: DiaryDetail[] = useMyRecordListDiary();
  // const listFood: FoodDetail[] = home.listFood;
  return (
    <div className="container w-full">
      <div className="text-xl text-dark-500">MY DIARY</div>
      <div className="grid grid-cols-4  gap-3 w-full ">
        {listFood.map((item, key) => (
          <DairyCard data={item} key={key} />
        ))}
      </div>
    </div>
  );
});

export default MyDiary;
