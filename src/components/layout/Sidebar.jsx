import React from 'react';
import "./Sidebar.css"
import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div><SidebarLogo /></div>
      <div className="sidebar-content">
        <SidebarItem
          label="Dashboard"
          path="/"
          icon={<i className="bi bi-speedometer2"></i>}
        />

        <SidebarItem
          label="SOS Requests"
          path="/sos"
          icon={<i className="bi bi-exclamation-triangle-fill"></i>}
        />

        <SidebarItem
          label="Disaster Map"
          path="/map"
          icon={<i className="bi bi-map"></i>}
        />

        <SidebarItem
          label="Mesh and Internet"
          path="/mesh"
          icon={<i className="bi bi-reception-4"></i>}
        />

        <SidebarItem
          label="Users and Devices"
          path="/devices"
          icon={<i className="bi bi-person-fill"></i>}
        />

        <SidebarItem
          label="Alerts and Broadcasts"
          path="/alerts"
          icon={<i className="bi bi-broadcast"></i>}
        />

        <SidebarItem
          label="Volunteers and Resources"
          path="/volunteers"
          icon={<i className="bi bi-box-fill"></i>}
        />

        <SidebarItem
          label="Reports and Analytics"
          path="/reports"
          icon={<i className="bi bi-bar-chart-fill"></i>}
        />

        <SidebarItem
          label="Settings and Security"
          path="/settings"
          icon={<i className="bi bi-gear-fill"></i>}
        />
      </div>
    </div>
  );
};

export default Sidebar;
