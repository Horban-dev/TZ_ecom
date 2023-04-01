import React from 'react';
import style from './PriceFilter.module.css'
const PriceFilter = ({maxValue, minValue, onMaxPriceChange, onMinPriceChange}) => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h3>Price</h3>
        <div className={style.inputsWrapper}>
        <input 
          placeholder='min' 
          id="minPrice" 
          name="minPrice" 
          value={minValue}
          onChange={onMinPriceChange}/> 
            <span> - </span> 
        <input 
          id="maxPrice" 
          placeholder='max' 
          name="maxPrice"
          value={maxValue}
          onChange={onMaxPriceChange}/>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
