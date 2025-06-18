'use client';

import React from 'react';
import Image from 'next/image';
import Sidebar from '../../components/layout/SideBar';
import Topbar from '../../components/layout/TopBar';
import ReportsCharts from '@/components/charts/ReportsCharts';

const ReportsAndAnalytics = () => {
  const cards = [
    {
      title: 'Total Registered Users',
      count: '40,689',
      bg: '#FDEBD5',
      icon: '/assets/blueiconreport.png',
    },
    {
      title: 'Active User',
      count: '40,689',
      bg: '#FCE5F9',
      icon: '/assets/blueiconreport.png',
    },
    {
      title: 'New Signups',
      count: '40,689',
      bg: '#D1F6FE',
      icon: '/assets/blueiconreport.png',
    },
    {
      title: 'Total Reported User',
      count: '40,689',
      bg: '#E6FCE5',
      icon: '/assets/blueiconreport.png',
    },
  ];

  return (
    <div className="flex min-h-screen font-sans">
      <Sidebar />

      <main className="flex-1 bg-white p-6 pt-28">
        <Topbar />

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Reports & Analytics</h2>

        {/* ✅ Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex items-center rounded-xl p-3 gap-3"
              style={{
                backgroundColor: card.bg,
                height: 100,
              }}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center"
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: '100px',
                  padding: 8,
                  backgroundColor: 'white',
                }}
              >
                <Image
                  src={card.icon}
                  alt="icon"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center">
                <h4 className="text-[15px] font-medium text-black/60">{card.title}</h4>
                <p className="text-[22px] font-bold">{card.count}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full max-w-full overflow-hidden mt-6">
  <ReportsCharts />
</div>
      </main>
    </div>
  );
};

export default ReportsAndAnalytics;
