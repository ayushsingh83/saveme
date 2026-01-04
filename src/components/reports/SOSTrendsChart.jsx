import React, { useState } from 'react';
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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const SOSTrendsChart = () => {
  const [timeRange, setTimeRange] = useState('30');

  const getChartData = () => {
    switch (timeRange) {
      case '7':
        return {
          labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
          incoming: [45, 52, 38, 61, 55, 48, 42],
          resolved: [42, 48, 35, 58, 52, 46, 40],
        };
      case '90':
        return {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
          incoming: [315, 340, 328, 352, 380, 365, 392, 410, 385, 420, 405, 395, 410],
          resolved: [300, 325, 315, 340, 365, 350, 375, 395, 370, 405, 390, 380, 395],
        };
      case '30':
      default:
        return {
          labels: ['Day 1', 'Day 5', 'Day 10', 'Day 15', 'Day 20', 'Day 25', 'Day 30'],
          incoming: [120, 135, 145, 155, 140, 165, 172],
          resolved: [115, 130, 138, 148, 135, 158, 165],
        };
    }
  };

  const data = getChartData();

  const chartData = {
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
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default SOSTrendsChart;
