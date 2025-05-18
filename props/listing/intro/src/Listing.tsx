import React from "react";

interface ListingItem {
  listing_id: number;
  url: string;
  MainImage?: { url_570xN: string };
  title?: string;
  currency_code: string;
  price: string;
  quantity: number;
}

interface ListingProps {
  items: ListingItem[];
}

const Listing: React.FC<ListingProps> = ({ items = [] }) => {
  const formatTitle = (title: string | undefined): string => {
    if (!title) {
      return "";
    }
    return title.length > 50 ? `${title.substring(0, 50)}…` : title;
  };
  const formatPrice = (price: string, currency_code: string): string => {
    const priceValue = parseFloat(price);
    switch (currency_code) {
      case "USD":
        return `$${priceValue.toFixed(2)}`;
      case "EUR":
        return `€${priceValue.toFixed(2)}`;
      default:
        return `${priceValue.toFixed(2)} ${currency_code}`;
    }
  };

  const getQuantityClass = (quantity: number): string => {
    if (quantity <= 10) return "level-low";
    if (quantity <= 20) return "level-medium";
    return "level-high";
  };

  return (
    <div className="item-list">
      {items.map((item: ListingItem) => (
        <div key={item.listing_id} className="item">
          <div className="item-image">
            <a href={item.url}>
              <img
                src={item.MainImage?.url_570xN}
                alt={formatTitle(item.title)}
              />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{formatTitle(item.title)}</p>
            <p className="item-price">
              {formatPrice(item.price, item.currency_code)}
            </p>
            <p
              className={`item-quantity level-${getQuantityClass(
                item.quantity
              )}`}
            >
              {item.quantity} left
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;
