import React, { memo } from "react";
interface Props {
  active?: boolean;
  title: string;
  className?: string;
  onClick?: () => void;
}

const ButtonTime = memo((props: Props) => {
  const { title, active, className, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`${
        active ? "bg-primary text-white" : "bg-white text-primary"
      } px-5 rounded-xl cursor-pointer mr-2 ${className}`}
    >
      {title}
    </div>
  );
});

export default ButtonTime;
