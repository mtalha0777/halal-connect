'use client';

import React, { useState } from 'react';
import Sidebar from '../layout/SideBar';
import Topbar from '../layout/TopBar';
import Image from 'next/image';

const ReportedUser = () => {
  // State for filter dropdown
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const [selectedFilter, setSelectedFilter] = React.useState('Yearly');
  const [openMenu, setOpenMenu] = useState(null);

  // User data
  const userData = [
    {
      id: 1234,
      name: 'Ahmed Raza',
       gender: 'Male',
      email: 'john@email.com',
     
      joinDate: '12 Jan 2024',
      plan: 'Free',
      status: 'Block'
    },
    {
      id: 1356,
      name: 'Rabia Siddiqui',
      gender: 'Female',
      email: 'emily@email.com',
      
      joinDate: '12 Jan 2024',
      plan: 'Gold',
      status: 'Block'
    },
    {
      id: 5688,
      name: 'Hamza Farooq',
       gender: 'Male',
      email: 'clava@email.com',
     
      joinDate: '12 Jan 2024',
      plan: 'Premium',
      status: 'Block'
    },
    {
      id: 8765,
      name: 'Mahmoor Javed',
       gender: 'Female',
      email: 'soroh@email.com',
     
      joinDate: '12 Jan 2024',
      plan: 'Free',
      status: 'Block'
    },
    {
      id: 8765,
      name: 'Fahad Iqbal',
        gender: 'Male',
      email: 'soroh@email.com',
    
      joinDate: '12 Jan 2024',
      plan: 'Premium',
      status: 'Block'
    },
    {
      id: 8765,
      name: 'Fatima Noor',
       gender: 'Female',
      email: 'soroh@email.com',
     
      joinDate: '12 Jan 2024',
      plan: 'Free',
      status: 'Block'
    },
    {
      id: 8765,
      name: 'Hassan Shah',
       gender: 'Male',
      email: 'soroh@email.com',
     
      joinDate: '12 Jan 2024',
      plan: 'Premium',
      status: 'Block'
    },
    {
      id: 8765,
      name: 'Ayesha Khan',
       gender: 'Female',
      email: 'soroh@email.com',
     
      joinDate: '12 Jan 2024',
      plan: 'Free',
      status: 'Block'
    },
    {
      id: 8765,
      name: 'Zahi Ul Abideen',
        gender: 'Male',
      email: 'soroh@email.com',
    
      joinDate: '12 Jan 2024',
      plan: 'Free',
      status: 'Block'
    },
    {
      id: 8765,
      name: 'Hina Tariq',
          gender: 'Female',
      email: 'soroh@email.com',
  
      joinDate: '12 Jan 2024',
      plan: 'Premium',
      status: 'Block'
    }
  ];

  return (
    <div className="flex min-h-screen font-sans">
     <Sidebar />
    <main className="flex-1 bg-white p-6">
        {/* Topbar */}
        <Topbar />

        {/* Stat Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
  {[
    {
      title: 'Total User',
      count: '12,579',
      percentage: '+15.03%',
       bg: '#D3F0F8',
      icon: '/assets/alluser.png',
      percentColor: 'text-green-600',
      arrow: '/assets/trend.png',
    },
    {
      title: 'Reported User',
      count: '2,149',
      percentage: '+15.03%',
      bg: '#EAE9FB',
      icon: '/assets/nouser.png',
      percentColor: 'text-green-600',
      arrow: '/assets/trend.png',
    },
    {
      title: 'Blocked User',
      count: '7,893',
      percentage: '+15.03%',
      bg: '#F4E1FD',
      icon: '/assets/warning.png',
      percentColor: 'text-red-600',
      arrow: '/assets/red-trend.png',
    },
  ].map((card, i) => (
    <div
      key={i}
      className="relative p-4 rounded-xl overflow-hidden h-32"
      style={{ backgroundColor: card.bg }}
    >
      {/* Icon Top Right */}
      <Image
        src={card.icon}
        alt="icon"
        width={40}
        height={40}
        className="absolute top-4 left-4 z-10"
      />

      {/* Count Top Right */}
      <p className="text-3xl font-bold text-black absolute top-4 right-4 z-10">
        {card.count}
      </p>

      {/* Percentage Bottom Right */}
      <div
        className={`absolute bottom-4 right-4 flex items-center gap-1 text-base font-semibold ${card.percentColor} z-10`}
      >
        {card.percentage}
        <Image src={card.arrow} alt="arrow" width={16} height={16} />
      </div>

      {/* Title Bottom Left */}
      <h4
        className="absolute bottom-4 left-4 text-base font-medium z-10"
        style={{ color: '#0000006B' }}
      >
        {card.title}
      </h4>

      {/* Background Cloud */}
      <div
        className="absolute bottom-0 right-0 w-20 h-20 rounded-full overflow-hidden"
        style={{
          backgroundColor: ['#BFFFFB52', '#FFDACD52', '#FFC5D252'][i],
          zIndex: 0,
        }}
      >
        <Image
          src="/assets/cloud.png"
          alt="Cloud"
          fill
          className="object-contain opacity-80"
        />
      </div>
    </div>
  ))}
