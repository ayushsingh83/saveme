import React from "react";
import "./DangerZone.css";

const DangerZone = () => {
  const handleEmergencyMode = () => {
    if (window.confirm("Enable Emergency Mode? This will lock down the system.")) {
      console.log("Emergency Mode Enabled");
    }
  };

  const handleClearData = () => {
    if (
      window.confirm(
        "Are you sure you want to clear all data? This action cannot be undone."
      )
    ) {
      console.log("All data cleared");
    }
  };

  const handleDeactivateAccount = () => {
    if (
      window.confirm(
        "Deactivate account permanently? You will lose access immediately."
      )
    ) {
      console.log("Account deactivated");
    }
  };

  return (
    <div className="danger-zone-card">
      <div className="danger-zone-header flex gap-2">
        <span className="danger-icon text-red-400 text-[16px]"><i class="bi bi-exclamation-triangle-fill"></i></span>
        <h3>Danger Zone</h3>
      </div>

      <div className="danger-zone-list">
        <DangerItem
          title="Enable Emergency Mode"
          description="Temporarily lock down the system during emergencies."
          buttonText="Enable"
          onClick={handleEmergencyMode}
        />

        <DangerItem
          title="Clear All Data"
          description="Permanently delete all dashboard data."
          buttonText="Clear Data"
          onClick={handleClearData}
        />

        <DangerItem
          title="Deactivate Account"
          description="Disable account and restrict all access."
          buttonText="Deactivate"
          onClick={handleDeactivateAccount}
        />
      </div>
    </div>
  );
};

const DangerItem = ({ title, description, buttonText, onClick }) => {
  return (
    <div className="danger-item">
      <div className="danger-info">
        <span className="danger-title">{title}</span>
        <span className="danger-desc">{description}</span>
      </div>
      <button className="danger-btn" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default DangerZone;
