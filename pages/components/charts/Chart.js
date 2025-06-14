'use client';

import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const lineData = [
  { month: 'Jan', Verified: 60, Unverified: 40 },
  { month: 'Feb', Verified: 30, Unverified: 50 },
  { month: 'Mar', Verified: 20, Unverified: 40 },
  { month: 'Apr', Verified: 40, Unverified: 30 },
  { month: 'May', Verified: 50, Unverified: 60 },
  { month: 'Jun', Verified: 90, Unverified: 70 },
  { month: 'Jul', Verified: 30, Unverified: 20 },
  { month: 'Aug', Verified: 70, Unverified: 40 },
  { month: 'Sep', Verified: 80, Unverified: 60 },
  { month: 'Oct', Verified: 50, Unverified: 30 },
  { month: 'Nov', Verified: 90, Unverified: 70 },
  { month: 'Dec', Verified: 100, Unverified: 90 },
];

const barData = [
  { month: 'Jan', Total: 90, Matches: 60 },
  { month: 'Feb', Total: 80, Matches: 40 },
  { month: 'Mar', Total: 100, Matches: 70 },
  { month: 'Apr', Total: 70, Matches: 30 },
  { month: 'May', Total: 90, Matches: 50 },
  { month: 'Jun', Total: 100, Matches: 80 },
  { month: 'Jul', Total: 60, Matches: 40 },
  { month: 'Aug', Total: 100, Matches: 90 },
  { month: 'Sep', Total: 90, Matches: 70 },
  { month: 'Oct', Total: 70, Matches: 50 },
  { month: 'Nov', Total: 90, Matches: 80 },
  { month: 'Dec', Total: 100, Matches: 90 },
];

const Chart = () => {
  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4">Overview</h3>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Line Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="flex justify-between mb-2">
            <p className="font-semibold">Verified vs Unverified Users</p>
            <select className="text-sm border p-1 rounded">
              <option value="yearly" key="yearly">Yearly</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={lineData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Verified" stroke="#8884d8" />
              <Line type="monotone" dataKey="Unverified" stroke="#ff6961" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="flex justify-between mb-2">
            <p className="font-semibold">Users Overview</p>
            <select className="text-sm border p-1 rounded">
              <option value="yearly" key="yearly">Yearly</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Total" fill="#60a5fa" />
              <Bar dataKey="Matches" fill="#a78bfa" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Chart;
