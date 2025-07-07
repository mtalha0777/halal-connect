"use client";
import SubscribeCard from "../../components/subscribe/SubscribeCard";
import Overview from "../../components/overview/OverView";
import SubscriptionPlans from "../../components/subscribe/SubscriptionPlans";
import FeatureSubscriptionPlans from "../../components/subscribe/FeatureSubscriptionPlans";
import SubscriptionUserList from "../../components/subscribe/SubscriptionUserList";
import { featureSubscriptionUsers } from "@/lib/subscription-data";
import AdminLayout from "@/components/layout/AdminLayout";
export default function SubscribeAndPaymentPage() {
  return (
    <>
      {/* Page Content */}
      <div className="max-w-[1250px] mx-auto ">
        <section>
          <div className="mb-6">
            <h1 className="text-xl md:text-2xl font-bold text-black">
              Subscription & Payments
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
            {cardData.map((card, i) => (
              <SubscribeCard key={i} {...card} />
            ))}
          </div>
          <div className="w-full overflow-hidden mb-6">
            <Overview />
          </div>
          <div className="mb-6">
            <SubscriptionPlans />
          </div>
          <div className="mb-6">
            <FeatureSubscriptionPlans />
          </div>
          <div>
            <SubscriptionUserList users={featureSubscriptionUsers} />
          </div>
        </section>
      </div>
    </>
  );
}
SubscribeAndPaymentPage.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
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
