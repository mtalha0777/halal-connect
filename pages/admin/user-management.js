"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/layout/SideBar";
import Topbar from "../../components/layout/TopBar";
import Image from "next/image";
import Link from "next/link";

const UserManagement = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Year");
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (openMenu !== null && !e.target.closest(".action-menu-container")) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [openMenu]);

  // User data with unique IDs
  const userData = [
    {
      id: 1234,
      name: "Ahmed Raza",
      gender: "Male",
      email: "john@email.com",
      joinDate: "12 Jan 2024",
      plan: "Free",
      status: "Verified",
    },
    {
      id: 1356,
      name: "Rabia Siddiqui",
      gender: "Female",
      email: "emily@email.com",
      joinDate: "12 Jan 2024",
      plan: "Gold",
      status: "Verified",
    },
    {
      id: 5688,
      name: "Hamza Farooq",
      gender: "Male",
      email: "clava@email.com",
      joinDate: "12 Jan 2024",
      plan: "Premium",
      status: "Unverified",
    },
    {
      id: 8765,
      name: "Mahmoor Javed",
      gender: "Female",
      email: "soroh@email.com",
      joinDate: "12 Jan 2024",
      plan: "Free",
      status: "Verified",
    },
    {
      id: 8765,
      name: "Fahad Iqbal",
      gender: "Male",
      email: "soroh@email.com",
      joinDate: "12 Jan 2024",
      plan: "Premium",
      status: "Verified",
    },
    {
      id: 8765,
      name: "Fatima Noor",
      gender: "Female",
      email: "soroh@email.com",
      joinDate: "12 Jan 2024",
      plan: "Free",
      status: "Unverified",
    },
    {
      id: 8765,
      name: "Hassan Shah",
      gender: "Male",
      email: "soroh@email.com",
      joinDate: "12 Jan 2024",
      plan: "Premium",
      status: "Verified",
    },
    {
      id: 8765,
      name: "Ayesha Khan",
      gender: "Female",
      email: "soroh@email.com",
      joinDate: "12 Jan 2024",
      plan: "Free",
      status: "Verified",
    },
    {
      id: 8765,
      name: "Zahi Ul Abideen",
      gender: "Male",
      email: "soroh@email.com",
      joinDate: "12 Jan 2024",
      plan: "Free",
      status: "Unverified",
    },
    {
      id: 8765,
      name: "Hina Tariq",
      gender: "Female",
      email: "soroh@email.com",
      joinDate: "12 Jan 2024",
      plan: "Premium",
      status: "Verified",
    },
  ];

  return (
    <div className="flex min-h-screen font-sans">
      <Sidebar
        isMobileSidebarOpen={isMobileSidebarOpen}
        toggleMobileSidebar={toggleMobileSidebar}
      />
      <main className="flex-1 bg-white p-6 pt-24 md:ml-[260px] transition-all duration-300">
        <Topbar toggleMobileSidebar={toggleMobileSidebar} />

        <h1 className="text-xl font-bold text-black mb-6">User Management</h1>

        {/* Stat Cards (keep your existing implementation) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {[
            {
              title: "Total User",
              count: "12,579",
              percentage: "+15.03%",
              bg: "#D3F0F8",
              icon: "/assets/alluser.svg",
              percentColor: "text-green-600",
              arrow: "/assets/trendup.svg",
            },
            {
              title: "Reported User",
              count: "2,149",
              percentage: "+15.03%",
              bg: "#EAE9FB",
              icon: "/assets/purple.svg",
              percentColor: "text-green-600",
              arrow: "/assets/trendup.svg",
            },
            {
              title: "Blocked User",
              count: "7,893",
              percentage: "+15.03%",
              bg: "#F4E1FD",
              icon: "/assets/nouser.svg",
              percentColor: "text-red-600",
              arrow: "/assets/redtrendup.svg",
            },
          ].map((card, i) => (
            <div
              key={`${card.title}-${i}`} // ✅ unique key forces re-render
              className="relative p-4 rounded-xl overflow-hidden h-32"
              style={{ backgroundColor: card.bg }}
            >
              {/* Icon Top Right */}
              <Image
                src={card.icon}
                alt="icon"
                width={40}
                height={40}
                className="absolute top-4 left-4 z-10"
              />

              {/* Count Top Right */}
              <p className="text-3xl font-bold text-black absolute top-4 right-4 z-10">
                {card.count}
              </p>

              {/* Percentage Bottom Right */}
              <div
                className={`absolute bottom-4 right-4 flex items-center gap-1 text-base font-semibold ${card.percentColor} z-10`}
              >
                {card.percentage}
                <Image src={card.arrow} alt="arrow" width={16} height={16} />
              </div>

              {/* Title Bottom Left */}
              <h4
                className="absolute bottom-4 left-4 text-base font-medium z-10"
                style={{ color: "#0000006B" }}
              >
                {card.title}
              </h4>
            </div>
          ))}
        </div>

        {/* User Table */}
        <div className="bg-white rounded-xl p-4 md:p-6 mt-8 shadow-sm overflow-x-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
              <h3 className="text-base md:text-lg font-semibold text-purple-700 border-b-2 border-purple-700 pb-1">
                All Users
              </h3>
              <Link href="/management/reported-user">
                <h3 className="text-base md:text-lg font-semibold cursor-pointer hover:text-purple-700">
                  Reported Users
                </h3>
              </Link>
              <Link href="/management/blocked-user">
                <h3 className="text-base md:text-lg font-semibold cursor-pointer hover:text-purple-700">
                  Blocked Users
                </h3>
              </Link>
            </div>

            <div className="relative inline-block text-left mt-4 sm:mt-0">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="text-black border border-gray-300 px-3 py-1 rounded-md bg-[#F9F9F9] text-sm flex items-center gap-2"
              >
                {selectedFilter}
                <Image
                  src="/assets/dropdown.svg"
                  alt="Dropdown"
                  width={16}
                  height={16}
                />
              </button>

              {isFilterOpen && (
                <div className="absolute right-0 mt-1 w-36 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                  {["Week", "Month", "Year"].map((option) => (
                    <button
                      key={option}
                      className={`flex items-center gap-2 w-full px-4 py-2 text-left text-sm hover:bg-gray-100 text-gray-700`}
                      onClick={() => {
                        setSelectedFilter(option);
                        setIsFilterOpen(false);
                      }}
                    >
                      <Image
                        src="/assets/time.svg"
                        alt="Time"
                        width={14}
                        height={14}
                      />
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <table className="w-full text-left text-sm min-w-[900px]">
            <thead>
              <tr className="border-b text-[#000000B3] font-normal">
                <th className="py-2 px-1 md:px-3">User ID</th>
                <th className="px-1 md:px-3">Name</th>
                <th className="px-1 md:px-3">Gender</th>
                <th className="px-1 md:px-3">Email</th>
                <th className="px-1 md:px-3">Join Date</th>
                <th className="px-1 md:px-3">Plan</th>
                <th className="px-1 md:px-3 w-[120px]">Status</th>
                <th className="px-1 md:px-3 w-[80px] text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, i) => (
                <tr key={i} className="border-b text-[#0000006B]">
                  <td className="py-2 px-1 md:px-3">{user.id}</td>
                  <td className="px-1 md:px-3">{user.name}</td>
                  <td className="px-1 md:px-3">{user.gender}</td>
                  <td className="px-1 md:px-3">{user.email}</td>
                  <td className="px-1 md:px-3">{user.joinDate}</td>
                  <td className="px-1 md:px-3">{user.plan}</td>
                  <td className="px-1 md:px-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        user.status === "Verified"
                          ? "bg-green-100 text-green-500"
                          : "bg-red-100 text-red-500"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-1 md:px-3 text-center relative">
                    <div className="flex justify-center action-menu-container">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenMenu(openMenu === i ? null : i);
                        }}
                        className="text-lg text-gray-600 focus:outline-none"
                      >
                        <Image
                          src="/assets/dots.svg"
                          alt="Actions"
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      </button>
                      {openMenu === i && (
                        <div className="absolute right-0 z-50 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
                          {user.status === "Verified" && (
                            <Link
                              href="/contentdetails/view-details"
                              className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm hover:bg-gray-100 text-gray-700"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Image
                                src="/assets/view-file.svg"
                                alt="view"
                                width={16}
                                height={16}
                              />
                              <span>View Details</span>
                            </Link>
                          )}
                          <button
                            className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm hover:bg-gray-100 text-gray-700"
                            onClick={(e) => {
                              e.stopPropagation();
                              // Add delete logic here
                              setOpenMenu(null);
                            }}
                          >
                            <Image
                              src="/assets/delete.svg"
                              alt="delete"
                              width={16}
                              height={16}
                            />
                            <span>Delete User</span>
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
      </main>
    </div>
  );
};

export default UserManagement;
