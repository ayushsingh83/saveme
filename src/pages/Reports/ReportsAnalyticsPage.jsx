import React, { useState } from 'react';
import { Download, FileText, BarChart3 } from 'lucide-react';
import ReportsStatsCards from '../../components/reports/ReportsStatsCards';
import SOSTrendsChart from '../../components/reports/SOSTrendsChart';
import ResourceUtilizationChart from '../../components/reports/ResourceUtilizationChart';
import VolunteerStatsChart from '../../components/reports/VolunteerStatsChart';
import ResponseTimeChart from '../../components/reports/ResponseTimeChart';
import GatewayUptimeChart from '../../components/reports/GatewayUptimeChart';
import TopResourcesTable from '../../components/reports/TopResourcesTable';
import EngagementRateGauge from '../../components/reports/EngagementRateGauge';
import AIInsightsPanel from '../../components/reports/AIInsightsPanel';

const ReportsAnalyticsPage = () => {
  const [dateRange, setDateRange] = useState('30');

  const handleGenerateReport = () => {
    alert('Report generation initiated.');
  };

  const handleExportCSV = () => {
    alert('Exporting data as CSV...');
  };

  const handleExportPDF = () => {
    alert('Generating PDF report...');
  };

  return (
    <div className="min-h-screen">
      <div className="flex-1 p-6">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Reports & Analytics</h1>
              <p className="text-gray-400">Comprehensive reports on response metrics and resource utilization</p>
            </div>

            {/* Header Actions */}
            <div className="flex items-center gap-3 flex-wrap justify-end">
              {/* Date Range Selector */}
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="bg-slate-800/50 border border-gray-700/40 rounded-lg px-4 py-2.5 text-white focus:border-blue-500/50 focus:outline-none transition-colors"
              >
                <option value="7">Last 7 Days</option>
                <option value="30">Last 30 Days</option>
                <option value="90">Last 90 Days</option>
              </select>

              {/* Generate Report Button */}
              <button
                onClick={handleGenerateReport}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-500/20 border border-blue-500/50 text-blue-300 hover:bg-blue-500/30 hover:border-blue-500/70 transition-all font-medium"
              >
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline text-sm">Generate</span>
              </button>

              {/* Export Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800/50 border border-gray-700/40 text-gray-300 hover:border-gray-600/50 transition-all font-medium">
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline text-sm">Export</span>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-0 w-32 bg-slate-800 border border-gray-700/40 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                  <button
                    onClick={handleExportCSV}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-300 hover:bg-gray-700/30 transition-colors first:rounded-t-lg"
                  >
                    Export as CSV
                  </button>
                  <button
                    onClick={handleExportPDF}
                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-300 hover:bg-gray-700/30 transition-colors last:rounded-b-lg"
                  >
                    Export as PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mb-6">
          <ReportsStatsCards dateRange={dateRange} />
        </div>

        {/* Charts Grid - Row 1: SOS Trends & Resource Utilization */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <SOSTrendsChart />
          </div>
          <div className="lg:col-span-1">
            <ResourceUtilizationChart />
          </div>
        </div>

        {/* Charts Grid - Row 2: Volunteer Stats & Response Time */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <VolunteerStatsChart />
          <ResponseTimeChart />
        </div>

        {/* Charts Grid - Row 3: Resources Table & Gateway Uptime */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <TopResourcesTable />
          <GatewayUptimeChart />
        </div>

        {/* Charts Grid - Row 4: Engagement Gauge & AI Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <EngagementRateGauge />
          <AIInsightsPanel />
        </div>

        {/* Footer Info */}
        <div className="text-center text-xs text-gray-600 py-4 border-t border-gray-800">
          <p>Reports & Analytics Dashboard | Data updated every hour | Backend integration ready</p>
        </div>
      </div>
    </div>
  );
};

export default ReportsAnalyticsPage;
