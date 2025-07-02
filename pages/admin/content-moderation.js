"use client";

import React from "react";
import { useState, useEffect, useCallback } from "react";
import Sidebar from "../../components/layout/SideBar";
import Topbar from "../../components/layout/TopBar";
import Image from "next/image";
import Link from "next/link";

const reportedProfiles = [
  {
    id: "1234",
    name: "Ahmed Raza",
    reason: "Inappropriate behavior",
    date: "12 Jan 2024",
    reportedBy: "Fatima Noor",
    status: "Active",
  },
  {
    id: "1356",
    name: "Rabia Siddiqui",
    reason: "Inappropriate behavior",
    date: "12 Jan 2024",
    reportedBy: "Hassan Shah",
    status: "Active",
  },
  {
    id: "5688",
    name: "Hamza Farooq",
    reason: "Inappropriate behavior",
    date: "12 Jan 2024",
    reportedBy: "Ahmed Raza",
    status: "Active",
  },
  {
    id: "8761",
    name: "Mahnoor Javed",
    reason: "Inappropriate behavior",
    date: "12 Jan 2024",
    reportedBy: "Rabia Siddiqui",
    status: "Blocked",
  },
  {
    id: "8762",
    name: "Fahad Iqbal",
    reason: "Inappropriate behavior",
    date: "12 Jan 2024",
    reportedBy: "Hamza Farooq",
    status: "Active",
  },
  {
    id: "8763",
    name: "Fatima Noor",
    reason: "Inappropriate behavior",
    date: "12 Jan 2024",
    reportedBy: "Mahnoor Javed",
    status: "Blocked",
  },
  {
    id: "8764",
    name: "Hassan Shah",
    reason: "Inappropriate behavior",
    date: "12 Jan 2024",
    reportedBy: "Fahad Iqbal",
    status: "Active",
  },
  {
    id: "8765",
    name: "Ayesha Khan",
    reason: "Inappropriate behavior",
    date: "12 Jan 2024",
    reportedBy: "Ayesha Khan",
    status: "Active",
  },
  {
    id: "8766",
    name: "Zain Ul Abideen",
    reason: "Inappropriate behavior",
    date: "12 Jan 2024",
    reportedBy: "Zain Ul Abideen",
    status: "Blocked",
  },
  {
    id: "8767",
    name: "Hina Tariq",
    reason: "Inappropriate behavior",
    date: "12 Jan 2024",
    reportedBy: "Hina Tariq",
    status: "Active",
  },
];

