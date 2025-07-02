"use client";
import React from "react";
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
} from "recharts";
import Image from "next/image";

const Overview = () => {
  const revenueData = [
    { month: "Jan", revenue: 40 },
    { month: "Feb", revenue: 15 },
    { month: "Mar", revenue: 60 },
    { month: "Apr", revenue: 16 },
    { month: "May", revenue: 32 },
    { month: "Jun", revenue: 38 },
    { month: "Jul", revenue: 94 },
    { month: "Aug", revenue: 18 },
    { month: "Sep", revenue: 90 },
    { month: "Oct", revenue: 80 },
    { month: "Nov", revenue: 54 },
    { month: "Dec", revenue: 84 },
  ];
  const data = [
    { month: "Jan", Premium: 80, Gold: 50, Diamond: 30 },
    { month: "Feb", Premium: 40, Gold: 60, Diamond: 20 },
    { month: "Mar", Premium: 90, Gold: 40, Diamond: 40 },
    { month: "Apr", Premium: 50, Gold: 20, Diamond: 15 },
    { month: "May", Premium: 70, Gold: 40, Diamond: 30 },
    { month: "Jun", Premium: 60, Gold: 60, Diamond: 40 },
    { month: "Jul", Premium: 40, Gold: 30, Diamond: 20 },
    { month: "Aug", Premium: 50, Gold: 50, Diamond: 30 },
    { month: "Sep", Premium: 60, Gold: 20, Diamond: 40 },
    { month: "Oct", Premium: 70, Gold: 40, Diamond: 40 },
    { month: "Nov", Premium: 50, Gold: 30, Diamond: 40 },
    { month: "Dec", Premium: 80, Gold: 60, Diamond: 50 },
  ];

  return (
    <div className="bg-white shadow-sm p-4 rounded-xl border border-gray-100">
      <h3 className="text-lg font-semibold mb-4">Overview</h3>
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Total Revenue Chart */}
        <div className="w-full bg-white rounded-xl shadow p-4 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-medium text-base">Total Revenue</h4>
            <button className="px-3 py-1.5 bg-white border border-gray-300 text-black rounded-md text-sm flex items-center gap-2 hover:bg-gray-50 transition-colors">
              Yearly{" "}
              <Image
                src="/assets/dropdown.svg"
                alt="Arrow"
                width={16}
                height={16}
              />
            </button>
          </div>
          <div className="w-full h-[250px] md:h-[270px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={revenueData}
                margin={{ top: 10, right: 15, bottom: 5, left: -10 }}
              >
                <defs>
                  <linearGradient
                    id="revenueGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#5D5FEF" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#5D5FEF" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  stroke="#E5E7EB"
                  strokeDasharray="3 3"
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 12 }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  tick={{ fontSize: 12 }}
                  domain={[0, 100]}
                  ticks={[0, 20, 40, 60, 80, 100]}
                  allowDecimals={false}
                  axisLine={false}
                  tickLine={false}
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
        </div>

        {/* Subscription Buy Chart */}
        <div className="w-full bg-white rounded-xl shadow p-4 border border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
            <h2 className="font-medium text-base whitespace-nowrap">
              Subscription Buy
            </h2>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2 h-2 rounded-full bg-[#FFB74D]"></span>
                Premium
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2 h-2 rounded-full bg-[#86EFAC]"></span>Gold
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2 h-2 rounded-full bg-[#A5B4FC]"></span>
                Diamond
              </div>
            </div>
            <button className="px-3 py-1.5 bg-white border border-gray-300 text-black rounded-md text-sm flex items-center gap-2 hover:bg-gray-50 transition-colors mt-2 sm:mt-0">
              Yearly{" "}
              <Image
                src="/assets/dropdown.svg"
                alt="Arrow"
                width={16}
                height={16}
              />
            </button>
          </div>
          <div className="w-full h-[250px] md:h-[270px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 15, right: 15, left: -10, bottom: 5 }}
                barGap={5}
                barSize={10}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E5E7EB"
                />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 12 }}
                  tickLine={false}
                  axisLine={{ stroke: "#E5E7EB" }}
                />
                <YAxis
                  domain={[0, 200]}
                  ticks={[0, 50, 100, 150, 200]}
                  tick={{ fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    background: "#fff",
                    border: "1px solid #E5E7EB",
                    borderRadius: "8px",
                  }}
                />
                <Bar
                  dataKey="Diamond"
                  stackId="a"
                  fill="#A5B4FC"
                  radius={[5, 5, 0, 0]}
                />
                <Bar
                  dataKey="Gold"
                  stackId="a"
                  fill="#86EFAC"
                  radius={[5, 5, 0, 0]}
                />
                <Bar
                  dataKey="Premium"
                  stackId="a"
                  fill="#FFB74D"
                  radius={[5, 5, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Overview;
