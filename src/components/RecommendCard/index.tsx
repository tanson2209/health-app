import React, { memo } from "react";
interface Props {
  title: string;
  sub: string;
}
const RecommendCard = memo((props: Props) => {
  const { title, sub } = props;
  return (
    <div className="bg-dark-600 py-6 px-4 space-y-4 flex flex-col justify-center items-center">
      <div className="text-primary text-2xl text-center">{title}</div>
      <div className="w-16 h-[2px] bg-dark-400"></div>
      <div className="text-lg">{sub}</div>
    </div>
  );
});

export default RecommendCard;
