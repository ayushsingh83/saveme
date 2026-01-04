import React from 'react';
import { Database } from 'lucide-react';

const MeshDevicesTable = ({ devices, getSignalIcon, getRoleIcon, getSignalColor }) => {
  return (
    <div className="mesh-table-container glass-panel">
      <div className="mesh-panel-header">
        <h3 className="mesh-panel-title">
          <Database size={18} style={{ color: '#3b82f6' }} />
          Device Details
        </h3>
      </div>

      <table className="mesh-devices-table">
        <thead>
          <tr>
            <th>Device</th>
            <th>Role</th>
            <th>Signal</th>
            <th>Connection</th>
            <th>Internet</th>
            <th>Battery</th>
          </tr>
        </thead>
        <tbody>
          {devices.map((device) => (
            <tr key={device.id}>
              <td>
                <div className="mesh-table-device">
                  <span className="mesh-table-icon">{getRoleIcon(device.role)}</span>
                  <div>
                    <div className="mesh-table-name">{device.name}</div>
                    <div className="mesh-table-id">{device.id}</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="mesh-table-badge mesh-table-role">
                  {device.role}
                </span>
              </td>
              <td>
                <div className="mesh-table-signal">
                  {getSignalIcon(device.signal)}
                  <span>{device.signal}</span>
                </div>
              </td>
              <td>
                <span className="mesh-table-hops">
                  {device.hops !== null ? `${device.hops} hops` : '—'}
                </span>
              </td>
              <td>
                <span
                  className="mesh-table-badge"
                  style={{
                    backgroundColor: device.internet
                      ? 'rgba(34, 197, 94, 0.2)'
                      : 'rgba(107, 114, 128, 0.2)',
                    color: device.internet ? '#22c55e' : '#9ca3af',
                  }}
                >
                  {device.internet ? 'Yes' : 'No'}
                </span>
              </td>
              <td>
                <div className="mesh-table-battery">
                  <div
                    className="mesh-battery-bar"
                    style={{
                      width: `${device.battery}%`,
                      backgroundColor:
                        device.battery > 50
                          ? '#10b981'
                          : device.battery > 20
                            ? '#f59e0b'
                            : '#ef4444',
                    }}
                  />
                  <span>{device.battery}%</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MeshDevicesTable;
