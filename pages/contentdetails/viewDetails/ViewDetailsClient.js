"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/layout/SideBar";
import Topbar from "@/components/layout/TopBar";

const ViewDetailsClient = ({ user }) => {
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
      if(desktop) {
        setIsMobileSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [currentUser, setCurrentUser] = useState(user);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (field, value) => {
    setCurrentUser((prev) => ({ ...prev, [field]: value }));
  };

  if (!currentUser) return <p className="p-10">User not found</p>;

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
          <div className="flex items-start gap-6 mb-8">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-purple-200">
              <Image
                src={currentUser.avatar || "/assets/profile.png"}
                alt={currentUser.name}
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
                        value={currentUser.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                      />
                      <input
                        className="text-sm text-gray-600"
                        value={currentUser.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                    </>
                  ) : (
                    <>
                      <h2 className="text-xl font-bold">{currentUser.name}</h2>
                      <p className="text-gray-600">{currentUser.email}</p>
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
                {currentUser.verified && (
                  <Image
                    src="/assets/verified.svg"
                    alt="Verified"
                    width={16}
                    height={16}
                  />
                )}
                <span className="text-sm text-gray-700">
                  {currentUser.verified ? "Verified" : "Unverified"}
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <DetailItem label="User ID" value={currentUser.id} />
              <DetailItem
                label="City"
                value={currentUser.city}
                editable={isEditing}
                onChange={(val) => handleChange("city", val)}
              />
              <DetailItem
                label="Marital Status"
                value={currentUser.maritalStatus}
                editable={isEditing}
                onChange={(val) => handleChange("maritalStatus", val)}
              />
              <DetailItem label="Last Login Date" value={currentUser.lastLogin} />
            </div>
            <div className="space-y-4">
              <DetailItem
                label="Phone"
                value={currentUser.phone}
                editable={isEditing}
                onChange={(val) => handleChange("phone", val)}
              />
              <DetailItem
                label="Gender"
                value={currentUser.gender}
                editable={isEditing}
                onChange={(val) => handleChange("gender", val)}
              />
              <DetailItem label="Join Date" value={currentUser.joinDate} />
              <DetailItem label="Profile Views" value={currentUser.profileViews} />
            </div>
            <div className="space-y-4">
              <DetailItem
                label="Country"
                value={currentUser.country}
                editable={isEditing}
                onChange={(val) => handleChange("country", val)}
              />
              <DetailItem
                label="Date of Birth"
                value={currentUser.dob}
                editable={isEditing}
                onChange={(val) => handleChange("dob", val)}
              />
              <DetailItem
                label="Subscription Plan"
                value={currentUser.plan}
                editable={isEditing}
                onChange={(val) => handleChange("plan", val)}
              />
              <DetailItem label="Notches Found" value={currentUser.notches} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

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


export default ViewDetailsClient;