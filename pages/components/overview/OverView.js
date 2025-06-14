import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from 'recharts';
import Image from 'next/image';

const Overview = () => {
  const totalRevenueData = [
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

  const subscriptionBuyData = [
    { month: 'Jan', Premium: 60, Gold: 40, Diamond: 20 },
    { month: 'Feb', Premium: 50, Gold: 10, Diamond: 20 },
    { month: 'Mar', Premium: 100, Gold: 60, Diamond: 20 },
    { month: 'Apr', Premium: 40, Gold: 20, Diamond: 20 },
    { month: 'May', Premium: 80, Gold: 30, Diamond: 20 },
    { month: 'Jun', Premium: 120, Gold: 80, Diamond: 40 },
    { month: 'Jul', Premium: 70, Gold: 50, Diamond: 20 },
    { month: 'Aug', Premium: 140, Gold: 50, Diamond: 40 },
    { month: 'Sep', Premium: 120, Gold: 30, Diamond: 20 },
    { month: 'Oct', Premium: 160, Gold: 60, Diamond: 40 },
    { month: 'Nov', Premium: 140, Gold: 30, Diamond: 20 },
    { month: 'Dec', Premium: 180, Gold: 80, Diamond: 40 },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4">Overview</h3>

      <div className="flex justify-between gap-2">
        <div className="w-full max-w-[480px]">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-medium">Total Revenue</h4>
            <button className="px-3 py-1 bg-white border border-gray-400 text-black rounded-md text-sm flex items-center gap-1">
              Yearly
              <Image src="/assets/arrowdown.png" alt="Arrow" width={12} height={12} />
            </button>
          </div>
          <LineChart
            width={480}
            height={240}
            data={totalRevenueData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis ticks={[0, 20, 40, 60, 80, 100]} domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </div>

        <div className="w-full max-w-[480px]">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-medium">Subscription Buy</h4>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-white border border-gray-400 text-black rounded-md text-sm flex items-center gap-1">
                Yearly
                <Image src="/assets/arrowdown.png" alt="Arrow" width={12} height={12} />
              </button>
            </div>
          </div>
          <BarChart
            width={480}
            height={240}
            data={subscriptionBuyData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend iconSize={8} />
            <Bar dataKey="Premium" fill="#ff9f40" />
            <Bar dataKey="Gold" fill="#22c55e" />
            <Bar dataKey="Diamond" fill="#6b7280" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Overview;
