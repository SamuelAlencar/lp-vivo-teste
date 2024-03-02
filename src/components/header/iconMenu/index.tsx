'use client'
import React, { MouseEventHandler, useState } from "react";

interface IconMenuProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  isOpen: boolean;
}

const IconMenu: React.FC<IconMenuProps> = ({ onClick, isOpen }) => {
  const iconSize = 40;
  // const iconSize = isOpen ? baseIconSize * 1.0 : baseIconSize;

  const [isClosed, setIsClosed] = useState(false);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    setIsClosed(!isClosed);
    onClick(event);
  };

  return (
    <button
      className={`flex items-center justify-center focus:outline-none transition-transform transform ${
        isOpen || isClosed ? "rotate-45" : "rotate-0" 
      }`}
      onClick={handleClick}
    >
      <span className={`opacity-100 transition-opacity layout="responsive"`}>
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform transform ${isOpen || isClosed ? "rotate-45" : "rotate-0"}`}
        >
          {isClosed ? (
            <>
              <path d="M6 6L18 18" stroke="#660099" strokeWidth="2" strokeLinecap="round" />
              <path d="M6 18L18 6" stroke="#660099" strokeWidth="2" strokeLinecap="round" />
            </>
          ) : (
            <path
              d={isOpen ? "M6 18L18 6" : "M4 6H20M4 12H20M4 18H20"}
              stroke="#660099"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </span>
    </button>
  );
};

export default IconMenu;
