/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Logo } from "../Logo";
import { Tag } from "../Tag";

export const PropertyDefault = ({
  tagPropertyNewClassName,
  tagProperty1 = "new",
  text = "StoryChief",
  logoPropertyClassName,
  logoProperty1 = "one",
}) => {
  return (
    <div className="relative w-[420px] h-[130px] bg-gray-2 rounded-[15px]">
      <div className="absolute w-[306px] h-[26px] top-[15px] left-[99px]">
        <div className="absolute w-[282px] top-[4px] left-0 [font-family:'Inter',Helvetica] font-semibold text-white text-[18px] tracking-[0] leading-[normal]">
          {text}
        </div>
        <Tag className={tagPropertyNewClassName} property1={tagProperty1} />
      </div>
      <p className="absolute w-[218px] top-[48px] left-[99px] [font-family:'Inter',Helvetica] font-normal text-gray-4 text-[16px] tracking-[0] leading-[normal]">
        Overcome the content chaos that keeps you from growing
      </p>
      <Logo
        className={logoPropertyClassName}
        image="https://c.animaapp.com/NrX3HX2r/img/image-3-2@2x.png"
        imageClassName="!h-[60px] !w-[60px]"
        overlapGroupClassName="!h-[60px]"
        property1={logoProperty1}
        rectangleClassName="!h-[55px] !left-px !w-[57px] !top-[2px]"
      />
    </div>
  );
};
