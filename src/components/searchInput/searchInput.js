import React from 'react';
import style from './searchInput.module.css';

const SearchInput = ({onChange, value}) => {
  return (
    <div className={style.container}>
      <div className={style.inputWrapper}>
        <input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
export default SearchInput;