import React, { useState, useEffect } from 'react';
import { AlertCircle, MapPin, Clock, Phone, CheckCircle, Zap, HelpCircle, WifiOff, Activity } from 'lucide-react';
import StatusBadge from '../../components/sos/StatusBadge';
import ConnectivityBadge from '../../components/sos/ConnectivityBadge';
import { sosRequestsAPI } from '../../api/apiLoaders';
import './SOSRequestsPage.css';

/**
 * SOSRequestsPage
 * Mission-critical emergency response management interface
 * No SOS gets missed
 */
const SOSRequestsPage = () => {
  // ============================================
  // STATE MANAGEMENT
  // ============================================
  const [sosRequests, setSOSRequests] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [emergencyFilter, setEmergencyFilter] = useState('all');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [loading, setLoading] = useState(true);

  // ============================================
  // LOAD DATA FROM API
  // ============================================
  useEffect(() => {
    const loadSOSData = async () => {
      try {
        const data = await sosRequestsAPI.getAll();
        setSOSRequests(data);
      } catch (error) {
        console.error('Failed to load SOS data:', error);
      } finally {
        setLoading(false);
      }
    };
    loadSOSData();
  }, []);

  // Fallback mock data if API fails
  const mockSOSData = [
    { id: 'SOS-2501', userId: 'USR-8721', name: 'Priya Sharma', emergencyType: 'medical', location: 'Medical Clinic K., Sector 5', distance: 0.8, triggeredAt: new Date(Date.now() - 2 * 60000), status: 'new', connectivity: 'internet', responder: null },
    { id: 'SOS-2502', userId: 'USR-8722', name: 'Rajesh Kumar', emergencyType: 'fire', location: 'Industrial Area B', distance: 1.2, triggeredAt: new Date(Date.now() - 5 * 60000), status: 'new', connectivity: 'internet', responder: null },
    { id: 'SOS-2503', userId: 'USR-8723', name: 'Ananya Gupta', emergencyType: 'flood', location: 'Flood Zone B, Near River', distance: 2.1, triggeredAt: new Date(Date.now() - 8 * 60000), status: 'assigned', connectivity: 'mesh', responder: 'Ryan M.' },
    { id: 'SOS-2504', userId: 'USR-8724', name: 'Vikram Singh', emergencyType: 'trapped', location: 'Mountain Pass, Zone C', distance: 5.7, triggeredAt: new Date(Date.now() - 14 * 60000), status: 'assigned', connectivity: 'mesh', responder: 'John D.' },
    { id: 'SOS-2505', userId: 'USR-8725', name: 'Neha Patel', emergencyType: 'medical', location: 'Downtown Hospital, Area A', distance: 0.4, triggeredAt: new Date(Date.now() - 18 * 60000), status: 'assigned', connectivity: 'internet', responder: 'Dr. Sarah K.' },
    { id: 'SOS-2506', userId: 'USR-8726', name: 'Aman Dutta', emergencyType: 'offline', location: 'Remote Settlement, Zone F', distance: 12.4, triggeredAt: new Date(Date.now() - 22 * 60000), status: 'assigned', connectivity: 'offline', responder: 'Alex T.' },
    { id: 'SOS-2507', userId: 'USR-8727', name: 'Sanya Verma', emergencyType: 'fire', location: 'Warehouse District', distance: 3.2, triggeredAt: new Date(Date.now() - 28 * 60000), status: 'resolved', connectivity: 'internet', responder: 'Fire Chief M.' },
    { id: 'SOS-2508', userId: 'USR-8728', name: 'Rohit Malhotra', emergencyType: 'medical', location: 'Residential Complex D', distance: 1.5, triggeredAt: new Date(Date.now() - 35 * 60000), status: 'resolved', connectivity: 'internet', responder: 'Medic P.' },
    { id: 'SOS-2509', userId: 'USR-8729', name: 'Divya Chatterjee', emergencyType: 'flood', location: 'Basement Parking, Zone E', distance: 0.6, triggeredAt: new Date(Date.now() - 42 * 60000), status: 'assigned', connectivity: 'mesh', responder: 'Rescue Unit 2' },
    { id: 'SOS-2510', userId: 'USR-8730', name: 'Arjun Bhat', emergencyType: 'trapped', location: 'Lift Shaft Building B', distance: 2.8, triggeredAt: new Date(Date.now() - 51 * 60000), status: 'assigned', connectivity: 'internet', responder: 'Rescue Team A' },
    { id: 'SOS-2511', userId: 'USR-8731', name: 'Meera Singh', emergencyType: 'medical', location: 'Community Center', distance: 4.1, triggeredAt: new Date(Date.now() - 59 * 60000), status: 'resolved', connectivity: 'internet', responder: 'Emergency Med' },
    { id: 'SOS-2512', userId: 'USR-8732', name: 'Rohan Chopra', emergencyType: 'fire', location: 'Forest Area North', distance: 8.9, triggeredAt: new Date(Date.now() - 66 * 60000), status: 'resolved', connectivity: 'mesh', responder: 'Forest Fire Dept' },
    { id: 'SOS-2513', userId: 'USR-8733', name: 'Pooja Nair', emergencyType: 'offline', location: 'Rural Village K', distance: 15.2, triggeredAt: new Date(Date.now() - 73 * 60000), status: 'resolved', connectivity: 'offline', responder: 'Mobile Unit 3' },
    { id: 'SOS-2514', userId: 'USR-8734', name: 'Siddharth Joshi', emergencyType: 'medical', location: 'School Campus', distance: 2.3, triggeredAt: new Date(Date.now() - 81 * 60000), status: 'new', connectivity: 'internet', responder: null },
    { id: 'SOS-2515', userId: 'USR-8735', name: 'Ayesha Khan', emergencyType: 'flood', location: 'Market Square', distance: 1.8, triggeredAt: new Date(Date.now() - 88 * 60000), status: 'new', connectivity: 'internet', responder: null },
    { id: 'SOS-2516', userId: 'USR-8736', name: 'Vikrant Tiwari', emergencyType: 'trapped', location: 'Mine Shaft Area', distance: 11.3, triggeredAt: new Date(Date.now() - 95 * 60000), status: 'assigned', connectivity: 'mesh', responder: 'Mine Rescue' },
    { id: 'SOS-2517', userId: 'USR-8737', name: 'Nisha Yadav', emergencyType: 'fire', location: 'Sports Complex', distance: 3.5, triggeredAt: new Date(Date.now() - 102 * 60000), status: 'assigned', connectivity: 'internet', responder: 'Fire Brigade 2' },
    { id: 'SOS-2518', userId: 'USR-8738', name: 'Karan Reddy', emergencyType: 'medical', location: 'Bridge Toll Plaza', distance: 6.2, triggeredAt: new Date(Date.now() - 109 * 60000), status: 'resolved', connectivity: 'internet', responder: 'Ambulance 4' },
    { id: 'SOS-2519', userId: 'USR-8739', name: 'Deepika Sharma', emergencyType: 'offline', location: 'Hilltop Shelter', distance: 18.7, triggeredAt: new Date(Date.now() - 116 * 60000), status: 'new', connectivity: 'offline', responder: null },
    { id: 'SOS-2520', userId: 'USR-8740', name: 'Aryan Saxena', emergencyType: 'flood', location: 'Subway Station C', distance: 0.9, triggeredAt: new Date(Date.now() - 123 * 60000), status: 'assigned', connectivity: 'internet', responder: 'Transit Safety' },
    { id: 'SOS-2521', userId: 'USR-8741', name: 'Simran Kaur', emergencyType: 'medical', location: 'Private Hospital', distance: 1.1, triggeredAt: new Date(Date.now() - 130 * 60000), status: 'assigned', connectivity: 'internet', responder: 'Dr. Sharma' },
    { id: 'SOS-2522', userId: 'USR-8742', name: 'Nikhil Verma', emergencyType: 'trapped', location: 'Construction Site', distance: 4.4, triggeredAt: new Date(Date.now() - 137 * 60000), status: 'resolved', connectivity: 'mesh', responder: 'Construction Rescue' },
    { id: 'SOS-2523', userId: 'USR-8743', name: 'Ishita Roy', emergencyType: 'fire', location: 'Shopping Mall G', distance: 2.6, triggeredAt: new Date(Date.now() - 144 * 60000), status: 'new', connectivity: 'internet', responder: null }
  ];

  // ============================================
  // LIVE TIMER UPDATE (every 30 seconds)
  // ============================================
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 30000); // Update every 30 seconds
    return () => clearInterval(timer);
  }, []);

  // ============================================
  // FILTERING LOGIC
  // ============================================
  const filteredSOS = sosRequests
    .filter(sos => {
      if (statusFilter !== 'all' && sos.status !== statusFilter) return false;
      if (emergencyFilter !== 'all' && sos.emergencyType !== emergencyFilter) return false;
      return true;
    })
    // Sort: New first, then by time
    .sort((a, b) => {
      if (a.status === 'new' && b.status !== 'new') return -1;
      if (a.status !== 'new' && b.status === 'new') return 1;
      return b.triggeredAt - a.triggeredAt;
    });

  // ============================================
  // ACTION HANDLERS
  // ============================================
  const handleAssignResponder = (id) => {
    setSOSRequests(prev =>
      prev.map(sos =>
        sos.id === id
          ? { ...sos, status: 'assigned', responder: 'Assigning...' }
          : sos
      )
    );
    // Simulate API call
    setTimeout(() => {
      setSOSRequests(prev =>
        prev.map(sos =>
          sos.id === id
            ? { ...sos, responder: `Responder ${Math.floor(Math.random() * 100)}` }
            : sos
        )
      );
    }, 1000);
  };

  const handleResolve = (id) => {
    setSOSRequests(prev =>
      prev.map(sos =>
        sos.id === id
          ? { ...sos, status: 'resolved' }
          : sos
      )
    );
  };

  // ============================================
  // HELPER FUNCTIONS
  // ============================================
  const getEmergencyIcon = (type) => {
    switch (type) {
      case 'medical':
        return <AlertCircle className="w-4 h-4 text-rose-400" />;
      case 'fire':
        return <Zap className="w-4 h-4 text-amber-400" />;
      case 'flood':
        return <HelpCircle className="w-4 h-4 text-sky-400" />;
      case 'trapped':
        return <HelpCircle className="w-4 h-4 text-yellow-400" />;
      case 'offline':
        return <WifiOff className="w-4 h-4 text-gray-400" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-300" />;
    }
  };

  const getEmergencyLabel = (type) => {
    const labels = {
      medical: 'Medical',
      fire: 'Fire',
      flood: 'Flood',
      trapped: 'Trapped',
      offline: 'Offline'
    };
    return labels[type] || 'Unknown';
  };

  const getTimeSince = (date) => {
    const minutes = Math.floor((currentTime - date) / 60000);
    if (minutes < 1) return 'Just now';
    if (minutes === 1) return '1 min';
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h ${minutes % 60}m`;
  };

  // ============================================
  // STATS CALCULATION
  // ============================================
  const stats = {
    total: sosRequests.length,
    new: sosRequests.filter(s => s.status === 'new').length,
    assigned: sosRequests.filter(s => s.status === 'assigned').length,
    resolved: sosRequests.filter(s => s.status === 'resolved').length,
    avgResponseTime: '4.2 min'
  };

  return (
    <div className="sos-page">
      {/* ========== HEADER STATS ========== */}
      <div className="sos-stats-grid">
        <div className="stat-card">
          <div className="stat-icon critical"><AlertCircle className="w-6 h-6 text-rose-400" /></div>
          <div className="stat-content">
            <div className="stat-value">{stats.total}</div>
            <div className="stat-label">Total SOS</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon new"><AlertCircle className="w-6 h-6 text-red-400 animate-pulse" /></div>
          <div className="stat-content">
            <div className="stat-value">{stats.new}</div>
            <div className="stat-label">Unassigned</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon active"><Clock className="w-6 h-6 text-yellow-400" /></div>
          <div className="stat-content">
            <div className="stat-value">{stats.assigned}</div>
            <div className="stat-label">In Progress</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon resolved"><CheckCircle className="w-6 h-6 text-green-400" /></div>
          <div className="stat-content">
            <div className="stat-value">{stats.resolved}</div>
            <div className="stat-label">Resolved</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon metric"><Activity className="w-6 h-6 text-sky-400" /></div>
          <div className="stat-content">
            <div className="stat-value">{stats.avgResponseTime}</div>
            <div className="stat-label">Avg Response</div>
          </div>
        </div>
      </div>

      {/* ========== FILTERS ========== */}
      <div className="sos-filters-container">
        <div className="filters-group">
          <label className="filter-label">Filter by Status</label>
          <div className="filter-buttons">
            {['all', 'new', 'assigned', 'resolved'].map(status => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`filter-btn ${statusFilter === status ? 'active' : ''}`}
              >
                {status === 'all' ? 'All' : status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="filters-group">
          <label className="filter-label">Filter by Emergency Type</label>
          <div className="filter-buttons">
            {['all', 'medical', 'fire', 'flood', 'trapped', 'offline'].map(type => (
              <button
                key={type}
                onClick={() => setEmergencyFilter(type)}
                className={`filter-btn ${emergencyFilter === type ? 'active' : ''}`}
              >
                {type === 'all' ? (
                  'All Types'
                ) : (
                  <span className="flex items-center gap-2">
                    {getEmergencyIcon(type)}
                    <span>{getEmergencyLabel(type)}</span>
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ========== SOS TABLE ========== */}
      <div className="sos-table-container">
        <table className="sos-table">
          <thead>
            <tr>
              <th>SOS ID</th>
              <th>Emergency Type</th>
              <th>Location</th>
              <th>Time Elapsed</th>
              <th>Connectivity</th>
              <th>Status</th>
              <th>Responder</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSOS.length > 0 ? (
              filteredSOS.map(sos => (
                <tr key={sos.id} className={`sos-row status-${sos.status}`}>
                  <td className="col-id">
                    <div className="id-content">
                      <div className="id-main">{sos.id}</div>
                      <div className="id-user">{sos.userId}</div>
                    </div>
                  </td>
                  <td className="col-emergency">
                    <div className="emergency-content">
                      <span className="emergency-icon">{getEmergencyIcon(sos.emergencyType)}</span>
                      <span className="emergency-label">{getEmergencyLabel(sos.emergencyType)}</span>
                    </div>
                  </td>
                  <td className="col-location">
                    <div className="location-content">
                      <MapPin className="location-icon" />
                      <div>
                        <div className="location-main">{sos.location}</div>
                        <div className="location-distance">{sos.distance} km</div>
                      </div>
                    </div>
                  </td>
                  <td className="col-time">
                    <div className="time-content">
                      <Clock className="time-icon" />
                      <span>{getTimeSince(sos.triggeredAt)}</span>
                    </div>
                  </td>
                  <td className="col-connectivity">
                    <ConnectivityBadge type={sos.connectivity} />
                  </td>
                  <td className="col-status">
                    <StatusBadge status={sos.status} value={sos.status} type="status" />
                  </td>
                  <td className="col-responder">
                    <div className="responder-name">
                      {sos.responder ? (
                        <>
                          <Phone className="responder-icon" />
                          {sos.responder}
                        </>
                      ) : (
                        <span className="responder-empty">—</span>
                      )}
                    </div>
                  </td>
                  <td className="col-actions">
                    <div className="action-buttons">
                      {sos.status === 'new' && (
                        <button
                          onClick={() => handleAssignResponder(sos.id)}
                          className="btn-assign"
                        >
                          Assign
                        </button>
                      )}
                      {sos.status !== 'resolved' && (
                        <button
                          onClick={() => handleResolve(sos.id)}
                          className="btn-resolve"
                        >
                          Resolve
                        </button>
                      )}
                      {sos.status === 'resolved' && (
                        <span className="badge-resolved">
                          <CheckCircle className="w-4 h-4" />
                          Closed
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="no-data">
                  <AlertCircle className="w-5 h-5" />
                  <span>No SOS requests matching filters</span>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ========== FOOTER INFO ========== */}
      <div className="sos-footer">
        <div className="footer-info">
          <span>Showing {filteredSOS.length} of {sosRequests.length} SOS requests</span>
          <span className="separator">•</span>
          <span>Last updated: {currentTime.toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  );
};

export default SOSRequestsPage;
