import { useSelector } from "react-redux";

import { useAppDispatch } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FoodDetail } from "@/types/homepage";

// Define a type for the slice state
interface HomepageState {
  listFood?: FoodDetail[];
}

// Define the initial state using that type
const initialState: HomepageState = {
  listFood: undefined,
};

export const homepageSlide = createSlice({
  name: "homepage",
  initialState,
  reducers: {
    addDataFoods: (
      state,
      action: PayloadAction<{ list: FoodDetail[]; first?: boolean }>
    ) => {
      if (action.payload.first) {
        state.listFood = action.payload.list;
      } else {
        state.listFood = state.listFood
          ? [...state.listFood, ...action.payload.list]
          : action.payload.list;
      }
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
export const useHompageSelector = () =>
  useSelector((state: RootState) => state.homepage);
export const useHompageListFood = () =>
  useSelector((state: RootState) => state.homepage.listFood);

export const useHompageAction = () => {
  const { addDataFoods } = homepageSlide.actions;
  const dispatch = useAppDispatch();

  const addDataFoodList = (list: FoodDetail[], first?: boolean) => {
    dispatch(addDataFoods({ list, first }));
  };

  return { addDataFoodList };
};

export default homepageSlide.reducer;
