import React from 'react';
import { MapPin, AlertCircle, Home, Wifi, WifiOff } from 'lucide-react';

const MapLayerToggle = ({ layers, toggleLayer }) => {
  const layerConfig = [
    {
      id: 'sosMarkers',
      label: 'SOS Markers',
      icon: AlertCircle,
      color: '#ef4444',
    },
    {
      id: 'heatmap',
      label: 'Heat Map',
      icon: AlertCircle,
      color: '#f59e0b',
    },
    {
      id: 'shelters',
      label: 'Shelters',
      icon: Home,
      color: '#10b981',
    },
    {
      id: 'internetZones',
      label: 'Internet',
      icon: Wifi,
      color: '#3b82f6',
    },
    {
      id: 'offlineZones',
      label: 'Offline',
      icon: WifiOff,
      color: '#6b7280',
    },
  ];

  return (
    <div className="map-layer-toggle">
      <div className="map-layer-title">Map Layers</div>
      <div className="map-layer-items">
        {layerConfig.map((layer) => {
          const Icon = layer.icon;
          return (
            <label key={layer.id} className="map-layer-item">
              <input
                type="checkbox"
                checked={layers[layer.id]}
                onChange={() => toggleLayer(layer.id)}
                className="map-layer-checkbox"
              />
              <span className="map-layer-indicator" style={{ color: layer.color }}>
                <Icon size={14} />
              </span>
              <span className="map-layer-label">{layer.label}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default MapLayerToggle;
