import React from 'react';
import style from './Item.module.css'

const Item = ({id, img,price, title, color, descr, rating}) => {
    return (
        <div key={id} className={style.item}>
            <img alt='img' src={img}/>
            <div className={style.infoContainer}>
                <h5 className={style.title}>{title}</h5>
                <span className={style.description}>{descr}</span>
                <h3>Color:<span>{color}</span></h3>
                <h3>Price:<span>{`${price}$`}</span></h3>
                <h3>Rating:<span>{rating}</span></h3>
            </div>
        </div>
    );
};

export default Item;