"use client";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import Sidebar from "../../components/layout/SideBar";
import Topbar from "../../components/layout/TopBar";
import Chart from "../../components/charts/Chart";
import AllUsers from "../users/AllUsers";

const Dashboard = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
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
      <main
        className={`flex-1 bg-white p-6 transition-all duration-300 ${
          isMobileSidebarOpen ? "md:ml-[260px]" : "md:ml-0"
        }`}
      >
        <Topbar
          toggleMobileSidebar={toggleMobileSidebar}
          isMobileSidebarOpen={isMobileSidebarOpen}
          isDesktop={isDesktop}
        />

        {/* Page Title */}
        <section className="pt-20">
          {" "}
          <h1 className="text-xl font-bold text-black mb-6">Dashboard</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {(() => {
              const cards = [
                {
                  title: "Total User",
                  count: "3,50,789",
                  bg: "#06D4C680",
                  light: "#06D4C620",
                  border: "#06D4C6",
                  icon: "/assets/icon1.svg",
                  cloud: "/assets/cloud.svg",
                },
                {
                  title: "New User",
                  count: "50,789",
                  bg: "#F8794B80",
                  light: "#F8794B20",
                  border: "#F8794B",
                  icon: "/assets/adduser.svg",
                  cloud: "/assets/cloud2.svg",
                },
                {
                  title: "Total Matchmade",
                  count: "1,50,356",
                  bg: "#FA5A7E80",
                  light: "#FA5A7E20",
                  border: "#FA5A7E",
                  icon: "/assets/heart.svg",
                  cloud: "/assets/cloud3.svg",
                },
                {
                  title: "Report Profile",
                  count: "20,689",
                  bg: "#8676FE66",
                  light: "#8676FE20",
                  border: "#8676FE",
                  icon: "/assets/report.svg",
                  cloud: "/assets/cloud4.svg",
                },
              ];

              const cloudColor = [
                "#BFFFFB52", // Total User
                "#FFDACD52", // New User
                "#FFC5D252", // Total Matchmade
                "#E3E0FF52", // Report Profile
              ];

              return cards.map((card, i) => (
                <div
                  key={i}
                  className="relative p-4 rounded-xl overflow-hidden w-full"
                  style={{ backgroundColor: card.bg }}
                >
                  <Image
                    src={card.icon}
                    alt="icon"
                    width={36}
                    height={36}
                    className="absolute top-4 right-4 z-10"
                  />

                  {/* Title */}
                  <h4
                    className="text-sm font-medium z-10 relative"
                    style={{ color: "#0000006B" }}
                  >
                    {card.title}
                  </h4>

                  {/* Count */}
                  <p className="text-2xl font-bold text-black z-10 relative">
                    {card.count}
                  </p>

                  {/* Rectangle badge */}
                  <div className="flex items-center gap-2 mt-1 z-10 relative">
                    <div
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: card.light,
                        color: "#000000",
                        border: `1px solid ${card.border}`,
                      }}
                    >
                      <Image
                        src="/assets/trend.svg"
                        alt="arrow"
                        width={16}
                        height={16}
                      />
                      3.48%
                    </div>

                    <span className="text-xs" style={{ color: "#0000006B" }}>
                      Since last month
                    </span>
                  </div>

                  {/* Cloud bottom-right with blur background */}
                  <div className="absolute bottom-0 right-0 w-18 h-14 z-0">
                    {/* Optional blur effect behind cloud */}
                    <div
                      className="absolute bottom-2 right-2 w-16 h-16 rounded-full"
                      style={{
                        backgroundColor: cloudColor[i],
                        filter: "blur(8px)",
                        zIndex: 0,
                      }}
                    />
                    <Image
                      src={card.cloud}
                      alt="Cloud"
                      width={70}
                      height={70}
                      className="object-contain opacity-90 relative z-10"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                      }}
                    />
                  </div>
                </div>
              ));
            })()}
          </div>
          {/* Charts & Table Section - responsive vertical stacking */}
          <div className="flex flex-col gap-6 w-full min-w-0">
            <Chart />
            <AllUsers />
          </div>
        </section>
      </main>
    </div>
  );
};
export default Dashboard;
