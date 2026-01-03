import React from "react";
import "./AccountSettings.css";

const AccountSettings = () => {
  return (
    <div className="account-settings-card">
      <div className="account-header flex gap-2">
        <span className="account-settings-icon text-white text-[18px]"><i class="bi bi-person-fill"></i></span>
        <h3>Account Settings</h3>
      </div>

      <div className="account-body">
        <div className="profile-left">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="User Avatar"
            className="profile-avatar"
          />
        </div>

        <div className="profile-right">
          <h4 className="profile-name">Clint Riley</h4>
          <p className="profile-email">clint.riley@email.com</p>

          <div className="account-actions">
            <button className="btn secondary">Upload</button>
            <button className="btn secondary">Change Password</button>
            <button className="btn primary">Update Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
