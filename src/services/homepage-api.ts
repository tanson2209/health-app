import { Filter } from "@/store/homepage";
import { FoodDetail } from "@/types/homepage";

export const getDataListHomepage = async (filter: Filter) => {
  // get api
  const mockData: FoodDetail[] = [
    { titleBottom: `05.21.${filter}`, img: "/images/food-banner.png" },
    { titleBottom: `05.21.${filter}`, img: "/images/food-1.png" },
    { titleBottom: `05.21.${filter}`, img: "/images/food-2.png" },
    { titleBottom: `05.21.${filter}`, img: "/images/food-3.png" },
    { titleBottom: `05.21.${filter}`, img: "/images/column-1.png" },
    { titleBottom: `05.21.${filter}`, img: "/images/food-1.png" },
    { titleBottom: `05.21.${filter}`, img: "/images/food-2.png" },
    { titleBottom: `05.21.${filter}`, img: "/images/food-3.png" },
  ];
  return mockData;
};
