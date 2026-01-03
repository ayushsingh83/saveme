import React, { useState } from "react";
import "./NotificationPreferences.css";

const NotificationItem = ({ label, enabled, onToggle }) => {
  return (
    <div className="notification-item">
      <span>{label}</span>
      <label className="switch">
        <input type="checkbox" checked={enabled} onChange={onToggle} />
        <span className="slider" />
      </label>
    </div>
  );
};

const NotificationPreferences = () => {
  const [preferences, setPreferences] = useState({
    email: true,
    sms: true,
    critical: true,
    high: true,
    medium: false,
    weekly: true,
  });

  const togglePreference = (key) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="notification-box">
      <div className="box-header flex gap-2">
        <span className="notification-icon text-white text-[16px]"><i class="bi bi-bell-fill"></i></span>
        <h3>Notification Preferences</h3>
      </div>

      <div className="notification-list">
        <NotificationItem
          label="Email Alerts"
          enabled={preferences.email}
          onToggle={() => togglePreference("email")}
        />
        <NotificationItem
          label="SMS Alerts"
          enabled={preferences.sms}
          onToggle={() => togglePreference("sms")}
        />
        <NotificationItem
          label="Critical Alerts"
          enabled={preferences.critical}
          onToggle={() => togglePreference("critical")}
        />
        <NotificationItem
          label="High Alerts"
          enabled={preferences.high}
          onToggle={() => togglePreference("high")}
        />
        <NotificationItem
          label="Medium Alerts"
          enabled={preferences.medium}
          onToggle={() => togglePreference("medium")}
        />
        <NotificationItem
          label="Weekly Reports"
          enabled={preferences.weekly}
          onToggle={() => togglePreference("weekly")}
        />
      </div>
    </div>
  );
};

export default NotificationPreferences;
