"use client";
import React, { useState } from "react";
import Image from "next/image";

const SubscriptionPlans = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [popupMode, setPopupMode] = useState("edit");

  const plans = [
    {
      id: "01",
      duration: "1 Month",
      benefits: "5",
      price: "20 $",
      status: "Active",
    },
    {
      id: "02",
      duration: "3 Month",
      benefits: "8",
      price: "50 $",
      status: "Active",
    },
    {
      id: "03",
      duration: "6 Month",
      benefits: "8",
      price: "100 $",
      status: "Active",
    },
    {
      id: "04",
      duration: "1 Year",
      benefits: "12",
      price: "180 $",
      status: "Disable",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      {/* Title and Toggle Buttons */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Subscription Plans</h3>
        <div className="flex gap-8">
          {["Diamond", "Gold", "Silver"].map((plan, idx) => (
            <button
              key={idx}
              className={`relative text-sm font-medium ${
                plan === "Diamond" ? "text-[#5D5FEF]" : "text-gray-500"
              }`}
            >
              {plan}
              {plan === "Diamond" && (
                <span className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-[#5D5FEF]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Add Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => {
            setPopupMode("add");
            setShowEditModal(true);
          }}
          className="flex items-center gap-2 text-[#0066FF] font-medium hover:underline hover:text-blue-700 cursor-pointer"
        >
          Add
          <Image src="/assets/blueplus.svg" alt="Plus" width={20} height={20} />
        </button>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className="bg-gray-100 rounded-md">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Plan ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Duration
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Benefits
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Price ($)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {plans.map((plan, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {plan.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {plan.duration}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {plan.benefits}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {plan.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 inline-flex text-sm leading-5 font-normal rounded-full ${
                      plan.status === "Active"
                        ? "bg-green-100 text-green-500"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {plan.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 relative">
                  <div className="relative">
                    {/* Custom Dots Icon instead of MoreVertical */}
                    <Image
                      src="/assets/dots.svg"
                      alt="More Options"
                      width={20}
                      height={20}
                      className="cursor-pointer"
                      onClick={() => {
                        setOpenMenu(openMenu === index ? null : index); // ✅ Toggle logic
                      }}
                    />

                    {openMenu === index && (
                      <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-50 border border-gray-200">
                        {/* Edit Click */}
                        <div
                          className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setPopupMode("edit");
                            setShowEditModal(true);
                            setOpenMenu(null);
                          }}
                        >
                          <Image
                            src="/assets/editblack.svg"
                            alt="Edit"
                            width={16}
                            height={16}
                            className="mr-2"
                          />
                          <span>Edit</span>
                        </div>

                        {/* Delete */}
                        <div className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer">
                          <Image
                            src="/assets/delete.svg"
                            alt="Delete"
                            width={16}
                            height={16}
                            className="mr-2"
                          />
                          <span>Delete</span>
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showEditModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            onClick={() => setShowEditModal(false)}
          />
          <div className="relative bg-white rounded-[12px] p-8 z-50 shadow-lg w-full max-w-[660px] max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold mb-2">
                <span className="text-black font-semibold">Diamond Plan</span>
                <span className="text-gray-500 font-normal">/month</span>
              </h2>
              <button
                className="text-[#0066FF] underline text-sm md:text-base font-medium hover:text-[#0044cc] flex items-center gap-1"
                onClick={() => {}}
              >
                Add Field
                <Image
                  src="/assets/blueplus.svg"
                  alt="Plus"
                  width={20}
                  height={20}
                />
              </button>
            </div>

            {/* ✅ Show these two fields ONLY in ADD mode */}
            {popupMode === "add" && (
              <div className="flex items-center gap-[16px] mt-4">
                {/* Add Field Title Input */}
                <div
                  className="rounded px-3 py-2"
                  style={{
                    backgroundColor: "#F6F6F6",
                    width: "596px",
                    height: "44px",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Add Field Title"
                    className="w-full h-full bg-[#F6F6F6] text-[#00000099] placeholder-[#00000099] outline-none"
                  />
                </div>

                {/* Add Placeholder Text Input */}
                <div
                  className="rounded px-3 py-2"
                  style={{
                    backgroundColor: "#F6F6F6",
                    width: "596px",
                    height: "44px",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Add Placeholder Text"
                    className="w-full h-full bg-[#F6F6F6] text-[#00000099] placeholder-[#00000099] outline-none"
                  />
                </div>

                {/* Add Button */}
                <button
                  className="text-white text-sm px-4 py-2 rounded bg-[#5D5FEF] hover:bg-[#6567a4]"
                  style={{ width: "120px", height: "44px" }}
                >
                  add
                </button>
              </div>
            )}

            {/* Price + Duration + Status */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label className="font-semibold text-[#000000B8] mb-1">
                  Price
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  defaultValue="20.99$"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-[#000000B8] mb-1">
                  Duration
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  defaultValue="30 Days"
                />
              </div>

              <div className="col-span-2 flex flex-col relative">
                <label className="font-semibold text-[#000000B8] mb-1">
                  Activate / Deactivate
                </label>
                <div className="relative">
                  <select className="appearance-none border border-gray-300 rounded px-3 py-2 pr-10 text-sm text-[#000000B8] w-full">
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                  <img
                    src="/assets/arrowdown.svg"
                    alt="Dropdown"
                    className="w-6 h-6 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                  />
                </div>
              </div>
            </div>
            {/* Title Row: Benefits + Add Field */}
            {/* Title Row: Benefits + Add Field (Now shown in both modes) */}
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-semibold text-base md:text-xl text-black">
                Benefits
              </h3>

              <button
                className="text-[#0066FF] underline text-sm md:text-base font-medium hover:text-[#0044cc] flex items-center gap-1"
                onClick={() => {}}
              >
                Add Field
                <Image
                  src="/assets/blueplus.svg"
                  alt="Plus"
                  width={20}
                  height={20}
                />
              </button>
            </div>
            {/* 8 Default Fields */}
            <div className="grid grid-cols-2 gap-6 text-sm text-[#000000B8] mb-4">
              {[
                { label: "Send Links", value: "100" },
                { label: "Sporkle", value: "2" },
                { label: "Message Request", value: "4" },
                { label: "Boot", value: "2" },
                { label: "Rewind", value: "Unlimited" },
                { label: "Who Like You", value: "Unlimited" },
                { label: "Explore Reset", value: "Unlimited" },
                { label: "Super Chats", value: "50" },
              ].map((item, idx) => (
                <div key={idx}>
                  <label className="font-semibold mb-1 block">
                    {item.label}
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    defaultValue={item.value}
                  />
                </div>
              ))}
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-between items-center mt-6 gap-6">
              <button
                className="w-[288px] h-[48px] rounded-[8px] px-[10px] py-[10px] text-sm transition"
                style={{
                  color: "#5D5FEF",
                  backgroundColor: "#00000014",
                  border: "1px solid #00000014",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#d3d3d3";
                  e.target.style.color = "#3B49DF";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#00000014";
                  e.target.style.color = "#5D5FEF";
                }}
                onClick={() => setShowEditModal(false)}
              >
                Close
              </button>
              <button className="w-[288px] h-[48px] rounded-[8px] px-[10px] py-[10px] bg-[#5D5FEF] text-white text-sm hover:bg-[#4a4be0] transition">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default SubscriptionPlans;
