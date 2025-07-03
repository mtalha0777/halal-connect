"use client";
import React, { useState, useCallback, useEffect, useRef } from "react";
import Sidebar from "../../components/layout/SideBar";
import Topbar from "../../components/layout/TopBar";
import Image from "next/image";
import Link from "next/link";

const notificationDataInitial = [
  {
    date: "01-14-2025",
    type: "Email",
    title: "Your Perfect Match is Waiting!",
    description:
      "Someone sent you a Super Like! Don’t keep them waiting—view their profile now.",
    status: "Active",
  },
  {
    date: "01-14-2025",
    type: "Alerts",
    title: "You’ve Got a Super Like!",
    description:
      "Someone sent you a Super Like! Don’t keep them waiting—view their profile now.",
    status: "Active",
  },
  {
    date: "01-14-2025",
    type: "New Match Found!",
    title: "Your Profile Was Viewed",
    description:
      "Someone just liked your profile! Check them out now and start a conversation.",
    status: "Inactive",
  },
  {
    date: "01-14-2025",
    type: "Email",
    title: "Your Perfect Match is Waiting!",
    description:
      "Someone sent you a Super Like! Don’t keep them waiting—view their profile now.",
    status: "Active",
  },
  {
    date: "01-14-2025",
    type: "Alerts",
    title: "You’ve Got a Super Like!",
    description:
      "Someone sent you a Super Like! Don’t keep them waiting—view their profile now.",
    status: "Inactive",
  },
  {
    date: "01-14-2025",
    type: "Push Notification",
    title: "New Match Found!",
    description:
      "Someone just liked your profile! Check them out now and start a conversation.",
    status: "Active",
  },
  {
    date: "01-14-2025",
    type: "Email",
    title: "Your Perfect Match is Waiting!",
    description:
      "Someone sent you a Super Like! Don’t keep them waiting—view their profile now.",
    status: "Inactive",
  },
  {
    date: "01-14-2025",
    type: "Alerts",
    title: "You’ve Got a Super Like!",
    description:
      "Someone sent you a Super Like! Don’t keep them waiting—view their profile now.",
    status: "Active",
  },
  {
    date: "01-14-2025",
    type: "Push Notification",
    title: "New Match Found!",
    description:
      "Someone just liked your profile! Check them out now and start a conversation.",
    status: "Inactive",
  },
  {
    date: "01-14-2025",
    type: "Email",
    title: "Your Perfect Match is Waiting!",
    description:
      "Someone sent you a Super Like! Don’t keep them waiting—view their profile now.",
    status: "Active",
  },
  {
    date: "01-14-2025",
    type: "Alerts",
    title: "You’ve Got a Super Like!",
    description:
      "Someone sent you a Super Like! Don’t keep them waiting—view their profile now.",
    status: "Inactive",
  },
  {
    date: "01-14-2025",
    type: "Push Notification",
    title: "New Match Found!",
    description:
      "Someone just liked your profile! Check them out now and start a conversation.",
    status: "Inactive",
  },
];

function TruncatedText({ text = "", maxLength = 40 }) {
  // ... Aapka TruncatedText component waisa hi rahega ...
  const [isExpanded, setIsExpanded] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    if (!isExpanded) return;
    function handleClickOutside(event) {
      if (textRef.current && !textRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isExpanded]);

  const isTruncated = text.length > maxLength;

  return (
    <span
      ref={textRef}
      onClick={() => setIsExpanded(!isExpanded)}
      className="cursor-pointer text-gray-500"
    >
      {!isExpanded && isTruncated ? `${text.slice(0, maxLength)}...` : text}
    </span>
  );
}

