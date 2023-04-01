import React from "react";
import style from "./ColorOptions.module.css";
import PriceFilter from "../priceFilter/PriceFilter";

const ColorFilter = ({ colors, onColorChange, items, minValue,maxValue,onChangeMin,onChangeMax}) => {
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
      <PriceFilter minValue={minValue} maxValue={maxValue} onMaxPriceChange={onChangeMax} onMinPriceChange={onChangeMin} />
      <div className={style.total}>Total products: {items.length}</div>
    </div>
  );
};

export default ColorFilter;
