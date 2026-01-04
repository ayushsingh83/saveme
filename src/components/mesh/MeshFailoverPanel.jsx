import React from 'react';
import { AlertTriangle } from 'lucide-react';

const MeshFailoverPanel = () => {
  return (
    <div className="mesh-failover-panel glass-panel">
      <div className="mesh-panel-header">
        <h3 className="mesh-panel-title">
          <AlertTriangle size={18} style={{ color: '#f59e0b' }} />
          Failover Status
        </h3>
      </div>

      <div className="mesh-failover-status">
        <div className="mesh-status-indicator active">
          <span>Active</span>
        </div>
        <div className="mesh-status-detail">
          <span>Primary Gateway:</span>
          <strong>DEV-001 (Gateway A)</strong>
        </div>
        <div className="mesh-status-detail">
          <span>Backup Ready:</span>
          <strong style={{ color: '#10b981' }}>Yes</strong>
        </div>
      </div>
    </div>
  );
};

export default MeshFailoverPanel;
