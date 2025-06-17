'use client';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend, 
} from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import React from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  ChartDataLabels 
);

const ReportsCharts = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const matchesLineData = {
    labels: months,
    datasets: [
      {
        label: 'Registered User',
        data: [20, 15, 25, 18, 40, 50, 30, 55, 45, 60, 40, 50],
        fill: true,
        borderColor: '#EA9CFD',
        backgroundColor: '#EA9CFD20',
        tension: 0.4,
      },
      {
        label: 'Active User',
        data: [35, 60, 40, 65, 90, 80, 70, 100, 90, 85, 70, 80],
        fill: true,
        borderColor: '#73C3F4',
        backgroundColor: '#73C3F420',
        tension: 0.4,
      },
    ],
  };

  const pieData = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [35, 65],
        backgroundColor: ['#67D89C', '#7487F4'],
        borderWidth: 0,
      },
    ],
  };

  const matchBarData = {
    labels: months,
    datasets: [
      {
        label: 'Total Matches Created',
        data: [30, 90, 50, 70, 30, 95, 80, 90, 75, 95, 40, 100],
        backgroundColor: '#2AD8FF',
      },
      {
        label: 'Successful Matches',
        data: [50, 60, 45, 55, 20, 85, 60, 75, 60, 80, 30, 90],
        backgroundColor: '#A78BFA',
      },
    ],
  };

  const subscriptionData = {
    labels: months,
    datasets: [
      {
        label: 'Subscription Revenue',
        data: [40, 20, 30, 25, 50, 100, 20, 90, 100, 60, 70, 85],
        fill: true,
        borderColor: '#2DD4BF',
        backgroundColor: '#2DD4BF20',
        tension: 0.4,
      },
    ],
  };

return (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    {/* Matches Line Chart */}
    {/* <div className="bg-white rounded-xl shadow border p-4 h-[300px]"> */}
    <div className="bg-white rounded-xl shadow p-4 h-[300px]" style={{ border: '1px solid #0000001F' }}>

      <h4 className="text-sm font-semibold mb-2">Matches Details</h4>
      <div className="relative h-full w-full">
        <Line
          data={matchesLineData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            layout: {
              padding: { bottom: 20 },
            },
            scales: {
              x: { ticks: { color: '#000', font: { size: 10 } } },
              y: { ticks: { color: '#000', font: { size: 10 } } },
            },
          }}
        />
      </div>
    </div>

    {/* Pie Chart */}
    <div className="bg-white rounded-xl shadow p-4 h-[300px]" style={{ border: '1px solid #0000001F' }}>
  <h4 className="text-sm font-semibold mb-2">User Details</h4>
  <div className="relative h-[180px] w-full">
    <Pie
      data={pieData}
      options={{
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            color: '#fff',
            formatter: (value, context) => {
              const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
              const percentage = ((value / total) * 100).toFixed(0);
              return `${percentage}%`;
            },
            font: {
              weight: 'bold',
              size: 14,
            },
            anchor: 'center',
            align: 'center',
          },
          legend: {
            display: false
          },
          tooltip: {
            enabled: true
          }
        }
      }}
      plugins={[ChartDataLabels]}
    />
  </div>
  <div className="mt-2 text-xs flex gap-4">
    <div className="flex items-center gap-1">
      <div className="w-2.5 h-2.5 rounded-full bg-[#67D89C]" /> Male
    </div>
    <div className="flex items-center gap-1">
      <div className="w-2.5 h-2.5 rounded-full bg-[#7487F4]" /> Female
    </div>
  </div>
</div>


    {/* Matches Bar Chart */}
    {/* <div className="bg-white rounded-xl shadow border p-4 h-[300px]"> */}
    <div className="bg-white rounded-xl shadow p-4 h-[300px]" style={{ border: '1px solid #0000001F' }}>

      <h4 className="text-sm font-semibold mb-2">Matches Details</h4>
      <div className="relative h-full w-full">
        <Bar
          data={matchBarData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            layout: {
              padding: { bottom: 20 },
            },
            scales: {
              x: { ticks: { color: '#000', font: { size: 10 } } },
              y: { ticks: { color: '#000', font: { size: 10 } } },
            },
          }}
        />
      </div>
    </div>

    {/* Subscription Line Chart */}
    {/* <div className="bg-white rounded-xl shadow border p-4 h-[300px]"> */}
    <div className="bg-white rounded-xl shadow p-4 h-[300px]" style={{ border: '1px solid #0000001F' }}>

      <h4 className="text-sm font-semibold mb-2">Total Subscription Revenue</h4>
      <div className="relative h-full w-full">
        <Line
          data={subscriptionData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            layout: {
              padding: { bottom: 20 },
            },
            scales: {
              x: { ticks: { color: '#000', font: { size: 10 } } },
              y: { ticks: { color: '#000', font: { size: 10 } } },
            },
          }}
        />
      </div>
    </div>
  </div>
);


};

export default ReportsCharts;
