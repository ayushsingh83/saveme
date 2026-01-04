import React from 'react';
import StatsCardsRow from '../../components/dashboard/StatsCardsRow';
import LiveSOSActivityList from '../../components/dashboard/LiveSOSActivityList';
import DashboardMapPanel from '../../components/dashboard/DashboardMapPanel';
import MeshNetworkCard from '../../components/dashboard/MeshNetworkCard';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      {/* Top Section: Metric Cards */}
      <div className="dashboard-section">
        <StatsCardsRow />
      </div>

      {/* Middle Section: SOS Activity & Map */}
      <div className="dashboard-grid">
        {/* Left Column: Live SOS Activity */}
        <div className="dashboard-column-left">
          <div className="section-header">
            <h2 className="section-title">Live SOS Activity</h2>
            <div className="section-controls">
              <button className="filter-button">All (5)</button>
              <button className="filter-button">New (1)</button>
              <button className="filter-button">In Progress (3)</button>
              <button className="filter-button">Resolved</button>
            </div>
          </div>
          <LiveSOSActivityList />
        </div>

        {/* Right Column: Map & Zones */}
        <div className="dashboard-column-right">
          <div className="section-header">
            <h2 className="section-title">Disaster Map</h2>
          </div>
          <DashboardMapPanel />
        </div>
      </div>

      {/* Bottom Section: Mesh Network */}
      <div className="dashboard-section">
        <MeshNetworkCard />
      </div>
    </div>
  );
};

export default DashboardPage;
