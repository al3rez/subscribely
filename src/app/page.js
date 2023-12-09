import { PropertyDefault } from "./components/PropertyDefault";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Tab } from "./components/Tab";
import { CodeFill } from "./icons/CodeFill";
import { MegaphoneSimpleFill } from "./icons/MegaphoneSimpleFill";
import { sql } from "@vercel/postgres";

export default async function Home() {
  const { rows } = await sql`SELECT * FROM listings`;

  return (
    <div>
      <Header className="![border-right-style:none] ![border-top-style:none] ![border-left-style:none]" />
      <main className="w-[1345px] mt-[44px] mx-auto">
        <p className="[font-family:'Inter',Helvetica] font-bold text-[#ffffff] text-[36px] tracking-[0] leading-[normal]">
          👉 Discover Top Subscription-Based Services
        </p>
        <div className="w-[1300px] mt-[13px] mx-auto">
          <p className=" w-[668px] top-[170px] left-[310px] [font-family:'Inter',Helvetica] font-normal text-gray-4 text-[20px] tracking-[0] leading-[30px]">
            Elevate Your Experience with Our Curated Selection of Premium
            Subscription-Based Services.
          </p>
          <div className="mt-[47px] [font-family:'Inter',Helvetica] font-medium text-gray-4 text-[16px] tracking-[0] leading-[normal]">
            Choose a category
          </div>
          <div className="flex items-center justify-between mt-[16px]">
            <div className="flex gap-[10px]">
              <Tab
                className="!flex-[0_0_auto]"
                divClassName="!mt-[-1.00px]"
                property1="selected"
                text="All"
                visible={false}
              />
              <Tab
                className="!flex-[0_0_auto]"
                property1="default"
                text="Design"
              />
              <Tab
                className="!flex-[0_0_auto]"
                icon={<CodeFill className="!relative !w-[20px] !h-[20px]" />}
                property1="default"
                text="Development"
              />
              <Tab
                className="!flex-[0_0_auto]"
                icon={
                  <MegaphoneSimpleFill className="!relative !w-[20px] !h-[20px]" />
                }
                property1="default"
                text="Sales and Marketing"
              />
            </div>
            <Search property1="default" />
          </div>
          <div className="grid grid-cols-3 items-start gap-[20px_24px] mt-[28px]">
            {rows.map((row) => (
              <div key={row.id}>
                <PropertyDefault
                  logoProperty1="two"
                  logoPropertyClassName={`relative !h-[60px] rounded-[22.5%] bg-[url(https://assets.website-files.com/5837424ae11409586f837994/5e2fb219ca409a4a31ab607d_large.png)]  !left-[22px] !w-[60px] !top-[22px]`}
                  tagProperty1="ad"
                  tagPropertyNewClassName="!left-[275px]  !top-0"
                  text={row.title}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
