'use client';
import React from 'react';
import Image from 'next/image';
import Sidebar from '../layout/SideBar';
import Topbar from '../layout/TopBar';
const UserDetailsPage = () => {
  // Hardcoded user data
  const user = {
    id: 36666,
    name: "Ayesha Khan",
    email: "ayesha123@gmail.com",
    city: "Lahore",
    maritalStatus: "Married",
    lastLogin: "Feb 16, 2023",
    phone: "+92 3046854747",
    gender: "Female",
    joinDate: "Jan 12, 2024",
    profileViews: 89,
    country: "Pakistan",
    dob: "01-10-2000",
    plan: "Gold",
    notches: 344,
    verified: true
  };

  return (
    <div className="flex min-h-screen font-sans">
      {/* Sidebar */}
      <Sidebar />
    <main className="flex-1 bg-white p-6">
        {/* Topbar */}
        <Topbar />

        {/* User Details Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          {/* Profile Section */}
          <div className="flex items-start gap-6 mb-8">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-purple-200">
              <Image
                src="/assets/ayesha.png"
                alt={user.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold">{user.name}</h2>
                  <p className="text-gray-600">{user.email}</p>
                </div>
                <button className="flex items-center gap-1 text-[#5D5FEF]">
                 
                  <span>Edit</span>
                   <Image 
                    src="/assets/edit.png" 
                    alt="Edit" 
                    width={18} 
                    height={18} 
                  />
                </button>
              </div>
              
              <div className="flex items-center gap-2 mt-2">
                  {user.verified && (
                  <Image 
                    src="/assets/verified.png" 
                    alt="Verified" 
                    width={16} 
                    height={16} 
                  />
                )}
                <span className={`inline-block px-3 py-1 text-xs rounded-full ${
                  user.verified ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}>
                  {user.verified ? 'Verified' : 'Unverified'}
                </span>
              
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="space-y-4">
              <DetailItem label="User ID" value={user.id} />
              <DetailItem label="City" value={user.city} />
              <DetailItem label="Marital Status" value={user.maritalStatus} />
              <DetailItem label="Last Login Date" value={user.lastLogin} />
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <DetailItem label="Phone" value={user.phone} />
              <DetailItem label="Gender" value={user.gender} />
              <DetailItem label="Join Date" value={user.joinDate} />
              <DetailItem label="Profile Views" value={user.profileViews} />
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <DetailItem label="Country" value={user.country} />
              <DetailItem label="Date of Birth" value={user.dob} />
              <DetailItem label="Subscription Plan" value={user.plan} />
              <DetailItem label="Notches Found" value={user.notches} />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

// Reusable component
const DetailItem = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-500">{label}:</p>
    <p className="font-medium">{value || 'N/A'}</p>
  </div>
);

export default UserDetailsPage;