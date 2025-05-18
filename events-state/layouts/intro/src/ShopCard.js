import React from "react";

const ShopCard = ({ card }) => {
  return (
    <div className="shop-card">
      <h3>{card.name}</h3>
      <p>{card.color}</p>
      <img src={card.img} alt={card.name} />
      <div className="shop-card-bottom">
        <p className="product-price">${card.price}</p>
        <button className="button-add-to-cart">ADD TO CART</button>
      </div>
    </div>
  );
};

export default ShopCard;
