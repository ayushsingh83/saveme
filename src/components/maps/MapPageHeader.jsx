import React from 'react';
import { AlertTriangle, Activity, CheckCircle, Wifi } from 'lucide-react';

const MapPageHeader = ({ sosCount, sosTotal, shelterCount, coverage }) => {
  return (
    <div className="map-page-header">
      <div className="map-page-title-section">
        <h1 className="map-page-title">
          <AlertTriangle size={28} style={{ color: '#ef4444' }} />
          Disaster Map
        </h1>
        <div className="map-stats-bar">
          <div className="map-stat-item">
            <div className="map-stat-icon">
              <AlertTriangle size={20} style={{ color: '#ef4444' }} />
            </div>
            <div className="map-stat-content">
              <span className="map-stat-label">Active SOS</span>
              <span className="map-stat-value">{sosCount}</span>
            </div>
          </div>
          <div className="map-stat-item">
            <div className="map-stat-icon">
              <Activity size={20} style={{ color: '#3b82f6' }} />
            </div>
            <div className="map-stat-content">
              <span className="map-stat-label">Total Requests</span>
              <span className="map-stat-value">{sosTotal}</span>
            </div>
          </div>
          <div className="map-stat-item">
            <div className="map-stat-icon">
              <CheckCircle size={20} style={{ color: '#10b981' }} />
            </div>
            <div className="map-stat-content">
              <span className="map-stat-label">Shelters</span>
              <span className="map-stat-value">{shelterCount}</span>
            </div>
          </div>
          <div className="map-stat-item">
            <div className="map-stat-icon">
              <Wifi size={20} style={{ color: '#10b981' }} />
            </div>
            <div className="map-stat-content">
              <span className="map-stat-label">Coverage</span>
              <span className="map-stat-value">{coverage}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPageHeader;
