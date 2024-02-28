'use client'
import React, { useState } from "react";
import Image from "next/image";
import imageLogo from "../../../public/vivo-logo-1 4.png";
import IconMenu from "./iconMenu";
import Menu from "./menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-[#FFFAFA] drop-shadow-md h-20 pl-8 pt-3 pb-4">
        <div className="flex flex-row justify-start ">
          <IconMenu onClick={toggleMenu} isOpen={isMenuOpen}/>
          <div className="pl-6">
            <Image
              src={imageLogo}
              alt={"Logo"}
              width={150}
              height={56}
              quality={100}
            />
          </div>
        </div>
      </header>
      <Menu isOpen={isMenuOpen}/>
    </>
  );
};

export default Header;
