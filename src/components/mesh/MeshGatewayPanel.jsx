import React from 'react';
import { Radio, AlertTriangle, CheckCircle } from 'lucide-react';

const MeshGatewayPanel = ({ gateways }) => {
  return (
    <div className="mesh-gateway-panel glass-panel">
      <div className="mesh-panel-header">
        <h3 className="mesh-panel-title">
          <Radio size={18} style={{ color: '#10b981' }} />
          Gateway Status
        </h3>
      </div>

      <div className="mesh-gateway-list">
        {gateways.map((gateway) => (
          <div key={gateway.id} className="mesh-gateway-item">
            <div className="mesh-gateway-info">
              <div className="mesh-gateway-name">{gateway.name}</div>
              <div className="mesh-gateway-stats">
                <span>
                  {gateway.connected} devices • {gateway.frequency}
                </span>
              </div>
            </div>
            <div className="mesh-gateway-actions">
              <button className="mesh-btn-mini mesh-btn-active">
                <CheckCircle size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeshGatewayPanel;
