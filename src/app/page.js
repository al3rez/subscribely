import { PropertyDefault } from "./components/PropertyDefault";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Tab } from "./components/Tab";
import { CodeFill } from "./icons/CodeFill";
import { MegaphoneSimpleFill } from "./icons/MegaphoneSimpleFill";
import { sql } from "@vercel/postgres";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
});

export const dynamic = "force-dynamic";
export default async function Home() {
  const { rows } = await sql`SELECT * FROM listings order by id asc`;
  const colors = {
    ad: {
      bg: "bg-bg",
      fg: "text-white",
    },
    new: {
      bg: "bg-green-400",
      fg: "text-green-400",
    },
    discount: {
      bg: "bg-yellow-300",
      fg: "text-yellow-300",
    },
  };

  return (
    <div className={inter.className}>
      <Header className="![border-right-style:none] ![border-top-style:none] ![border-left-style:none]" />
      <main className="w-[80%] mt-[44px] mx-auto">
        <h1 className="font-bold text-white text-[2rem] tracking-normal leading-normal">
          👉 Fantastic Productized Services
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
          <div className="flex items-center justify-between mt-[16px]">
            <div className={`flex gap-[10px] ${inter.className}`}>
              <Tab
                className="!flex-[0_0_auto]"
                divClassName="!mt-[-1.00px]"
                property1="selected"
                text="All"
                visible={false}
              />
              <Tab
                className="!flex-[0_0_auto]"
                divClassName="hidden md:inline-flex"
                property1="default"
                text="Design"
              />
              <Tab
                className="!flex-[0_0_auto]"
                divClassName="hidden md:inline-flex"
                icon={<CodeFill className="!relative !w-[20px] !h-[20px]" />}
                property1="default"
                text="Development"
              />
              <Tab
                className="!flex-[0_0_auto]"
                divClassName="hidden md:inline-flex"
                icon={
                  <MegaphoneSimpleFill className="!relative !w-[20px] !h-[20px]" />
                }
                property1="default"
                text="Sales and Marketing"
              />
            </div>
            <Search property1="default" />
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 items-start gap-[20px_24px] mt-[28px]">
            {rows.map((row) => (
              <a
                class="p-4 bg-gray-2 rounded-[15px] text-white flex flex-col justify-between h-full cusror-pointer hover:bg-gray-3 transition-all"
                href={row.link}
                key={row.id}
              >
                <div class="flex justify-between items-start">
                  <div class="flex items-center">
                    <div class="self-start mr-3 rounded-none w-16 h-16 overflow-hidden">
                      <img src={row.logo_url} />
                    </div>
                    <div>
                      <div class="font-bold text-lg">{row.title}</div>
                      <div class="w-[218px] text-neutral-500 text-base font-normal line-clamp-3">
                        {row.description}
                      </div>
                    </div>
                  </div>
                  <div
                    class={`${
                      colors[row.tag].bg
                    } bg-opacity-10 rounded-md text-xs font-semibold px-2 py-1 text-white self-start`}
                  >
                    <span class={`${colors[row.tag].fg} text-sm font-normal`}>
                      {row.tag.charAt(0).toUpperCase() + row.tag.slice(1)}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
