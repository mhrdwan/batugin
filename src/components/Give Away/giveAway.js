import { giveAwayZustandStore } from "@/zustand/GiveAway/giveAway";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

export default function GiveAway() {
  const { fetchGetListGA, dataFetchGetListGA } = giveAwayZustandStore();

  useEffect(() => {
    fetchGetListGA(1, 4);
  }, []);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="p-5">
      {/* <p className="font-semibold mb-2">Give Away</p> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dataFetchGetListGA?.data?.map((item) => (
          <Link
            href={`/giveaway-detail/${item.id}/${item.title.replace(/ /g, '-')}`}
            key={item.id}
            className="flex bg-white rounded-lg overflow-hidden mb-5 hover:cursor-pointer"
          >
            <div className="w-1/2 flex justify-center items-center overflow-hidden">
              <Image
                src={item.foto}
                alt={item.title}
                className="object-cover transform transition-transform duration-300 hover:scale-110"
                width={180}
                height={180}
                layout="intrinsic"
              />
            </div>
            <div className="w-1/2 p-2 flex flex-col justify-between">
              <p className="text-md font-semibold">
                {truncateText(item.title, 20)}
              </p>
              <div className="">{truncateText(item.content, 50)}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
