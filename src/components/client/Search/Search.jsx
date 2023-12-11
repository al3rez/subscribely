"use client";

import React from "react";
import { useReducer } from "react";
import { Search1 } from "../../../icons/Search1";
import { X1 } from "../../../icons/X1";

export const Search = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`inline-flex items-center w-[20%] h-[46px] rounded-[500px] justify-between relative cursor-pointer border border-solid border-gray-3 bg-gray-1 !flex-[0_0_auto] px-[12px]`}
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
      <Search1 className="!w-[20px] !h-[20px]" color="white" />
      <div
        className="flex-1 bg-transparent text-white border-none resize-none outline-none mx-2"
        placeholder="Flow |"
        contenteditable="true"
        data-placeholder="Search"
      ></div>
      <X1 className="!w-[13px] !h-[13px]" />
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
