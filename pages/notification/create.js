"use client";
import React, { useState } from "react";
import Sidebar from "../../components/layout/SideBar";
import Topbar from "../../components/layout/TopBar";
import Link from "next/link";

export default function CreateNotificationPage() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };
  return (
    <div className="flex min-h-screen font-sans">
      <Sidebar
        isMobileSidebarOpen={isMobileSidebarOpen}
        toggleMobileSidebar={toggleMobileSidebar}
      />
      <main className="flex-1 bg-white p-6 pt-24 md:ml-[260px] transition-all duration-300">
        <Topbar toggleMobileSidebar={toggleMobileSidebar} />

        {/* ✅ Wrapper aligned with sidebar and below topbar */}
        <div className="pl-6 pr-6">
          {/* ✅ Breadcrumb */}
          <p className="text-sm text-gray-500 mb-4">
            <Link
              href="/admin/system-notification"
              className="hover:underline text-gray-600"
            >
              System Notification
            </Link>
            <span className="mx-1">{">"}</span>
            <span className="font-semibold text-black">
              Create Notification
            </span>
          </p>

          {/* ✅ Heading */}
          <h1 className="text-2xl font-medium mb-6">Create Notification</h1>

          {/* ✅ Form */}
          <form className="space-y-4">
            {/* Send To */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Send To */}
              <div className="relative">
                <label className="block text-sm font-medium mb-1">
                  Send To
                </label>
                <select
                  className="w-full border border-gray-300 rounded px-3 py-2 pr-10 bg-white appearance-none focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled selected className="text-gray-400">
                    Select
                  </option>
                  <option>All Active Users</option>
                  <option>Specific User</option>
                  <option>Premium Users</option>
                </select>
                <img
                  src="/assets/arrowdown.svg"
                  alt="Arrow Icon"
                  className="pointer-events-none absolute right-3 top-[58%] transform -translate-y-1/2 w-6 h-6"
                />
              </div>

              {/* Notification Type */}
              <div className="relative">
                <label className="block text-sm font-medium mb-1">
                  Notification Type
                </label>
                <select
                  className="w-full border border-gray-300 rounded px-3 py-2 pr-10 bg-white appearance-none focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled se className="text-gray-400">
                    Select Type
                  </option>
                  <option>Alerts</option>
                  <option>Push Notification</option>
                  <option>Email Notification</option>
                </select>
                <img
                  src="/assets/arrowdown.svg"
                  alt="Arrow Icon"
                  className="pointer-events-none absolute right-3 top-[58%] transform -translate-y-1/2 w-6 h-6"
                />
              </div>
            </div>

            {/* Notification Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Notification Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Add notification name"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                rows="4"
                className="w-full border  border-gray-300 rounded px-3 py-2"
                placeholder="Add description"
              />
            </div>

            {/* Submit Button aligned right */}
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="bg-[#5D5FEF] text-white px-5 py-2 rounded hover:bg-[#3d3fea]"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
