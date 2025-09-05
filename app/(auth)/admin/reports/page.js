"use client";
import React from "react";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import Sidebar from "@/components/layout/SideBar";
import Topbar from "@/components/layout/TopBar";
import ReportsCharts from "@/components/charts/ReportsCharts";

const ReportsAndAnalytics = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = useCallback(
    () => setIsMobileSidebarOpen((prev) => !prev),
    []
  );

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
      title: "Total Registered Users",
      count: "40,689",
      bg: "#FDEBD5",
      icon: "/assets/blueiconreport.svg",
    },
    {
      title: "Active User",
      count: "40,689",
      bg: "#FCE5F9",
      icon: "/assets/blueiconreport.svg",
    },
    {
      title: "New Signups",
      count: "40,689",
      bg: "#D1F6FE",
      icon: "/assets/blueiconreport.svg",
    },
    {
      title: "Total Reported User",
      count: "40,689",
      bg: "#E6FCE5",
      icon: "/assets/blueiconreport.svg",
    },
  ];

  return (
    <div className="flex min-h-screen font-sans">
      <Sidebar
        isMobileSidebarOpen={isMobileSidebarOpen}
        toggleMobileSidebar={toggleMobileSidebar}
        isDesktop={isDesktop}
      />
      <main
        className={`flex-1 bg-white p-6 pt-24  ${
          isDesktop ? "md:ml-[260px]" : ""
        }`}
      >
        <Topbar
          toggleMobileSidebar={toggleMobileSidebar}
          isMobileSidebarOpen={isMobileSidebarOpen}
          isDesktop={isDesktop}
        />

        {/* Ab yeh title Topbar ke neeche bilkul saaf nazar aayega */}
        <h2 className="text-2xl font-bold text-black mb-6">
          Reports & Analytics
        </h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex items-center rounded-xl p-4 gap-4"
              style={{ backgroundColor: card.bg }}
            >
              <div className="flex-shrink-0 flex items-center justify-center bg-white rounded-full h-14 w-14 p-2">
                <Image
                  src={card.icon}
                  alt="icon"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-sm font-medium text-black/70">
                  {card.title}
                </h4>
                <p className="text-2xl font-bold">{card.count}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="w-full bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm">
          <ReportsCharts isDesktop={isDesktop} />
        </div>
      </main>
    </div>
  );
};

export default ReportsAndAnalytics;
