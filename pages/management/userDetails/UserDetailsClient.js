"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/layout/SideBar";
import Topbar from "@/components/layout/TopBar";

const UserDetailsClient = ({ user }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  
  const toggleMobileSidebar = useCallback(() => setIsMobileSidebarOpen(prev => !prev), []);

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
  
  if (!user) {
    return (
        <div className="flex items-center justify-center h-screen">
            <p>Loading user details...</p>
        </div>
    );
  }

  return (
    <div className="flex min-h-screen font-sans">
      <Sidebar
        isMobileSidebarOpen={isMobileSidebarOpen}
        toggleMobileSidebar={toggleMobileSidebar}
        isDesktop={isDesktop}
      />
      <main
        className={`flex-1 bg-white p-6 pt-24 transition-all duration-300 ${
          isDesktop && isMobileSidebarOpen ? "ml-[260px]" : ""
        }`}>
        <Topbar
          toggleMobileSidebar={toggleMobileSidebar}
          isMobileSidebarOpen={isMobileSidebarOpen}
          isDesktop={isDesktop}
        />
        <div className="max-w-7xl mx-auto">
            <div className="w-full bg-gray-100 px-4 py-3 rounded-md mb-6">
              <p className="text-sm text-gray-700">
                <Link href="/admin/content-moderation" className="hover:underline">
                  Content Moderation
                </Link>
                <span className="mx-1">{">"}</span>
                <span className="font-semibold text-black">Details: {user.name}</span>
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-purple-200">
                        <Image src={user.profilePic || "/assets/contentpic.png"} alt={user.name} layout="fill" className="object-cover"/>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">{user.name}</h2>
                        <p className="text-gray-600">{user.email}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Image src="/assets/verified.svg" alt="Unverified Icon" width={16} height={16}/>
                          <span className="text-sm text-gray-500">Unverified</span>
                        </div>
                      </div>
                    </div>
                    <span className="inline-block border px-3 py-1 rounded-full text-sm font-medium" style={{ color: "#CF47FF", backgroundColor: "#CF47FF1F", borderColor: "#CF47FF" }}>
                      Under Review
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 border-t border-gray-200 pt-6">
                    <div><p className="text-sm text-gray-500">User ID:</p><p className="font-semibold">{user.id}</p></div>
                    <div><p className="text-sm text-gray-500">Join Date:</p><p className="font-semibold">{user.joinDate}</p></div>
                    <div><p className="text-sm text-gray-500">Profile Reports:</p><p className="font-semibold">{user.profileReports}</p></div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                      <Image src="/assets/reportuser.svg" alt="icon" width={20} height={20}/>
                      <h3 className="text-lg font-semibold">Reported Issues</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                        <div><p className="text-sm text-gray-500">Report ID:</p><p>{user.reportId}</p></div>
                        <div><p className="text-sm text-gray-500">Report By:</p><p>{user.reportedBy}</p></div>
                        <div><p className="text-sm text-gray-500">Report Reason:</p><p>{user.reportReason}</p></div>
                    </div>
                    <div>
                        <p className="text-md font-semibold mb-1">Report Description:</p>
                        <p className="text-gray-700 leading-relaxed">{user.reportDescription}</p>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default UserDetailsClient;