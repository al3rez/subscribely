/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

"use client";

import React, { useState } from "react";
import { Modal } from "@/components/client/Modal";
import { Button } from "../Button";
import { Close } from "@/components/client/Modal/Close";

const Notice = ({ message, onClick }) => {
  const isError = message.status === "error";

  // Determine the background and text color classes based on isError
  const bgColorClass = isError
    ? "bg-red-400 text-red-600"
    : "bg-green-400 text-green-600";
  const fillColorClass = isError ? "!fill-red-600" : "!fill-green-600";

  return (
    <div
      className={`!fixed bottom-5 right-5 flex items-center justify-between gap-2 ${bgColorClass} bg-opacity-10 z-1000 py-5 rounded-md text-sm px-5 cursor-pointer`}
      onClick={onClick}
    >
      <span className="text-md">{message.message}</span>
      <Close className={`h-[10px] ${fillColorClass} cursor-pointer`} />
    </div>
  );
};

export const Header = ({ className }) => {
  const [showModal, setShowModal] = useState(false);
  const [showNotice, setShowNotice] = useState({});

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleNotice = () => {
    setShowNotice(!showNotice);
  };

  return (
    <>
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
            onClick={toggleModal}
            className="!flex-[0_0_auto]"
            property1="primary"
            text="Submit Website"
          />
          {showModal && (
            <Modal onClick={toggleModal} setShowNotice={setShowNotice} />
          )}
        </div>
      </div>
      {showNotice && <Notice onClick={toggleNotice} message={showNotice} />}
    </>
  );
};
