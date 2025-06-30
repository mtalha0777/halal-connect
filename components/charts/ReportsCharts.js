"use client";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as ChartJS, ArcElement } from "chart.js";
ChartJS.register(ArcElement, ChartDataLabels);

import Image from "next/image";
const ReportsCharts = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const matchesLineData = [
    { month: "Jan", registered: 20, active: 40 },
    { month: "Feb", registered: 10, active: 20 },
    { month: "Mar", registered: 30, active: 60 },
    { month: "Apr", registered: 5, active: 10 },
    { month: "May", registered: 15, active: 20 },
    { month: "Jun", registered: 20, active: 30 },
    { month: "Jul", registered: 50, active: 90 },
    { month: "Aug", registered: 10, active: 19 },
    { month: "Sep", registered: 50, active: 100 },
    { month: "Oct", registered: 35, active: 55 },
    { month: "Nov", registered: 30, active: 40 },
    { month: "Dec", registered: 45, active: 85 },
  ];

  const pieData = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [35, 65],
        backgroundColor: ["#67D89C", "#7487F4"],
        borderWidth: 0,
      },
    ],
  };

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

  const revenueData = [
    { month: "Jan", revenue: 39 },
    { month: "Feb", revenue: 10 },
    { month: "Mar", revenue: 60 },
    { month: "Apr", revenue: 10 },
    { month: "May", revenue: 29 },
    { month: "Jun", revenue: 35 },
    { month: "Jul", revenue: 95 },
    { month: "Aug", revenue: 10 },
    { month: "Sep", revenue: 55 },
    { month: "Oct", revenue: 100 },
    { month: "Nov", revenue: 50 },
    { month: "Dec", revenue: 90 },
  ];

  return (
    <section className="bg-white rounded-xl p-2 shadow-sm border border-gray-200 mb-4">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Matches Chart - Final Version */}
        <div className="bg-white rounded-xl p-4 border border-gray-300 h-[350px]">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
            <h3 className="text-lg font-semibold">Matches Details</h3>

            <div className="flex items-center gap-15">
              {/* legends */}
              <div className="flex gap-5 text-xs">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#FFB0F5]" />
                  <span>Registered User</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#81E9FF]" />
                  <span>Active User</span>
                </div>
              </div>

              {/* dropdown */}
              <button className="flex items-center gap-2 px-3 py-1 border border-gray-200 rounded-md text-sm">
                Yearly
                <Image
                  src="/assets/dropdown.svg"
                  alt="Dropdown"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </div>

          {/* ── Chart ──────────────────────────────────────────── */}
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={matchesLineData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                {/* grid now shows both horizontal & vertical lines */}
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />

                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 12, fill: "#000" }}
                  tickLine={false}
                />
                <YAxis
                  domain={[0, 100]}
                  ticks={[0, 20, 40, 60, 80, 100]}
                  tick={{ fontSize: 12, fill: "#000" }}
                  tickLine={false}
                />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="active"
                  stroke="#81E9FF"
                  fill="#81E9FF"
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="registered"
                  stroke="#FFB0F5"
                  fill="#FFB0F5"
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-xl p-4 border border-gray-300 h-[350px]">
          {/* Title + Yearly Button */}
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold">User Details</h4>
            <button className="flex items-center gap-2 px-3 py-1 border border-gray-200 rounded-md text-sm">
              Yearly
              <Image
                src="/assets/dropdown.svg"
                alt="Dropdown"
                width={16}
                height={16}
              />
            </button>
          </div>

          {/* Pie Chart with Legends */}
          <div className="flex flex-col md:flex-row items-center justify-center h-[calc(100%-52px)]">
            {/* Pie Chart Container - Now Responsive */}
            <div className="w-full md:w-[60%] h-[200px] md:h-full">
              <Pie
                data={pieData}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    datalabels: {
                      color: "#fff",
                      formatter: (value) => {
                        const total = pieData.datasets[0].data.reduce(
                          (a, b) => a + b,
                          0
                        );
                        return `${Math.round((value / total) * 100)}%`;
                      },
                      font: { weight: "bold", size: 12 },
                      anchor: "center",
                      align: "center",
                    },
                    legend: { display: false },
                    tooltip: { enabled: true },
                  },
                }}
                plugins={[ChartDataLabels]}
              />
            </div>

            {/* Legends - Better Positioning */}
            <div className="flex flex-col justify-center gap-4 mt-4 md:mt-0 md:ml-8">
              <div className="flex items-center gap-3">
                <div className="w-3.5 h-3.5 rounded-full bg-[#67D89C]" />
                <span className="text-sm font-medium">Male </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3.5 h-3.5 rounded-full bg-[#7487F4]" />
                <span className="text-sm font-medium">Female </span>
              </div>
            </div>
          </div>
        </div>
        {/* Bar Chart Card */}

        <div className="bg-white rounded-xl shadow p-4 h-[300px] w-full border border-[#0000001F]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg text-gray-800">
              Users Overview
            </h3>

            <div className="flex items-center gap-12">
              {/* Custom Legend on same line */}
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#00C6FF]"></span>
                  <span className="text-xs text-[#000]">
                    Total Matches Created
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#8B5CF6]"></span>
                  <span className="text-xs text-[#000]">
                    Successful Matches
                  </span>
                </div>
              </div>

              {/* Yearly Dropdown */}
              <button className="flex items-center gap-2 px-3 py-1 border border-[#00000014] rounded-md text-sm text-[#000]">
                Yearly
                <Image
                  src="/assets/dropdown.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </div>

          {/* Chart Container */}
          <div className="relative h-[240px] w-full">
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
                <Tooltip />

                <Bar
                  dataKey="total"
                  fill="#00C6FF"
                  name="Total User"
                  barSize={6} // 👈 Set to 6px
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="success"
                  fill="#8B5CF6"
                  name="Successful Matches"
                  barSize={6} // 👈 Set to 6px
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Subscription Line Chart */}

        <div
          className="bg-white rounded-xl shadow p-4 h-[300px]"
          style={{ border: "1px solid #0000001F" }}
        >
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-lg font-semibold">
              Total Subscription Revenue
            </h4>
            <button className="flex items-center gap-2 px-3 py-1 border border-[#00000014] rounded-md text-sm text-[#000]">
              Yearly
              <Image
                src="/assets/dropdown.svg"
                alt="Arrow"
                width={16}
                height={16}
              />
            </button>
          </div>
          <div className="relative h-[240px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={revenueData}
                margin={{ top: 10, right: 20, bottom: 10, left: 0 }}
              >
                <defs>
                  <linearGradient
                    id="revenueGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#6FD195" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#6FD195" stopOpacity={0.1} />
                  </linearGradient>
                </defs>

                <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 12, fill: "#000" }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 12, fill: "#000" }}
                  domain={[0, 100]}
                  ticks={[0, 20, 40, 60, 80, 100]}
                  allowDecimals={false}
                />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#6FD195" // ✅ New line color
                  fill="url(#revenueGradient)"
                  strokeWidth={2}
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ReportsCharts;
