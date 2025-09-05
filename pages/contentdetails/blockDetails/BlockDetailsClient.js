"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/layout/SideBar";
import Topbar from "@/components/layout/TopBar";

const BlockDetailsClient = ({ user }) => {
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

  const [currentUser, setCurrentUser] = useState(user);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (field, val) =>
    setCurrentUser((prev) => ({ ...prev, [field]: val }));

  if (!currentUser) return <p className="p-10">User not found.</p>;

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
        <section className="bg-gray-50 border border-gray-200 rounded-lg px-4 md:px-9 pt-4 pb-12 space-y-8">
          <div className="flex items-start gap-6 mb-8">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-purple-200">
              <Image
                src={currentUser.avatar}
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
                <div className="ml-auto px-3 py-1 rounded-full border border-[#FF47471F] bg-[#FF47471F] text-[#FF4747] text-xs font-semibold">
                  Block
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
                  {currentUser.verified ? "Verified" : "Unverified"}
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ColumnOne
              user={currentUser}
              editable={isEditing}
              onChange={handleChange}
            />
            <ColumnTwo
              user={currentUser}
              editable={isEditing}
              onChange={handleChange}
            />
            <ColumnThree
              user={currentUser}
              editable={isEditing}
              onChange={handleChange}
            />
          </div>
          <ReportSummary user={currentUser} />
        </section>
      </main>
    </div>
  );
};

// All the helper components go here
const ColumnOne = ({ user, editable, onChange }) => (
  <div className="space-y-4">
    <DetailItem label="User ID" value={user.banId} />
    <DetailItem label="City" value={user.city} editable={editable} onChange={(v) => onChange("city", v)} />
    <DetailItem label="Marital Status" value={user.maritalStatus} editable={editable} onChange={(v) => onChange("maritalStatus", v)} />
    <DetailItem label="Last Login Date" value={user.lastLogin} />
  </div>
);
const ColumnTwo = ({ user, editable, onChange }) => (
  <div className="space-y-4">
    <DetailItem label="Phone" value={user.phone} editable={editable} onChange={(v) => onChange("phone", v)} />
    <DetailItem label="Gender" value={user.gender} editable={editable} onChange={(v) => onChange("gender", v)} />
    <DetailItem label="Join Date" value={user.joinDate} />
    <DetailItem label="Profile Views" value={user.profileViews} />
  </div>
);
const ColumnThree = ({ user, editable, onChange }) => (
  <div className="space-y-4">
    <DetailItem label="Country" value={user.country} editable={editable} onChange={(v) => onChange("country", v)} />
    <DetailItem label="Date of Birth" value={user.dob} editable={editable} onChange={(v) => onChange("dob", v)} />
    <DetailItem label="Subscription Plan" value={user.plan} editable={editable} onChange={(v) => onChange("plan", v)} />
    <DetailItem label="Notches Found" value={user.notches} />
  </div>
);
const DetailItem = ({ label, value, editable, onChange }) => (
  <div>
    <p className="text-sm text-gray-500">{label}:</p>
    {editable ? (
      <input className="border rounded px-2 py-1 w-full" value={value} onChange={(e) => onChange(e.target.value)} />
    ) : (
      <p className="font-medium">{value || "N/A"}</p>
    )}
  </div>
);
const ReportSummary = ({ user }) => (
  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-10">
    <div className="flex items-center gap-2 mb-4">
      <Image src="/assets/reportuser.svg" alt="icon" width={20} height={20} />
      <h2 className="text-lg font-bold">Reported Summary</h2>
    </div>
    <hr className="my-6 border-gray-200" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
      <Summary label="Report ID" value={user.reportId} />
      <Summary label="Report By" value={user.reportedBy} />
      <Summary label="Report Reason" value={user.reportReason} />
    </div>
    <Summary label="Report Date" value={user.reportDate} />
    <div className="mt-4">
      <p className="text-md font-semibold">Report Description:</p>
      <p className="font-small text-gray-700">{user.reportDescription}</p>
    </div>
  </div>
);
const Summary = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-500">{label}:</p>
    <p className="font-small">{value}</p>
  </div>
);

export default BlockDetailsClient;