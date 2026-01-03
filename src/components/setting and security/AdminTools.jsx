import React from "react";
import "./AdminTools.css";

const AdminTools = () => {
  return (
    <div className="admin-tools-card">
      <div className="admin-tools-header flex gap-2">
        <span className="admin-tools-icon text-white text-[18px]"><i class="ri-admin-fill"></i></span>
        <h3>Admin Tools & Permissions</h3>
      </div>

      <div className="admin-tools-list">
        <AdminToolItem
          label="Manage User Roles"
          description="Assign admin, operator, or viewer roles"
          action="Manage"
        />

        <AdminToolItem
          label="Volunteer Access Levels"
          description="Control permissions for volunteers"
          action="Configure"
        />

        <AdminToolItem
          label="API Access"
          description="Manage API keys and integrations"
          action="Generate Key"
        />
      </div>
    </div>
  );
};

const AdminToolItem = ({ label, description, action }) => {
  return (
    <div className="admin-tool-item">
      <div className="tool-info">
        <span className="tool-label">{label}</span>
        <span className="tool-desc">{description}</span>
      </div>
      <button className="admin-action-btn">{action}</button>
    </div>
  );
};

export default AdminTools;
