'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // ✅ Link import added
import Sidebar from '../../components/layout/SideBar';
import Topbar from '../../components/layout/TopBar';

const BlockedDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
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
    verified: true,
    reportId: "#679467",
  reportedBy: "Majeed",
  reportReason: "Inappropriate Behavior",
  reportDate: "17 Jun, 2022",
  reportDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus nec justo gravida facilisis. Proin dictum sapien vel ligula hendrerit, non vehicula neque tincidunt. Fusce tincidunt, quam at suscipit dictum, odio metus lacinia felis, sit amet facilisis lacus arcu in ex. Vivamus auctor, tortor et sagittis tincidunt.",

  });

  const handleChange = (field, value) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  return (
   <div className="flex min-h-screen font-sans">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
      {/* <main className="pt-24 min-h-screen bg-white"> */}
      <main className="pt-24 min-h-screen bg-white px-6 md:px-10">

          {/* Breadcrumb */}
          <p className="text-sm text-gray-500 mb-4">
            <Link href="/admin/usermanagement" className="hover:underline text-gray-600">
              User Management
            </Link>
            <span className="mx-1">{'>'}</span>
            <span className="font-semibold text-black">Details</span>
          </p>

          {/* User Details Card */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            {/* Profile Section */}
            <div className="flex items-start gap-6 mb-8">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-purple-200">
                <Image
                  src="/assets/blockuser.png"
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
<div className="px-3 py-1 rounded-full border border-[#FF47471F] bg-[#FF47471F] text-[#FF4747] text-sm font-semibold">
  Block
</div>


</div>
<div className="flex items-center gap-2 mt-2">
  <Image src="/assets/verified.png" alt="Unverified" width={16} height={16} />
  <span className="text-md text-gray-700">Unverified</span>
</div>


              </div>
            </div>

            <hr className="my-6 border-gray-200" />

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Column 1 */}
              <div className="space-y-4">
                <DetailItem label="User ID" value={user.id} />
                <DetailItem label="City" value={user.city} editable={isEditing} onChange={(val) => handleChange('city', val)} />
                <DetailItem label="Marital Status" value={user.maritalStatus} editable={isEditing} onChange={(val) => handleChange('maritalStatus', val)} />
                <DetailItem label="Last Login Date" value={user.lastLogin} />
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                <DetailItem label="Phone" value={user.phone} editable={isEditing} onChange={(val) => handleChange('phone', val)} />
                <DetailItem label="Gender" value={user.gender} editable={isEditing} onChange={(val) => handleChange('gender', val)} />
                <DetailItem label="Join Date" value={user.joinDate} />
                <DetailItem label="Profile Views" value={user.profileViews} />
              </div>

              {/* Column 3 */}
              <div className="space-y-4">
                <DetailItem label="Country" value={user.country} editable={isEditing} onChange={(val) => handleChange('country', val)} />
                <DetailItem label="Date of Birth" value={user.dob} editable={isEditing} onChange={(val) => handleChange('dob', val)} />
                <DetailItem label="Subscription Plan" value={user.plan} editable={isEditing} onChange={(val) => handleChange('plan', val)} />
                <DetailItem label="Notches Found" value={user.notches} />
              </div>
            </div>
            {/* ✅ Reported Issues Section */}
<div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-10">
  <div className="flex items-center gap-2 mb-4">
    <Image src="/assets/reportuser.png" alt="icon" width={20} height={20} />
    <h2 className="text-lg font-bold">Reported Summary</h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
    <div>
      <p className="text-sm text-gray-500">Report ID:</p>
      <p className="font-small">{user.reportId}</p>
    </div>
    <div>
      <p className="text-sm text-gray-500">Report By:</p>
      <p className="font-small">{user.reportedBy}</p>
    </div>
    <div>
      <p className="text-sm text-gray-500">Report Reason:</p>
      <p className="font-small">{user.reportReason}</p>
    </div>
  </div>

  <div className="mb-4">
    <p className="text-sm text-gray-500">Report Date:</p>
    <p className="font-small">{user.reportDate}</p>
  </div>

  <div>
    <p className="text-md font-semibold">Report Description:</p>
    <p className="font-small text-gray-700">{user.reportDescription}</p>
  </div>
</div>

          </div>

      </main>
      </div>
    </div>
  );
};

// Reusable DetailItem Component
const DetailItem = ({ label, value, editable, onChange }) => (
  <div>
    <p className="text-sm text-gray-500">{label}:</p>
    {editable ? (
      <input
        className="border rounded px-2 py-1 w-full"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    ) : (
      <p className="font-medium">{value || 'N/A'}</p>
    )}
  </div>
);

export default BlockedDetails;
