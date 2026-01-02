import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import TopBar from '../components/layout/TopBar';
import './AdminLayout.css';

const AdminLayout = () => {
  return (
    <div className='main-layout'>
      <div className='sidebar-layout'><Sidebar /></div>
      <div className="main-page">
        <div className='topbar-layout'><TopBar /></div>
        <div className='dashboard-layout'><Outlet /></div>
      </div>
    </div>
  );
};

export default AdminLayout;
