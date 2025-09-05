"use client";
import React, { useState, useCallback, useEffect } from "react";
import Sidebar from "../../components/layout/SideBar";
import Topbar from "../../components/layout/TopBar";
import Link from "next/link";
import Image from "next/image";

export default function CreateNotificationPage() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = useCallback(() => {
    setIsMobileSidebarOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      setIsMobileSidebarOpen(desktop);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen font-sans">
      <Sidebar
        isMobileSidebarOpen={isMobileSidebarOpen}
        toggleMobileSidebar={toggleMobileSidebar}
        isDesktop={isDesktop}
      />
      {/* Note: I've corrected pt-26 to pt-24 as 26 is not a standard tailwind class */}
      <main
        className={`flex-1 bg-white p-6 pt-24 transition-all duration-300 ${
          isDesktop ? "md:ml-[260px]" : ""
        }`}
      >
        <Topbar
          toggleMobileSidebar={toggleMobileSidebar}
          isMobileSidebarOpen={isMobileSidebarOpen}
          isDesktop={isDesktop}
        />

        {/* ===== CHANGE IS HERE: max-w-4xl is now max-w-7xl ===== */}
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
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
          <div className="bg-white border border-gray-100 p-6 rounded-lg">
            {/* Heading */}
            <h1 className="text-2xl font-bold text-black mb-6">
              Create Notification
            </h1>

            {/* Form */}
            <form className="space-y-6 p-6 rounded-lg">
              {/* Send To & Notification Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Send To */}
                <div className="relative">
                  <label className="block text-sm font-medium mb-2">
                    Send To
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 pr-10 bg-white appearance-none focus:outline-none focus:ring-1 focus:ring-[#5D5FEF]"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-gray-400">
                      Select
                    </option>
                    <option>All Active Users</option>
                    <option>Specific User</option>
                    <option>Premium Users</option>
                  </select>
                  <Image
                    src="/assets/arrowdown.svg"
                    alt="Arrow Icon"
                    width={20}
                    height={20}
                    className="pointer-events-none absolute right-3 top-1/2 mt-1"
                  />
                </div>

                {/* Notification Type */}
                <div className="relative">
                  <label className="block text-sm font-medium mb-2">
                    Notification Type
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 pr-10 bg-white appearance-none focus:outline-none focus:ring-1 focus:ring-[#5D5FEF]"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-gray-400">
                      Select Type
                    </option>
                    <option>Alerts</option>
                    <option>Push Notification</option>
                    <option>Email Notification</option>
                  </select>
                  <Image
                    src="/assets/arrowdown.svg"
                    alt="Arrow Icon"
                    width={20}
                    height={20}
                    className="pointer-events-none absolute right-3 top-1/2 mt-1"
                  />
                </div>
              </div>

              {/* Notification Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Notification Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#5D5FEF]"
                  placeholder="Add notification name"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  rows="5"
                  className="w-full border  border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#5D5FEF]"
                  placeholder="Add description"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="bg-[#5D5FEF] text-white font-semibold px-8 py-2 rounded-lg hover:bg-[#4a4be0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5D5FEF]"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
