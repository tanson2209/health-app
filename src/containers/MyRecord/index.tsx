import React, { memo, useEffect, useInsertionEffect } from "react";
import ListRecord from "./components/ListRecord";
import BodyRecord from "./components/BodyRecord";
import MyExercise from "./components/MyExercise";
import MyDiary from "./components/MyDiary";
import Button from "@/components/Button";
import ScrollTop from "@/components/ScrollTop";
import { DiaryDetail } from "@/types/diary";
import { useMyRecordAction } from "@/store/my-record";
import { getDataListDiary } from "@/services/my-record-api";

const MyRecordDetail = memo(() => {
  const { addDataDiaryList } = useMyRecordAction();

  const onClickGetData = async (first?: boolean) => {
    //call api to get data

    const mockData: DiaryDetail[] = await getDataListDiary();
    addDataDiaryList(mockData, first);
  };

  useEffect(() => {
    onClickGetData(true);
  }, []);

  return (
    <div className="flex flex-col w-full items-center  justify-center my-14 space-y-14 bg-white">
      <ListRecord />
      <BodyRecord />
      <MyExercise />
      <MyDiary />
      <div className=" mt-7 mb-16">
        <Button
          title="自分の日記をもっと見る"
          onClick={() => onClickGetData()}
        />
      </div>
      <ScrollTop />
    </div>
  );
});

export default MyRecordDetail;
