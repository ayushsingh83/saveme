import React, { useState } from "react";
import "./SecuritySettings.css";

const SecuritySettings = () => {
  const [security, setSecurity] = useState({
    twoFactor: true,
    loginAlerts: true,
  });

  const toggleSecurity = (key) => {
    setSecurity((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="security-card">
      <div className="security-header flex gap-2">
        <span className="security-icon text-white text-[16px]"><i class="bi bi-shield-fill-check"></i></span>
        <h3>Security Settings</h3>
      </div>

      <div className="security-list">
        <SecurityItem
          label="Enable Two-Factor Authentication"
          enabled={security.twoFactor}
          onToggle={() => toggleSecurity("twoFactor")}
        />

        <SecurityAction
          label="Session Management"
          actionText="View Sessions"
        />

        <SecurityItem
          label="Enable Login Alerts"
          enabled={security.loginAlerts}
          onToggle={() => toggleSecurity("loginAlerts")}
        />
      </div>
    </div>
  );
};

const SecurityItem = ({ label, enabled, onToggle }) => {
  return (
    <div className="security-item">
      <span>{label}</span>
      <label className="switch">
        <input type="checkbox" checked={enabled} onChange={onToggle} />
        <span className="slider" />
      </label>
    </div>
  );
};

const SecurityAction = ({ label, actionText }) => {
  return (
    <div className="security-item">
      <span>{label}</span>
      <button className="security-btn">{actionText}</button>
    </div>
  );
};

export default SecuritySettings;
