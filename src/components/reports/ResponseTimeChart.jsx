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

const ResponseTimeChart = () => {
  const [timeRange, setTimeRange] = useState('30');

  const getChartData = () => {
    switch (timeRange) {
      case '7':
        return {
          labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
          avg: [5.2, 5.0, 4.8, 5.5, 5.1, 4.9, 4.6],
          priority: [2.8, 2.6, 2.4, 3.1, 2.7, 2.5, 2.3],
        };
      case '90':
        return {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
          avg: [5.8, 5.6, 5.4, 5.2, 5.0, 4.9, 4.7, 4.6, 4.8, 4.5, 4.4, 4.3, 4.2],
          priority: [3.2, 3.0, 2.9, 2.7, 2.6, 2.5, 2.4, 2.3, 2.4, 2.2, 2.1, 2.0, 1.9],
        };
      case '30':
      default:
        return {
          labels: ['Day 1', 'Day 5', 'Day 10', 'Day 15', 'Day 20', 'Day 25', 'Day 30'],
          avg: [5.5, 5.2, 5.1, 4.9, 4.7, 4.6, 4.3],
          priority: [3.0, 2.8, 2.7, 2.5, 2.4, 2.3, 2.1],
        };
    }
  };

  const data = getChartData();

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Avg Response Time (min)',
        data: data.avg,
        borderColor: '#f59e0b',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        borderWidth: 2.5,
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: '#f59e0b',
        pointBorderColor: '#92400e',
        pointHoverRadius: 6,
      },
      {
        label: 'Priority SOS Response (min)',
        data: data.priority,
        borderColor: '#ef4444',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        borderWidth: 2.5,
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: '#ef4444',
        pointBorderColor: '#7f1d1d',
        pointHoverRadius: 6,
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
        text: 'Response Time Analysis',
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
          label: function (context) {
            return context.dataset.label + ': ' + context.parsed.y.toFixed(1) + ' min';
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(107, 114, 128, 0.1)', drawBorder: false },
        ticks: { color: '#9ca3af', font: { size: 11 } },
        title: { display: true, text: 'Time (minutes)', color: '#d1d5db' },
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
        <h3 className="text-lg font-semibold text-white">Response Time Analysis</h3>
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

export default ResponseTimeChart;
