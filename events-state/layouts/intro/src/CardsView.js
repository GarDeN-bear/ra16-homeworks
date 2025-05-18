import React from "react";
import ShopCard from "./ShopCard";

const CardsView = ({ cards }) => {
  return (
    <div className="cards-view">
      {cards.map((card, index) => (
        <ShopCard key={index} card={card} />
      ))}
    </div>
  );
};

export default CardsView;
