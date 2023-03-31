import React from 'react';
import style from './searchInput.module.css';

const SearchInput = () => {
  return (
    <div className={style.container}>
      <div className={style.inputWrapper}>
        <input
          type="text"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}
export default SearchInput;