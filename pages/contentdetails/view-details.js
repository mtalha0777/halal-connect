"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../../components/layout/SideBar";
import Topbar from "../../components/layout/TopBar";

const ViewDetails = () => {
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
  });

  const handleChange = (field, value) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex min-h-screen font-sans">
      <Sidebar
        isMobileSidebarOpen={isMobileSidebarOpen}
        toggleMobileSidebar={toggleMobileSidebar}
      />
      <main className="flex-1 bg-white p-6 pt-20 md:ml-[260px] transition-all duration-300">
        <Topbar toggleMobileSidebar={toggleMobileSidebar} />

        {/* Breadcrumb */}
        <div className="w-full bg-[#F5F5F5]  px-4 py-3 mt-4  mb-2">
          <p className="text-sm text-gray-700">
            <Link href="/admin/user-management" className="hover:underline">
              User Management
            </Link>
            <span className="mx-1">{">"}</span>
            <span className="font-semibold text-black">Details</span>
          </p>
        </div>
        {/* <main className="pt-24 min-h-screen bg-white"> */}
        <section className="bg-gray-50  rounded-lg px-4 md:px-9 pt-4 pb-12 space-y-8">
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
                  {isEditing ? (
                    <>
                      <input
                        className="text-xl font-bold mb-1"
                        value={user.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                      />
                      <input
                        className="text-sm text-gray-600"
                        value={user.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                    </>
                  ) : (
                    <>
                      <h2 className="text-xl font-bold">{user.name}</h2>
                      <p className="text-gray-600">{user.email}</p>
                    </>
                  )}
                </div>

                <button
                  className="flex items-center gap-1 text-[#5D5FEF] hover:underline hover:text-[#2e2fff] transition"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <span>{isEditing ? "Save" : "Edit"}</span>
                  <Image
                    src="/assets/edit.svg"
                    alt="Edit"
                    width={18}
                    height={18}
                  />
                </button>
              </div>

              <div className="flex items-center gap-2 mt-2">
                {user.verified && (
                  <Image
                    src="/assets/verified.svg"
                    alt="Verified"
                    width={16}
                    height={16}
                  />
                )}
                <span className="text-sm text-gray-700">
                  {user.verified ? "Verified" : "Unverified"}
                </span>
              </div>
            </div>
          </div>

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
        </section>
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
      <p className="font-medium">{value || "N/A"}</p>
    )}
  </div>
);

export default ViewDetails;
