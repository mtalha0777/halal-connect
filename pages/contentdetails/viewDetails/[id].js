"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/layout/SideBar";
import Topbar from "@/components/layout/TopBar";

// Sample user data (import from real file if needed)
const USERS = [
  {
    id: 1234,
    name: "Ahmed Raza",
    email: "john@email.com",
    city: "Karachi",
    maritalStatus: "Single",
    lastLogin: "Feb 10 2023",
    phone: "+923001234567",
    gender: "Male",
    joinDate: "Jan 01 2024",
    profileViews: 65,
    country: "Pakistan",
    dob: "1998‑11-10",
    plan: "Free",
    notches: 122,
    verified: true,
    avatar: "/assets/ayesha.png",
  },
  {
    id: 1356,
    name: "Rabia Siddiqui",
    email: "emily@email.com",
    city: "Islamabad",
    maritalStatus: "Single",
    lastLogin: "Mar 02 2023",
    phone: "+92 331 789 6543",
    gender: "Female",
    joinDate: "Jan 12 2024",
    profileViews: 102,
    country: "Pakistan",
    dob: "1999‑05‑14",
    plan: "Gold",
    notches: 233,
    verified: true,
    avatar: "/assets/ayesha.png",
  },
  {
    id: 5688,
    name: "Hamza Farooq",
    email: "soroh@email.com",
    city: "Faisalabad",
    maritalStatus: "Single",
    lastLogin: "Apr 07 2023",
    phone: "+92 302 456 7890",
    gender: "Male",
    joinDate: "Jan 12 2024",
    profileViews: 77,
    country: "Pakistan",
    dob: "1997‑08‑25",
    plan: "Premium",
    notches: 410,
    verified: false,
    avatar: "/assets/ayesha.png",
  },
  {
    id: 8765,
    name: "Mahmoor Javed",
    email: "soroh@email.com",
    city: "Peshawar",
    maritalStatus: "Married",
    lastLogin: "May 12 2023",
    phone: "+92 345 111 2233",
    gender: "Female",
    joinDate: "Jan 12 2024",
    profileViews: 54,
    country: "Pakistan",
    dob: "1995‑02‑03",
    plan: "Free",
    notches: 187,
    verified: true,
    avatar: "/assets/ayesha.png",
  },
  {
    id: 8766,
    name: "Fahad Iqbal",
    email: "soroh@email.com",
    city: "Multan",
    maritalStatus: "Single",
    lastLogin: "Jun 01 2023",
    phone: "+92 322 987 6543",
    gender: "Male",
    joinDate: "Jan 12 2024",
    profileViews: 91,
    country: "Pakistan",
    dob: "1996‑07‑22",
    plan: "Premium",
    notches: 299,
    verified: true,
    avatar: "/assets/ayesha.png",
  },
  {
    id: 8767,
    name: "Fatima Noor",
    email: "soroh@email.com",
    city: "Quetta",
    maritalStatus: "Single",
    lastLogin: "Jun 15 2023",
    phone: "+92 321 456 7890",
    gender: "Female",
    joinDate: "Jan 12 2024",
    profileViews: 130,
    country: "Pakistan",
    dob: "2001‑03‑18",
    plan: "Free",
    notches: 210,
    verified: false,
    avatar: "/assets/ayesha.png",
  },
  {
    id: 8768,
    name: "Hassan Shah",
    email: "soroh@email.com",
    city: "Sialkot",
    maritalStatus: "Single",
    lastLogin: "Jul 02 2023",
    phone: "+92 310 654 9871",
    gender: "Male",
    joinDate: "Jan 12 2024",
    profileViews: 88,
    country: "Pakistan",
    dob: "1998‑12‑11",
    plan: "Premium",
    notches: 322,
    verified: true,
    avatar: "/assets/ayesha.png",
  },
    {
    id: 8769,
    name: "Ayesha Khan",
    email: "soroh@email.com",
    city: "Sialkot",
    maritalStatus: "Single",
    lastLogin: "Jul 02 2024",
    phone: "+923106549871",
    gender: "Male",
    joinDate: "Jan 12 2024",
    profileViews: 88,
    country: "Pakistan",
    dob: "1998‑12‑11",
    plan: "Free",
    notches: 322,
    verified: true,
    avatar: "/assets/ayesha.png",
  },
  {
    id: 8770,
    name: "Zain Ul Abideen",
    email: "soroh@email.com",
    city: "Hyderabad",
    maritalStatus: "Married",
    lastLogin: "Jul 19 2023",
    phone: "+92 337 000 1122",
    gender: "Male",
    joinDate: "Jan 12 2024",
    profileViews: 44,
    country: "Pakistan",
    dob: "1994‑09‑30",
    plan: "Free",
    notches: 156,
    verified: false,
    avatar: "/assets/ayesha.png",
  },
  {
    id: 8771,
    name: "Hina Tariq",
    email: "soroh@email.com",
    city: "Rawalpindi",
    maritalStatus: "Single",
    lastLogin: "Aug 05 2023",
    phone: "+92 333 555 6677",
    gender: "Female",
    joinDate: "Jan 12 2024",
    profileViews: 115,
    country: "Pakistan",
    dob: "1997‑01‑05",
    plan: "Premium",
    notches: 402,
    verified: true,
    avatar: "/assets/ayesha.png",
  },
];

