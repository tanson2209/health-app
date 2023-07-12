import { DiaryDetail } from "@/types/dairy";
import React, { memo } from "react";
import styled from "styled-components";

interface Props {
  data: DiaryDetail;
}

const WrapDiv = styled.div`
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;
`;
const DairyCard = memo((props: Props) => {
  const { data } = props;
  return (
    <div className="flex flex-col border-2 border-[#707070] p-4">
      <div className="text-dark-500 text-lg">{data.timeDay}</div>
      <div className="text-dark-500 text-lg mb-2">{data.timeHour}</div>
      <div className="text-dark-500 text-xs">{data.title}</div>
      <WrapDiv title={data.detail} className="text-dark-500 text-xs">
        {data.detail}
      </WrapDiv>
    </div>
  );
});

export default DairyCard;
