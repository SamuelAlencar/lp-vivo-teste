"use client";
import React, { useState } from "react";
import Image from "next/image";
import imageLogo from "../../../public/vivo-logo-1 4.png";
import IconMenu from "./iconMenu";
import Menu from "./menu";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <header data-testid="menu" className="bg-[#FFFAFA] drop-shadow-md h-20 pl-8 pt-3 pb-4 z-50">
        <div className="flex flex-row justify-start" data-testid="btn-menu">
          <IconMenu onClick={toggleMenu} isOpen={isMenuOpen} />
          <div className="pl-6">
            <Link href={"/"} data-testid="logo">
              <Image
                src={imageLogo}
                alt="Logo"
                width={150}
                height={56}
                quality={100}
              />
            </Link>
          </div>
        </div>
      </header>
      <Menu isOpen={isMenuOpen} />
    </>
  );
};

export default Header;
