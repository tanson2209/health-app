import { useSelector } from "react-redux";

import { useAppDispatch } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DiaryDetail } from "@/types/diary";

// Define a type for the slice state
interface MyRecordState {
  listDiary?: DiaryDetail[];
}

// Define the initial state using that type
const initialState: MyRecordState = {
  listDiary: [],
};

export const myRecordSlide = createSlice({
  name: "myRecord",
  initialState,
  reducers: {
    addDataDiary: (
      state,
      action: PayloadAction<{ list: DiaryDetail[]; first?: boolean }>
    ) => {
      if (action.payload.first) {
        state.listDiary = action.payload.list;
      } else {
        state.listDiary = state.listDiary
          ? [...state.listDiary, ...action.payload.list]
          : action.payload.list;
      }
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
export const useMyRecordSelector = () =>
  useSelector((state: RootState) => state.myRecord);
export const useMyRecordListDiary = () =>
  useSelector((state: RootState) => state.myRecord.listDiary);

export const useMyRecordAction = () => {
  const { addDataDiary } = myRecordSlide.actions;
  const dispatch = useAppDispatch();

  const addDataDiaryList = (list: DiaryDetail[], first?: boolean) => {
    dispatch(addDataDiary({ list, first }));
  };

  return { addDataDiaryList };
};

export default myRecordSlide.reducer;
