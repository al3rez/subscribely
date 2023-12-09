"use client";

import React from "react";
import { useReducer } from "react";
import { PenNibFill2 } from "../../icons/PenNibFill2";

export const Tab = ({
  property1,
  className,
  visible = true,
  divClassName,
  text = "Design",
  icon = <PenNibFill2 className="!relative !w-[20px] !h-[20px]"/>,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`inline-flex items-center gap-[6px] px-[17px] py-[12px] rounded-[500px] justify-center relative cursor-pointer ${
        ["default", "hover"].includes(state.property1)
          ? "border border-solid"
          : ""
      } ${
        state.property1 === "default"
          ? "border-gray-3"
          : state.property1 === "hover"
          ? "border-blue"
          : ""
      } ${
        state.property1 === "selected" ? "shadow-[0px_4px_8px_#00569d66]" : ""
      } ${
        state.property1 === "selected"
          ? "bg-blue"
          : state.property1 === "hover"
          ? "bg-[#008cff33]"
          : "bg-gray-1"
      } ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      {visible && <>{icon}</>}

      <div
        className={`w-fit mt-[-0.50px] tracking-[0] text-[16px] text-white relative font-semibold whitespace-nowrap leading-[normal] ${divClassName}`}
      >
        {text}
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "hover",
        };
    }
  }

  if (state.property1 === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };

      case "click":
        return {
          property1: "selected",
        };
    }
  }

  return state;
}
