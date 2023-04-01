import React from 'react';
import Item from '../Item/Item';
import style from './ListItems.module.css'

const ListItems = ({data}) => {
    
    return (
        <div className={style.items}>
            {data.map(item => {
              return  <Item key={item.id} {...item}/>
            })}
        </div>
    );
};

export default ListItems;