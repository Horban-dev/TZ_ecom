import React from "react";
import style from "./ColorOptions.module.css";
import PriceFilter from "../priceFilter/PriceFilter";

const ColorFilter = ({ colors, onColorChange }) => {
  return (
    <div className={style.container}>
      <div className={style.colorFilter}>
        <h3>Color</h3>
        <ul>
          {colors.map((option) => (
            <li key={option.id}>
              <label>
                <input
                  type="checkbox"
                  value={option.color}
                  onChange={() => onColorChange(option.color)}
                />
                {option.color}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <PriceFilter />
      <div className={style.total}>Total products: 5</div>
    </div>
  );
};

export default ColorFilter;
