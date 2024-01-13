"use client";

import React from "react";
import { PenNibFill2 } from "../../../icons/PenNibFill2";
import { useRouter } from "next/navigation";

export const Tab = ({
  className,
  visible = true,
  divClassName,
  text = "Design",
  isSelected,
  icon = <PenNibFill2 className="!relative !w-[20px] !h-[20px]" />,
}) => {
  const router = useRouter();

  const handleTabClick = () => {
    localStorage.setItem("category", text);

    const query = localStorage.getItem("q", "");
    let url = "/?";

    if (query) {
      url += `q=${query}&`;
    }

    url += `category=${text}`;
    router.push(url);
  };

  // Determine the background color based on the isSelected prop
  const backgroundColorClass = isSelected ? "bg-blue" : "bg-gray-1";

  return (
    <div
      className={`inline-flex items-center gap-[6px] px-[17px] py-[12px] rounded-[500px] justify-center relative cursor-pointer border border-solid ${
        isSelected
          ? "shadow-[0px_4px_8px_#00569d66] border-blue"
          : "border-gray-3"
      } ${backgroundColorClass} ${className}`}
      onClick={handleTabClick}
    >
      {visible && icon}

      <div
        className={`w-fit mt-[-0.50px] tracking-[0] text-[16px] text-white relative font-semibold whitespace-nowrap leading-[normal] ${divClassName}`}
      >
        {text}
      </div>
    </div>
  );
};
