import React from 'react';
import { Activity, Globe } from 'lucide-react';

const MeshDeviceList = ({ devices, selectedDevice, onSelectDevice, getSignalIcon, getRoleIcon, getSignalColor }) => {
  const activeDevices = devices.filter((d) => d.status === 'active').length;

  return (
    <div className="mesh-left-panel">
      <div className="mesh-device-container glass-panel">
        <div className="mesh-panel-header">
          <h3 className="mesh-panel-title">
            <Activity size={18} style={{ color: '#3b82f6' }} />
            Connected Devices
          </h3>
          <span className="mesh-device-count">{activeDevices}</span>
        </div>

        <div className="mesh-device-list">
          {devices.map((device) => (
            <div
              key={device.id}
              className="mesh-device-item"
              onClick={() => onSelectDevice(device)}
              style={{
                borderLeft:
                  device.status === 'offline'
                    ? '3px solid #6b7280'
                    : `3px solid ${getSignalColor(device.signal)}`,
                background:
                  selectedDevice?.id === device.id
                    ? 'rgba(255, 255, 255, 0.08)'
                    : 'rgba(255, 255, 255, 0.02)',
              }}
            >
              <div className="mesh-device-header">
                <div className="mesh-device-icon-section">
                  <div className="mesh-device-role-icon">
                    {getRoleIcon(device.role)}
                  </div>
                  <div className="mesh-device-name">{device.name}</div>
                </div>
                <div className="mesh-device-status">
                  {device.status === 'offline' ? (
                    <span
                      style={{
                        color: '#6b7280',
                        fontSize: '10px',
                        fontWeight: '700',
                      }}
                    >
                      OFFLINE
                    </span>
                  ) : device.internet ? (
                    <Globe size={12} style={{ color: '#10b981' }} />
                  ) : null}
                </div>
              </div>

              <div className="mesh-device-details">
                <div className="mesh-detail-row">
                  <span className="mesh-detail-label">Signal:</span>
                  <div className="mesh-detail-value">
                    {getSignalIcon(device.signal)}
                    <span>{device.signal}</span>
                  </div>
                </div>
                {device.hops !== null && (
                  <div className="mesh-detail-row">
                    <span className="mesh-detail-label">Hops:</span>
                    <span className="mesh-detail-value">{device.hops}</span>
                  </div>
                )}
                {device.battery > 0 && (
                  <div className="mesh-detail-row">
                    <span className="mesh-detail-label">Battery:</span>
                    <span className="mesh-detail-value">{device.battery}%</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeshDeviceList;
