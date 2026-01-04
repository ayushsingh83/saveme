import React, { useState, useMemo } from 'react';
import {
  Wifi,
  Radio,
  Signal,
  AlertCircle,
  Network,
  Database,
} from 'lucide-react';
import MeshPageHeader from '../../components/mesh/MeshPageHeader';
import MeshStatsGrid from '../../components/mesh/MeshStatsGrid';
import MeshDeviceListPanel from '../../components/mesh/MeshDeviceListPanel';
import MeshNetworkGraph from '../../components/mesh/MeshNetworkGraph';
import MeshGatewayPanel from '../../components/mesh/MeshGatewayPanel';
import MeshControlsPanel from '../../components/mesh/MeshControlsPanel';
import MeshFailoverPanel from '../../components/mesh/MeshFailoverPanel';
import MeshDevicesTable from '../../components/mesh/MeshDevicesTable';
import './MeshInternetPage.css';

const MeshInternetPage = () => {
  const [layers, setLayers] = useState({
    meshLinks: true,
    gateways: true,
    internetFlow: true,
    offlineNodes: true,
  });

  const [selectedDevice, setSelectedDevice] = useState(null);
  const [autoOptimize, setAutoOptimize] = useState(false);

  // Mock Devices Data
  const devices = useMemo(
    () => [
      {
        id: 'DEV-001',
        name: 'Gateway A',
        role: 'gateway',
        signal: 'strong',
        hops: 0,
        internet: true,
        distance: 'Self',
        connected: 8,
        status: 'active',
        frequency: '2.4GHz',
      },
      {
        id: 'DEV-002',
        name: 'User Device 1',
        role: 'user',
        signal: 'strong',
        hops: 1,
        internet: true,
        distance: '1.2 km',
        connectedTo: 'DEV-001',
        status: 'active',
        battery: 87,
      },
      {
        id: 'DEV-003',
        name: 'User Device 2',
        role: 'user',
        signal: 'medium',
        hops: 2,
        internet: true,
        distance: '2.1 km',
        connectedTo: 'DEV-001',
        status: 'active',
        battery: 62,
      },
      {
        id: 'DEV-004',
        name: 'Gateway B',
        role: 'gateway',
        signal: 'strong',
        hops: 0,
        internet: true,
        distance: 'Self',
        connected: 6,
        status: 'active',
        frequency: '5GHz',
      },
      {
        id: 'DEV-005',
        name: 'User Device 3',
        role: 'user',
        signal: 'medium',
        hops: 1,
        internet: true,
        distance: '1.8 km',
        connectedTo: 'DEV-004',
        status: 'active',
        battery: 45,
      },
      {
        id: 'DEV-006',
        name: 'User Device 4',
        role: 'user',
        signal: 'weak',
        hops: 3,
        internet: false,
        distance: '3.2 km',
        connectedTo: 'DEV-001',
        status: 'active',
        battery: 28,
      },
      {
        id: 'DEV-007',
        name: 'Relay Node 1',
        role: 'relay',
        signal: 'strong',
        hops: 1,
        internet: false,
        distance: '1.5 km',
        connectedTo: 'DEV-001',
        status: 'active',
        battery: 75,
      },
      {
        id: 'DEV-008',
        name: 'User Device 5',
        role: 'user',
        signal: 'medium',
        hops: 2,
        internet: true,
        distance: '2.5 km',
        connectedTo: 'DEV-004',
        status: 'active',
        battery: 92,
      },
      {
        id: 'DEV-009',
        name: 'Offline Device',
        role: 'user',
        signal: 'offline',
        hops: null,
        internet: false,
        distance: 'Unknown',
        connectedTo: null,
        status: 'offline',
        battery: 0,
      },
      {
        id: 'DEV-010',
        name: 'Relay Node 2',
        role: 'relay',
        signal: 'medium',
        hops: 2,
        internet: false,
        distance: '2.8 km',
        connectedTo: 'DEV-004',
        status: 'active',
        battery: 58,
      },
    ],
    []
  );

  const gateways = devices.filter((d) => d.role === 'gateway');
  const activeDevices = devices.filter((d) => d.status === 'active').length;
  const internetDevices = devices.filter((d) => d.internet).length;
  const avgSignal =
    devices.filter((d) => d.signal !== 'offline').length > 0
      ? 'Strong'
      : 'Weak';

  const toggleLayer = (layerName) => {
    setLayers((prev) => ({
      ...prev,
      [layerName]: !prev[layerName],
    }));
  };

  const getSignalColor = (signal) => {
    switch (signal) {
      case 'strong':
        return '#10b981';
      case 'medium':
        return '#f59e0b';
      case 'weak':
        return '#ef4444';
      case 'offline':
        return '#6b7280';
      default:
        return '#3b82f6';
    }
  };

  const getSignalIcon = (signal) => {
    switch (signal) {
      case 'strong':
        return <Signal size={14} style={{ color: '#10b981' }} />;
      case 'medium':
        return <Signal size={14} style={{ color: '#f59e0b' }} />;
      case 'weak':
        return <Signal size={14} style={{ color: '#ef4444' }} />;
      case 'offline':
        return <AlertCircle size={14} style={{ color: '#6b7280' }} />;
      default:
        return <Wifi size={14} />;
    }
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case 'gateway':
        return <Radio size={14} style={{ color: '#3b82f6' }} />;
      case 'relay':
        return <Network size={14} style={{ color: '#8b5cf6' }} />;
      default:
        return <Wifi size={14} style={{ color: '#10b981' }} />;
    }
  };

  return (
    <div className="mesh-internet-page">
      {/* Page Header */}
      <MeshPageHeader 
        autoOptimize={autoOptimize}
        onAutoOptimizeChange={setAutoOptimize}
      />

      {/* Summary Stats */}
      <MeshStatsGrid 
        devices={devices}
        gateways={gateways}
        internetDevices={internetDevices}
        avgSignal={avgSignal}
      />

      {/* Main Content Grid */}
      <div className="mesh-content-grid">
        {/* Left Panel - Device List */}
        <MeshDeviceListPanel 
          devices={devices}
          selectedDevice={selectedDevice}
          onSelectDevice={setSelectedDevice}
          getSignalIcon={getSignalIcon}
          getRoleIcon={getRoleIcon}
          getSignalColor={getSignalColor}
        />

        {/* Center - Network Graph */}
        <MeshNetworkGraph 
          layers={layers}
          gateways={gateways}
          devices={devices}
          toggleLayer={toggleLayer}
          getSignalColor={getSignalColor}
        />

        {/* Right Panel - Gateway & Controls */}
        <div className="mesh-right-panel">
          {/* Gateway Status */}
          <MeshGatewayPanel gateways={gateways} />

          {/* Mesh Controls */}
          <MeshControlsPanel />

          {/* Failover Status */}
          <MeshFailoverPanel />
        </div>
      </div>

      {/* Bottom Table */}
      <div className="mesh-table-container glass-panel">
        <div className="mesh-panel-header">
          <h3 className="mesh-panel-title">
            <Database size={18} style={{ color: '#3b82f6' }} />
            Device Details
          </h3>
        </div>

        <MeshDevicesTable 
          devices={devices}
          getSignalIcon={getSignalIcon}
          getRoleIcon={getRoleIcon}
        />
      </div>
    </div>
  );
};

export default MeshInternetPage;
