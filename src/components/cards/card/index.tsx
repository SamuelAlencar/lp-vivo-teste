import React from "react";
import Image from "next/image";
import WiFiIcon from "public/wifi-icon.png"
import Link from "next/link";

interface CardProps {
  speed: string;
  specialOffer?: string;
}

const Card: React.FC<CardProps> = ({ speed, specialOffer }) => {
  return (
    <div data-testid="card" className="w-[300px] md:w-[236px] rounded-lg drop-shadow-md bg-[#FFFAFA] mx-12 md:mx-4 my-12 md:my-4">
      {specialOffer && (
        <div className="w-full flex justify-center">
          <span className="absolute top-[-20px] text-[10px] bg-[#CD9EE6] font-black py-1 px-2 rounded-lg pt-[-10px] tracking-[.25em]">
            {specialOffer}
          </span>
        </div>
      )}
      <div className="flex flex-row justify-between px-5 pt-5">
        <Image src={WiFiIcon} alt={"WiFiIcon"} width={34} height={24} className="h-full	" />
        <span className="text-[24px] text-[#660099] font-black tracking-[.1em]">
          {speed} Mega
        </span>
      </div>
      <div className="flex flex-row justify-end pr-6">
        <span className="text-[9px] text-[#660099] leading-8 tracking-[.125em]">
          +Wi-fi e Modem grátis
        </span>
      </div>
      <div className="h-[75px] bg-[#F5F0F0]"></div>
      <div className="flex flex-row justify-evenly">
        <Link
          href={"/"}
          className="text-xs text-white leading-8 bg-[#28A208] px-2 my-2 rounded-md"
        >
          Consultar cobertura
        </Link>
      </div>
    </div>
  );
};

export default Card;
