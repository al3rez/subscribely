import { Button } from "@/components/client/Button";
import { Divider } from "@/components/client/Modal/Divider";
import { Close } from "@/components/client/Modal/Close";

export const Modal = ({ className }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100]">
      <div className="bg-gray-2 w-[514px] h-[609px] rounded-[20px] relative">
        <div className="inline-flex flex-col items-start gap-[14px] top-[164px] absolute left-[58px]">
          <div className="flex w-[398px] items-center gap-[6px] px-[14px] py-[12px] relative flex-[0_0_auto] bg-gray-1 rounded-[500px] border border-solid border-gray-3">
            <input
              className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-4 text-[15px] tracking-[0] leading-[normal] whitespace-nowrap [background:transparent] border-[none] p-0"
              id="input-1"
              placeholder="Email"
              type="email"
            />
          </div>
          <div className="flex w-[398px] items-center gap-[6px] px-[14px] py-[12px] relative flex-[0_0_auto] bg-gray-1 rounded-[500px] border border-solid border-gray-3">
            <label
              className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-4 text-[15px] tracking-[0] leading-[normal] whitespace-nowrap"
              htmlFor="input-1"
            >
              Password
            </label>
          </div>
        </div>
        <Button
          className="!flex !absolute !left-[58px] !w-[398px] !top-[293px]"
          property1="primary"
          text="Sign in"
          visible={false}
        />
        <p className="absolute w-[398px] top-[108px] left-[58px] [font-family:'Inter-Regular',Helvetica] font-normal text-gray-4 text-[18px] text-center tracking-[0] leading-[30px]">
          <span className="text-[#777777]">Already have an </span>
          <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#008cff]">
            account?
          </span>
        </p>
        <div className="absolute w-[380px] top-[59px] left-[67px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#ffffff] text-[36px] text-center tracking-[0] leading-[normal]">
          Sign in
        </div>
        <div className="flex flex-col w-[398px] items-start justify-center gap-[14px] top-[437px] absolute left-[58px]">
          <button className="flex h-[44px] items-center justify-center gap-[6px] px-[16px] py-[12px] relative self-stretch w-full rounded-[70px] overflow-hidden border border-solid border-gray-3 all-[unset] box-border">
            {/* <Google className="!relative !w-[20px] !h-[20px]" /> */}
            <button className="relative w-fit mt-[-3.00px] mb-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#ffffff] text-[14px] tracking-[0] leading-[24px] whitespace-nowrap all-[unset] box-border">
              Continue with Google
            </button>
          </button>
          <button className="flex h-[44px] items-center justify-center gap-[6px] px-[16px] py-[12px] relative self-stretch w-full bg-[#3d6ad6] rounded-[70px] overflow-hidden all-[unset] box-border">
            {/* <Facebook1
              className="!relative !w-[20px] !h-[20px]"
              color="white"
            /> */}
            <button className="relative w-fit mt-[-4.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] tracking-[0] leading-[24px] whitespace-nowrap all-[unset] box-border">
              Continue with Facebook
            </button>
          </button>
        </div>
        <div className="flex w-[398px] items-center gap-[17px] top-[377px] absolute left-[58px]">
          <Divider
            className="relative w-[173px] h-px object-cover"
            alt="Vector"
            src="vector-21.svg"
          />
          <div className="relative w-[17px] mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#ffffff] text-[14px] tracking-[0.20px] leading-[20px]">
            or
          </div>
          <img />
          <Divider
            className="relative w-[173px] h-px object-cover"
            alt="Vector"
            src="vector-21.svg"
          />
        </div>
        <Close className="!absolute !w-[20px] !h-[20px] !top-[24px] !left-[470px]" />
      </div>
    </div>
  );
};
