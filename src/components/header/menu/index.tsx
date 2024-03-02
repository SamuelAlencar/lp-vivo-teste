import React, { useEffect } from "react";
import Link from "next/link";

interface MenuProps {
  isOpen: boolean;
}
const Menu: React.FC<MenuProps> = ({ isOpen }) => {
  const containerClasses = `container max-w-[1005px] min-h-[105vh] bg-black bg-opacity-55 ${isOpen ? 'absolute' : 'hidden'} z-50 top-20`;

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <div className={containerClasses}>
      <div className="bg-[#FFFAFA] h-[105vh] antialiased md:w-1/2 pt-8 pl-4 pr-4 overflow-visible">
          <Link href="/" className="font-sans font-extrabold text-lg antialiased border-b-[1px] border-b-[#660099] border-opacity-50 h-14 flex items-end">Meu Vivo empresas</Link>
          <Link href="/" className="font-sans font-extrabold text-lg antialiased border-b-[1px] border-b-[#660099] border-opacity-50 h-14 flex items-end">Meu Vivo</Link>
      </div>
    </div>
  );
};

export default Menu;
