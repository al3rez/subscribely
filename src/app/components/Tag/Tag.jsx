/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Tag = ({ property1, className }) => {
  return (
    <div
      className={`inline-flex items-center gap-[10px] pt-[3px] pb-[4px] px-[6px] rounded-[6px] justify-end relative ${
        property1 === "discount" ? "bg-[#ffd3371a]" : property1 === "ad" ? "bg-bg" : "bg-[#4fee8f1a]"
      } ${className}`}
    >
      <div
        className={`[font-family:'Inter',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[14px] relative font-normal leading-[normal] ${
          property1 === "discount" ? "text-[#ffd337]" : property1 === "ad" ? "text-[#ffffff]" : "text-[#4fee8e]"
        }`}
      >
        {property1 === "new" && <>New</>}

        {property1 === "discount" && <>Discount %</>}

        {property1 === "ad" && <>Ad</>}
      </div>
    </div>
  );
};
