"use client";
import Sidebar from "../../components/layout/SideBar";
import Topbar from "../../components/layout/TopBar";
import { useState, useCallback, useEffect } from "react";
import SubscribeCard from "../../components/subscribe/SubscribeCard";
import Overview from "../../components/overview/OverView";
import SubscriptionPlans from "../../components/subscribe/SubscriptionPlans";
import FeatureSubscriptionPlans from "../../components/subscribe/FeatureSubscriptionPlans";
import SubscriptionUserList from "../../components/subscribe/SubscriptionUserList";

export default function SubscribeAndPaymentPage() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const toggleMobileSidebar = useCallback(() => {
    setIsMobileSidebarOpen(prev => !prev);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      setIsMobileSidebarOpen(desktop);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex min-h-screen font-sans relative">
     <Sidebar
  isMobileSidebarOpen={isMobileSidebarOpen}
  toggleMobileSidebar={toggleMobileSidebar}
  isDesktop={isDesktop}   
/>
      
      <main className={`flex-1 bg-white p-2 pt-20 md:ml-[265px] transition-all duration-300 ${isMobileSidebarOpen && isDesktop ? 'md:ml-[265px]' : ''}`}>
        <Topbar 
          toggleMobileSidebar={toggleMobileSidebar}
          isMobileSidebarOpen={isMobileSidebarOpen}  
          isDesktop={isDesktop} 
        />
        
        {/* Main Content Container */}
        <div className="max-w-[1250px] mx-auto">
          {/* Page Title */}
          <section className="p-4 md:p-3 pt-[90px]">
            <div className="mb-6">
              <h1 className="text-xl font-bold text-black">
                Subscription & Payments
              </h1>
            </div>

            {/* Subscription Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
              {[...cardData].map((card, i) => (
                <SubscribeCard key={i} {...card} />
              ))}
            </div>

            {/* Overview Section */}
            <div className="w-full overflow-hidden mb-6">
              <Overview />
            </div>

            {/* Subscription Plans */}
            <div className=" mb-6 ">
              <SubscriptionPlans />
            </div>

            {/* Feature Subscription Plans */}
            <div className=" mb-6">
              <FeatureSubscriptionPlans />
            </div>

            {/* Subscription User List */}
            <div>
              <SubscriptionUserList />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

// Card data remains same
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