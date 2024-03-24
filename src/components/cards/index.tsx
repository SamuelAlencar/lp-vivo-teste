"use client";
import React, { useEffect, useState } from "react";

import Card from "./card";
import CardLoading from "./cardLoading";
import useTechsStore from "@/store/useTechs";
const Cards = () => {
  const [loaded, setLoaded] = useState(false);
  const titleTechs = useTechsStore();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div id="cards">
      {titleTechs.title ? (
        <h3 className="text-2xl pt-10 md:pt-14 pl-12 pb-6 md:pl-24 text-center">
          Descobrir {}
        </h3>
      ) : (
        ""
      )}

      <div className="mb-20 flex justify-center flex-col md:flex-row">
        {loaded ? <Card /> : <CardLoading />}
      </div>
    </div>
  );
};

export default Cards;
