import React from "react";
import Card from "./card";

const Cards: React.FC = () => {
  return (
    <div className="mb-20">
      <h3 className="text-2xl pt-10 md:pt-14 pl-12 pb-6 md:pl-24">Descobrir</h3>

      <div data-testid="cards" className="container mx-3 md:mx-auto flex flex-col md:flex-row items-center justify-center" >
        <Card speed="200" />
        <Card speed="300" specialOffer="OFERTA ESPECIAL" />
        <Card speed="600" specialOffer="MELHOR CUSTO BENEFÍCIO" />
      </div>
    </div>
  );
};

export default Cards;
