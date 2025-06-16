'use client';
import dynamic from 'next/dynamic';
import Sidebar from "../../components/layout/SideBar";
import Topbar from "../../components/layout/TopBar";
import SubscribeCard from "../../components/subscribe/SubscribeCard";
const Overview = dynamic(() => import('../../components/overview/OverView'), {
  ssr: false,
});
import SubscriptionPlans from "../../components/subscribe/SubscriptionPlans";
import FeatureSubscriptionPlans from "../../components/subscribe/FeatureSubscriptionPlans";
import SubscriptionUserList from "../../components/subscribe/SubscriptionUserList";

import { MoreVertical, Edit, Trash2, Crown, CreditCard, ShoppingCart, History } from "lucide-react";
export default function SubscribeAndPaymentPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-[#f5f5f5] min-h-screen">
        <Topbar />
        <main className="p-6">
          <h2 className="text-2xl font-bold mb-6">Subscription & Payments</h2>
          {/* Subcription and Payments */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {[
              {
                title: 'Total Revenue',
                count: '12,579',
                percentage: '+15.03%',
                icon: '/assets/alluserw.png',
                arrow: '/assets/trend.png',
                bg: '#7DE4DD',
                borderColor: '#1CDACD',
                cloudRightImage: '/assets/cloudblue.png',
              },
              {
                title: 'Active Subscriptions',
                count: '12,579',
                percentage: '+15.03%',
                icon: '/assets/warningw.png',
                arrow: '/assets/trend.png',
                bg: '#948DC4',
                borderColor: '#786BD3',
                cloudRightImage: '/assets/cloudpurple.png',
              },
              {
                title: 'New Subscriptions',
                count: '12,579',
                percentage: '+15.03%',
                icon: '/assets/nouserw.png',
                arrow: '/assets/trend.png',
                bg: '#CB7B8D',
                borderColor: '#CA5C74',
                cloudRightImage: '/assets/cloudpink.png',
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