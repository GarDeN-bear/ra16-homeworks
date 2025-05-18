import React from "react";
import DropdownItem from "./DropdownItem";

const DropdownList = ({ items, onSelect, selectedItem }) => {
  return (
    <ul className="dropdown">
      {items.map((item) => (
        <DropdownItem
          key={item.id}
          item={item}
          onSelect={onSelect}
          isSelected={selectedItem !== null && selectedItem.id === item.id}
        />
      ))}
    </ul>
  );
};

export default DropdownList;
