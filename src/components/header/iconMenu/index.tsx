
'use client'
import React, { MouseEventHandler } from "react";

interface IconMenuProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  isOpen: boolean;
}

const IconMenu: React.FC<IconMenuProps> = ({ onClick, isOpen }) => {
  const iconSize = isOpen ? 26 : 21;
  const iconLines = isOpen ? (
    <path d="M2 2L24 24M2 24L24 2" stroke="#660099" strokeWidth="3" />
  ) : (
    <>
      <line x1="1.5" y1="4.5" x2="30.5" y2="4.5" stroke="#660099" strokeWidth="3" />
      <line x1="1.5" y1="10.5" x2="30.5" y2="10.5" stroke="#660099" strokeWidth="3" />
      <line x1="1.5" y1="16.5" x2="30.5" y2="16.5" stroke="#660099" strokeWidth="3" />
    </>
  );

  return (
    <button
      className={`flex flex-col focus:outline-none justify-center w-[32px] h-[56px] transition-transform transform ${
        isOpen ? "rotate-90" : "rotate-0"
      }`}
      onClick={onClick}
    >
      <span className={`pt-0.5 pb-0.5 opacity-100 transition-opacity`}>
        <svg
          width={iconSize}
          height={iconSize}
          viewBox={`0 0 ${iconSize} ${iconSize}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform transform rotate-0"
        >
          {iconLines}
        </svg>
      </span>
    </button>
  );
};

export default IconMenu;
