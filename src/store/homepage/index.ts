import { useSelector } from "react-redux";

import { useAppDispatch } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FoodDetail } from "@/types/homepage";

// Define a type for the slice state

export type Filter = "Morning" | "Lunch" | "Dinner" | "Snack";
interface HomepageState {
  listFood?: FoodDetail[];
  filter: Filter;
}

// Define the initial state using that type
const initialState: HomepageState = {
  listFood: undefined,
  filter: "Morning",
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
    changeFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
export const useHompageSelector = () =>
  useSelector((state: RootState) => state.homepage);
export const useHompageListFood = () =>
  useSelector((state: RootState) => state.homepage.listFood);
export const useFilterSelector = () =>
  useSelector((state: RootState) => state.homepage.filter);

export const useHompageAction = () => {
  const { addDataFoods, changeFilter } = homepageSlide.actions;
  const dispatch = useAppDispatch();

  const addDataFoodList = (list: FoodDetail[], first?: boolean) => {
    dispatch(addDataFoods({ list, first }));
  };

  const changeFilterFood = (filter: Filter) => {
    dispatch(changeFilter(filter));
  };

  return { addDataFoodList, changeFilterFood };
};

export default homepageSlide.reducer;
