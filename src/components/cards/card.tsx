import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { api } from "@/data/api";
import { discoveryTypes } from "@/data/types/discovery";

async function getDiscovery() {
  const response = await api("/discovery");
  const discovery = await response.json();

  return discovery;
}

const Card = () => {

  const [discovery, setDiscovery] = useState<discoveryTypes[]>([]);

  useEffect(() => {
    async function fetchData() {
      const discoveryData = await getDiscovery();
      setDiscovery(discoveryData);
    }

    fetchData();


  }, []);

  return (
    <>
      {discovery.map((discovery: discoveryTypes) => {
        return (
          <div key={discovery.id}>
            <div
              data-testid="cards"
              className="container mx-3 md:mx-auto flex flex-col md:flex-row items-center justify-evenly"
            >
              <div
                data-testid="card"
                className="w-[300px] md:w-[236px] rounded-lg drop-shadow-md bg-[#FFFAFA] mx-12 md:mx-4 my-12 md:my-4"
              >
                <div
                  className={`w-full ${
                    discovery.specialFlag ? "flex" : "hidden"
                  } justify-evenly`}
                >
                  <span className="absolute top-[-20px] text-[10px] bg-[#CD9EE6] font-black py-1 px-2 rounded-lg pt-[-10px] tracking-[.25em]">
                    {discovery.specialFlag ?? null}
                  </span>
                </div>
                <div className="flex flex-row justify-between px-5 pt-5">
                  <Image
                    src={`${discovery.icon}`}
                    alt={discovery.title}
                    width={37}
                    height={26}
                    className={`w-[${discovery.imageWidth}px] max-h-[26px] `}
                  />
                  <span className="text-[24px] text-[#660099] font-black tracking-[.1em]">
                    {discovery.title}
                  </span>
                </div>
                <div className="flex flex-row justify-end pr-6">
                  <span className="text-[9px] text-[#660099] leading-8 tracking-[.125em]">
                    {discovery.subtitle}
                  </span>
                </div>
                <div className="h-[75px] bg-[#F5F0F0]"></div>
                <div className="flex flex-row justify-evenly">
                  <Link
                    href={`${discovery.buttonLink}`}
                    className="text-xs text-white leading-8 bg-[#28A208] px-2 my-2 rounded-md"
                  >
                    {discovery.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