export default function SystemNotification() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notificationData, setNotificationData] = useState(
    notificationDataInitial
  );
  const [popup, setPopup] = useState({
    visible: false,
    item: null,
    index: null,
    mode: "activate",
  });
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

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

  const handlePopupClose = () =>
    setPopup({ visible: false, item: null, index: null, mode: "activate" });
  const handleActivate = () => {
    if (popup.index !== null) {
      const updated = [...notificationData];
      updated[popup.index].status = "Active";
      setNotificationData(updated);
    }
    handlePopupClose();
  };

  const filteredNotifications = notificationData.filter(
    (notification) =>
      notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notification.description
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      notification.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen font-sans bg-gray-50">
      <Sidebar
        isMobileSidebarOpen={isMobileSidebarOpen}
        toggleMobileSidebar={toggleMobileSidebar}
        isDesktop={isDesktop}
      />
      <main
        className={`flex-1 bg-white transition-all duration-300 ${
          // CHANGE 1: Yahan se padding classes hata di hain
          isDesktop && isMobileSidebarOpen ? "md:ml-[260px]" : ""
        }`}
      >
        {/* Topbar ab padding wale container se bahar hai */}
        <Topbar
          toggleMobileSidebar={toggleMobileSidebar}
          isMobileSidebarOpen={isMobileSidebarOpen}
          isDesktop={isDesktop}
        />

        {/* CHANGE 2: Ek naya wrapper div add kiya aur padding yahan laga di */}
       <div className="p-4 md:p-6 pt-20 lg:pt-24">
          <div className="max-w-7xl mx-auto">
            {/* Heading and Create Button Section ab sahi se dikhega */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <h2 className="text-xl font-bold text-black">
                System Notification
              </h2>
              <Link href="/notification/create" className="w-full md:w-auto">
                <button
                  className="flex items-center justify-center gap-2
               bg-[#5D5FEF] hover:bg-[#4a4be0]
               text-white text-md rounded-lg
               px-6 md:px-8           
               h-[40px] min-w-[220px]
              "
                >
                  <Image
                    src="/assets/plus.svg"
                    alt="plus icon"
                    width={16}
                    height={16}
                  />
                  <span className="whitespace-nowrap">Create Notification</span>
                </button>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
                <h3 className="text-lg font-semibold">
                  Notification Campaigns
                </h3>
                <div className="relative w-full sm:w-64">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#5D5FEF]"
                  />
                  <Image
                    src="/assets/search.svg"
                    alt="Search"
                    width={16}
                    height={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                </div>
              </div>

              {/* ===== RESPONSIVE TABLE LOGIC START ===== */}

              {/* --- 1. Desktop View: The Table (hidden on small screens) --- */}
              <div className="hidden lg:block border border-gray-200 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-left">
                    <thead className="bg-gray-50 border-b-2 border-gray-200">
                      <tr>
                        <th className="px-6 py-3 font-medium text-gray-600">
                          Date
                        </th>
                        <th className="px-6 py-3 font-medium text-gray-600">
                          Type
                        </th>
                        <th className="px-6 py-3 font-medium text-gray-600">
                          Notification Name
                        </th>
                        <th className="px-6 py-3 font-medium text-gray-600">
                          Description
                        </th>
                        <th className="px-6 py-3 font-medium text-gray-600">
                          Status
                        </th>
                        <th className="px-6 py-3 font-medium text-gray-600 text-right">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {filteredNotifications.map((item, idx) => (
                        <tr key={idx} className="bg-white hover:bg-gray-50">
                          <td className="px-6 py-4 text-gray-500">
                            {item.date}
                          </td>
                          <td className="px-6 py-4 text-gray-500">
                            {item.type}
                          </td>
                          <td className="px-6 py-4 text-gray-500">
                            {item.title}
                          </td>
                          <td className="px-6 py-4">
                            <TruncatedText
                              text={item.description}
                              maxLength={30}
                            />
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-2 py-1 text-xs rounded-full font-semibold ${
                                item.status === "Active"
                                  ? "bg-green-100 text-green-500"
                                  : "bg-red-100 text-red-500"
                              }`}
                            >
                              {item.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="relative inline-block text-left">
                              <button
                                onClick={() =>
                                  setOpenDropdownIndex(
                                    openDropdownIndex === idx ? null : idx
                                  )
                                }
                                className="p-2 rounded-full hover:bg-gray-100"
                              >
                                <Image
                                  src="/assets/dots.svg"
                                  alt="Menu"
                                  width={20}
                                  height={20}
                                />
                              </button>
                              {openDropdownIndex === idx && (
                                <div className="absolute right-0 mt-2 w-40 bg-white origin-top-right border border-gray-200 rounded-md shadow-lg z-10">
                                  <button
                                    onClick={() => {
                                      if (item.status === "Inactive")
                                        setPopup({
                                          visible: true,
                                          item,
                                          index: idx,
                                          mode: "activate",
                                        });
                                      setOpenDropdownIndex(null);
                                    }}
                                    className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
                                  >
                                    <Image
                                      src="/assets/active.svg"
                                      alt="Active"
                                      width={16}
                                      height={16}
                                    />{" "}
                                    Active
                                  </button>
                                  <button
                                    onClick={() => {
                                      setPopup({
                                        visible: true,
                                        item,
                                        index: idx,
                                        mode: "preview",
                                      });
                                      setOpenDropdownIndex(null);
                                    }}
                                    className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
                                  >
                                    <Image
                                      src="/assets/preview.svg"
                                      alt="Preview"
                                      width={16}
                                      height={16}
                                    />{" "}
                                    Preview
                                  </button>
                                  <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                                    <Image
                                      src="/assets/delete.svg"
                                      alt="Delete"
                                      width={16}
                                      height={16}
                                    />{" "}
                                    Delete
                                  </button>
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              
            </div>

            {/* --- 2. Mobile View: The Cards (only on small screens) --- */}
            <div className="lg:hidden space-y-4 mt-4">
              {filteredNotifications.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3"
                >
                  <div className="flex justify-between items-start">
                    <p className="font-semibold text-gray-800 pr-4">
                      {item.title}
                    </p>
                    <span
                      className={`px-2 py-1 text-xs whitespace-nowrap rounded-full font-semibold ${
                        item.status === "Active"
                          ? "bg-green-100 text-green-500"
                          : "bg-red-100 text-red-500"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <strong>Type:</strong> {item.type}
                    </p>
                    <p>
                      <strong>Date:</strong> {item.date}
                    </p>
                    <div className="pt-1">
                      <p className="font-medium text-gray-700">Description:</p>
                      <TruncatedText text={item.description} maxLength={100} />
                    </div>
                  </div>
                  <div className="flex justify-end pt-3 mt-2 border-t border-gray-200">
                    {/* Mobile action buttons can go here if needed */}
                    <button className="px-3 py-1.5 text-xs font-medium text-purple-600 bg-purple-100 rounded-lg hover:bg-purple-200">
                      Actions
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* ===== RESPONSIVE TABLE LOGIC END ===== */}
                  </div>
               </div>
              {popup.visible && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg w-full max-w-md p-6 space-y-6">
              <h3 className="text-xl font-semibold">
                {popup.mode === "preview"
                  ? `Preview: ${popup.item?.type}`
                  : "Activate Notification"}
              </h3>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-600">
                  Notification Name
                </label>
                <input
                  type="text"
                  value={popup.item?.title}
                  readOnly
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-600">
                  Description
                </label>
                <textarea
                  rows="4"
                  value={popup.item?.description}
                  readOnly
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-100"
                />
              </div>
              <button
                onClick={
                  popup.mode === "preview" ? handlePopupClose : handleActivate
                }
                className="w-full bg-[#5D5FEF] hover:bg-[#4a4be0] text-white py-2.5 rounded-md text-base font-semibold"
              >
                Got It!
              </button>
            </div>
            </div>
          
        )}
        </div>
      </main>
    </div>
  );
}
