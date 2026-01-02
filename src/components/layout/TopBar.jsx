import React from 'react';
import './TopBar.css';
import SearchBar from './SearchBar';
import AdminProfileMenu from './AdminProfileMenu';

const TopBar = () => {
  return (
    <div className="container-topbar">
      <h1 className='topbar-left'>ADMIN PANEL</h1>
      <div className='topbar-right'>
        <div><SearchBar /></div>
        <div><AdminProfileMenu /></div>
      </div>
    </div>
  );
};

export default TopBar;
