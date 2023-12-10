/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Logo } from "../Logo";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const PropertyDefault = ({
  tagPropertyNewClassName,
  tagProperty1 = "new",
  text = "StoryChief",
  logoPropertyClassName,
  logoProperty1 = "one",
  logoUrl = "https://c.animaapp.com/NrX3HX2r/img/image-3-2@2x.png",
  description = "Overcome the content chaos that keeps you from growing",
}) => {
  return (
    <a className="flex bg-gray-2 rounded-[15px]" style={inter.className}>
      <div className="flex ml-[22px] mt-[22px]">
        <div className="flex-none mr-3 rounded-none w-16 h-16 overflow-hidden">
          <img src={logoUrl} className="w-16 h-16" />
        </div>
        <div className="flex-grow">
          <div className="flex items-center justify-between">
            <div
              class="text-white text-lg font-semibold"
              style={inter.className}
            >
              {text}
            </div>{" "}
          </div>
          <p
            className="max-w-[218px] text-neutral-500 text-base font-normal mt-[7px] pb-[24px] leading-5"
            style={inter.className}
          >
            Overcome the content chaos that keeps you from growing
          </p>
          <div
            className={`inline-flex items-center gap-[10px] pt-[3px] pb-[4px] px-[6px] rounded-[6px] justify-end relative ${
              tagProperty1 === "discount"
                ? "bg-[#ffd3371a]"
                : tagProperty1 === "ad"
                ? "bg-bg"
                : "bg-[#4fee8f1a]"
            } ${tagPropertyNewClassName}`}
          >
            <div
              className={`w-fit mt-[-1.00px] tracking-[0] text-[14px] relative font-normal leading-[normal] ${
                tagProperty1 === "discount"
                  ? "text-[#ffd337]"
                  : tagProperty1 === "ad"
                  ? "text-[#ffffff]"
                  : "text-[#4fee8e]"
              }`}
            >
              {tagProperty1 === "new" && <>New</>}

              {tagProperty1 === "discount" && <>Discount %</>}

              {tagProperty1 === "ad" && <>Ad</>}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
