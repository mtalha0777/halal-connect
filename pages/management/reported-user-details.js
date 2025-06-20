"use client";
import React from "react";
import Image from "next/image";
import Sidebar from "../../components/layout/SideBar";
import Topbar from "../../components/layout/TopBar";
const ReportedUserDetails = () => {
  // User data
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
    verified: false,
    report: {
      id: "#679467",
      reportedBy: "Majeed",
      date: "17 Jun, 2022",
      count: 10,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus nec justo gravida facilisis. Proin dictum sapien vel ligula hendrerit, non vehicula neque tincidunt. Fusce tincidunt, quam at suscipit dictum, odio metus lacinia felis, sit amet facilisis lacus arcu in ex. Vivamus auctor, tortor et sagittis tincidunt!",
    },
  };

  return (
    <div className="flex min-h-screen font-sans">
      <Sidebar />
      <main className="flex-1 bg-white p-6">
        {/* Topbar */}
        <Topbar />
        {/* User Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-6">
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
                    src="/assets/edit.svg"
                    alt="Edit"
                    width={16}
                    height={16}
                  />
                </button>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <Image
                  src="/assets/verified.svg"
                  alt="Verified"
                  width={16}
                  height={16}
                />
                <span
                  className={`inline-block px-3 py-1 text-sm rounded ${
                    user.verified ? "text-gray-500" : "text-gray-600"
                  }`}
                >
                  {user.verified ? "Verified" : "Unverified"}
                </span>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* User Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Column 1 */}
            <div className="space-y-4">
              <DetailItem label="User ID" value={user.id} />
              <DetailItem label="Phone" value={user.phone} />
              <DetailItem label="Country" value={user.country} />
              <DetailItem label="City" value={user.city} />
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <DetailItem label="Date of Birth" value={user.dob} />
              <DetailItem label="Gender" value={user.gender} />
              <DetailItem label="Marital Status" value={user.maritalStatus} />
              <DetailItem label="Plan" value={user.plan} />
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <DetailItem label="Join Date" value={user.joinDate} />
              <DetailItem label="Last Login" value={user.lastLogin} />
              <DetailItem label="Profile Views" value={user.profileViews} />
              <DetailItem label="Notches Found" value={user.notches} />
            </div>
          </div>

          {/* Report Summary Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/assets/reportuser.svg" // Make sure this matches your icon file name
                alt="Report"
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
              />
              <h3 className="text-xl font-bold">Report Summary</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <DetailItem label="Report ID" value={user.report.id} />
                <DetailItem
                  label="Reported By"
                  value={user.report.reportedBy}
                />
                {/* <DetailItem label="Report Reason" value={user.report.reason} /> */}
              </div>

              <div className="space-y-4">
                <DetailItem label="Report Date" value={user.report.date} />
                <DetailItem label="Total Reports" value={user.report.count} />
              </div>
            </div>

            <div className="mt-6">
              <p className="text-lg font-bold text-black mb-2">
                Report Description:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">{user.report.description}</p>
              </div>
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
    <p className="font-medium">{value || "N/A"}</p>
  </div>
);

export default ReportedUserDetails;
