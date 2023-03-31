import React, { useState } from 'react';
import style from './ColorOptions.module.css';
import PriceFilter from '../priceFilter/PriceFilter';

const colorOptions = [
  { id: 1, label: 'Black' },
  { id: 2, label: 'Red' },
  { id: 3, label: 'White' },
  { id: 4, label: 'Blue' },
  { id: 5, label: 'Gray' },
  { id: 6, label: 'Brown' },
];

const ColorFilter = () => {
  const [selectedColors, setSelectedColors] = useState([]);

  const handleColorChange = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.colorFilter}>
        <h3>Color</h3>
        <ul>
          {colorOptions.map((option) => (
            <li key={option.id}>
              <label>
                <input
                  type="checkbox"
                  value={option.label}
                  checked={selectedColors.includes(option.label)}
                  onChange={() => handleColorChange(option.label)}
                />
                {option.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <PriceFilter/>
      <div className={style.total}>Total products: 5</div>
    </div>
  );
};

export default ColorFilter;
