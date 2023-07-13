import { useSelector } from "react-redux";

import { useAppDispatch } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICol } from "@/types/column";

// Define a type for the slice state
interface MyRecordState {
  listFood?: ICol[];
}

const list: ICol[] = [
  {
    titleBottom: "05.21.Dinner",
    img: "/images/column-1.png",
    description:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておき",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    titleBottom: "05.21.Dinner",
    img: "/images/column-1.png",
    description:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておき",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    titleBottom: "05.21.Dinner",
    img: "/images/column-1.png",
    description:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておき",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    titleBottom: "05.21.Dinner",
    img: "/images/column-1.png",
    description:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておき",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    titleBottom: "05.21.Dinner",
    img: "/images/column-1.png",
    description:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておき",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    titleBottom: "05.21.Dinner",
    img: "/images/column-1.png",
    description:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておき",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    titleBottom: "05.21.Dinner",
    img: "/images/column-1.png",
    description:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておき",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    titleBottom: "05.21.Dinner",
    img: "/images/column-1.png",
    description:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておき",
    tags: ["魚料理", "和食", "DHA"],
  },
];

// Define the initial state using that type
const initialState: MyRecordState = {
  listFood: list,
};

export const columnSlide = createSlice({
  name: "column",
  initialState,
  reducers: {
    addDataFood: (
      state,
      action: PayloadAction<{ list: ICol[]; first?: boolean }>
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
export const useColumnSelector = () =>
  useSelector((state: RootState) => state.column);
export const useColumnListFood = () =>
  useSelector((state: RootState) => state.column.listFood);

export const useColumnAction = () => {
  const { addDataFood } = columnSlide.actions;
  const dispatch = useAppDispatch();

  const addDataFoodList = (list: ICol[], first?: boolean) => {
    dispatch(addDataFood({ list, first }));
  };

  return { addDataFoodList };
};

export default columnSlide.reducer;
