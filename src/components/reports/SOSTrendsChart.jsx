import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { dashboardMetricsAPI } from '../../api/apiLoaders';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const SOSTrendsChart = () => {
  const [timeRange, setTimeRange] = useState('30');
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const loadTrends = async () => {
      try {
        const data = await dashboardMetricsAPI.getSOSTrends(timeRange);
        if (data) {
          setChartData({
            labels: data.labels,
            datasets: [
              {
                label: 'Incoming SOS',
                data: data.incoming,
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 2.5,
                tension: 0.4,
                fill: true,
                pointRadius: 4,
                pointBackgroundColor: '#3b82f6',
                pointBorderColor: '#1e3a8a',
                pointHoverRadius: 6,
                pointHoverBackgroundColor: '#60a5fa',
              },
              {
                label: 'Resolved SOS',
                data: data.resolved,
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderWidth: 2.5,
                tension: 0.4,
                fill: true,
                pointRadius: 4,
                pointBackgroundColor: '#10b981',
                pointBorderColor: '#065f46',
                pointHoverRadius: 6,
                pointHoverBackgroundColor: '#6ee7b7',
              },
            ],
          });
        }
      } catch (error) {
        console.error('Failed to load trends:', error);
      }
    };
    loadTrends();
  }, [timeRange]);

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#d1d5db',
          font: { size: 12, weight: '500' },
          usePointStyle: true,
          padding: 15,
        },
      },
      title: {
        display: true,
        text: 'SOS Requests Trend',
        color: '#ffffff',
        font: { size: 14, weight: 'bold' },
        padding: { bottom: 15 },
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#d1d5db',
        borderColor: '#475569',
        borderWidth: 1,
        padding: 10,
        displayColors: true,
        callbacks: {
          label: function (context) {
            return context.dataset.label + ': ' + context.parsed.y + ' SOS';
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(107, 114, 128, 0.1)', drawBorder: false },
        ticks: { color: '#9ca3af', font: { size: 11 } },
        title: { display: true, text: 'SOS Count', color: '#d1d5db' },
      },
      x: {
        grid: { display: false },
        ticks: { color: '#9ca3af', font: { size: 11 } },
      },
    },
  };

  return (
    <div className="bg-gradient-to-br rounded-xl p-5 hover:border-gray-600/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl group relative overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">SOS Trends</h3>
        <div className="flex gap-2">
          {['7', '30', '90'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                timeRange === range
                  ? 'bg-blue-500/20 border border-blue-500/50 text-blue-300'
                  : 'bg-slate-800/30 border border-gray-700/40 text-gray-400 hover:border-gray-600/50'
              }`}
            >
              {range}d
            </button>
          ))}
        </div>
      </div>

      <div style={{ height: '300px', position: 'relative' }}>
        {chartData && <Line data={chartData} options={options} />}
      </div>
    </div>
  );
};

export default SOSTrendsChart;
