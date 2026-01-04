import React from 'react';
import { AlertTriangle } from 'lucide-react';

const MapZoneSummary = ({ zones }) => {
  return (
    <div className="map-summary-panel glass-panel">
      <div className="map-panel-header">
        <h3 className="map-panel-title">
          <AlertTriangle size={18} style={{ color: '#f59e0b' }} />
          Zone Summary
        </h3>
      </div>

      <div className="map-zone-summary-list">
        {zones.map((zone) => (
          <div key={zone.id} className="map-zone-summary-item">
            <div
              className="map-zone-summary-dot"
              style={{
                backgroundColor:
                  zone.type === 'heat'
                    ? '#ef4444'
                    : zone.type === 'internet'
                      ? '#3b82f6'
                      : '#6b7280',
              }}
            />
            <div className="map-zone-summary-info">
              <div className="map-zone-summary-name">{zone.name}</div>
              <div className="map-zone-summary-stat">Radius: {zone.radius}km</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapZoneSummary;
