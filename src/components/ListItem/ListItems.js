import React, { useEffect, useState } from 'react';
import Item from '../item/Item';
import style from './ListItems.module.css'

const ListItems = () => {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:3001/items')
        .then(response => response.json())
        .then(data => setItems(data));
    }, []);
  
    return (
        <div className={style.items}>
            {items.map(item => {
              return  <Item key={item.id} {...item}/>
            })}
        </div>
    );
};

export default ListItems;