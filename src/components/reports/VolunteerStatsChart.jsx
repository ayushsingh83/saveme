import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const VolunteerStatsChart = () => {
  const [timeRange, setTimeRange] = useState('30');

  const getChartData = () => {
    switch (timeRange) {
      case '7':
        return {
          labels: ['Medical', 'Rescue', 'Logistics', 'Communication'],
          volunteers: [45, 38, 32, 28],
          hours: [285, 240, 198, 157],
        };
      case '90':
        return {
          labels: ['Medical', 'Rescue', 'Logistics', 'Communication'],
          volunteers: [285, 268, 245, 198],
          hours: [1820, 1680, 1520, 1340],
        };
      case '30':
      default:
        return {
          labels: ['Medical', 'Rescue', 'Logistics', 'Communication'],
          volunteers: [125, 108, 92, 78],
          hours: [765, 620, 485, 380],
        };
    }
  };

  const data = getChartData();

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Active Volunteers',
        data: data.volunteers,
        backgroundColor: 'rgba(59, 130, 246, 0.7)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1.5,
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#d1d5db',
          font: { size: 12, weight: '500' },
          padding: 15,
        },
      },
      title: {
        display: true,
        text: 'Volunteer Distribution',
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
        callbacks: {
          afterLabel: function (context) {
            const hours = data.hours[context.dataIndex];
            return 'Avg Hours: ' + (hours / data.volunteers[context.dataIndex]).toFixed(1);
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(107, 114, 128, 0.1)', drawBorder: false },
        ticks: { color: '#9ca3af', font: { size: 11 } },
        title: { display: true, text: 'Number of Volunteers', color: '#d1d5db' },
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
        <h3 className="text-lg font-semibold text-white">Volunteer Statistics</h3>
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
        <Bar data={chartData} options={options} />
      </div>

      {/* Detailed stats */}
      <div className="mt-4 grid grid-cols-4 gap-3">
        {data.labels.map((label, idx) => (
          <div key={idx} className="bg-slate-800/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-blue-400">{data.volunteers[idx]}</div>
            <div className="text-xs text-gray-400">{label}</div>
            <div className="text-xs text-gray-500 mt-1">
              {(data.hours[idx] / data.volunteers[idx]).toFixed(1)} hrs avg
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerStatsChart;
