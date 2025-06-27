"use client";
import React from "react";
import Image from "next/image";

const NotificationPopup = ({ onClose }) => {
  const notifications = [
    {
      img: "/assets/n1.png",
      title: "New User Registered",
      time: "2m ago",
      description:
        "Lorem ipsum dolor sit amet, consectetur etv dhs as adipiscing elit, sed do eiusmod tempor.inc idiu nt ut labore et dolore magna aliqua.",
    },
    {
      img: "/assets/n2.png",
      title: "Invoice Due Notices",
      tag: "Texas",
      time: "Just now",
      description:
        "Lorem ipsum dolor sit amet, consectetur etv dhs as adipiscing elit, sed do eiusmod tempor.inc idiu nt ut labore et dolore.",
    },
    {
      img: "/assets/n3.png",
      title: "User Reported",
      time: "15m ago",
      description:
        "User Sara Ahmed has been reported for inappropriate behavior. Review the report.inc idiu nt ut labore et dolore magna aliqua.",
    },
    {
      img: "/assets/n4.png",
      title: "Subscription Purchase",
      time: "1h ago",
      description:
        "Lorem ipsum dolor sit amet, consectetur etv dhs as adipiscing elit, sed do eiusmod tempor.inc idiu nt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="bg-white w-[588px] h-[670px] rounded-[12px] p-6 flex flex-col shadow-lg">
      {/* Header */}
      <div className="relative">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Notifications
        </h2>

        {/* Filter Tabs */}
        <div className="flex items-center gap-4 mb-6">
          <button className="bg-[#5D5FEF] text-white px-4 py-1.5 rounded-md text-sm font-medium">
            All
          </button>
          <button className="text-gray-600 text-sm">Read</button>
          <button className="text-gray-600 text-sm">Unread</button>

          {/* Mark all as read */}
          <label className="ml-auto flex items-center gap-2 text-sm text-[#1E1D31]">
            <input type="checkbox" /> Mark all as read
          </label>
        </div>
      </div>

      {/* Notifications List */}
      <div className="flex-1 space-y-4 overflow-y-auto pr-2">
        {notifications.map((item, index) => (
          <div
            key={index}
            className={`flex items-start gap-4 bg-[#F6F6F6] p-4 rounded-lg shadow-sm ${
              index < 3 ? "border-l-2 border-[#5D5FEF]" : ""
            }`}
          >
            <Image
              src={item.img}
              alt="user"
              width={45}
              height={45}
              className="rounded-full self-center"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h4 className="font-semibold text-sm text-black">
                  {item.title}
                  {item.tag && (
                    <span className="block text-xs text-[#4F4F4F]">
                      {item.tag}
                    </span>
                  )}
                </h4>
                <span className="text-xs text-gray-500 whitespace-nowrap">
                  {item.time}
                </span>
              </div>
              <p className="text-xs text-[#4F4F4F] mt-1 leading-snug">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Close Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={onClose}
          className="w-full bg-[#5D5FEF] text-white font-medium py-2 rounded-md hover:bg-[#797bd6] transition duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default NotificationPopup;
