'use client';

import React from 'react';
import Image from 'next/image';
import Sidebar from '../components/layout/SideBar';
import Topbar from '../components/layout/TopBar'; 
import Chart from '../components/charts/Chart';
import AllUsers from '../components/users/AllUsers';
const Dashboard = () => {
  return (

    <div className="flex min-h-screen font-sans">
       <Sidebar />
    <main className="flex-1 bg-white p-6">
        {/* Topbar */}
        <Topbar />
         {/* Stat Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
         {(() => {
    const cards = [
      {
        title: 'Total User',
        count: '3,50,789',
        bg: '#06D4C680',
        light: '#06D4C620',
        border: '#06D4C6',
        icon: '/assets/icon.png',
      },
      {
        title: 'New User',
        count: '50,789',
        bg: '#F8794B80',
        light: '#F8794B20',
        border: '#F8794B',
        icon: '/assets/adduser.png',
      },
      {
        title: 'Total Matchmade',
        count: '1,50,356',
        bg: '#FA5A7E80',
        light: '#FA5A7E20',
        border: '#FA5A7E',
        icon: '/assets/heart.png',
      },
      {
        title: 'Report Profile',
        count: '20,689',
        bg: '#8676FE66',
        light: '#8676FE20',
        border: '#8676FE',
        icon: '/assets/report.png',
      },
    ];

    const cloudColor = [
      '#BFFFFB52', // Total User
      '#FFDACD52', // New User
      '#FFC5D252', // Total Matchmade
      '#E3E0FF52', // Report Profile
    ];

    return cards.map((card, i) => (
      <div
        key={i}
        className="relative p-4 rounded-xl overflow-hidden"
        style={{ backgroundColor: card.bg }}
      >
        {/* Top right icon */}
        <Image
          src={card.icon}
          alt="icon"
          width={36}
          height={36}
          className="absolute top-4 right-4 z-10"
        />

        {/* Title */}
        <h4 className="text-sm font-medium z-10 relative" style={{ color: '#0000006B' }}>
          {card.title}
        </h4>

        {/* Count */}
        <p className="text-2xl font-bold text-black z-10 relative">{card.count}</p>

        {/* Rectangle badge */}
        <div className="flex items-center gap-2 mt-1 z-10 relative">
          <div
            className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium"
            style={{
              backgroundColor: card.light,
              color: '#000000',
              border: `1px solid ${card.border}`,
            }}
          >
            <Image src="/assets/trend.png" alt="arrow" width={16} height={16} />
            3.48%
          </div>

          <span className="text-xs" style={{ color: '#0000006B' }}>
            Since last month
          </span>
        </div>

        {/* Cloud bottom-right with blur background */}
        <div
        className="absolute bottom-0 right-0 w-20 h-20 rounded-full overflow-hidden"
        style={{ backgroundColor: cloudColor[i], zIndex: 0 }}
        >
        <Image
            src="/assets/cloud.png"
            alt="Cloud"
            fill
            className="object-contain opacity-80"
        />
        </div>

      </div>
      ));
    })()}
  </div>
        
        {/* Charts */}
       <Chart />

        {/* User Table */}
    <AllUsers />
</main>
    </div>
  );
};
export default Dashboard;