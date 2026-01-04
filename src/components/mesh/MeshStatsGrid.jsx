import React from 'react';
import { Database, Radio, Globe, Zap } from 'lucide-react';

const MeshStatsGrid = ({ devices, gateways, internetDevices, avgSignal }) => {
  return (
    <div className="mesh-stats-grid">
      <div className="mesh-stat-card glass-panel">
        <div className="mesh-stat-icon" style={{ background: 'rgba(59, 130, 246, 0.12)' }}>
          <Database size={20} style={{ color: '#3b82f6' }} />
        </div>
        <div className="mesh-stat-content">
          <span className="mesh-stat-label">Total Devices</span>
          <span className="mesh-stat-value">{devices.length}</span>
        </div>
      </div>

      <div className="mesh-stat-card glass-panel">
        <div className="mesh-stat-icon" style={{ background: 'rgba(16, 185, 129, 0.12)' }}>
          <Radio size={20} style={{ color: '#10b981' }} />
        </div>
        <div className="mesh-stat-content">
          <span className="mesh-stat-label">Active Gateways</span>
          <span className="mesh-stat-value">{gateways.length}</span>
        </div>
      </div>

      <div className="mesh-stat-card glass-panel">
        <div className="mesh-stat-icon" style={{ background: 'rgba(34, 197, 94, 0.12)' }}>
          <Globe size={20} style={{ color: '#22c55e' }} />
        </div>
        <div className="mesh-stat-content">
          <span className="mesh-stat-label">Using Internet</span>
          <span className="mesh-stat-value">{internetDevices}</span>
        </div>
      </div>

      <div className="mesh-stat-card glass-panel">
        <div
          className="mesh-stat-icon"
          style={{ background: 'rgba(59, 130, 246, 0.12)' }}
        >
          <Zap size={20} style={{ color: '#10b981' }} />
        </div>
        <div className="mesh-stat-content">
          <span className="mesh-stat-label">Network Strength</span>
          <span className="mesh-stat-value">{avgSignal}</span>
        </div>
      </div>
    </div>
  );
};

export default MeshStatsGrid;
