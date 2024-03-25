'use client'
import React, { useEffect, useState } from "react";
import Card, { CardProps } from "./card";
import CardLoading, { CardLoadingProps } from "./cardLoading";
import useTechsStore, { TechsStore } from "@/store/useTechs";

interface CardsProps {}

const Cards: React.FC<CardsProps> = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const titleTechs: TechsStore = useTechsStore();

  useEffect((): void => {
    setLoaded(true);
  }, []);

  return (
    <div id="cards">
      {titleTechs.title ? (
        <h3 className="text-2xl pt-10 md:pt-14 pl-12 pb-6 md:pl-24 text-center">
          Descobrir {}
        </h3>
      ) : (
        null
      )}

      <div className="mb-20 flex justify-center flex-col md:flex-row">
        {loaded ? <Card /> : <CardLoading />}
      </div>
    </div>
  );
};

export default Cards;
