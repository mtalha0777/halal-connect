"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../../components/layout/SideBar";
import Topbar  from "../../components/layout/TopBar";

export default function UserManagement() {

  const [isDesktop, setIsDesktop]         = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);   
  const [isFilterOpen, setIsFilterOpen]   = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Year");
  const [openMenu, setOpenMenu] = useState(null);
  const sidebarRef = useRef(null);

  
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;   
      setIsDesktop(desktop);
      setIsSidebarOpen(desktop);                  
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Close dropdowns / menus on outside click */
  useEffect(() => {
    const closeStuff = () => {
      setOpenMenu(null);
      setIsFilterOpen(false);
    };
    document.addEventListener("click", closeStuff);
    return () => document.removeEventListener("click", closeStuff);
  }, []);

  /* Sidebar toggle handler (passed to Topbar & Sidebar) */
  const toggleSidebar = useCallback(
    () => setIsSidebarOpen((prev) => !prev),
    []
  );


  const allUsers = [
    { id: 1234,  name: "Ahmed Raza",      gender: "Male",   email: "ahmed@email.com",   joinDate: "12 Jan 2024", plan: "Free",    status: "Verified"   },
    { id: 1356,  name: "Rabia Siddiqui",  gender: "Female", email: "rabia@email.com",   joinDate: "12 Jan 2024", plan: "Gold",    status: "Verified"   },
    { id: 5688,  name: "Hamza Farooq",    gender: "Male",   email: "hamza@email.com",   joinDate: "12 Jan 2024", plan: "Premium", status: "Unverified" },
    { id: 8765,  name: "Mahmoor Javed",   gender: "Female", email: "mahmoor@email.com", joinDate: "12 Jan 2024", plan: "Free",    status: "Verified"   },
    { id: 8766,  name: "Fahad Iqbal",     gender: "Male",   email: "sarah@email.com",   joinDate: "12 Jan 2024", plan: "Premium", status: "Verified"   },
    { id: 8767,  name: "Fatima Noor",     gender: "Female", email: "sarah@email.com",  joinDate: "12 Jan 2024", plan: "Free",    status: "Unverified" },
    { id: 8768,  name: "Hassan Shah",     gender: "Male", email: "sarah@email.com",  joinDate: "12 Jan 2024", plan: "Premium",    status: "Verified" },
    { id: 8769,  name: "Ayesha Khan",     gender: "Female", email: "sarah@email.com",  joinDate: "12 Jan 2024", plan: "Free",    status: "Verified" },
    { id: 8770,  name: "Zain Ul Abideen",     gender: "Male", email: "sarah@email.com",  joinDate: "12 Jan 2024", plan: "Free",    status: "Unverified" },
    { id: 8771,  name: "Hina Tariq",     gender: "Female", email: "sarah@email.com",  joinDate: "12 Jan 2024", plan: "Premium",    status: "Verified" },
  ];
  const reportedUsers = [
  /* copy‑paste exactly what you sent, but give them a common “id” key */
  { id: 2001, reportId:1234,  name:"Ahmed Raza",   gender:"Male",   email:"john@email.com",  joinDate:"12 Jan 2024", reportDate:"12 Jan 2024", plan:"Free" },
   { id: 2002, reportId:1234,  name:"Rabia Siddiqui",   gender:"Female",   email:"emily@email.com",  joinDate:"12 Jan 2024", reportDate:"12 Jan 2024", plan:"Gold" },
    { id: 2003, reportId:1234,  name:"Hamza Farooq",   gender:"Male",   email:"alex@email.com",  joinDate:"12 Jan 2024", reportDate:"12 Jan 2024", plan:"Premium" },
     { id: 2004, reportId:1234,  name:"Mahmoor Javed",   gender:"Female",   email:"sarah@email.com",  joinDate:"12 Jan 2024", reportDate:"12 Jan 2024", plan:"Free" },
      { id: 2005, reportId:1234,  name:"Fahad Iqbal",   gender:"Male",   email:"sarah@email.com",  joinDate:"12 Jan 2024", reportDate:"12 Jan 2024", plan:"Premium" },
       { id: 2006, reportId:1234,  name:"Fatima Noor",   gender:"Female",   email:"sarah@email.com",  joinDate:"12 Jan 2024", reportDate:"12 Jan 2024", plan:"Free" },
        { id: 2007, reportId:1234,  name:"Hassan Shah",   gender:"Male",   email:"sarah@email.com",  joinDate:"12 Jan 2024", reportDate:"12 Jan 2024", plan:"Premium" },
         { id: 2008, reportId:1234,  name:"Ayesha Khan",   gender:"Female",   email:"sarah@email.com",  joinDate:"12 Jan 2024", reportDate:"12 Jan 2024", plan:"Free" },
          { id: 2007, reportId:1234,  name:"Zain Ul Abideen",   gender:"Male",   email:"sarah@email.com",  joinDate:"12 Jan 2024", reportDate:"12 Jan 2024", plan:"Free" },
         { id: 2008, reportId:1234,  name:"Hina Tariq",   gender:"Female",   email:"sarah@email.com",  joinDate:"12 Jan 2024", reportDate:"12 Jan 2024", plan:"Premium" },
]
const blockedUsers = [
  { id: 3001, banId:1234,  name:"Ahmed Raza",   gender:"Male",   email:"john@email.com",  joinDate:"12 Jan 2024", banReason:"Fake Profile", banDate:"12 Jan 2024", status:"Block" },
 { id: 3002, banId:1234,  name:"Rabia Siddiqui",   gender:"Male",   email:"emily@email.com",  joinDate:"12 Jan 2024", banReason:"Fake Profile", banDate:"12 Jan 2024", status:"Block" },
  { id: 3003, banId:1234,  name:"Hamza Farooq",   gender:"Male",   email:"alex@email.com",  joinDate:"12 Jan 2024", banReason:"Fake Profile", banDate:"12 Jan 2024", status:"Block" },
   { id: 3004, banId:1234,  name:"Mahmoor Javed",   gender:"Male",   email:"sarah@email.com",  joinDate:"12 Jan 2024", banReason:"Fake Profile", banDate:"12 Jan 2024", status:"Block" },
    { id: 3005, banId:1234,  name:"Fahad Iqbal",   gender:"Male",   email:"sarah@email.com",  joinDate:"12 Jan 2024", banReason:"Fake Profile", banDate:"12 Jan 2024", status:"Block" },
     { id: 3006, banId:1234,  name:"Fatima Noor",   gender:"Male",   email:"sarah@email.com",  joinDate:"12 Jan 2024", banReason:"Fake Profile", banDate:"12 Jan 2024", status:"Block" },
      { id: 3007, banId:1234,  name:"Hassan Shah",   gender:"Male",   email:"sarah@email.com",  joinDate:"12 Jan 2024", banReason:"Fake Profile", banDate:"12 Jan 2024", status:"Block" },
       { id: 3008, banId:1234,  name:"Aysha Khan",   gender:"Male",   email:"sarah@email.com",  joinDate:"12 Jan 2024", banReason:"Fake Profile", banDate:"12 Jan 2024", status:"Block" },
        { id: 3009, banId:1234,  name:"Ayesha Khan",   gender:"Male",   email:"sarah@email.com",  joinDate:"12 Jan 2024", banReason:"Fake Profile", banDate:"12 Jan 2024", status:"Block" },
         { id: 3010, banId:1234,  name:"Aysha Khan",   gender:"Male",   email:"sarah@email.com",  joinDate:"12 Jan 2024", banReason:"Fake Profile", banDate:"12 Jan 2024", status:"Block" },

];
  const statCards = [
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
  ];

  const tabs = [
    { id: "all",      label: "All Users"      },
    { id: "reported", label: "Reported Users" },
    { id: "blocked",  label: "Blocked Users"  },
  ];
  const [activeTab, setActiveTab] = useState("all");
