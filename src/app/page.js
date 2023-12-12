import { Header } from "@/components/client/Header";
import { Search } from "@/components/client/Search";
import { Tab } from "@/components/client/Tab";
import { CodeFill } from "@/icons/CodeFill";
import { MegaphoneSimpleFill } from "@/icons/MegaphoneSimpleFill";
import { Listings } from "@/components/server/Listings";

import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
});

export const dynamic = "force-dynamic";
export default async function Home({ searchParams }) {
  return (
    <div className={inter.className}>
      <Header className="![border-right-style:none] ![border-top-style:none] ![border-left-style:none]" />
      <main className="w-[80%] mt-[44px] mx-auto">
        <h1 className="font-bold text-white text-[2rem] leading-[2rem]">
          <span className="hidden md:inline-block">👉</span> Fantastic
          Productized Services
        </h1>
        <div className="w-[100%] mt-[13px] mx-auto">
          <p className="w-[100%] left-[310px] font-normal text-gray-4  text-[1.2rem] tracking-[0] leading-[30px] md:text-[1.5rem] md:w-[664px] break-words">
            Carefully selected productized services ideal for agencies,
            startups, and entrepreneurs. Handpicked and managed by actual
            humans!
          </p>
          <div className="mt-[47px] font-medium text-gray-4 text-[16px] tracking-[0] leading-[normal]">
            Choose a category
          </div>
          <div className="flex flex-wrap items-center justify-between gap-[10px] mt-[16px]">
            <div
              className={`flex gap-[10px] ${inter.className} overflow-x-scroll`}
            >
              <Tab
                isSelected={
                  searchParams.category === "All" ||
                  searchParams.category == null
                }
                className="!flex-[0_0_auto]"
                divClassName="!mt-[-1.00px]"
                property1="selected"
                text="All"
                visible={false}
              />
              <Tab
                isSelected={searchParams.category === "Design"}
                className="!flex-[0_0_auto]"
                property1="default"
                text="Design"
              />
              <Tab
                isSelected={searchParams.category === "Development"}
                className="!flex-[0_0_auto]"
                icon={<CodeFill className="!relative !w-[20px] !h-[20px]" />}
                property1="default"
                text="Development"
              />
              <Tab
                isSelected={searchParams.category === "Sales and Marketing"}
                className="!flex-[0_0_auto]"
                icon={
                  <MegaphoneSimpleFill className="!relative !w-[20px] !h-[20px]" />
                }
                property1="default"
                text="Sales and Marketing"
              />
            </div>
            <Search className="w-[300px]" property1="default" />
          </div>
          <Listings searchParams={searchParams}></Listings>
        </div>
      </main>
    </div>
  );
}
