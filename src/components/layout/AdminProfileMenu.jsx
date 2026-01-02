import React from 'react';
import ProfileImage from '../../assets/ProfileImage.jpg';
import './AdminProfileMenu.css';

const AdminProfileMenu = () => {
  return (
    <div className='profile-container'>
      <div className='profile-menu'><img src={ProfileImage} alt="Admin Profile" className='profile-image'/></div>
    </div>
  );
};

export default AdminProfileMenu;
