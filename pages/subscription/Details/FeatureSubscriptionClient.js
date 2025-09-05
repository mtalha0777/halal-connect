"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/layout/SideBar";
import Topbar from "@/components/layout/TopBar";

const FeatureSubscriptionClient = ({ user }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobileSidebarOpen, setOpen] = useState(false);
  const toggleMobileSidebar = useCallback(() => setOpen((p) => !p), []);

  useEffect(() => {
    const onResize = () => {
      const d = window.innerWidth >= 768;
      setIsDesktop(d);
      setOpen(d);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="p-10 text-lg">Loading user details...</p>
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
        className={`flex-1 bg-white p-6 pt-20 transition-all duration-300 ${
          isDesktop && isMobileSidebarOpen ? "ml-[260px]" : ""
        }`}
      >
        <Topbar
          toggleMobileSidebar={toggleMobileSidebar}
          isMobileSidebarOpen={isMobileSidebarOpen}
          isDesktop={isDesktop}
        />
        <div className="w-full bg-gray-50 px-4 py-3 mt-4 mb-2 rounded-md">
          <p className="text-sm text-gray-700">
            <Link
              href="/admin/subscribe-and-payment"
              className="hover:underline"
            >
              Subscription & Payments
            </Link>
            <span className="mx-1">{">"}</span>
            <span className="font-semibold text-black">
               Subscription User Lists
            </span>
          </p>
        </div>
        <section className="bg-gray-50 border border-gray-200 rounded-lg p-4 md:p-8 space-y-8">
          <div className="flex items-start gap-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-purple-200">
              <Image
                src={user.avatar}
                alt={user.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold">{user.name}</h2>
                  <p className="text-gray-600">{user.email}</p>
                </div>
                <div
                  className={`ml-auto px-3 py-1 rounded-full text-xs font-semibold ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-500"
                      : "bg-red-100 text-red-500"
                  }`}
                >
                  {user.status}
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Image
                  src="/assets/verified.svg"
                  alt="verified"
                  width={16}
                  height={16}
                />
                <span className="text-sm text-gray-700">
                  {user.verified ? "Verified" : "Unverified"}
                </span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <ColumnOne user={user} />
            <ColumnTwo user={user} />
            <ColumnThree user={user} />
          </div>
          <SubscriptionSummary user={user} />
        </section>
      </main>
    </div>
  );
};

// All the helper components are here
const DetailItem = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-500">{label}:</p>
    <p className="font-medium text-gray-800">{value || "N/A"}</p>
  </div>
);
const ColumnOne = ({ user }) => (
  <div className="space-y-4">
    <DetailItem label="User ID" value={user.userId} />
    <DetailItem label="Phone Number" value={user.phone} />
    <DetailItem label="City" value={user.city} />
    <DetailItem label="Join Date" value={user.joinDate} />
  </div>
);
const ColumnTwo = ({ user }) => (
  <div className="space-y-4">
    <DetailItem label="Feature Plan" value={user.featurePlan} />
    <DetailItem label="Plan ID" value={user.planId} />
    <DetailItem label="Plan Price" value={user.price} />
    <DetailItem label="Plan Duration" value={user.duration} />
  </div>
);
const ColumnThree = ({ user }) => (
  <div className="space-y-4">
    <DetailItem label="Purchase Date" value={user.purchaseDate} />
    <DetailItem label="Expiry Date & Time" value={user.expiryDate} />
    <DetailItem label="Last Login" value={user.lastLogin} />
    <DetailItem label="Country" value={user.country} />
  </div>
);
const SubscriptionSummary = ({ user }) => (
  <div className="bg-white p-6 rounded-lg border border-gray-200">
    <div className="flex items-center gap-3 mb-6">
      <Image
        src="/assets/diamond.svg"
        alt="Subscription Icon"
        width={24}
        height={24}
      />
      <h2 className="text-lg font-bold text-gray-900">Subscription Details</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8">
      <DetailItem label="Subscription Plan" value={user.subscriptionPlan} />
      <DetailItem label="Plan Price" value={user.planPrice} />
      <DetailItem label="Duration" value={user.duration} />
      <DetailItem
        label="Subscription Start Date"
        value={user.subscriptionStartDate}
      />
      <DetailItem
        label="Subscription Expiry Date"
        value={user.subscriptionExpiryDate}
      />
    </div>
  </div>
);
export default FeatureSubscriptionClient;