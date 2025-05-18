import React from "react";

const DropdownItem = ({ item, onSelect, isSelected }) => {
  return (
    <li className={isSelected ? "active" : ""} onClick={() => onSelect(item)}>
      <a
        href="#"
        onClick={(ev) => {
          ev.preventDefault();
        }}
      >
        {item.label}
      </a>
    </li>
  );
};

export default DropdownItem;
