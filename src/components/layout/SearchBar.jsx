import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className='searchbar-wrapper'>
      <i className="bi bi-search"></i>
      <input type="text" placeholder="Search..." className='input-box'/>
      <i className="bi bi-bell-fill"></i>
    </div>
  );
};

export default SearchBar;
