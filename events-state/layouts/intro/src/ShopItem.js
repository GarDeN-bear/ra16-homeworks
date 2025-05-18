import React from "react";

const ShopItem = ({ item }) => {
  return (
    <div className="shop-item">
      <img src={item.img} alt={item.name} />
      <h3>{item.name}</h3>
      <p className="product-price">${item.price}</p>
      <button className="button-add-to-cart">ADD TO CART</button>
    </div>
  );
};

export default ShopItem;
