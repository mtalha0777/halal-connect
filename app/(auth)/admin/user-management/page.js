"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/layout/SideBar";
import Topbar from "@/components/layout/TopBar";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "@/src/firebase";


export default function UserManagement() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Year");
  const [openMenu, setOpenMenu] = useState(null);
  const sidebarRef = useRef(null);
  const [allUsers, setAllUsers] = useState([]);
  const [reportedUsers, setReportedUsers] = useState([]);
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  
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
  
useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const db = getFirestore(app);
        const [usersSnap, reportedSnap, blockedSnap] = await Promise.all([
          getDocs(collection(db, "users")),
          getDocs(collection(db, "reportedUsers")),
          getDocs(collection(db, "blockedUsers")),
        ]);

        setAllUsers(usersSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        setReportedUsers(reportedSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        setBlockedUsers(blockedSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    const closeStuff = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setOpenMenu(null);
        setIsFilterOpen(false);
      }
    };
    document.addEventListener("click", closeStuff);
    return () => document.removeEventListener("click", closeStuff);
  }, []);

  const toggleSidebar = useCallback(
    () => setIsSidebarOpen((prev) => !prev),
    []
  );


  const statCards = [
    {
      title: "Total User",
     count: allUsers.length.toLocaleString(),
      percentage: "+15.03%",
      bg: "#D3F0F8",
      icon: "/assets/alluser.svg",
      percentColor: "text-green-600",
      arrow: "/assets/trendup.svg",
    },
    {
      title: "Reported User",
     count: reportedUsers.length.toLocaleString(),
      percentage: "+15.03%",
      bg: "#EAE9FB",
      icon: "/assets/purple.svg",
      percentColor: "text-green-600",
      arrow: "/assets/trendup.svg",
    },
    {
      title: "Blocked User",
     count: blockedUsers.length.toLocaleString(),
      percentage: "+15.03%",
      bg: "#F4E1FD",
      icon: "/assets/nouser.svg",
      percentColor: "text-red-600",
      arrow: "/assets/redtrendup.svg",
    },
  ];

  const tabs = [
    { id: "all", label: "All Users" },
    { id: "reported", label: "Reported Users" },
    { id: "blocked", label: "Blocked Users" },
  ];

  const currentUsers =
    activeTab === "reported"
      ? reportedUsers
      : activeTab === "blocked"
      ? blockedUsers
      : allUsers;

  const Badge = ({ status }) => (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${
        status === "Verified"
          ? "bg-green-100 text-green-600"
          : status === "Block"
          ? "bg-red-100 text-red-500"
          : "bg-red-100 text-red-600"
      }`}
    >
      {status}
    </span>
  );
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading Data...
      </div>
    );
  }
  return (
    <div className="flex min-h-screen font-sans bg-slate-50">
      {!isDesktop && isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      <div ref={sidebarRef}>
        <Sidebar
          isMobileSidebarOpen={isSidebarOpen}
          toggleMobileSidebar={toggleSidebar}
          isDesktop={isDesktop}
        />
      </div>
      <main
        className={`flex-1 transition-all duration-300 pt-[72px] ${
          isDesktop && isSidebarOpen ? "lg:ml-[260px]" : ""
        }`}
      >
        <Topbar toggleMobileSidebar={toggleSidebar} isDesktop={isDesktop} />
        <div className="p-4 lg:p-6">
          {/* Heading */}
          <h1 className="text-xl font-bold text-slate-800 mb-6">
            User Management
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {statCards.map((card) => (
              <div
                key={card.title}
                className="relative p-4 h-32 rounded-xl overflow-hidden shadow-sm"
                style={{ backgroundColor: card.bg }}
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={40}
                  height={40}
                  className="absolute top-4 left-4"
                />
                <p className="absolute top-4 right-4 text-3xl font-bold">
                  {card.count}
                </p>
                <div
                  className={`absolute bottom-4 right-4 flex items-center gap-1 text-base font-semibold ${card.percentColor}`}
                >
                  {card.percentage}
                  <Image src={card.arrow} alt="trend" width={16} height={16} />
                </div>
                <h4
                  className="absolute bottom-4 left-4 text-base font-medium"
                  style={{ color: "#0000006B" }}
                >
                  {card.title}
                </h4>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="p-2 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex flex-wrap gap-2 lg:gap-5">
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
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsFilterOpen((prev) => !prev);
                  }}
                  className="text-black border border-gray-300 px-4 py-1.5 rounded-md bg-[#F9F9F9] text-sm flex items-center gap-2"
                >
                  {selectedFilter}
                  <Image
                    src="/assets/dropdown.svg"
                    alt="▼"
                    width={12}
                    height={12}
                  />
                </button>
                {isFilterOpen && (
                  <div className="absolute right-0 mt-1 w-36 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                    {["Week", "Month", "Year"].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => {
                          setSelectedFilter(opt);
                          setIsFilterOpen(false);
                        }}
                        className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-slate-100"
                      >
                        <Image
                          src="/assets/time.svg"
                          alt=""
                          width={14}
                          height={14}
                        />
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="p-2 md:p-5">
              <div className="hidden lg:block overflow-x-auto border border-slate-200 rounded-lg">
                <table className="w-full min-w-[900px] text-sm">
                  <thead className="bg-slate-50">
                    <tr className="text-left text-slate-500 border-b border-slate-200">
                      {/* === CHANGE 1: DYNAMIC TABLE HEADER === */}
                      <th className="px-6 py-4 font-medium">
                        {activeTab === "reported"
                          ? "Report ID"
                          : activeTab === "blocked"
                          ? "Ban ID"
                          : "User ID"}
                      </th>
                      <th className="px-6 py-4 font-medium">Name</th>
                      <th className="px-6 py-4 font-medium">Gender</th>
                      <th className="px-6 py-4 font-medium">Email</th>
                      <th className="px-6 py-4 font-medium">Join Date</th>
                      {activeTab === "all" && (
                        <>
                          <th className="px-6 py-4 font-medium">Plan</th>
                          <th className="px-6 py-4 font-medium">Status</th>
                        </>
                      )}
                      {activeTab === "reported" && (
                        <>
                          <th className="px-6 py-4 font-medium">Plan</th>
                          <th className="px-6 py-4 font-medium">Report Date</th>
                        </>
                      )}
                      {activeTab === "blocked" && (
                        <>
                          <th className="px-6 py-4 font-medium">Ban Reason</th>
                          <th className="px-6 py-4 font-medium">Ban Date</th>
                          <th className="px-6 py-4 font-medium">Status</th>
                        </>
                      )}
                      <th className="px-6 py-4 font-medium text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {currentUsers.map((user, i) => (
                      <tr
                        key={user.id}
                        className="hover:bg-slate-50 text-slate-500"
                      >
                        
                        <td className="px-6 py-4 font-semibold text-slate-500">
                          {activeTab === "reported"
                            ? user.reportId
                            : activeTab === "blocked"
                            ? user.banId
                            : user.id}
                        </td>
                        <td className="px-6 py-4">{user.name}</td>
                        <td className="px-6 py-4">{user.gender}</td>
                        <td className="px-6 py-4">{user.email}</td>
                        <td className="px-6 py-4">{user.joinDate}</td>
                        {activeTab === "all" && (
                          <>
                            <td className="px-6 py-4">{user.plan}</td>
                            <td className="px-6 py-4">
                              <Badge status={user.status} />
                            </td>
                          </>
                        )}
                        {activeTab === "reported" && (
                          <>
                            <td className="px-6 py-4">{user.plan}</td>
                            <td className="px-6 py-4">{user.reportDate}</td>
                          </>
                        )}
                        {activeTab === "blocked" && (
                          <>
                            <td className="px-6 py-4">{user.banReason}</td>
                            <td className="px-6 py-4">{user.banDate}</td>
                            <td className="px-6 py-4">
                              <Badge status={user.status} />
                            </td>
                          </>
                        )}
                        <td className="px-6 py-4 text-center">
                          <div className="relative inline-block">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setOpenMenu(openMenu === i ? null : i);
                              }}
                              className="p-2 hover:bg-slate-100 rounded-lg"
                            >
                              <Image
                                src="/assets/dots.svg"
                                alt="..."
                                width={20}
                                height={20}
                              />
                            </button>
                            {openMenu === i && (
                              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md border shadow-lg z-30">
                                {activeTab === "blocked" ? (
                                  <>
                                    {" "}
                                 <Link href={`/admin/user-management/view/${user.id}`} className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-slate-100">
                                      <Image
                                        src="/assets/view-file.svg"
                                        alt=""
                                        width={16}
                                        height={16}
                                      />{" "}
                                      View Details
                                    </Link>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setOpenMenu(null);
                                      }}
                                      className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-slate-100"
                                    >
                                      <Image
                                        src="/assets/unblock.svg"
                                        alt=""
                                        width={16}
                                        height={16}
                                      />{" "}
                                      Unblock
                                    </button>
                                  </>
                                ) : activeTab === "reported" ? (
                                  <>
                                    {" "}
 <Link href={`/admin/user-management/reported/${user.id}`} className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-slate-100">
                                      <Image
                                        src="/assets/view-file.svg"
                                        alt=""
                                        width={16}
                                        height={16}
                                      />{" "}
                                      View Details
                                    </Link>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setOpenMenu(null);
                                      }}
                                      className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-slate-100"
                                    >
                                      <Image
                                        src="/assets/unblock.svg"
                                        alt=""
                                        width={16}
                                        height={16}
                                      />{" "}
                                      Temporary Suspend
                                    </button>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setOpenMenu(null);
                                      }}
                                      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                                    >
                                      <Image
                                        src="/assets/delete.svg"
                                        alt=""
                                        width={16}
                                        height={16}
                                      />{" "}
                                      Delete User
                                    </button>
                                  </>
                                ) : (
                                  <>
                                    {" "}
                                    <Link
                                      href={`/contentdetails/viewDetails/${user.id}`}
                                      onClick={(e) => e.stopPropagation()}
                                      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-slate-100"
                                    >
                                      <Image
                                        src="/assets/view-file.svg"
                                        alt=""
                                        width={16}
                                        height={16}
                                      />{" "}
                                      View Details
                                    </Link>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setOpenMenu(null);
                                      }}
                                      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                                    >
                                      <Image
                                        src="/assets/delete.svg"
                                        alt=""
                                        width={16}
                                        height={16}
                                      />{" "}
                                      Delete User
                                    </button>
                                  </>
                                )}
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
            <div className="lg:hidden p-4 space-y-4">
              {currentUsers.map((user, i) => (
                <div
                  key={user.id}
                  className="bg-slate-50 rounded-lg p-4 space-y-3 border border-slate-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-800">
                      {user.name}
                    </span>
                    {(activeTab === "all" || activeTab === "blocked") && (
                      <Badge status={user.status} />
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                    {/* === CHANGE 3: DYNAMIC MOBILE VIEW LABEL AND DATA === */}
                    <div>
                      {activeTab === "reported"
                        ? "Report ID"
                        : activeTab === "blocked"
                        ? "Ban ID"
                        : "User ID"}
                      :
                      <span className="font-medium text-slate-700">
                        {activeTab === "reported"
                          ? user.reportId
                          : activeTab === "blocked"
                          ? user.banId
                          : user.id}
                      </span>
                    </div>
                    <div>Gender: {user.gender}</div>
                    <div>Joined: {user.joinDate}</div>
                    {activeTab === "all" && <div>Plan: {user.plan}</div>}
                    {activeTab === "reported" && (
                      <>
                        <div>Plan: {user.plan}</div>
                        <div>Reported: {user.reportDate}</div>
                      </>
                    )}
                    {activeTab === "blocked" && (
                      <>
                        <div>Banned: {user.banDate}</div>
                        <div className="col-span-2">
                          Reason: {user.banReason}
                        </div>
                      </>
                    )}
                  </div>
                  <div className="text-sm text-slate-600">
                    Email: <span className="text-slate-700">{user.email}</span>
                  </div>
                  <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-200">
                    {activeTab !== "blocked" && (
                      <Link
                        href={
                          activeTab === "reported"
                            ? `/contentdetails/reportDetails/${user.reportId}`
                            : `/contentdetails/viewDetails/${user.id}`
                        }
                        className="px-3 py-1.5 text-xs font-medium text-purple-600 bg-purple-100 rounded-lg hover:bg-purple-200"
                      >
                        View Details
                      </Link>
                    )}
                    {activeTab === "blocked" && <div />}
                    <div className="relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenMenu(openMenu === i ? null : i);
                        }}
                        className="p-2 hover:bg-slate-200 rounded-lg"
                      >
                        <Image
                          src="/assets/dots.svg"
                          alt="..."
                          width={20}
                          height={20}
                        />
                      </button>
                      {openMenu === i && (
                        <div className="absolute right-0 bottom-full mb-2 w-48 bg-white rounded-md border shadow-lg z-30">
                          {activeTab === "blocked" ? (
                            <>
                              <Link
                                href={`/contentdetails/blockDetails/${user.banId}`}
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-slate-100"
                              >
                                <Image
                                  src="/assets/view-file.svg"
                                  alt=""
                                  width={16}
                                  height={16}
                                />{" "}
                                View Details
                              </Link>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setOpenMenu(null);
                                }}
                                className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-slate-100"
                              >
                                <Image
                                  src="/assets/unblock.svg"
                                  alt=""
                                  width={16}
                                  height={16}
                                />{" "}
                                Unblock
                              </button>
                            </>
                          ) : activeTab === "reported" ? (
                            <>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setOpenMenu(null);
                                }}
                                className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-slate-100"
                              >
                                <Image
                                  src="/assets/pause.svg"
                                  alt=""
                                  width={16}
                                  height={16}
                                />{" "}
                                Temporary Suspend
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setOpenMenu(null);
                                }}
                                className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                              >
                                <Image
                                  src="/assets/delete.svg"
                                  alt=""
                                  width={16}
                                  height={16}
                                />{" "}
                                Delete User
                              </button>
                            </>
                          ) : (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setOpenMenu(null);
                              }}
                              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                            >
                              <Image
                                src="/assets/delete.svg"
                                alt=""
                                width={16}
                                height={16}
                              />{" "}
                              Delete User
                            </button>
                          )}
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
