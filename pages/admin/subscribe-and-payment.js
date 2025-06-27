"use client";
import Sidebar from "../../components/layout/SideBar";
import Topbar from "../../components/layout/TopBar";
import { useState } from "react";
import SubscribeCard from "../../components/subscribe/SubscribeCard";
import Overview from "../../components/overview/OverView";
import SubscriptionPlans from "../../components/subscribe/SubscriptionPlans";
import FeatureSubscriptionPlans from "../../components/subscribe/FeatureSubscriptionPlans";
import SubscriptionUserList from "../../components/subscribe/SubscriptionUserList";

export default function SubscribeAndPaymentPage() {
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
      <main className="flex-1 bg-white p-2 pt-20 md:ml-[260px] transition-all duration-300">
        <Topbar toggleMobileSidebar={toggleMobileSidebar} />
        {/* Page Title */}
        <section className="p-4 md:p-6 pt-[90px]">
          <div className="mb-6">
            <h1 className="text-xl font-bold text-black">
              Subscription & Payments
            </h1>
          </div>

          {/* Subscription Cards - Now with better mobile spacing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
            {[...cardData].map((card, i) => (
              <SubscribeCard key={i} {...card} />
            ))}
          </div>

          {/* Overview Section - Full width on mobile */}
          <div className="w-full overflow-hidden mb-6">
            <Overview />
          </div>

          {/* Other sections with consistent spacing */}
          <div className="mb-6">
            <SubscriptionPlans />
          </div>

          <div className="mb-6">
            <FeatureSubscriptionPlans />
          </div>

          <div>
            <SubscriptionUserList />
          </div>
        </section>
      </main>
    </div>
  );
}

// Moved card data outside for cleaner code
const cardData = [
  {
    title: "Total Revenue",
    count: "12,579",
    percentage: "+15.03%",
    icon: "/assets/lightgreen.svg",
    arrow: "/assets/trendup.svg",
    bg: "#7DE4DD",
    borderColor: "#1CDACD",
    borderbackgroundBg: "#7DE4DD33",
    cloudRightImage: "/assets/cloudblue.svg",
  },
  {
    title: "Active Subscriptions",
    count: "12,579",
    percentage: "+15.03%",
    icon: "/assets/purplewarning.svg",
    arrow: "/assets/trendup.svg",
    bg: "#948DC4",
    borderColor: "#786BD3",
    borderbackgroundBg: "#948DC433",
    cloudRightImage: "/assets/cloudpurple.svg",
  },
  {
    title: "New Subscriptions",
    count: "12,579",
    percentage: "+15.03%",
    icon: "/assets/nouserw.svg",
    arrow: "/assets/trendup.svg",
    bg: "#CB7B8D",
    borderColor: "#CA5C74",
    borderbackgroundBg: "#CB7B8D33",
    cloudRightImage: "/assets/cloudnouser.svg",
  },
];
