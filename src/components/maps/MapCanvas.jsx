import React from 'react';
import { CheckCircle } from 'lucide-react';

const MapCanvas = ({ layers, zones, shelters, sosMarkers, selectedMarker, onSelectMarker, getTypeColor }) => {
  return (
    <div className="map-wrap">
      <div className="map-canvas">
        {/* Render Zones */}
        {layers.heatmap &&
          zones.map((zone) => (
            <div
              key={zone.id}
              className={`map-zone map-zone-${zone.type}`}
              style={{
                left: `${zone.x}%`,
                top: `${zone.y}%`,
                width: `${zone.radius * 2}%`,
                height: `${zone.radius * 2}%`,
              }}
            />
          ))}

        {/* Render Shelters */}
        {layers.shelters &&
          shelters.map((shelter) => (
            <div
              key={shelter.id}
              className="map-shelter"
              style={{
                left: `${shelter.x}%`,
                top: `${shelter.y}%`,
              }}
            >
              <div className="map-shelter-icon">
                <CheckCircle size={20} style={{ color: '#10b981' }} />
              </div>
              <div className="map-shelter-tooltip">
                <div className="map-shelter-name">{shelter.name}</div>
                <div className="map-shelter-occupancy">
                  {shelter.occupancy}/{shelter.capacity}
                </div>
              </div>
            </div>
          ))}

        {/* Render SOS Markers */}
        {layers.sosMarkers &&
          sosMarkers.map((marker) => (
            <div
              key={marker.id}
              className="map-marker"
              style={{
                left: `${marker.x}%`,
                top: `${marker.y}%`,
                borderColor: getTypeColor(marker.type),
              }}
              onClick={() => onSelectMarker(marker)}
            >
              <div className="map-marker-pulse" />
              <div
                className="map-marker-inner"
                style={{
                  backgroundColor: getTypeColor(marker.type),
                }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MapCanvas;
