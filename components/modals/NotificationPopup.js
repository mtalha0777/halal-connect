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
    <div className="bg-white w-[90vw] max-w-[550px] max-h-[90vh] rounded-[12px] p-4 sm:p-6 flex flex-col shadow-lg overflow-hidden">
      <div className="pb-4">
        <h2 className="text-2xl font-semibold text-center mb-4 sm:mb-6">
          Notifications
        </h2>

        <div className="flex flex-wrap items-center gap-2 md:gap-4 mt-3">
          <button className="bg-[#5D5FEF] text-white px-3 md:px-4 py-1 md:py-1.5 rounded-md text-xs md:text-sm font-medium">
            All
          </button>
          <button className="text-gray-600 text-xs md:text-sm">Read</button>
          <button className="text-gray-600 text-xs md:text-sm">Unread</button>

          <label className="ml-auto flex items-center gap-2 text-xs md:text-sm text-[#1E1D31]">
            <input type="checkbox" className="w-3 h-3 md:w-4 md:h-4" />
            Mark all as read
          </label>
        </div>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto pr-2">
        {notifications.map((item, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 md:gap-4 bg-[#F6F6F6] p-3 md:p-4 rounded-lg shadow-sm ${
              index < 3 ? "border-l-2 border-[#5D5FEF]" : ""
            }`}
          >
            <Image
              src={item.img}
              alt="user"
              width={40}
              height={40}
              className="rounded-full w-10 h-10 md:w-11 md:h-11"
            />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start gap-2">
                <h4 className="font-semibold text-xs md:text-sm text-black">
                  {item.title}
                  {item.tag && (
                    <span className="block text-[10px] md:text-xs text-[#4F4F4F]">
                      {item.tag}
                    </span>
                  )}
                </h4>
                <span className="text-[10px] md:text-xs text-gray-500 whitespace-nowrap">
                  {item.time}
                </span>
              </div>
              <p className="text-[10px] md:text-xs text-[#4F4F4F] mt-1 leading-snug">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Close Button */}
      <div className="pt-4">
        <button
          onClick={onClose}
          className="w-full bg-[#5D5FEF] text-white py-2 rounded-md hover:bg-[#797bd6] transition duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default NotificationPopup;
