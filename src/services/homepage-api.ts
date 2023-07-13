import { FoodDetail } from "@/types/homepage";

export const getDataListHomepage = async () => {
  // get api
  const mockData: FoodDetail[] = [
    { titleBottom: "05.21.Dinner", img: "/images/food-banner.png" },
    { titleBottom: "05.21.Dinner", img: "/images/food-banner.png" },
    { titleBottom: "05.21.Dinner", img: "/images/food-banner.png" },
    { titleBottom: "05.21.Dinner", img: "/images/food-banner.png" },
    { titleBottom: "05.21.Dinner", img: "/images/food-banner.png" },
    { titleBottom: "05.21.Dinner", img: "/images/food-banner.png" },
    { titleBottom: "05.21.Dinner", img: "/images/food-banner.png" },
    { titleBottom: "05.21.Dinner", img: "/images/food-banner.png" },
  ];
  return mockData;
};
