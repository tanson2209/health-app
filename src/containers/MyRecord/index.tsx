import React, { memo } from "react";
import ListRecord from "./components/ListRecord";
import BodyRecord from "./components/BodyRecord";
import MyExercise from "./components/MyExercise";
import MyDiary from "./components/MyDiary";
import Button from "@/components/Button";

const MyRecordDetail = memo(() => {
  return (
    <div className="flex flex-col w-full items-center  justify-center my-14 space-y-14 bg-white">
      <ListRecord />
      <BodyRecord />
      <MyExercise />
      <MyDiary />
      <div className=" mt-7 mb-16">
        <Button title="自分の日記をもっと見る" />
      </div>
    </div>
  );
});

export default MyRecordDetail;
