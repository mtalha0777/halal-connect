'use client';

import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
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

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip as ReTooltip,
  Legend as ReLegend,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

import Image from 'next/image';

// Register Chart.js components
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

// Line Chart Data
const lineData = [
  { month: 'Jan', Verified: 30, Unverified: 60 },
  { month: 'Feb', Verified: 10, Unverified: 20 },
  { month: 'Mar', Verified: 60, Unverified: 65 },
  { month: 'Apr', Verified: 10, Unverified: 10 },
  { month: 'May', Verified: 25, Unverified: 40 },
  { month: 'Jun', Verified: 45, Unverified: 50 },
  { month: 'Jul', Verified: 90, Unverified: 65 },
  { month: 'Agu', Verified: 10, Unverified: 20 },
  { month: 'Sep', Verified: 85, Unverified: 40 },
  { month: 'Oct', Verified: 45, Unverified: 30 },
  { month: 'Nov', Verified: 75, Unverified: 50 },
  { month: 'Dec', Verified: 85, Unverified: 90 },
];

// Bar Chart Data
const matchBarData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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

const matchBarOptions = {
  responsive: true,
  maintainAspectRatio: false,
  layout: { padding: { bottom: 20 } },
  plugins: {
    datalabels: { display: false },
    legend: {
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        boxWidth: 10,
        boxHeight: 10,
        color: '#000',
        font: { size: 10 },
      },
    },
  },
  scales: {
    x: {
      ticks: { color: '#000', font: { size: 10 } },
    },
    y: {
      beginAtZero: true,
      max: 100,
      ticks: {
        color: '#000',
        font: { size: 10 },
        stepSize: 20,
        callback: (value) => (value % 20 === 0 ? value : ''),
      },
    },
  },
};
const lineChartLegend = [
  { label: 'Verified', color: '#5D5FEF' },
  { label: 'Unverified', color: '#FF3A29' },
];

const Chart = () => {
  return (
   <div className="flex gap-4">
  {/* Line Chart Card */}
  <div className="bg-white rounded-xl p-4 shadow border border-[#E5E7EB] w-1/2">
   <div className="flex justify-between items-center mb-3">
  <h3 className="text-sm font-semibold text-[#000]">Verified vs Unverified Users</h3>

  <div className="flex items-center gap-4">
    {/* Dynamic Legend */}
    <div className="flex items-center gap-3">
      {lineChartLegend.map((item) => (
        <div key={item.label} className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></span>
          <span className="text-xs text-[#000]">{item.label}</span>
        </div>
      ))}
    </div>

    {/* Dropdown */}
    <select className="text-sm border border-[#E5E7EB] px-2 py-1 rounded-md focus:outline-none">
      <option value="yearly">Yearly</option>
    </select>
  </div>
</div>



    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={lineData} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
        <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
        <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#000' }} />
        <YAxis tick={{ fontSize: 12, fill: '#000' }} domain={[0, 100]} />
        <ReTooltip />
        {/* <ReLegend
          iconType="circle"
          wrapperStyle={{ fontSize: 12 }}
          formatter={(value) => <span style={{ color: '#000', marginLeft: 4 }}>{value}</span>}
        /> */}
        <Line
          type="monotone"
          dataKey="Verified"
          stroke="#5D5FEF"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="Unverified"
          stroke="#FF3A29"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>

  {/* Bar Chart Card */}
  <div className="bg-white rounded-xl shadow p-4 h-[300px] w-1/2" style={{ border: '1px solid #0000001F' }}>
    <div className="flex justify-between items-center mb-2">
      <h4 className="text-sm font-semibold">Matches Details</h4>
      <button className="flex items-center gap-2 px-3 py-1 border border-[#00000014] rounded-md text-sm text-[#000]">
        Yearly
        <Image src="/assets/arrowdown.png" alt="Arrow Down" width={12} height={12} />
      </button>
    </div>
    <div className="relative h-full w-full">
      <Bar data={matchBarData} options={matchBarOptions} plugins={[ChartDataLabels]} />
    </div>
  </div>
</div>

  );
};

export default Chart;
