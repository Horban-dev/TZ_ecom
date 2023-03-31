import React from 'react';
import style from './PriceFilter.module.css'
const PriceFilter = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h3>Price</h3>
        <div className={style.inputsWrapper}>
          <input placeholder='min' id="minPrice" name="minPrice" /> 
          <span> - </span> 
          <input id="maxPrice" placeholder='max' name="maxPrice" />
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
