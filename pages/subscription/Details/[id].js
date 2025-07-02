"use client";
import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/layout/SideBar";
import Topbar from "@/components/layout/TopBar";

const featureSubscriptionUsers = [
  {
    userId: "1234",
    name: "Ahmed Raza",
    gender: "Male",
    email: "ahmed.raza@email.com",
    phone: "+92 300 123 4567",
    city: "Karachi",
    country: "Pakistan",
    joinDate: "12 Jan 2024",
    lastLogin: "Feb 16 2024",
    verified: true,
    avatar: "/assets/blockuser.png",
    featurePlan: "Super Like",
    planId: "01",
    price: "9.99 $",
    duration: "1 Hour",
    purchaseDate: "15 Feb 2024",
    expiryDate: "15 Feb 2024, 01:00 PM",
    status: "Active",
    subscriptionPlan: "Diamond",
    planPrice: "20.99 $",
    subscriptionStartDate: "10 Feb 2024",
    subscriptionExpiryDate: "10 Mar 2024",
  },
  {
    userId: "1356",
    name: "Rabia Siddiqui",
    gender: "Female",
    email: "rabia.s@email.com",
    phone: "+92 333 987 6543",
    city: "Lahore",
    country: "Pakistan",
    joinDate: "10 Jan 2024",
    lastLogin: "Feb 15 2024",
    verified: false,
    avatar: "/assets/blockuser.png",
    featurePlan: "Boost Profile",
    planId: "B02",
    price: "19.99 $",
    duration: "30 Minutes",
    purchaseDate: "14 Feb 2024",
    expiryDate: "14 Feb 2024, 04:30 PM",
    status: "Expired",
    subscriptionPlan: "Gold",
    planPrice: "15.99 $",
    subscriptionStartDate: "01 Feb 2024",
    subscriptionExpiryDate: "01 Mar 2024",
  },
  {
    userId: "5688",
    name: "Hamza Farooq",
    gender: "Male",
    email: "clava@email.com",
    phone: "+92 300 123 4567",
    city: "Karachi",
    country: "Pakistan",
    joinDate: "10 Jan 2024",
    lastLogin: "Feb 15 2024",
    verified: false,
    avatar: "/assets/blockuser.png",
    featurePlan: "Boost Profile",
    planId: "B02",
    price: "19.99 $",
    duration: "30 Minutes",
    purchaseDate: "14 Feb 2024",
    expiryDate: "14 Feb 2024, 04:30 PM",
    status: "Expired",
    subscriptionPlan: "Gold",
    planPrice: "15.99 $",
    subscriptionStartDate: "01 Feb 2024",
    subscriptionExpiryDate: "01 Mar 2024",
  },
  {
    userId: "8765",
    name: "Mahmoor Javed",
    gender: "Female",
    email: "soro@email.com",
    phone: "+92 300 123 4567",
    city: "Karachi",
    country: "Pakistan",
    joinDate: "12 Jan 2024",
    lastLogin: "Feb 16 2023",
    verified: false,
    avatar: "/assets/blockuser.png",
    featurePlan: "Boost Profile",
    planId: "B02",
    price: "19.99 $",
    duration: "30 Minutes",
    purchaseDate: "14 Feb 2024",
    expiryDate: "14 Feb 2024, 04:30 PM",
    status: "Expired",
    subscriptionPlan: "Gold",
    planPrice: "15.99 $",
    subscriptionStartDate: "01 Feb 2024",
    subscriptionExpiryDate: "01 Mar 2024",
  },
  {
    userId: "8666",
    name: "Fahad Iqbal",
    gender: "Male",
    email: "soro@email.com",
    phone: "+92 300 123 4567",
    city: "Karachi",
    country: "Pakistan",
    joinDate: "12 Jan 2024",
    lastLogin: "Feb 16 2023",
    verified: false,
    avatar: "/assets/blockuser.png",
    featurePlan: "Boost Profile",
    planId: "B02",
    price: "19.99 $",
    duration: "30 Minutes",
    purchaseDate: "14 Feb 2024",
    expiryDate: "14 Feb 2024, 04:30 PM",
    status: "Expired",
    subscriptionPlan: "Gold",
    planPrice: "15.99 $",
    subscriptionStartDate: "01 Feb 2024",
    subscriptionExpiryDate: "01 Mar 2024",
  },
  {
    userId: "8767",
    name: "Fatima Noor",
    gender: "Female",
    email: "soro@email.com",
    phone: "+92 300 123 4567",
    city: "Karachi",
    country: "Pakistan",
    joinDate: "12 Jan 2024",
    lastLogin: "Feb 16 2023",
    verified: false,
    avatar: "/assets/blockuser.png",
    featurePlan: "Boost Profile",
    planId: "B02",
    price: "19.99 $",
    duration: "30 Minutes",
    purchaseDate: "14 Feb 2024",
    expiryDate: "14 Feb 2024, 04:30 PM",
    status: "Expired",
    subscriptionPlan: "Gold",
    planPrice: "15.99 $",
    subscriptionStartDate: "01 Feb 2024",
    subscriptionExpiryDate: "01 Mar 2024",
  },
  {
    userId: "8768",
    name: "Hassan Shah",
    gender: "Male",
    email: "soro@email.com",
    phone: "+92 300 123 4567",
    city: "Karachi",
    country: "Pakistan",
    joinDate: "12 Jan 2024",
    lastLogin: "Feb 16 2023",
    verified: false,
    avatar: "/assets/blockuser.png",
    featurePlan: "Boost Profile",
    planId: "B02",
    price: "19.99 $",
    duration: "30 Minutes",
    purchaseDate: "14 Feb 2024",
    expiryDate: "14 Feb 2024, 04:30 PM",
    status: "Expired",
    subscriptionPlan: "Gold",
    planPrice: "15.99 $",
    subscriptionStartDate: "01 Feb 2024",
    subscriptionExpiryDate: "01 Mar 2024",
  },
  {
    userId: "8769",
    name: "Ayesha Khan",
    gender: "Female",
    email: "soro@email.com",
    phone: "+92 300 123 4567",
    city: "Karachi",
    country: "Pakistan",
    joinDate: "12 Jan 2024",
    lastLogin: "Feb 16 2023",
    verified: false,
    avatar: "/assets/blockuser.png",
    featurePlan: "Boost Profile",
    planId: "B02",
    price: "19.99 $",
    duration: "30 Minutes",
    purchaseDate: "14 Feb 2024",
    expiryDate: "14 Feb 2024, 04:30 PM",
    status: "Expired",
    subscriptionPlan: "Gold",
    planPrice: "15.99 $",
    subscriptionStartDate: "01 Feb 2024",
    subscriptionExpiryDate: "01 Mar 2024",
  },
  {
    userId: "8770",
    name: "Zain UlAbideen",
    gender: "Male",
    email: "soro@email.com",
    phone: "+92 300 123 4567",
    city: "Karachi",
    country: "Pakistan",
    joinDate: "12 Jan 2024",
    lastLogin: "Feb 16 2023",
    verified: false,
    avatar: "/assets/blockuser.png",
    featurePlan: "Boost Profile",
    planId: "B02",
    price: "19.99 $",
    duration: "30 Minutes",
    purchaseDate: "14 Feb 2024",
    expiryDate: "14 Feb 2024, 04:30 PM",
    status: "Expired",
    subscriptionPlan: "Gold",
    planPrice: "15.99 $",
    subscriptionStartDate: "01 Feb 2024",
    subscriptionExpiryDate: "01 Mar 2024",
  },
  {
    userId: "8771",
    name: "Hina Tariq",
    gender: "Male",
    email: "soro@email.com",
    phone: "+92 300 123 4567",
    city: "Karachi",
    country: "Pakistan",
    joinDate: "12 Jan 2024",
    lastLogin: "Feb 16 2023",
    verified: false,
    avatar: "/assets/blockuser.png",
    featurePlan: "Boost Profile",
    planId: "B02",
    price: "19.99 $",
    duration: "30 Minutes",
    purchaseDate: "14 Feb 2024",
    expiryDate: "14 Feb 2024, 04:30 PM",
    status: "Expired",
    subscriptionPlan: "Gold",
    planPrice: "15.99 $",
    subscriptionStartDate: "01 Feb 2024",
    subscriptionExpiryDate: "01 Mar 2024",
  },
];

export default function FeatureSubscriptionDetails() {
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

  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      const matched = featureSubscriptionUsers.find(
        (u) => String(u.userId) === id
      );
      setUser(matched || null);
    }
  }, [router.isReady, router.query]);

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="p-10 text-lg">
          Loading user details or user not found...
        </p>
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
          isDesktop ? "ml-[260px]" : ""
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
              Feature Subscription Details
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
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
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

          {/* HIGHLIGHT 3: The new SubscriptionSummary component is added here */}
          <SubscriptionSummary user={user} />
        </section>
      </main>
    </div>
  );
}

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

// HIGHLIGHT 2: New component for the subscription details box
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
