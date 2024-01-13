import React, { useState } from "react";
import { Close } from "@/components/client/Modal/Close";
import { createListing } from "@/app/actions";

export const Modal = ({ className, onClick, setShowNotice }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100]">
      <div className="flex flex-col items-center bg-gray-2 w-[514px] h-[609px] rounded-[20px] relative">
        <Close
          className="self-end my-5 mx-5 cursor-pointer"
          onClick={onClick}
        />
        <div className="[font-family:'Inter-Bold',Helvetica] font-bold text-[#ffffff] text-[36px] text-center tracking-[0] leading-[normal]">
          List your website!
        </div>

        <form
          className="flex flex-col gap-5 my-10 w-[398px]"
          action={createListing}
          onSubmit={() => {
            onClick();
            setShowNotice(true);
          }}
        >
          <input
            name="email"
            className="rounded-full bg-gray-1 border border-gray-3 py-[9px] px-5 placeholder:text-gray-4"
            placeholder="Website URL..."
          />
          <input
            name="website_url"
            className="rounded-full bg-gray-1 border border-gray-3 py-[9px] px-5 placeholder:text-gray-4"
            placeholder="Your email"
          />

          <button
            type="submit"
            className="rounded-full py-[9px] px-5 bg-[#f089ff] text-black font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
