// 'use client';

import React from 'react';
import Sidebar from '../../components/layout/SideBar';
import Topbar from '../../components/layout/TopBar';
import Image from 'next/image';
import { MoreVertical } from 'lucide-react';

const notificationData = [
  {
    date: '01-14-2025',
    type: 'Email',
    title: 'Your Perfect Match is Waiting!',
    description: 'Someone sent you a Super Like! Don’t keep them waiting—view their profile now.',
    status: 'Active',
  },
  {
    date: '01-14-2025',
    type: 'Alerts',
    title: 'You’ve Got a Super Like!',
    description: 'Open your inbox and read the message from your match.',
    status: 'Active',
  },
  {
    date: '01-14-2025',
    type: 'New Match Found!',
    title: 'Your Profile Was Viewed',
    description: 'Someone just checked out your profile. Check who it was!',
    status: 'Inactive',
  },
  {
    date: '01-14-2025',
    type: 'Emial',
    title: 'Your Perfect Match is Waiting!',
    description: 'Open your inbox and read the message from your match.',
    status: 'Active',
  },
  {
    date: '01-14-2025',
    type: 'Alerts',
    title: 'You’ve Got a Super Like!',
    description: 'Someone just checked out your profile. Check who it was!',
    status: 'Inactive',
  },
  {
    date: '01-14-2025',
    type: 'Push Notification',
    title: 'New Match Found!',
    description: 'Open your inbox and read the message from your match.',
    status: 'Active',
  },
  {
    date: '01-14-2025',
    type: 'Email',
    title: 'Your Perfect Match is Waiting!',
    description: 'Someone just checked out your profile. Check who it was!',
    status: 'Inactive',
  },
  {
    date: '01-14-2025',
    type: 'Alerts',
    title: 'You’ve Got a Super Like!',
    description: 'Open your inbox and read the message from your match.',
    status: 'Active',
  },
  {
    date: '01-14-2025',
    type: 'Push Notification',
    title: 'New Match Found!',
    description: 'Someone just checked out your profile. Check who it was!',
    status: 'Inactive',
  },
  {
    date: '01-14-2025',
    type: 'Email',
    title: 'Your Perfect Match is Waiting!',
    description: 'Open your inbox and read the message from your match.',
    status: 'Active',
  },
  {
    date: '01-14-2025',
    type: 'Alerts',
    title: 'You’ve Got a Super Like!',
    description: 'Someone just checked out your profile. Check who it was!',
    status: 'Inactive',
  },
   {
    date: '01-14-2025',
    type: 'Push Notification',
    title: 'New Match Found!',
    description: 'Someone just checked out your profile. Check who it was!',
    status: 'Inactive',
  },
  

];

export default function SystemNotification() {
  return (
    <div className="flex min-h-screen font-sans">
      <Sidebar />
      <main className="flex-1 bg-white p-6 pt-24">
        <Topbar />

        {/* Title and Create Notification Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">System Notification</h2>
          <button className="flex items-center gap-2 bg-[#5D5FEF] hover:bg-[#3d3fea] text-white text-sm rounded px-4 py-2">
            <Image
              src="/assets/plus.png"
              alt="plus icon"
              width={10}
              height={10}
            />
            Create Notification
          </button>
        </div>

        {/* Header Row */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Notification Campaigns</h3>
        </div>

        {/* Table Section */}
        <div className="overflow-auto rounded-lg border border-gray-200">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-50">
              <tr>
                 <th className="px-4 py-2">Date</th>
        <th className="px-4 py-2">Type</th>
        <th className="px-4 py-2">Notification Name</th>
        <th className="px-4 py-2">Description</th>
        <th className="px-4 py-2">Status</th>
        <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
           <tbody>
  {notificationData.map((item, idx) => (
     <tr key={idx} className="border-t">
      <td className="px-4 py-3 text-base text-gray-400 font-normal">{item.date}</td>
      <td className="px-4 py-3 text-base text-gray-400 font-normal">{item.type}</td>
      <td className="px-4 py-3 text-base text-gray-400 font-normal">{item.title}</td>
      <td className="px-4 py-3 text-base text-gray-400 font-noraml max-w-md">{item.description}</td>
      <td className="px-4 py-3">
  <span
    className={`px-3 py-1 text-xs rounded-full font-medium ${
      item.status === 'Active'
        ? 'bg-green-100 text-green-500'
        : 'bg-red-100 text-red-500'
    }`}
  >
    {item.status}
  </span>
</td>

      <td className="px-4 py-3 relative">
        <div className="group relative inline-block">
          <MoreVertical className="w-4 h-4 text-gray-400 cursor-pointer" />
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
            <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 text-gray-700">Edit</button>
            <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 text-gray-700">Disable</button>
            <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 text-gray-700">Delete</button>
          </div>
        </div>
      </td>
    </tr>
  ))}
</tbody>

          </table>
        </div>
      </main>
    </div>
  );
}