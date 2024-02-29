import React from "react";
import Link from "next/link";

interface MenuProps {
  isOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ isOpen }) => {
  const containerClasses = `container max-w-[1005px] bg-black bg-opacity-55 ${isOpen ? 'absolute' : 'hidden'} z-50`;

  return (
    <div className={containerClasses}>
      <div className="bg-[#FFFAFA] h-screen antialiased md:w-1/2 pt-8 pl-4 pr-4">
          <Link href="/" className="font-sans font-extrabold text-lg antialiased border-b-[1px] border-b-[#660099] border-opacity-50 h-14 flex items-end">Meu Vivo empresas</Link>
          <Link href="/" className="font-sans font-extrabold text-lg antialiased border-b-[1px] border-b-[#660099] border-opacity-50 h-14 flex items-end">Meu Vivo</Link>
      </div>
    </div>
  );
};

export default Menu;
