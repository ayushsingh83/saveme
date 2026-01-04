import React from 'react';
import { Network, Radio, Globe, Settings, AlertTriangle, CheckCircle } from 'lucide-react';

const MeshNetworkGraph = ({ layers, gateways, devices, toggleLayer, getSignalColor }) => {
  return (
    <div className="mesh-center-column">
      <div className="mesh-graph-container glass-panel">
        <div className="mesh-graph-header">
          <h3 className="mesh-panel-title">
            <Network size={18} style={{ color: '#3b82f6' }} />
            Network Topology
          </h3>
          <div className="mesh-layer-toggles">
            <label className="mesh-mini-toggle">
              <input
                type="checkbox"
                checked={layers.meshLinks}
                onChange={() => toggleLayer('meshLinks')}
              />
              <span>Mesh</span>
            </label>
            <label className="mesh-mini-toggle">
              <input
                type="checkbox"
                checked={layers.gateways}
                onChange={() => toggleLayer('gateways')}
              />
              <span>Gateways</span>
            </label>
            <label className="mesh-mini-toggle">
              <input
                type="checkbox"
                checked={layers.internetFlow}
                onChange={() => toggleLayer('internetFlow')}
              />
              <span>Internet</span>
            </label>
          </div>
        </div>

        <div className="mesh-graph-canvas">
          {/* Gateway Nodes */}
          {layers.gateways &&
            gateways.map((gateway, idx) => (
              <div
                key={gateway.id}
                className="mesh-node mesh-node-gateway"
                style={{
                  left: idx === 0 ? '25%' : '75%',
                  top: '30%',
                }}
              >
                <div className="mesh-node-inner">
                  <Radio size={18} style={{ color: '#3b82f6' }} />
                </div>
                <div className="mesh-node-label">{gateway.name}</div>
              </div>
            ))}

          {/* User Device Nodes */}
          {layers.meshLinks &&
            devices
              .filter((d) => d.role === 'user' || d.role === 'relay')
              .map((device, idx) => (
                <div
                  key={device.id}
                  className={`mesh-node ${
                    device.status === 'offline' ? 'offline' : ''
                  }`}
                  style={{
                    left: `${20 + (idx % 4) * 20}%`,
                    top: `${50 + Math.floor(idx / 4) * 25}%`,
                    borderColor: getSignalColor(device.signal),
                  }}
                >
                  <div className="mesh-node-inner">
                    {device.role === 'relay' ? (
                      <Network size={14} style={{ color: '#8b5cf6' }} />
                    ) : (
                      <i className="ri-wifi-line" style={{ color: '#10b981' }} />
                    )}
                  </div>
                  <div className="mesh-node-label">{device.name}</div>
                </div>
              ))}

          {/* Internet Flow Lines */}
          {layers.internetFlow && (
            <svg className="mesh-flow-lines">
              {devices
                .filter((d) => d.internet && d.role === 'user')
                .map((device, idx) => (
                  <line
                    key={`flow-${device.id}`}
                    x1="25%"
                    y1="30%"
                    x2={`${20 + (idx % 4) * 20}%`}
                    y2={`${50 + Math.floor(idx / 4) * 25}%`}
                    className="mesh-flow-line"
                  />
                ))}
            </svg>
          )}

          {/* Internet Cloud */}
          {layers.internetFlow && (
            <div className="mesh-internet-cloud">
              <Globe size={24} style={{ color: '#22c55e' }} />
              <span>Internet</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MeshNetworkGraph;
