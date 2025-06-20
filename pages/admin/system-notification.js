"use client";

import React, { useState } from "react";
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

  return (
    <div className="flex min-h-screen font-sans">
      <Sidebar />
      <main className="flex-1 bg-white p-6 pt-24">
        <Topbar />
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">System Notification</h2>
          <Link href="/notification/create">
            <button className="flex items-center gap-2 bg-[#5D5FEF] hover:bg-[#3d3fea] text-white text-sm rounded px-4 py-2">
              <Image
                src="/assets/plus.svg"
                alt="plus icon"
                width={20}
                height={20}
              />
              Create Notification
            </button>
          </Link>
        </div>

        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Notification Campaigns</h3>
          <div className="overflow-auto rounded-lg border border-gray-200">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Type</th>
                  <th className="px-4 py-2">Notification Name</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {notificationData.map((item, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="px-4 py-3 text-base text-gray-400 font-normal">
                      {item.date}
                    </td>
                    <td className="px-4 py-3 text-base text-gray-400 font-normal">
                      {item.type}
                    </td>
                    <td className="px-4 py-3 text-base text-gray-400 font-normal">
                      {item.title}
                    </td>
                    <td className="px-4 py-3 text-base text-gray-400 font-normal max-w-md">
                      <TruncatedText text={item.description} />
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 text-xs rounded-full font-medium ${
                          item.status === "Active"
                            ? "bg-green-100 text-green-500"
                            : "bg-red-100 text-red-500"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 relative">
                      <div className="relative inline-block text-left">
                        <button
                          onClick={() =>
                            setOpenDropdownIndex(
                              openDropdownIndex === idx ? null : idx
                            )
                          }
                          className="flex items-center"
                        >
                          <img
                            src="/assets/dots.svg"
                            alt="Menu"
                            className="w-5 h-5 cursor-pointer"
                          />
                        </button>

                        {openDropdownIndex === idx && (
                          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                            <button
                              onClick={() => {
                                if (item.status === "Inactive") {
                                  setPopup({ visible: true, item, index: idx });
                                }
                                setOpenDropdownIndex(null);
                              }}
                              className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
                            >
                              <img
                                src="/assets/active.svg"
                                className="w-4 h-4"
                              />
                              Active
                            </button>
                            <button className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-100 text-gray-700">
                              <img
                                src="/assets/preview.svg"
                                className="w-4 h-4"
                              />
                              Preview
                            </button>
                            <button className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-100 text-gray-700">
                              <img
                                src="/assets/delete.svg"
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
        </section>
      </main>

      {popup.visible && (
        <div className="fixed inset-0 bg-[#00000099] flex items-center justify-center z-50">
          <div className="bg-white rounded-[12px] w-[660px] h-[484px] p-[32px] flex flex-col gap-[40px]">
            <h3 className="text-xl font-semibold text-left">
              Push Notification
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-[#00000066]">
                  Notification Name
                </label>

                <input
                  type="text"
                  value={popup.item?.title}
                  readOnly
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-[#00000066]">
                  Description
                </label>

                <textarea
                  rows="3"
                  value={popup.item?.description}
                  readOnly
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50"
                />
              </div>
            </div>

            <div className="flex-grow flex flex-col justify-end">
              <button
                onClick={handleGotIt}
                className="w-full bg-[#5D5FEF] hover:bg-[#3d3fea] text-white py-2 rounded"
              >
                Got It!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
