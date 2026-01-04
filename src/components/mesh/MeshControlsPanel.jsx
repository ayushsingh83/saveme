import React from 'react';
import { Settings } from 'lucide-react';

const MeshControlsPanel = () => {
  return (
    <div className="mesh-controls-panel glass-panel">
      <div className="mesh-panel-header">
        <h3 className="mesh-panel-title">
          <Settings size={18} style={{ color: '#f59e0b' }} />
          Controls
        </h3>
      </div>

      <div className="mesh-control-list">
        <label className="mesh-control-item">
          <input type="checkbox" defaultChecked className="mesh-checkbox" />
          <span>Enable Mesh Network</span>
        </label>
        <label className="mesh-control-item">
          <input type="checkbox" defaultChecked className="mesh-checkbox" />
          <span>Internet Sharing</span>
        </label>
        <label className="mesh-control-item">
          <input type="checkbox" className="mesh-checkbox" />
          <span>Auto Gateway Selection</span>
        </label>
        <label className="mesh-control-item">
          <input type="checkbox" defaultChecked className="mesh-checkbox" />
          <span>SOS Priority</span>
        </label>
      </div>
    </div>
  );
};

export default MeshControlsPanel;
