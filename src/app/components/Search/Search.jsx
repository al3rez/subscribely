"use client";

import React from "react";
import { useReducer } from "react";
import { Search1 } from "../../icons/Search1";
import { X1 } from "../../icons/X1";

export const Search = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`flex items-center relative w-[310px] rounded-[500px] gap-[6px] border border-solid ${
        state.property1 === "hovered"
          ? "border-gray-4"
          : state.property1 === "focused"
          ? "border-blue"
          : "border-gray-3"
      } ${
        state.property1 === "focused"
          ? "shadow-[0px_0px_0px_3px_#008cff66]"
          : ""
      } ${
        state.property1 === "focused"
          ? "pl-[12px] pr-[14px] py-[12px]"
          : "p-[12px]"
      } ${
        state.property1 === "hovered"
          ? "bg-gray-2"
          : state.property1 === "focused"
          ? "bg-[#181818]"
          : "bg-gray-1"
      } ${state.property1 === "focused" ? "overflow-hidden" : ""} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => {
        dispatch("click");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <Search1 className="!relative !w-[20px] !h-[20px]" color="white" />
      {["default", "hovered"].includes(state.property1) && (
        <div className="[font-family:'Inter',Helvetica] w-fit tracking-[0] text-[15px] text-gray-4 font-normal leading-[normal] whitespace-nowrap relative">
          Search
        </div>
      )}

      {state.property1 === "focused" && (
        <>
          <p className="relative flex-1 mt-[-0.50px] [font-family:'Inter',Helvetica] font-normal text-transparent text-[16px] tracking-[0] leading-[normal]">
            <span className="font-medium text-[#ffffff]">Flow</span>
            <span className="font-bold text-[#008cff]">|</span>
          </p>
          <X1 className="!relative !w-[13px] !h-[13px]" />
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "hovered",
        };
    }
  }

  if (state.property1 === "hovered") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };

      case "click":
        return {
          property1: "focused",
        };
    }
  }

  return state;
}