export default function ContentModeration() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = useCallback(
    () => setIsMobileSidebarOpen((prev) => !prev),
    []
  );
  const [openMenuId, setOpenMenuId] = useState(null);

  const handleMenuToggle = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };
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
  const cards = [
    {
      title: "Total Reported Profiles",
      count: "40,689",
      bg: "#669AFF99",
      trendBg: "#669AFF1F",
      icon: "/assets/darkblue.svg",
    },
    {
      title: "Pending Reviews",
      count: "40,689",
      bg: "#DD83FF99",
      trendBg: "#DD83FF1F",
      icon: "/assets/pink.svg",
    },
    {
      title: "Banned Profiles",
      count: "40,689",
      bg: "#6ED39799",
      trendBg: "#6ED3971F",
      icon: "/assets/green.svg",
    },
    {
      title: "Resolved Reports",
      count: "40,689",
      bg: "#33B8C599",
      trendBg: "#33B8C51F",
      icon: "/assets/navyblue.svg",
    },
  ];

  return (
    <div className="flex min-h-screen font-sans">
      <Sidebar
        isMobileSidebarOpen={isMobileSidebarOpen}
        toggleMobileSidebar={toggleMobileSidebar}
        isDesktop={isDesktop}
      />

      {/* <Topbar /> */}
      <main
        className={`flex-1 bg-white p-6 pt-24 md:ml-[260px] transition-all duration-300 ${
          isDesktop && isMobileSidebarOpen ? "ml-[260px]" : ""
        }`}
      >
        <Topbar
          toggleMobileSidebar={toggleMobileSidebar}
          isMobileSidebarOpen={isMobileSidebarOpen}
          isDesktop={isDesktop}
        />

        <h2 className="text-xl font-bold text-black mb-6">
          Content Moderation
        </h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative p-4 rounded-xl overflow-hidden"
              style={{ backgroundColor: card.bg }}
            >
              {/* Top right icon */}
              <Image
                src={card.icon}
                alt="icon"
                width={40}
                height={40}
                className="absolute top-4 right-4 z-10"
              />

              {/* Title */}
              <div
                className="text-base font-semibold mb-1"
                style={{ color: "#00000085" }}
              >
                {card.title}
              </div>

              {/* Count */}
              <div className="text-2xl font-bold text-gray-900">
                {card.count}
              </div>

              {/* Trend line */}
              <div className="flex items-center gap-2 mt-2">
                {/* Border box with icon + percentage */}
                <div className="flex items-center gap-1 bg-white/40 border border-black/10 rounded-full px-2 py-1 w-fit">
                  <Image
                    src="/assets/trendup.svg"
                    alt="trend"
                    width={15}
                    height={15}
                  />
                  <span className="text-black text-sm font-semibold">
                    3.48%
                  </span>
                </div>

                {/* Outside text */}
                <span className="text-[#00000085] text-xs font-semibold">
                  Since last month
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Header Row */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-4 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
            <h3 className="text-lg font-semibold">Reported Profiles</h3>
            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm">
                Yearly
                <Image
                  src="/assets/dropdown.svg"
                  alt="year icon"
                  width={16}
                  height={16}
                />
              </button>
              <button className="flex-1 sm:flex-none px-4 py-2 bg-[#5D5FEF] hover:bg-[#3d3fea] text-white text-sm rounded-lg">
                View all
              </button>
            </div>
          </div>

          {/* Table Section */}
          <div className="overflow-auto rounded-lg border border-gray-200">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-4 py-2">User ID</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Reason</th>
                  <th className="px-4 py-2">Report Date</th>
                  <th className="px-4 py-2">Reported By</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {reportedProfiles.map((profile, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-2 text-gray-500">{profile.id}</td>
                    <td className="px-4 py-2 text-gray-500">{profile.name}</td>
                    <td className="px-4 py-2 text-gray-500">
                      {profile.reason}
                    </td>
                    <td className="px-4 py-2 text-gray-500">{profile.date}</td>
                    <td className="px-4 py-2 text-gray-500">
                      {profile.reportedBy}
                    </td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-3 py-1 text-xs rounded-full font-medium ${
                          profile.status === "Active"
                            ? "bg-green-100 text-green-500"
                            : "bg-red-100 text-red-500"
                        }`}
                      >
                        {profile.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="relative inline-block">
                        <button onClick={() => handleMenuToggle(profile.id)}>
                          <Image
                            src="/assets/dots.svg"
                            alt="Actions"
                            width={20}
                            height={20}
                            className="cursor-pointer"
                          />
                        </button>

                        {openMenuId === profile.id && (
                          <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-20 text-left">
                            {/* ===== CHANGE IS HERE ===== */}
                            <Link
                              href={`/management/userDetails/${profile.id}`}
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
                            >
                              <Image
                                src="/assets/view-file.svg"
                                alt="view"
                                width={16}
                                height={16}
                              />
                              View Details
                            </Link>

                            <button className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-100 text-gray-700">
                              <Image
                                src="/assets/approve.svg"
                                alt="approve"
                                width={16}
                                height={16}
                              />
                              Approve
                            </button>
                            <button className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-100 text-gray-700">
                              <Image
                                src="/assets/warning.svg"
                                alt="warn"
                                width={16}
                                height={16}
                              />
                              Issue Warning
                            </button>
                            <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                              <Image
                                src="/assets/delete.svg"
                                alt="delete"
                                width={16}
                                height={16}
                              />
                              Delete User
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