const ViewDetails = () => {
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

  const router = useRouter();
  const { id } = router.query;

  const matchedUser = USERS.find((u) => String(u.id) === id);
  const [user, setUser] = useState(matchedUser || USERS[0]); // fallback
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (matchedUser) setUser(matchedUser);
  }, [matchedUser]);

  const handleChange = (field, value) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  if (!user) return <p className="p-10">User not found</p>;

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

        {/* Breadcrumb */}
        <div className="w-full bg-[#F5F5F5] px-4 py-3 mt-4 mb-2">
          <p className="text-sm text-gray-700">
            <Link href="/admin/user-management" className="hover:underline">
              User Management
            </Link>
            <span className="mx-1">{">"}</span>
            <span className="font-semibold text-black">Details</span>
          </p>
        </div>

        <section className="bg-gray-50 rounded-lg px-4 md:px-9 pt-4 pb-12 space-y-8">
          {/* Profile Section */}
          <div className="flex items-start gap-6 mb-8">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-purple-200">
              <Image
                src={user.avatar || "/assets/profile.png"}
                alt={user.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  {isEditing ? (
                    <>
                      <input
                        className="text-xl font-bold mb-1"
                        value={user.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                      />
                      <input
                        className="text-sm text-gray-600"
                        value={user.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                    </>
                  ) : (
                    <>
                      <h2 className="text-xl font-bold">{user.name}</h2>
                      <p className="text-gray-600">{user.email}</p>
                    </>
                  )}
                </div>

                <button
                  className="flex items-center gap-1 text-[#5D5FEF] hover:underline"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <span>{isEditing ? "Save" : "Edit"}</span>
                  <Image
                    src="/assets/edit.svg"
                    alt="Edit"
                    width={18}
                    height={18}
                  />
                </button>
              </div>

              <div className="flex items-center gap-2 mt-2">
                {user.verified && (
                  <Image
                    src="/assets/verified.svg"
                    alt="Verified"
                    width={16}
                    height={16}
                  />
                )}
                <span className="text-sm text-gray-700">
                  {user.verified ? "Verified" : "Unverified"}
                </span>
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="space-y-4">
              <DetailItem label="User ID" value={user.id} />
              <DetailItem
                label="City"
                value={user.city}
                editable={isEditing}
                onChange={(val) => handleChange("city", val)}
              />
              <DetailItem
                label="Marital Status"
                value={user.maritalStatus}
                editable={isEditing}
                onChange={(val) => handleChange("maritalStatus", val)}
              />
              <DetailItem label="Last Login Date" value={user.lastLogin} />
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <DetailItem
                label="Phone"
                value={user.phone}
                editable={isEditing}
                onChange={(val) => handleChange("phone", val)}
              />
              <DetailItem
                label="Gender"
                value={user.gender}
                editable={isEditing}
                onChange={(val) => handleChange("gender", val)}
              />
              <DetailItem label="Join Date" value={user.joinDate} />
              <DetailItem label="Profile Views" value={user.profileViews} />
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <DetailItem
                label="Country"
                value={user.country}
                editable={isEditing}
                onChange={(val) => handleChange("country", val)}
              />
              <DetailItem
                label="Date of Birth"
                value={user.dob}
                editable={isEditing}
                onChange={(val) => handleChange("dob", val)}
              />
              <DetailItem
                label="Subscription Plan"
                value={user.plan}
                editable={isEditing}
                onChange={(val) => handleChange("plan", val)}
              />
              <DetailItem label="Notches Found" value={user.notches} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// Reusable Component
const DetailItem = ({ label, value, editable, onChange }) => (
  <div>
    <p className="text-sm text-gray-500">{label}:</p>
    {editable ? (
      <input
        className="border rounded px-2 py-1 w-full"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    ) : (
      <p className="font-medium">{value || "N/A"}</p>
    )}
  </div>
);

export default ViewDetails;
