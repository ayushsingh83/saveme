import React from 'react';
import { AlertCircle, Phone } from 'lucide-react';

const MapMarkerPopup = ({ marker, onClose, getTypeIcon, getStatusBadgeColor, getConnectivityIcon, formatTime }) => {
  if (!marker) return null;

  return (
    <div
      className="map-marker-popup glass-panel"
      style={{
        left: `${marker.x}%`,
        top: `${marker.y}%`,
      }}
    >
      <button
        className="map-popup-close"
        onClick={onClose}
      >
        ✕
      </button>
      <div className="map-popup-header">
        <h4 className="map-popup-title">{marker.id}</h4>
        <span
          className="map-popup-status"
          style={{
            backgroundColor: getStatusBadgeColor(marker.status),
          }}
        >
          {marker.status}
        </span>
      </div>

      <div className="map-popup-content">
        <div className="map-popup-row">
          <span className="map-popup-label">Person</span>
          <span className="map-popup-value">{marker.name}</span>
        </div>
        <div className="map-popup-row">
          <span className="map-popup-label">Emergency</span>
          <div className="map-popup-value-with-icon">
            {getTypeIcon(marker.type)}
            <span>{marker.type}</span>
          </div>
        </div>
        <div className="map-popup-row">
          <span className="map-popup-label">Location</span>
          <span className="map-popup-value">{marker.location}</span>
        </div>
        <div className="map-popup-row">
          <span className="map-popup-label">Time</span>
          <span className="map-popup-value">
            {formatTime(marker.triggered)} ago
          </span>
        </div>
        <div className="map-popup-row">
          <span className="map-popup-label">Connectivity</span>
          <div className="map-popup-value-with-icon">
            {getConnectivityIcon(marker.connectivity)}
            <span>{marker.connectivity}</span>
          </div>
        </div>
      </div>

      <div className="map-popup-actions">
        <button className="map-popup-btn map-popup-btn-primary">
          <Phone size={14} />
          Call
        </button>
        <button className="map-popup-btn map-popup-btn-secondary">
          View Details
        </button>
      </div>
    </div>
  );
};

export default MapMarkerPopup;
