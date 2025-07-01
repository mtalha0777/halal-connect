"use client";

import React, { useState ,useCallback,useEffect} from "react";
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
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => setExpanded(true);
  const isTruncated = text.length > maxLength;
  return (
    <span onClick={handleClick} className="cursor-pointer text-gray-400">
      {!expanded && isTruncated ? `${text.slice(0, maxLength)}...` : text}
    </span>
  );
}

export default function SystemNotification() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
const [searchQuery, setSearchQuery] = useState('');
   const toggleMobileSidebar = useCallback(
    () => setIsMobileSidebarOpen(prev => !prev),
    []
  );

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      setIsMobileSidebarOpen(desktop);     // auto‑open on desktop
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [notificationData, setNotificationData] = useState(
    notificationDataInitial
  );
  const [popup, setPopup] = useState({
    visible: false,
    item: null,
    index: null,
  });
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleGotIt = () => {
    if (popup.index !== null) {
      const updated = [...notificationData];
      updated[popup.index].status = "Active";
      setNotificationData(updated);
    }
    setPopup({ visible: false, item: null, index: null });
  };
 // Filter notifications based on search
  const filteredNotifications = notificationData.filter(notification => 
    notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    notification.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    notification.type.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="flex min-h-screen font-sans">
      <Sidebar
        isMobileSidebarOpen={isMobileSidebarOpen}
        toggleMobileSidebar={toggleMobileSidebar}
        isDesktop={isDesktop}
      />

       <main className={`flex-1 bg-white p-4 md:p-6 pt-20 md:pt-24 md:ml-[260px] w-full max-w-[1400px] mx-auto overflow-x-hidden ${isDesktop && isMobileSidebarOpen ? "ml-[260px]" : ""}`}>
        <Topbar toggleMobileSidebar={toggleMobileSidebar} 
        isMobileSidebarOpen={isMobileSidebarOpen}
  isDesktop={isDesktop}/>

        {/* Header Section */}

<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 w-full max-w-[1210px]">
  <h2 className="text-lg md:text-xl font-bold text-black">System Notification</h2>
  <Link href="/notification/create" className="w-full md:w-auto">
    <button className="flex items-center justify-center gap-2 bg-[#5D5FEF] hover:bg-[#3d3fea] text-white text-sm rounded-lg px-3 py-2 w-full md:w-[189px] h-[40px]">
      <Image
                src="/assets/plus.svg"
                alt="plus icon"
                width={16}
                height={16}
                className="w-4 h-4 md:w-5 md:h-5"
              />
      <span>Create Notification</span>
    </button>
  </Link>
</div>


 
    {/* Table Section */}
   <div className="mb-6 rounded-xl overflow-hidden border border-[#00000014] w-full">
          {/* Notification Campaigns Header with Search - Fixed Layout */}
          <div className="bg-white px-4 py-3 border-b border-[#00000014] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <h3 className="text-base md:text-lg font-semibold">Notification Campaigns</h3>
            
            {/* Search Bar - Now properly aligned in the same row on desktop */}
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm border border-[#00000014] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#5D5FEF]"
              />
              <Image
                src="/assets/search.svg"
                alt="Search"
                width={16}
                height={16}
                className="absolute left-3 top-2.5 w-4 h-4 text-gray-400"
              />
            </div>
          </div>

          
  
          {/* Table container */}
          <div className="bg-[#f9f9f9] overflow-x-auto border border-[#00000014]">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 border-[#00000014]">Date</th>
                  <th className="px-4 py-3 border-[#00000014]">Type</th>
                  {/* Changed to always show these columns */}
                  <th className="px-4 py-3 border-[#00000014]">Notification Name</th>
                  <th className="px-4 py-3 border-[#00000014]">Description</th>
                  <th className="px-4 py-3 border-[#00000014]">Status</th>
                  <th className="px-4 py-3 border-[#00000014]">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredNotifications.map((item, idx) => (
                  <tr key={idx} className="border-t border-[#00000014] bg-white">
                    <td className="px-4 py-3 text-gray-400 border-[#00000014]">
                      {item.date}
                    </td>
                    <td className="px-4 py-3 text-gray-400 border-[#00000014]">
                      {item.type}
                    </td>
                    {/* Removed hidden classes to always show these columns */}
                    <td className="px-4 py-3 text-gray-400 border-[#00000014]">
                      {item.title}
                    </td>
                    <td className="px-4 py-3 text-gray-400 border-[#00000014]">
                      <TruncatedText text={item.description} maxLength={30} />
                    </td>
                    <td className="px-4 py-3 border-[#00000014]">
                      <span
                        className={`px-2 py-1 text-xs rounded-full font-medium ${
                          item.status === "Active"
                            ? "bg-green-100 text-green-500"
                            : "bg-red-100 text-red-500"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 border-[#00000014] relative">
                      <div className="relative inline-block text-left">
                        <button
                          onClick={() =>
                            setOpenDropdownIndex(
                              openDropdownIndex === idx ? null : idx
                            )
                          }
                          className="flex items-center"
                        >
                          <Image
                            src="/assets/dots.svg"
                            alt="Menu"
                            width={16}
                            height={16}
                            className="w-4 h-4 md:w-5 md:h-5 cursor-pointer"
                          />
                        </button>

                        {openDropdownIndex === idx && (
                          <div className="absolute right-0 mt-2 w-40 bg-white origin-top-right sm:translate-x-0 translate-x-[-20%] border border-gray-200 rounded-md shadow-lg z-10">
                            <button
                              onClick={() => {
                                if (item.status === "Inactive") {
                                  setPopup({
                                    visible: true,
                                    item,
                                    index: idx,
                                  });
                                }
                                setOpenDropdownIndex(null);
                              }}
                              className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
                            >
                              <Image
                                src="/assets/active.svg"
                                alt="Active"
                                width={16}
                                height={16}
                                className="w-4 h-4"
                              />
                              Active
                            </button>
                            <button className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-100 text-gray-700">
                              <Image
                                src="/assets/preview.svg"
                                alt="Preview"
                                width={16}
                                height={16}
                                className="w-4 h-4"
                              />
                              Preview
                            </button>
                            <button className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-100 text-gray-700">
                              <Image
                                src="/assets/delete.svg"
                                alt="Delete"
                                width={16}
                                height={16}
                                className="w-4 h-4"
                              />
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

       {/* Responsive Popup */}
       {popup.visible && (
  <div className="fixed inset-0 bg-[#00000099] flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg w-full max-w-[90vw] sm:max-w-md p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold">Push Notification</h3>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs md:text-sm font-medium mb-1 text-[#00000066]">
                    Notification Name
                  </label>
                  <input
                    type="text"
                    value={popup.item?.title}
                    readOnly
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-medium mb-1 text-[#00000066]">
                    Description
                  </label>
                  <textarea
                    rows="3"
                    value={popup.item?.description}
                    readOnly
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-gray-50"
                  />
                </div>
              </div>

              <button
                onClick={handleGotIt}
                className="w-full bg-[#5D5FEF] hover:bg-[#3d3fea] text-white py-2 rounded text-sm md:text-base"
              >
                Got It!
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
