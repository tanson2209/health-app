import ColCard from "@/components/ColCard";
import FoodCard from "@/components/FoodCard";
import { ICol } from "@/types/column";
import React, { memo } from "react";

const ListFoodCard = memo(() => {
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
  return (
    <div className="grid grid-cols-4 gap-x-2 gap-y-8 w-full container">
      {list.map((item) => (
        <ColCard item={item} />
      ))}
    </div>
  );
});

export default ListFoodCard;
