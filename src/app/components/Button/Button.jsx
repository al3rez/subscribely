"use client";

import React from "react";
import { useReducer } from "react";
import { EnvelopeSimpleFill2 } from "../../icons/EnvelopeSimpleFill2";
import { PlusCircleFill2 } from "../../icons/PlusCircleFill2";

export const Button = ({
  property1,
  className,
  text = "Submit Tool",
  link,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "primary",
  });

  return (
    <a
      href={link}
      className={`inline-flex items-center gap-[6px] h-[44px] rounded-[500px] justify-center relative cursor-pointer ${
        state.property1 === "primary-hovered"
          ? "[background:linear-gradient(180deg,rgb(236.95,113.03,255)_0%,rgb(0,140,255)_100%)]"
          : ""
      } ${
        ["secondary-hovered", "secondary"].includes(state.property1)
          ? "border border-solid"
          : ""
      } ${
        state.property1 === "secondary"
          ? "border-gray-3"
          : state.property1 === "secondary-hovered"
          ? "border-gray-4"
          : ""
      } ${
        ["secondary-hovered", "secondary"].includes(state.property1)
          ? "px-[16px] py-[10px]"
          : "pl-[14px] pr-[16px] py-[10px]"
      } ${
        state.property1 === "primary"
          ? "bg-[#f089ff]"
          : state.property1 === "secondary-hovered"
          ? "bg-gray-2"
          : ""
      } ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {["primary-hovered", "primary"].includes(state.property1) && (
        <PlusCircleFill2
          className="!relative !w-[28px] !h-[28px] !mt-[-2.00px] !mb-[-2.00px]"
          color="#131313"
        />
      )}

      {["secondary-hovered", "secondary"].includes(state.property1) && (
        <EnvelopeSimpleFill2 className="!relative !w-[28px] !h-[28px] !mt-[-2.00px] !mb-[-2.00px]" />
      )}

      <div
        className={`w-fit tracking-[0] text-[18px] relative font-semibold leading-[normal] ${
          ["secondary-hovered", "secondary"].includes(state.property1)
            ? "text-white"
            : "text-bg"
        }`}
      >
        {["primary-hovered", "primary"].includes(state.property1) && (
          <>{text}</>
        )}

        {["secondary-hovered", "secondary"].includes(state.property1) && (
          <>Subscribe</>
        )}
      </div>
    </a>
  );
};

function reducer(state, action) {
  if (state.property1 === "primary") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "primary-hovered",
        };
    }
  }

  if (state.property1 === "primary-hovered") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "primary",
        };
    }
  }

  if (state.property1 === "secondary") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "secondary-hovered",
        };
    }
  }

  if (state.property1 === "secondary-hovered") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "secondary",
        };
    }
  }

  return state;
}
