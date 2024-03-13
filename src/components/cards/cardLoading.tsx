import React from "react";
import Skeleton from "react-loading-skeleton";

const CardLoading = () => {
  return (
    <div>
      <div
        data-testid="cards"
        className="container mx-3 md:mx-auto flex flex-col md:flex-row items-center justify-evenly"
      >
        <div
          data-testid="card"
          className="w-[300px] md:w-[236px] h-[211px] rounded-lg drop-shadow-md bg-[#660099] animate-pulse opacity-3 mx-12 md:mx-4 my-12 md:my-4"
        >
          <Skeleton width={236} height={211} />
        </div>
        <div
          data-testid="card"
          className="w-[300px] md:w-[236px] h-[211px] rounded-lg drop-shadow-md bg-[#660099] animate-pulse opacity-3 mx-12 md:mx-4 my-12 md:my-4"
        >
          <Skeleton width={236} height={211} />
        </div>
        <div
          data-testid="card"
          className="w-[300px] md:w-[236px] h-[211px] rounded-lg drop-shadow-md bg-[#660099] animate-pulse opacity-3 mx-12 md:mx-4 my-12 md:my-4"
        >
          <Skeleton width={236} height={211} />
        </div>
      </div>
    </div>
  );
};

export default CardLoading;
