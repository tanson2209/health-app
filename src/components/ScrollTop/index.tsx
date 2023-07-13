import Image from "next/image";
import React, { memo } from "react";

const ScrollTop = memo(() => {
  return (
    <div
      className="fixed bottom-[150px] right-[100px] z-50"
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
    >
      <Image
        src={"/svgs/component_scroll.svg"}
        alt=""
        width={32}
        height={32}
        className="mr-4"
      />
    </div>
  );
});

export default ScrollTop;
