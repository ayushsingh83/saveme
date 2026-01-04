import React, { useState, useMemo } from 'react';
import MapPageHeader from '../../components/maps/MapPageHeader';
import MapSOSList from '../../components/maps/MapSOSList';
import MapCanvas from '../../components/maps/MapCanvas';
import MapZoneSummary from '../../components/maps/MapZoneSummary';
import MapLayerToggle from '../../components/maps/MapLayerToggle';
import MapLegend from '../../components/maps/MapLegend';
import DisasterMapPanel from '../../components/maps/DisasterMapPanel';
import {
  AlertCircle,
  Wifi,
  Radio,
  AlertTriangle,
  Activity,
} from 'lucide-react';
import './DisasterMapPage.css';
const DisasterMapPage = () => {
  const [layers, setLayers] = useState({
    sosMarkers: true,
    heatmap: true,
    shelters: true,
    internetZones: true,
    offlineZones: true,
  });

  const [selectedMarker, setSelectedMarker] = useState(null);

  // Mock SOS Markers
  const sosMarkers = useMemo(
    () => [
      {
        id: 'SOS-001',
        name: 'Abby Johnson',
        type: 'Medical',
        location: 'Medical Clinic K',
        distance: '1.2 km',
        x: 35,
        y: 25,
        status: 'Assigned',
        triggered: 480, // 8 min ago
        connectivity: 'strong',
        priority: 'urgent',
      },
      {
        id: 'SOS-002',
        name: 'Cherry Patel',
        type: 'Flood',
        location: 'Flood Zone B',
        distance: '840 m',
        x: 55,
        y: 60,
        status: 'In Progress',
        triggered: 600, // 10 min ago
        connectivity: 'medium',
        priority: 'critical',
      },
      {
        id: 'SOS-003',
        name: 'Taylor Wilson',
        type: 'Trapped',
        location: 'Ryan M.',
        distance: '5.2 km',
        x: 75,
        y: 40,
        status: 'New',
        triggered: 120, // 2 min ago
        connectivity: 'weak',
        priority: 'urgent',
      },
      {
        id: 'SOS-004',
        name: 'Raheel Bhaskar',
        type: 'Fire',
        location: 'Warehouse',
        distance: '1.9 km',
        x: 25,
        y: 70,
        status: 'Assigned',
        triggered: 840, // 14 min ago
        connectivity: 'strong',
        priority: 'critical',
      },
      {
        id: 'SOS-005',
        name: 'Judy Smith',
        type: 'Offline',
        location: 'Mesh Network',
        distance: '280 m',
        x: 65,
        y: 75,
        status: 'New',
        triggered: 1440, // 24 min ago
        connectivity: 'offline',
        priority: 'medium',
      },
    ],
    []
  );

  // Mock Shelters
  const shelters = useMemo(
    () => [
      {
        id: 'SH-001',
        name: 'Relief Camp A',
        x: 20,
        y: 15,
        capacity: 500,
        occupancy: 320,
      },
      {
        id: 'SH-002',
        name: 'Community Center B',
        x: 70,
        y: 80,
        capacity: 300,
        occupancy: 145,
      },
    ],
    []
  );

  // Mock Zones
  const zones = useMemo(
    () => [
      {
        id: 'ZONE-1',
        type: 'heat',
        name: 'High Risk Flood Zone',
        x: 55,
        y: 65,
        radius: 15,
      },
      {
        id: 'ZONE-2',
        type: 'internet',
        name: 'Internet Coverage',
        x: 40,
        y: 50,
        radius: 25,
      },
      {
        id: 'ZONE-3',
        type: 'offline',
        name: 'Offline Dead Zone',
        x: 80,
        y: 30,
        radius: 12,
      },
    ],
    []
  );

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Medical':
        return <AlertCircle size={16} />;
      case 'Flood':
        return <AlertTriangle size={16} />;
      case 'Fire':
        return <AlertTriangle size={16} />;
      case 'Trapped':
        return <Activity size={16} />;
      case 'Offline':
        return <Radio size={16} />;
      default:
        return <AlertCircle size={16} />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Medical':
        return '#ef4444';
      case 'Flood':
        return '#f59e0b';
      case 'Fire':
        return '#dc2626';
      case 'Trapped':
        return '#f97316';
      case 'Offline':
        return '#6b7280';
      default:
        return '#3b82f6';
    }
  };

  const getConnectivityIcon = (connectivity) => {
    switch (connectivity) {
      case 'strong':
        return <Wifi size={14} style={{ color: '#10b981' }} />;
      case 'medium':
        return <Wifi size={14} style={{ color: '#fbbf24' }} />;
      case 'weak':
        return <Wifi size={14} style={{ color: '#ef4444' }} />;
      case 'offline':
        return <AlertTriangle size={14} style={{ color: '#6b7280' }} />;
      default:
        return <Wifi size={14} />;
    }
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'New':
        return '#ef4444';
      case 'Assigned':
        return '#fbbf24';
      case 'In Progress':
        return '#3b82f6';
      case 'Resolved':
        return '#10b981';
      default:
        return '#6b7280';
    }
  };

  const activeSOSCount = sosMarkers.filter((s) => s.status !== 'Resolved').length;

  const toggleLayer = (layerName) => {
    setLayers((prev) => ({
      ...prev,
      [layerName]: !prev[layerName],
    }));
  };

  const formatTime = (minutes) => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h`;
  };

  return (
    <div className="disaster-map-page">
      {/* Header */}
      <MapPageHeader 
        sosCount={activeSOSCount}
        sosTotal={sosMarkers.length}
        shelterCount={shelters.length}
        coverage={87}
      />

      {/* Main Content */}
      <div className="map-content-grid">
        {/* Left Panel - SOS List */}
        <MapSOSList 
          sosMarkers={sosMarkers}
          selectedMarker={selectedMarker}
          onSelectMarker={setSelectedMarker}
          getTypeIcon={getTypeIcon}
          getTypeColor={getTypeColor}
          getStatusBadgeColor={getStatusBadgeColor}
          getConnectivityIcon={getConnectivityIcon}
          formatTime={formatTime}
        />

        {/* Center - Map Canvas with Floating Controls */}
        <div className="map-center-column">
          <div className="map-container">
            {/* Floating Map Layers Panel - Top Left */}
            <div className="floating-map-control floating-layers-panel">
              <MapLayerToggle layers={layers} toggleLayer={toggleLayer} />
            </div>

            {/* Map Canvas */}
            <MapCanvas 
              layers={layers}
              zones={zones}
              shelters={shelters}
              sosMarkers={sosMarkers}
              selectedMarker={selectedMarker}
              onSelectMarker={setSelectedMarker}
              getTypeColor={getTypeColor}
            />

            {/* Floating Legend Panel - Bottom Left */}
            <div className="floating-map-control floating-legend-panel">
              <MapLegend />
            </div>
          </div>
        </div>

        {/* Right Panel - Summary */}
        <div className="map-right-panel">
          {/* Mesh Network Status */}
          <DisasterMapPanel type="mesh" markers={sosMarkers} shelters={shelters} />

          {/* Zone Summary */}
          <MapZoneSummary zones={zones} />
        </div>
      </div>
    </div>
  );
};

export default DisasterMapPage;
