"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../../components/layout/SideBar";
import Topbar from "../../components/layout/TopBar";

const UserDetailsPage = () => {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
        const toggleMobileSidebar = () => {
          setIsMobileSidebarOpen(!isMobileSidebarOpen);
        };
  const [user] = useState({
    id: 36666,
    name: "Ayesha Khan",
    email: "ayesha123@gmail.com",
    joinDate: "Jan 12, 2024",
    profileReports: 3,
    reportId: "#679467",
    reportedBy: "Majeed",
    reportReason: "Inappropriate Behavior",
    reportDate: "17 Jun, 2022",
    reportDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus nec justo gravida facilisis. Proin dictum sapien vel ligula hendrerit, non vehicula neque tincidunt. Fusce tincidunt, quam at suscipit dictum, odio metus lacinia felis, sit amet facilisis lacus arcu in ex. Vivamus auctor, tortor et sagittis tincidunt",
  });

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
<main className="flex-1 bg-white p-6 pt-20 md:ml-[260px] transition-all duration-300">
  <Topbar toggleMobileSidebar={toggleMobileSidebar} />

<div className="w-full bg-[#F5F5F5]  px-4 py-3 mt-4">
    <p className="text-sm text-gray-700">
      <Link href="/admin/content-moderation" className="hover:underline">
        Content Moderation
      </Link>
      <span className="mx-1">{">"}</span>
      <span className="font-semibold text-black">Details</span>
    </p>
  </div>


 {/* Entire page content */}
  <section className="pt-8 min-h-screen bg-white px-4 md:px-9 pb-12 space-y-4">
    {/* main block */}
    <div className="w-full px-0 md:px-0">
      {/* User Info */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div className="flex items-start gap-4">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-purple-200">
            <Image src="/assets/contentpic.png" alt={user.name} fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>

            {/* badge */}
            <div className="flex items-center gap-2 mt-1">
              <Image src="/assets/verified.svg" alt="Unverified Icon" width={16} height={16} />
              <span className="text-sm text-gray-500">Unverified</span>
            </div>
          </div>
        </div>

        <span
          className="inline-block border px-3 py-1 rounded-full text-sm font-medium"
          style={{ color: "#CF47FF", backgroundColor: "#CF47FF1F", borderColor: "#CF47FF" }}
        >
          Under Review
        </span>
      </div>

      {/* quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <p className="text-sm text-gray-500">User ID:</p>
          <p>{user.id}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Join Date:</p>
          <p>{user.joinDate}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Profile Reports:</p>
          <p>{user.profileReports}</p>
        </div>
      </div>

      {/* reported issues */}
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <Image src="/assets/reportuser.svg" alt="icon" width={20} height={20} />
          <h2 className="text-lg font-semibold">Reported Issues</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          <div>
            <p className="text-sm text-gray-500">Report ID:</p>
            <p>{user.reportId}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Report By:</p>
            <p>{user.reportedBy}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Report Reason:</p>
            <p>{user.reportReason}</p>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-500">Report Date:</p>
          <p>{user.reportDate}</p>
        </div>

        <div>
          <p className="text-md font-semibold">Report Description:</p>
          <p className="text-gray-700">{user.reportDescription}</p>
        </div>
      </div>
    </div>
  </section>
</main>

    </div>
  );
};

export default UserDetailsPage;
