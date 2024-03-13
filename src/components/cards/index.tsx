"use client";
import React, { useEffect, useState } from "react";

import Card from "./card";
import CardLoading from "./cardLoading";

const Cards = () => {
  const [loaded, setLoaded] = useState(false);
  

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 1000)
  }, []);

  return (
    <div id="cards">
      <h3 className="text-2xl pt-10 md:pt-14 pl-12 pb-6 md:pl-24">Descobrir</h3>
      <div className="mb-20 flex justify-center flex-col md:flex-row">
        {loaded ? <Card /> : <CardLoading />}
      </div>
    </div>
  );
};

export default Cards;
