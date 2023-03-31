import React from 'react';
import style from './SortFilters.module.css';

const SortFilters = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <button>Price Low to Hight</button>
                <button>Price Hight to Low</button>
                <button>Popular first</button>
            </div>
        </div>
    );
};

export default SortFilters;