import React from 'react';
import { AlertCircle, Home, Wifi, AlertTriangle } from 'lucide-react';

const MapLegend = () => {
  const legendItems = [
    {
      label: 'Medical Emergency',
      icon: AlertCircle,
      color: '#ef4444',
      type: 'sos',
    },
    {
      label: 'Flood Zone',
      icon: AlertTriangle,
      color: '#f59e0b',
      type: 'sos',
    },
    {
      label: 'Fire Alert',
      icon: AlertTriangle,
      color: '#dc2626',
      type: 'sos',
    },
    {
      label: 'Shelter',
      icon: Home,
      color: '#10b981',
      type: 'shelter',
    },
    {
      label: 'Internet Zone',
      icon: Wifi,
      color: '#3b82f6',
      type: 'zone',
    },
    {
      label: 'High Risk',
      icon: AlertTriangle,
      color: '#ef4444',
      type: 'zone',
    },
  ];

  return (
    <div className="map-legend">
      <div className="map-legend-title">Legend</div>
      <div className="map-legend-items">
        {legendItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="map-legend-item">
              <div
                className="map-legend-icon"
                style={{ color: item.color }}
              >
                <Icon size={12} />
              </div>
              <span className="map-legend-label">{item.label}</span>
            </div>
          );
        })}
      </div>

      <div className="map-legend-section">
        <div className="map-legend-section-title">Status Codes</div>
        <div className="map-legend-status-list">
          <div className="map-legend-status">
            <span className="map-legend-status-dot" style={{ backgroundColor: '#ef4444' }} />
            <span>New / Urgent</span>
          </div>
          <div className="map-legend-status">
            <span className="map-legend-status-dot" style={{ backgroundColor: '#fbbf24' }} />
            <span>Assigned</span>
          </div>
          <div className="map-legend-status">
            <span className="map-legend-status-dot" style={{ backgroundColor: '#3b82f6' }} />
            <span>In Progress</span>
          </div>
          <div className="map-legend-status">
            <span className="map-legend-status-dot" style={{ backgroundColor: '#10b981' }} />
            <span>Resolved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapLegend;
