import React from 'react';
import style from './SortFilters.module.css';

const SortFilters = ({sortByPriceHighToLow, sortByPriceLowToHigh, sortByRating}) => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <button onClick={() => sortByPriceLowToHigh()}>Price Low to Hight</button>
                <button onClick={() => sortByPriceHighToLow()}>Price Hight to Low</button>
                <button onClick={() => sortByRating()}>Popular first</button>
            </div>
        </div>
    );
};

export default SortFilters;