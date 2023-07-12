import React, { memo } from "react";
import FoodCard from "../FoodCard";
import { ICol } from "@/types/column";
import styled from "styled-components";

interface Props {
  item: ICol;
}

const WrapDiv = styled.div`
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;
`;

const ColCard = memo((props: Props) => {
  const { titleBottom, img, description, tags } = props.item;
  return (
    <div className="flex flex-col space-y-2">
      <FoodCard data={{ titleBottom, img }} className="pb-[75%]" />
      <WrapDiv className="text-dark-500">{description}</WrapDiv>
      <div className="flex">
        {tags.map((i) => (
          <div className="text-primary mr-2">#{i}</div>
        ))}
      </div>
    </div>
  );
});

export default ColCard;
