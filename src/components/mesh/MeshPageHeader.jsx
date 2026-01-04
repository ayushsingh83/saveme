import React from 'react';
import { Network, RefreshCw } from 'lucide-react';

const MeshPageHeader = ({ autoOptimize, onAutoOptimizeChange }) => {
  return (
    <div className="mesh-page-header">
      <div className="mesh-page-title-section">
        <h1 className="mesh-page-title">
          <Network size={28} style={{ color: '#3b82f6' }} />
          Mesh & Internet
        </h1>
        <p className="mesh-page-subtitle">
          Real-time mesh connectivity, gateways & internet sharing status
        </p>
      </div>

      <div className="mesh-page-controls">
        <div className="mesh-search-bar">
          <input
            type="text"
            placeholder="Search devices..."
            className="mesh-search-input"
          />
        </div>

        <button className="mesh-btn mesh-btn-secondary">
          <RefreshCw size={16} />
          Refresh
        </button>

        <label className="mesh-toggle-label">
          <input
            type="checkbox"
            checked={autoOptimize}
            onChange={(e) => onAutoOptimizeChange(e.target.checked)}
            className="mesh-checkbox"
          />
          <span className="mesh-toggle-text">Auto-Optimize</span>
        </label>
      </div>
    </div>
  );
};

export default MeshPageHeader;
