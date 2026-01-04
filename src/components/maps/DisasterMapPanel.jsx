import React from 'react';
import { Wifi, Activity, AlertCircle } from 'lucide-react';

const DisasterMapPanel = ({ type = 'mesh', markers = [], shelters = [] }) => {
  if (type === 'mesh') {
    const activeMarkers = markers.filter((m) => m.status !== 'Resolved').length;
    const connectedDevices = 26;

    return (
      <div className="map-mesh-panel glass-panel">
        <div className="map-panel-header">
          <h3 className="map-panel-title">
            <Wifi size={18} style={{ color: '#10b981' }} />
            Mesh Network
          </h3>
        </div>

        <div className="map-mesh-stats">
          <div className="map-mesh-stat">
            <span className="map-mesh-stat-label">Connected Devices</span>
            <span className="map-mesh-stat-value">{connectedDevices}</span>
          </div>
          <div className="map-mesh-stat">
            <span className="map-mesh-stat-label">Gateway Status</span>
            <span className="map-mesh-stat-value strong" style={{ color: '#10b981' }}>
              STRONG
            </span>
          </div>
          <div className="map-mesh-stat">
            <span className="map-mesh-stat-label">Coverage</span>
            <span className="map-mesh-stat-value">87%</span>
          </div>
          <div className="map-mesh-stat">
            <span className="map-mesh-stat-label">Active Zones</span>
            <span className="map-mesh-stat-value">3</span>
          </div>
        </div>

        <div className="map-mesh-devices">
          <div className="map-mesh-device-item">
            <div className="map-mesh-device-dot" />
            <span>Gateway A</span>
            <span className="map-mesh-device-signal">● ● ● ●</span>
          </div>
          <div className="map-mesh-device-item">
            <div className="map-mesh-device-dot active" />
            <span>Gateway B</span>
            <span className="map-mesh-device-signal">● ● ●</span>
          </div>
          <div className="map-mesh-device-item">
            <div className="map-mesh-device-dot active" />
            <span>Node 12</span>
            <span className="map-mesh-device-signal">● ● ● ●</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default DisasterMapPanel;
