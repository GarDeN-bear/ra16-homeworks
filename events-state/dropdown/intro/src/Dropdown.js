import React, { useState } from "react";
import DropdownList from "./DropdownList";
import "./css/main.css";

const Dropdown = () => {
  const items = [
    { id: 1, label: "Profile Information" },
    { id: 2, label: "Change Password" },
    { id: 3, label: "Become PRO" },
    { id: 4, label: "Help" },
    { id: 5, label: "Log Out" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="container">
      <div className={`dropdown-wrapper${isOpen ? " open" : ""}`}>
        <button className="btn" onClick={toggleDropdown}>
          <span>{selectedItem ? selectedItem.label : "Account Settings"}</span>
          <i className="material-icons">public</i>
        </button>
        {isOpen && (
          <DropdownList
            items={items}
            onSelect={handleSelect}
            selectedItem={selectedItem}
          />
        )}
      </div>
    </div>
  );
};

export default Dropdown;