const currentUsers =
  activeTab === "reported"
    ? reportedUsers
    : activeTab === "blocked"
      ? blockedUsers
      : allUsers;         // "all"

  /* Status pill */
  const Badge = ({ status }) => (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${
        status === "Verified"
          ? "bg-green-100 text-green-600"
          : "bg-red-100 text-red-600"
      }`}
    >
      {status}
    </span>
  );


  return (
    <div className="flex min-h-screen font-sans bg-slate-50">
      {/* Backdrop (mobile only) */}
      {!isDesktop && isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div ref={sidebarRef}>
        <Sidebar
          isMobileSidebarOpen={isSidebarOpen}
          toggleMobileSidebar={toggleSidebar}
          isDesktop={isDesktop}
        />
      </div>

      {/* Main panel */}
 <main className={`flex-1 transition-all duration-300 pt-[72px] /* 64px bar + 8px gap */
   ${isDesktop && isSidebarOpen ? "lg:ml-[260px]" : ""} `}>
        {/* Topbar */}
        <Topbar
          toggleMobileSidebar={toggleSidebar}
          isDesktop={isDesktop}
        />

        {/* Page content */}
        <div className="p-4 lg:p-6 pt-28">
          {/* Heading */}
          <h1 className="text-xl font-bold text-slate-800 mb-6">
            User Management
          </h1>

          {/* ── Stat cards ─────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {statCards.map((card) => (
              <div
                key={card.title}
                className="relative p-4 h-32 rounded-xl overflow-hidden shadow-sm"
                style={{ backgroundColor: card.bg }}
              >
                {/* icon */}
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={40}
                  height={40}
                  className="absolute top-4 left-4"
                />
                {/* count */}
                <p className="absolute top-4 right-4 text-3xl font-bold">
                  {card.count}
                </p>
                {/* percentage */}
                <div
                  className={`absolute bottom-4 right-4 flex items-center gap-1 text-base font-semibold ${card.percentColor}`}
                >
                  {card.percentage}
                  <Image src={card.arrow} alt="trend" width={16} height={16} />
                </div>
                {/* title */}
                <h4
                  className="absolute bottom-4 left-4 text-base font-medium"
                  style={{ color: "#0000006B" }}
                >
                  {card.title}
                </h4>
              </div>
            ))}
          </div>

          {/* ── User table container ───────── */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200">
            {/* Tabs + filter */}
            <div className="p-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-slate-200">
              {/* Tabs */}
              <div className="flex flex-wrap gap-2 lg:gap-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === tab.id
                        ? "text-purple-600 border-b-2 border-purple-600"
                        : "text-slate-600 hover:text-purple-600"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Filter dropdown */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsFilterOpen((prev) => !prev);
                  }}
                  className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg text-sm min-h-[44px]"
                >
                  {selectedFilter}
                  <Image src="/assets/dropdown.svg" alt="▼" width={12} height={12} />
                </button>

                {isFilterOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg border shadow-lg z-20">
                    {["Week", "Month", "Year"].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => {
                          setSelectedFilter(opt);
                          setIsFilterOpen(false);
                        }}
                        className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-slate-100"
                      >
                        <Image src="/assets/time.svg" alt="" width={14} height={14} />
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* ── Desktop table ─────────────── */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full min-w-[900px] text-sm">
                <thead className="bg-slate-50">
                  <tr className="text-left text-slate-600">
                    <th className="px-6 py-4 font-medium">User ID</th>
                    <th className="px-6 py-4 font-medium">Name</th>
                    <th className="px-6 py-4 font-medium">Gender</th>
                    <th className="px-6 py-4 font-medium">Email</th>
                    <th className="px-6 py-4 font-medium">Join Date</th>
                    <th className="px-6 py-4 font-medium">Plan</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
{currentUsers.map((user, i) => (
                    <tr key={user.id} className="hover:bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-800">{user.id}</td>
                      <td className="px-6 py-4">{user.name}</td>
                      <td className="px-6 py-4">{user.gender}</td>
                      <td className="px-6 py-4">{user.email}</td>
                      <td className="px-6 py-4">{user.joinDate}</td>
                      <td className="px-6 py-4">{user.plan}</td>
                      <td className="px-6 py-4"><Badge status={user.status} /></td>
                      <td className="px-6 py-4 text-center">
                        <div className="relative inline-block">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setOpenMenu(openMenu === i ? null : i);
                            }}
                            className="p-2 hover:bg-slate-100 rounded-lg"
                          >
                            <Image src="/assets/dots.svg" alt="..." width={20} height={20} />
                          </button>

                          {openMenu === i && (
                            <div className="absolute right-0 mt-2 w-40 bg-white rounded-md border shadow-lg z-30">
                              <Link
                                href={`/contentdetails/viewDetails/${user.id}`}
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-slate-100"
                              >
                                <Image src="/assets/view-file.svg" alt="" width={16} height={16} />
                                View Details
                              </Link>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  // TODO: Delete logic
                                  setOpenMenu(null);
                                }}
                                className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-slate-100"
                              >
                                <Image src="/assets/delete.svg" alt="" width={16} height={16} />
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

            {/* ── Mobile cards ──────────────── */}
            <div className="lg:hidden p-4 space-y-4">
             {currentUsers.map((user, i) => (
                <div key={user.id} className="bg-slate-50 rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-800">{user.name}</span>
                    <Badge status={user.status} />
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>ID: <span className="font-medium">{user.id}</span></div>
                    <div>Gender: {user.gender}</div>
                    <div>Plan: {user.plan}</div>
                    <div>Joined: {user.joinDate}</div>
                  </div>
                  <div className="text-sm">Email: {user.email}</div>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                    <Link
                      href={`/contentdetails/viewDetails/${user.id}`}
                      className="px-3 py-1.5 text-xs font-medium text-purple-600 bg-purple-100 rounded-lg hover:bg-purple-200"
                    >
                      View
                    </Link>
                    <div className="relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenMenu(openMenu === i ? null : i);
                        }}
                        className="p-2 hover:bg-slate-200 rounded-lg"
                      >
                        <Image src="/assets/dots.svg" alt="..." width={20} height={20} />
                      </button>
                      {openMenu === i && (
                        <div className="absolute right-0 bottom-full mb-2 w-40 bg-white rounded-md border shadow-lg z-30">
                          <button className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-slate-100">
                            <Image src="/assets/delete.svg" alt="" width={16} height={16} />
                            Delete User
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}