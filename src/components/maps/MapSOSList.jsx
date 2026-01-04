import React, { useState } from 'react';
import { AlertCircle, MapPin, Clock } from 'lucide-react';

const MapSOSList = ({ sosMarkers, selectedMarker, onSelectMarker, getTypeIcon, getTypeColor, getStatusBadgeColor, getConnectivityIcon, formatTime }) => {
  const [expandedSOSId, setExpandedSOSId] = useState(null);
  const activeSOSCount = sosMarkers.filter((s) => s.status !== 'Resolved').length;

  const handleSOSClick = (sos) => {
    setExpandedSOSId(expandedSOSId === sos.id ? null : sos.id);
    onSelectMarker(sos);
  };

  return (
    <div className="map-left-panel">
      <div className="map-sos-container glass-panel">
        <div className="map-panel-header">
          <h3 className="map-panel-title">
            <AlertCircle size={18} style={{ color: '#ef4444' }} />
            Active SOS Requests
          </h3>
          <span className="map-sos-count">{activeSOSCount}</span>
        </div>

        <div className="map-sos-list">
          {sosMarkers.map((sos) => (
            <div
              key={sos.id}
              className={`map-sos-item ${expandedSOSId === sos.id ? 'expanded' : ''}`}
              style={{
                borderLeft: `4px solid ${getTypeColor(sos.type)}`,
              }}
            >
              {/* SOS Summary - Click to expand/collapse */}
              <div
                className="map-sos-summary"
                onClick={() => handleSOSClick(sos)}
              >
                <div className="map-sos-header">
                  <div className="map-sos-name-section">
                    <div className="map-sos-avatar">
                      {sos.name.split(' ')[0][0]}
                      {sos.name.split(' ')[1][0]}
                    </div>
                    <div className="map-sos-info">
                      <div className="map-sos-name">{sos.name}</div>
                      <div className="map-sos-type">
                        {getTypeIcon(sos.type)}
                        <span>{sos.type}</span>
                      </div>
                    </div>
                  </div>
                  <span
                    className="map-sos-status-badge"
                    style={{
                      backgroundColor: getStatusBadgeColor(sos.status),
                    }}
                  >
                    {sos.status}
                  </span>
                </div>

                <div className="map-sos-compact-details">
                  <div className="map-sos-detail-row">
                    <MapPin size={12} />
                    <span>{sos.location}</span>
                    <span className="map-sos-distance">{sos.distance}</span>
                  </div>
                  <div className="map-sos-detail-row">
                    <Clock size={12} />
                    <span>{formatTime(sos.triggered)} ago</span>
                  </div>
                </div>

                <div className="map-sos-footer">
                  <div className="map-sos-connectivity">
                    {getConnectivityIcon(sos.connectivity)}
                    <span>{sos.connectivity}</span>
                  </div>
                </div>
              </div>

              {/* SOS Expanded Details - Shown inline below summary */}
              {expandedSOSId === sos.id && (
                <div className="map-sos-expanded">
                  <div className="map-sos-expanded-content">
                    <div className="map-sos-expanded-row">
                      <span className="map-sos-expanded-label">Request ID</span>
                      <span className="map-sos-expanded-value">{sos.id}</span>
                    </div>
                    <div className="map-sos-expanded-row">
                      <span className="map-sos-expanded-label">Status</span>
                      <span className="map-sos-expanded-value">{sos.status}</span>
                    </div>
                    <div className="map-sos-expanded-row">
                      <span className="map-sos-expanded-label">Priority</span>
                      <span className="map-sos-expanded-value" style={{ textTransform: 'capitalize' }}>
                        {sos.priority}
                      </span>
                    </div>
                    <div className="map-sos-expanded-row">
                      <span className="map-sos-expanded-label">Location</span>
                      <span className="map-sos-expanded-value">{sos.location}</span>
                    </div>
                    <div className="map-sos-expanded-row">
                      <span className="map-sos-expanded-label">Time Elapsed</span>
                      <span className="map-sos-expanded-value">{formatTime(sos.triggered)} ago</span>
                    </div>
                    <div className="map-sos-expanded-row">
                      <span className="map-sos-expanded-label">Connectivity</span>
                      <span className="map-sos-expanded-value">{sos.connectivity}</span>
                    </div>
                  </div>
                  <div className="map-sos-expanded-actions">
                    <button className="map-sos-action-btn-primary">Call Now</button>
                    <button className="map-sos-action-btn-secondary">Assign</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapSOSList;
