import { sql } from "@vercel/postgres";

export const Listings = async ({ searchParams }) => {
  const category = searchParams.category || "All";

  // handle the "All" category
  const categoryQuery = category === "All" ? "%" : category;
  const { rows } =
    await sql`SELECT * FROM listings where category like ${categoryQuery} order by id asc`;
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
    <div className="grid grid-cols-1 2xl:grid-cols-3 items-start gap-[20px_24px] mt-[28px]">
      {rows.map((row) => (
        <a
          className="p-4 bg-gray-2 rounded-[15px] text-white flex flex-col justify-between h-full cusror-pointer hover:bg-gray-3 transition-all"
          href={row.link}
          key={row.id}
        >
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <div
                className={`self-start mr-3 ${row.logo_class} w-16 h-16 overflow-hidden`}
              >
                <img src={row.logo_url} />
              </div>
              <div>
                <div className="font-bold text-lg">{row.title}</div>
                <div className="w-full md:w-[218px] text-neutral-500 font-normal line-clamp-3">
                  {row.description}
                </div>
              </div>
            </div>
            <div
              className={`${
                colors[row.tag].bg
              } bg-opacity-10 rounded-md text-xs font-semibold px-2 py-1 text-white self-start`}
            >
              <span className={`${colors[row.tag].fg} text-sm font-normal`}>
                {row.tag.charAt(0).toUpperCase() + row.tag.slice(1)}
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};
