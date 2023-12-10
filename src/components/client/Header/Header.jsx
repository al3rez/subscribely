/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

"use client";

import React, { useState } from "react";
import { Modal } from "@/components/client/Modal";
import { Button } from "../Button";

export const Header = ({ className }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div
      className={`flex items-center justify-between h-[70px] bg-gray-1 border-b [border-bottom-style:solid] border-[#262525] ${className}`}
    >
      <div className="flex">
        <div className="absolute top-[18px] left-[75px] font-semibold text-[#ffffff] text-[24px] tracking-[0] leading-[normal] md:block hidden">
          Subscribely.
        </div>
        <div className="absolute w-[42px] h-[40px] top-[14px] left-[24px]">
          <div className="relative w-[40px] h-[40px] bg-[#008cff] rounded-[8.79px]">
            <div className="absolute w-[25px] top-[3px] left-[10px] font-bold text-[#ffffff] text-[28px] tracking-[-2.24px] leading-[normal]">
              S.
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-end gap-[10px] top-[12px] mr-[25px]">
        <Button
          className="!flex-[0_0_auto]"
          property1="primary"
          text="Submit Website"
          link="https://dqeweieu0xx.typeform.com/to/gIUWPCEH"
        />
        <Button className="hidden !flex-[0_0_auto]" property1="secondary" />
        <button
          className="hidden px-[14px] py-[10px] h-[44px] items-center justify-center gap-[6px] relative flex-[0_0_auto] rounded-[500px] all-[unset] box-border cursor-pointer"
          onClick={toggleModal}
        >
          <div className="hidden first-letter:relative w-fit font-semibold text-[#ffffff] text-[18px] tracking-[0] leading-[normal]">
            Sign in
          </div>
          {showModal && <Modal />}
        </button>
      </div>
    </div>
  );
};
