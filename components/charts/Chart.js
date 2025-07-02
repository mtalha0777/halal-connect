"use client";
import React from "react";
import Image from "next/image";

import ChartDataLabels from "chartjs-plugin-datalabels";
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
} from "chart.js";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip as ReTooltip,
  Legend as ReLegend,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

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

const lineData = [
  { month: "Jan", Verified: 35, Unverified: 60 },
  { month: "Feb", Verified: 7, Unverified: 10 },
  { month: "Mar", Verified: 59, Unverified: 65 },
  { month: "Apr", Verified: 10, Unverified: 10 },
  { month: "May", Verified: 25, Unverified: 40 },
  { month: "Jun", Verified: 40, Unverified: 50 },
  { month: "Jul", Verified: 90, Unverified: 70 },
  { month: "Aug", Verified: 15, Unverified: 18 },
  { month: "Sep", Verified: 90, Unverified: 37 },
  { month: "Oct", Verified: 65, Unverified: 24 },
  { month: "Nov", Verified: 47, Unverified: 14 },
  { month: "Dec", Verified: 80, Unverified: 90 },
];

const matchBarData = [
  { month: "Jan", total: 36, success: 60 },
  { month: "Feb", total: 91, success: 68 },
  { month: "Mar", total: 12, success: 15 },
  { month: "Apr", total: 58, success: 62 },
  { month: "May", total: 35, success: 28 },
  { month: "Jun", total: 93, success: 39 },
  { month: "Jul", total: 32, success: 44 },
  { month: "Aug", total: 90, success: 66 },
  { month: "Sep", total: 14, success: 20 },
  { month: "Oct", total: 94, success: 36 },
  { month: "Nov", total: 31, success: 14 },
  { month: "Dec", total: 78, success: 83 },
];

const lineChartLegend = [
  { label: "Verified", color: "#7086FD" },
  { label: "Unverified", color: "#F5365C" },
];

const Chart = () => {
  return (
    <div className="bg-white rounded-xl p-4 gap-4 flex flex-col w-full shadow border border-gray-200">
      <h2 className="text-xl font-semibold text-black">Overview</h2>

      <div className="flex flex-col xl:flex-row gap-4 w-full">
        <div className="bg-white rounded-xl p-4 border border-gray-200 w-full xl:w-1/2">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-2">
            <h3 className="text-sm font-semibold text-black">
              Verified vs Unverified Users
            </h3>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-20 w-full sm:w-auto">
              {/* Legend items */}
              <div className="flex items-center gap-3 flex-wrap">
                {lineChartLegend.map((item) => (
                  <div key={item.label} className="flex items-center gap-1">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-xs text-black">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Dropdown - stays aligned to right */}
              <div className="relative w-full sm:w-[100px]">
                <select className="appearance-none text-sm border border-gray-200 px-3 py-2 pr-8 rounded-md focus:outline-none w-full">
                  <option value="yearly">Yearly</option>
                </select>
                <Image
                  src="/assets/dropdown.svg"
                  alt="Dropdown Icon"
                  width={16}
                  height={16}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none"
                />
              </div>
            </div>
          </div>

          <div className="w-full h-[210px] min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={lineData}
                margin={{ top: 10, right: 20, bottom: 10, left: 0 }}
              >
                <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#000" }} />
                <YAxis
                  domain={[0, 100]}
                  tickCount={6}
                  tick={{ fontSize: 12, fill: "#000" }}
                />
                <ReTooltip />
                <Line
                  type="monotone"
                  dataKey="Verified"
                  stroke="#7086FD"
                  strokeWidth={1}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="Unverified"
                  stroke="#F5365C"
                  strokeWidth={1}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart Card */}

        <div className="bg-white rounded-xl p-4 border border-gray-200 w-full xl:w-1/2">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
            <h3 className="font-semibold text-sm text-gray-800">
              Users Overview
            </h3>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-20 w-full sm:w-auto">
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#00C6FF]"></span>
                  <span className="text-xs text-black">Total User</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#8B5CF6]"></span>
                  <span className="text-xs text-black">Successful Matches</span>
                </div>
              </div>

              <div className="relative w-full sm:w-[100px]">
                <select className="appearance-none text-sm border border-gray-200 px-3 py-2 pr-8 rounded-md focus:outline-none w-full">
                  <option value="yearly">Yearly</option>
                </select>
                <Image
                  src="/assets/dropdown.svg"
                  alt="Dropdown Icon"
                  width={16}
                  height={16}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none"
                />
              </div>
            </div>
          </div>

          <div className="w-full h-[210px] min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={matchBarData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                barCategoryGap={20}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#000" }} />
                <YAxis
                  domain={[0, 100]}
                  tickCount={6}
                  tick={{ fontSize: 12, fill: "#000" }}
                />
                <ReTooltip />
                <Bar
                  dataKey="total"
                  fill="#00C6FF"
                  name="Total User"
                  barSize={6}
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="success"
                  fill="#8B5CF6"
                  name="Successful Matches"
                  barSize={6}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
