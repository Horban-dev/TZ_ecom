import React from 'react';
import Item from '../item/Item';
import style from './ListItems.module.css'

const ListItems = ({data}) => {
    
  console.log(data)
    return (
        <div className={style.items}>
            {data.map(item => {
              return  <Item key={item.id} {...item}/>
            })}
        </div>
    );
};

export default ListItems;