</div>

        {/* User Table */}
        <div className="bg-white rounded-xl p-6 mt-8 shadow-sm">
          <div className="flex justify-between items-center mb-4">
               <div className="flex gap-10">
            <h3 className="text-lg font-semibold ">All Users</h3>
            <h3 className="text-lg font-semibold ">Reported Users </h3>
            <h3 className="text-lg font-semibold text-purple-700 border-b-2 border-purple-700 pb-1">Blocked Users</h3>
         </div>
            
          <div className="relative inline-block text-left">
  <button
    onClick={() => setIsFilterOpen(!isFilterOpen)}
    className="text-black border border-gray-300 px-3 py-1 rounded-md bg-[#F9F9F9] text-sm flex items-center gap-2"
  >
    {selectedFilter}
    <Image src="/assets/year.png" alt="Dropdown" width={16} height={16} />
  </button>

  {isFilterOpen && (
    <div className="absolute right-0 mt-1 w-32 bg-white rounded-md shadow-lg z-10 border border-gray-200">
      {['Weekly', 'Monthly', 'Yearly'].map((option) => (
        <button
          key={option}
          className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          onClick={() => {
            setSelectedFilter(option);
            setIsFilterOpen(false);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  )}
</div>

            
          </div>

          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b text-[#000000B3] font-normal">
                <th className="py-2">User ID</th>
                <th>Name</th>
                 <th>Gender</th>

                <th>Email</th>
               
                <th>Join Date</th>
                <th>Plan</th>
               <th className="w-[120px]">Status</th>
    <th className="w-[80px] text-center">Action</th> {/* narrower and centered */}
              </tr>
            </thead>
            <tbody>
              {userData.map((user, i) => (
                <tr key={i} className="border-b text-[#0000006B]">
                  <td className="py-2">{user.id}</td>
                  <td>{user.name}</td>
                     <td>{user.gender}</td>
                  <td>{user.email}</td>
               
                  <td>{user.joinDate}</td>
                  <td>{user.plan}</td>
                  <td>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  user.status === 'Block'
                            ? 'bg-red-100 text-red-500'
                                     : 'bg-green-100 text-green-500'
                                        }`}

                    >
                      {user.status}
                    </span>
                  </td>
                                  <td className="text-center relative whitespace-nowrap"> {/* Fixed spacing */}

              <button
                onClick={() =>
                  setOpenMenu(openMenu === i ? null : i)
                }
                className="text-lg text-gray-600"
              >
                ⋮
              </button>

              {openMenu === i && (
               <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-md z-10">
  <button className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm hover:bg-gray-100 text-gray-700">
    <Image src="/assets/view-file.png" alt="view" width={16} height={16} />
    <span className="whitespace-nowrap">View Details</span>
  </button>

  <button className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm hover:bg-gray-100 text-gray-700">
    <Image src="/assets/suspend.png" alt="delete" width={16} height={16} />
    <span className="whitespace-nowrap">Unblock</span>
  </button>
</div>

              )}
            </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ReportedUser;