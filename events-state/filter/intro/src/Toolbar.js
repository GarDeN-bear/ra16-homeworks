import React from "react";
import "./Toolbar.css";

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className="toolbar">
      {filters.map((filter, index) => (
        <button
          key={index}
          onClick={() => onSelectFilter(filter)}
          className={
            filter === selected ? "toolbar-button-active" : "toolbar-button"
          }
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;
