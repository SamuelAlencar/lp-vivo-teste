"use client";
import Link from "next/link";
import React from "react";

interface MenuProps {
  isOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ isOpen }) => {
  return (
    <div className={`w-full h-full bg-black bg-opacity-55 ${isOpen ? 'fixed' : 'hidden'} z-50`} >
      <div className="bg-[#FFFAFA] h-screen antialised md:w-1/2 pt-8 pl-4 pr-4 ">
        <ul>
          <li className="font-sans font-extrabold text-lg antialiased border-b-[1px] border-b-[#660099] border-opacity-50 h-14 flex items-end">
            <Link href={"/"}>Meu Vivo empresas</Link>
          </li>
          <li className="font-sans font-extrabold text-lg antialiased border-b-[1px] border-b-[#660099] border-opacity-50 h-14 flex items-end">
            <Link href={"/"}>Meu Vivo</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
