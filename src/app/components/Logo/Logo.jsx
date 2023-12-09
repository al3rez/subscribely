/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Logo = ({
  property1,
  className,
  overlapGroupClassName,
  rectangleClassName,
  imageClassName,
  image = "https://c.animaapp.com/NrX3HX2r/img/image-3-1@2x.png",
}) => {
  return (
    <div
      className={`w-[128px] ${
        property1 === "eight" ||
        property1 === "eleven" ||
        property1 === "five" ||
        property1 === "four" ||
        property1 === "fourteen" ||
        property1 === "nine" ||
        property1 === "seven" ||
        property1 === "six" ||
        property1 === "ten" ||
        property1 === "thirteen" ||
        property1 === "three" ||
        property1 === "twelve" ||
        property1 === "two"
          ? "bg-cover"
          : ""
      } ${property1 === "seven" ? "h-[135px]" : property1 === "twelve" ? "h-[124px]" : "h-[128px]"} ${
        property1 === "two"
          ? "bg-[url(https://c.animaapp.com/NrX3HX2r/img/image-4-1@2x.png)]"
          : property1 === "three"
          ? "bg-[url(https://c.animaapp.com/NrX3HX2r/img/image-5-1@2x.png)]"
          : property1 === "four"
          ? "bg-[url(https://c.animaapp.com/NrX3HX2r/img/image-6-1@2x.png)]"
          : property1 === "five"
          ? "bg-[url(https://c.animaapp.com/NrX3HX2r/img/image-7-1@2x.png)]"
          : property1 === "six"
          ? "bg-[url(https://c.animaapp.com/NrX3HX2r/img/image-8@2x.png)]"
          : property1 === "seven"
          ? "bg-[url(https://c.animaapp.com/NrX3HX2r/img/image-9-1@2x.png)]"
          : property1 === "eight"
          ? "bg-[url(https://c.animaapp.com/NrX3HX2r/img/image-10-1@2x.png)]"
          : property1 === "nine"
          ? "bg-[url(https://c.animaapp.com/NrX3HX2r/img/image-11-1@2x.png)]"
          : property1 === "ten"
          ? "bg-[url(https://c.animaapp.com/NrX3HX2r/img/image-12-1@2x.png)]"
          : property1 === "eleven"
          ? "bg-[url(https://c.animaapp.com/NrX3HX2r/img/image-13-3@2x.png)]"
          : property1 === "twelve"
          ? "bg-[url(https://c.animaapp.com/NrX3HX2r/img/image-14-3@2x.png)]"
          : property1 === "thirteen"
          ? "bg-[url(https://c.animaapp.com/NrX3HX2r/img/image-15-3@2x.png)]"
          : property1 === "fourteen"
          ? "bg-[url(https://c.animaapp.com/NrX3HX2r/img/image-16@2x.png)]"
          : ""
      } ${
        property1 === "eight" ||
        property1 === "eleven" ||
        property1 === "five" ||
        property1 === "four" ||
        property1 === "fourteen" ||
        property1 === "nine" ||
        property1 === "seven" ||
        property1 === "six" ||
        property1 === "ten" ||
        property1 === "thirteen" ||
        property1 === "three" ||
        property1 === "twelve" ||
        property1 === "two"
          ? "bg-[50%_50%]"
          : ""
      } ${className}`}
    >
      {property1 === "one" && (
        <div className={`relative h-[128px] ${overlapGroupClassName}`}>
          <div
            className={`absolute w-[121px] h-[117px] top-[4px] left-[3px] bg-[#ffffff] rounded-[90px] ${rectangleClassName}`}
          />
          <img
            className={`absolute w-[128px] h-[128px] top-0 left-0 object-cover ${imageClassName}`}
            alt="Image"
            src={image}
          />
        </div>
      )}
    </div>
  );
};
