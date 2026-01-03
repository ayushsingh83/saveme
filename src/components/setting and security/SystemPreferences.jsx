import React, { useState } from "react";
import "./SystemPreferences.css";

const SystemPreferences = () => {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("English");

  return (
    <div className="system-pref-card">
      <div className="system-pref-header">
        <div className="header-left flex gap-2">
          <span className="pref-icon text-white text-[16px]"><i class="bi bi-gear-fill"></i></span>
          <h3>System Preferences</h3>
        </div>
        <button className="view-details-btn">View Details ▾</button>
      </div>

      <div className="system-pref-body">
        {/* Theme */}
        <div className="pref-row">
          <span className="pref-label">Theme</span>
          <div className="theme-toggle">
            <button
              className={`theme-btn ${theme === "light" ? "active" : ""}`}
              onClick={() => setTheme("light")}
            >
              Light Mode
            </button>
            <button
              className={`theme-btn ${theme === "dark" ? "active" : ""}`}
              onClick={() => setTheme("dark")}
            >
              Dark Mode
            </button>
          </div>
        </div>

        {/* Language */}
        <div className="pref-row">
          <span className="pref-label">Language</span>
          <select
            className="language-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SystemPreferences;
