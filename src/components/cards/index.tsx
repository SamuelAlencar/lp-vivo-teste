import React, { useState } from "react";
import Image from "next/image";
import WiFiIcon from "../../../public/wifi-icon.png";
import Link from "next/link";

const Cards = () => {
  return (
    <div className="mb-20">
      <h3 className="text-2xl pt-10 md:pt-14 pl-12 pb-6 md:pl-24">Descobrir</h3>
      <div className="container mx-3 md:mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="w-[300px] md:w-[236px] rounded-lg drop-shadow-md bg-[#FFFAFA] mx-12 md:mx-4 my-12 md:my-4">
          <div className="flex flex-row justify-evenly px-5 pt-5">
            <Image src={WiFiIcon} alt={"WiFiIcon"} width={44} height={18} />
            <span className="text-2xl text-[#660099] font-bold	">200 Mega</span>
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
              className="text-xs text-white leading-8 bg-[#28A208] px-6 rounded-md mt-4 mb-4 w-[180px]"
            >
              Consultar cobertura
            </Link>
          </div>
        </div>
        <div className="w-[300px] md:w-[236px] rounded-lg drop-shadow-md bg-[#FFFAFA] mx-12 md:mx-4 my-12 md:my-4">
          <div className="flex flex-row justify-evenly px-5 pt-5">
            <Image src={WiFiIcon} alt={"WiFiIcon"} width={44} height={18} />
            <span className="text-2xl text-[#660099] font-bold	">300 Mega</span>
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
              className="text-xs text-white leading-8 bg-[#28A208] px-6 rounded-md mt-4 mb-4 w-[180px]"
            >
              Consultar cobertura
            </Link>
          </div>
        </div>
        <div className="w-[300px] md:w-[236px] rounded-lg drop-shadow-md bg-[#FFFAFA] mx-12 md:mx-4 my-12 md:my-4">
          <div className="flex flex-row justify-evenly px-5 pt-5">
            <Image src={WiFiIcon} alt={"WiFiIcon"} width={44} height={18} />
            <span className="text-2xl text-[#660099] font-bold	">600 Mega</span>
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
              className="text-xs text-white leading-8 bg-[#28A208] px-6 rounded-md mt-4 mb-4 w-[180px]"
            >
              Consultar cobertura
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
