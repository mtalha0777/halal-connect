"use client";
import dynamic from "next/dynamic";
import Sidebar from "../../components/layout/SideBar";
import Topbar from "../../components/layout/TopBar";
import SubscribeCard from "../../components/subscribe/SubscribeCard";
const Overview = dynamic(() => import("../../components/overview/OverView"), {
  ssr: false,
});
import SubscriptionPlans from "../../components/subscribe/SubscriptionPlans";
import FeatureSubscriptionPlans from "../../components/subscribe/FeatureSubscriptionPlans";
import SubscriptionUserList from "../../components/subscribe/SubscriptionUserList";

export default function SubscribeAndPaymentPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-white p-6 pt-17 ">
        <Topbar />
        {/* Page Title */}
        <main className="p-4 md:p-6 pt-[90px]">
          <div className="mb-6">
            <h1 className="text-xl font-bold text-black">
              Subscription & Payments
            </h1>
          </div>

          {/* Subcription and Payments Cards */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6 place-items-center">
            {[
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
            ].map((card, i) => (
              <SubscribeCard key={i} {...card} />
            ))}
          </div>

          {/* Overview */}
          <div>
            <Overview />
          </div>

          {/* Subscription Plans Section */}
          <div>
            <SubscriptionPlans />
          </div>

          {/* Feature Subscription Plans */}
          <div>
            <FeatureSubscriptionPlans />
          </div>

          {/* Subscription User List */}
          <div>
            <SubscriptionUserList />
          </div>
        </main>
      </div>
    </div>
  );
}
