import React from "react";
import Image from "next/image";
import WiFiIcon from "../../../../public/wifi-icon.png";
import Link from "next/link";

interface CardProps {
  speed: string;
  specialOffer?: string;
}

const Card: React.FC<CardProps> = ({ speed, specialOffer }) => {
  return (
    <div className="w-[300px] md:w-[236px] rounded-lg drop-shadow-md bg-[#FFFAFA] mx-12 md:mx-4 my-12 md:my-4">
      {specialOffer && (
        <div className="w-full flex justify-center">
          <span className="absolute top-[-20px] text-sm bg-[#CD9EE6] font-bold py-1 px-2 rounded-lg pt-[-10px] tracking-wide">
            {specialOffer}
          </span>
        </div>
      )}
      <div className="flex flex-row justify-evenly px-5 pt-5">
        <Image src={WiFiIcon} alt={"WiFiIcon"} width={44} height={18} />
        <span className="text-2xl text-[#660099] font-bold tracking-wide">
          {speed} Mega
        </span>
      </div>
      <div className="flex flex-row justify-end pr-10">
        <span className="text-xs text-[#660099] leading-8">
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
