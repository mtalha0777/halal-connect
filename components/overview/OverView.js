'use client';
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
} from 'recharts';
import Image from 'next/image';

const Overview = () => {
  const revenueData = [
    { month: 'Jan', revenue: 30 },
    { month: 'Feb', revenue: 50 },
    { month: 'Mar', revenue: 80 },
    { month: 'Apr', revenue: 20 },
    { month: 'May', revenue: 60 },
    { month: 'Jun', revenue: 90 },
    { month: 'Jul', revenue: 70 },
    { month: 'Aug', revenue: 40 },
    { month: 'Sep', revenue: 90 },
    { month: 'Oct', revenue: 80 },
    { month: 'Nov', revenue: 60 },
    { month: 'Dec', revenue: 90 },
  ];

  const data = [
    { month: 'Jan', Premium: 80, Gold: 50, Diamond: 30 },
    { month: 'Feb', Premium: 40, Gold: 60, Diamond: 20 },
    { month: 'Mar', Premium: 90, Gold: 40, Diamond: 40 },
    { month: 'Apr', Premium: 50, Gold: 20, Diamond: 15 },
    { month: 'May', Premium: 70, Gold: 40, Diamond: 30 },
    { month: 'Jun', Premium: 60, Gold: 60, Diamond: 40 },
    { month: 'Jul', Premium: 40, Gold: 30, Diamond: 20 },
    { month: 'Aug', Premium: 50, Gold: 50, Diamond: 30 },
    { month: 'Sep', Premium: 60, Gold: 20, Diamond: 40 },
    { month: 'Oct', Premium: 70, Gold: 40, Diamond: 40 },
    { month: 'Nov', Premium: 50, Gold: 30, Diamond: 40 },
    { month: 'Dec', Premium: 80, Gold: 60, Diamond: 50 },
  ];

  return (
    <div className="bg-[#f5f5f5] p-4 rounded-xl mb-2 mt-2">
      
      <h3 className="text-lg font-semibold mb-4">Overview</h3>

      <div className="flex flex-wrap md:flex-nowrap gap-4">
        {/* ✅ Total Revenue Chart */}
        <div className="w-full md:w-1/2 bg-white rounded-xl shadow p-4 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-medium">Total Revenue</h4>
            <button className="px-3 py-1 bg-white border border-gray-400 text-black rounded-md text-sm flex items-center gap-1">
              Yearly
              <Image src="/assets/dropdown.svg" alt="Arrow" width={16} height={16} />
            </button>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={revenueData} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5D5FEF" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#5D5FEF" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#000' }} tickLine={false} />
              <YAxis
                tick={{ fontSize: 12, fill: '#000' }}
                domain={[0, 100]}
                ticks={[0, 20, 40, 60, 80, 100]}
                allowDecimals={false}
              />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#5D5FEF"
                fill="url(#revenueGradient)"
                strokeWidth={2}
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* ✅ Subscription Buy Chart */}
        <div className="w-full md:w-1/2 bg-white rounded-xl shadow p-4 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-6">
              <h2 className="font-medium">Subscription Buy</h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#FFB74D]"></span> Premium
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#86EFAC]"></span> Gold
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#A5B4FC]"></span> Diamond
                </div>
              </div>
            </div>
            <button className="px-3 py-1 bg-white border border-gray-400 text-black rounded-md text-sm flex items-center gap-1">
              Yearly
              <Image src="/assets/dropdown.svg" alt="Arrow" width={16} height={16} />
            </button>
          </div>

         <ResponsiveContainer width="100%" height={240}>
          <BarChart
          data={data}
           margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
           barGap={4}
          barSize={13.08} // ✅ Only bar width set — chart size same
            >

              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 10 }}
                tickLine={false}
                minTickGap={-5}
                padding={{ left: 5, right: 5 }}
              />
              <YAxis
                domain={[0, 100]}
                ticks={[0, 40, 80, 120, 160, 200]}
                tick={{ fontSize: 12, fill: '#000' }}
                allowDecimals={false}
              />
              <Tooltip cursor={{ fill: 'transparent' }} />
                <Bar dataKey="Diamond" stackId="a" fill="#A5B4FC" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Gold" stackId="a" fill="#86EFAC" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Premium" stackId="a" fill="#FFB74D" radius={[4, 4, 0, 0]} />


            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Overview;

