"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"; 
import Sidebar from "../../components/layout/SideBar";
import Topbar from "../../components/layout/TopBar";

const DetailsPage = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
          const toggleMobileSidebar = () => {
            setIsMobileSidebarOpen(!isMobileSidebarOpen);
          };
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
    subscriptionPlan: "Premium",
    planPrice: "20.99$",
    duration: "30 Day's",
    subscriptionStartDate: "17 Jun, 2022",
    subscriptionExpiryDate: "17 Feb, 2022",
  });

  const handleChange = (field, value) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  return (
    // <div className="flex min-h-screen font-sans">
    //   <Sidebar />
    //   <main className="flex-1">
    //     <Topbar />
    <div className="flex min-h-screen font-sans">
      <Sidebar 
        isMobileSidebarOpen={isMobileSidebarOpen}
        toggleMobileSidebar={toggleMobileSidebar}
      />
      <main className="flex-1 bg-white p-6 pt-24 md:ml-[260px] transition-all duration-300">
        <Topbar toggleMobileSidebar={toggleMobileSidebar} />


        {/* <main className="pt-24 min-h-screen bg-white"> */}
        <main className="pt-24 min-h-screen bg-white px-6 md:px-10">
          {/* Breadcrumb */}
          <p className="text-sm text-gray-500 mb-4">
            <Link
              href="/admin/subscribe-and-payment"
              className="hover:underline text-gray-600"
            >
              Subscription & Payment
            </Link>
            <span className="mx-1">{">"}</span>
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
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Image
                    src="/assets/verified.svg"
                    alt="verified"
                    width={16}
                    height={16}
                  />
                  <span className="text-md text-gray-700">verified</span>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200" />

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Column 1 */}
              <div className="space-y-4">
                <DetailItem label="User ID" value={user.id} />
                <DetailItem
                  label="City"
                  value={user.city}
                  editable={isEditing}
                  onChange={(val) => handleChange("city", val)}
                />
                <DetailItem
                  label="Marital Status"
                  value={user.maritalStatus}
                  editable={isEditing}
                  onChange={(val) => handleChange("maritalStatus", val)}
                />
                <DetailItem label="Last Login Date" value={user.lastLogin} />
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                <DetailItem
                  label="Phone"
                  value={user.phone}
                  editable={isEditing}
                  onChange={(val) => handleChange("phone", val)}
                />
                <DetailItem
                  label="Gender"
                  value={user.gender}
                  editable={isEditing}
                  onChange={(val) => handleChange("gender", val)}
                />
                <DetailItem label="Join Date" value={user.joinDate} />
                <DetailItem label="Profile Views" value={user.profileViews} />
              </div>

              {/* Column 3 */}
              <div className="space-y-4">
                <DetailItem
                  label="Country"
                  value={user.country}
                  editable={isEditing}
                  onChange={(val) => handleChange("country", val)}
                />
                <DetailItem
                  label="Date of Birth"
                  value={user.dob}
                  editable={isEditing}
                  onChange={(val) => handleChange("dob", val)}
                />
                <DetailItem
                  label="Subscription Plan"
                  value={user.plan}
                  editable={isEditing}
                  onChange={(val) => handleChange("plan", val)}
                />
                <DetailItem label="Notches Found" value={user.notches} />
              </div>
            </div>

            {/* ✅ Details */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-10">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/assets/diamond.svg"
                  alt="icon"
                  width={20}
                  height={20}
                />
                <h2 className="text-lg font-bold">Subscription Details</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <p className="text-sm text-gray-500">Subcription Plan:</p>
                  <p className="font-small">{user.subscriptionPlan}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Plan Price :</p>
                  <p className="font-small">{user.planPrice}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Duration:</p>
                  <p className="font-small">{user.duration}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div>
                  <p className="text-sm text-gray-500">
                    Subscription Start Date:
                  </p>
                  <p className="font-small">{user.subscriptionStartDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Subscription Expiry Date:
                  </p>
                  <p className="font-small">{user.subscriptionExpiryDate}</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </main>
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
      <p className="text-md text-gray-900">{value || "N/A"}</p>
    )}
  </div>
);

export default DetailsPage;
