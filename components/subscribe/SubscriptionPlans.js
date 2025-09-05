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
      price: "20.00",
      status: "Active",
    },
    {
      id: "02",
      duration: "3 Month",
      benefits: "8",
      price: "50.00",
      status: "Active",
    },
    {
      id: "03",
      duration: "6 Month",
      benefits: "8",
      price: "100.00",
      status: "Active",
    },
    {
      id: "04",
      duration: "1 Year",
      benefits: "12",
      price: "180.00",
      status: "Disable",
    },
  ];

  const handleOpenModal = (mode, planData = null) => {
    setPopupMode(mode);
    setShowEditModal(true);
  };

  const closeModal = () => {
    setShowEditModal(false);
  };

  return (
    <div className="bg-white w-full rounded-lg shadow-sm p-4 sm:p-6 border border-gray-100">
      {/* Header with Title and Tabs */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Subscription Plans
        </h3>
        <div className="w-full md:w-auto overflow-x-auto pb-2">
          <div className="flex  border-gray-200">
            {["Diamond", "Gold", "Silver"].map((plan) => (
              <button
                key={plan}
                className={`px-4 py-2 whitespace-nowrap text-sm font-medium transition-colors ${
                  plan === "Diamond"
                    ? "text-[#5D5FEF] border-b-2 border-[#5D5FEF]"
                    : "text-gray-500 hover:text-[#5D5FEF]"
                }`}
              >
                {plan}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FIX 1: The outer box for content below tabs */}
      <div className="border border-gray-200 rounded-lg p-4 mt-4">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => handleOpenModal("add")}
            className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 text-sm"
          >
            Add
            <Image
              src="/assets/blueplus.svg"
              alt="Plus"
              width={18}
              height={18}
            />
          </button>
        </div>

        {/* FIX 2: A dedicated box for the table with NO PADDING */}

        <div className="hidden lg:block border border-gray-200 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                    Plan ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                    Benefits
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                    Price ($)
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-gray-900 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-gray-900 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              {/* These divide lines will now touch the container's border */}
              <tbody className="bg-white divide-y divide-gray-200">
                {plans.map((plan, index) => (
                  <tr key={plan.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {plan.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {plan.duration}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {plan.benefits}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {plan.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span
                        className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          plan.status === "Active"
                            ? "bg-green-100 text-green-500"
                            : "bg-red-100 text-red-500"
                        }`}
                      >
                        {plan.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="relative inline-block text-left">
                        <button
                          onClick={() =>
                            setOpenMenu(openMenu === index ? null : index)
                          }
                          className="p-2 rounded-full hover:bg-gray-100"
                        >
                          <Image
                            src="/assets/dots.svg"
                            alt="More"
                            width={20}
                            height={20}
                          />
                        </button>
                        {openMenu === index && (
                          // === FIX IS HERE ===
                          <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white border border-gray-200 z-10">
                            <div className="py-1.5">
                              <button
                                onClick={() => {
                                  handleOpenModal("edit", plan);
                                  setOpenMenu(null);
                                }}
                                className="w-full text-left flex items-center gap-2 px-6 py-2 text-sm text-gray-500 hover:bg-gray-100"
                              >
                                <Image
                                  src="/assets/editblack.svg"
                                  alt="Edit"
                                  width={16}
                                  height={16}
                                />{" "}
                                Edit
                              </button>
                              <button className="w-full text-left flex items-center gap-2 px-6 py-2 text-sm text-gray-500 hover:bg-red-50">
                                <Image
                                  src="/assets/delete.svg"
                                  alt="Delete"
                                  width={16}
                                  height={16}
                                />{" "}
                                Delete
                              </button>
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
        </div>
      </div>
      {/* ===== 2. MOBILE VIEW: CARDS (only on small screens) ===== */}
      <div className="lg:hidden space-y-4">
        {plans.map((plan, index) => (
          <div
            key={plan.id}
            className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3"
          >
            {/* Top Row: Duration and Status */}
            <div className="flex justify-between items-start">
              <p className="font-semibold text-gray-800 pr-4">
                {plan.duration}
              </p>
              <span
                className={`px-2 py-1 text-xs whitespace-nowrap rounded-full font-semibold ${
                  plan.status === "Active"
                    ? "bg-green-100 text-green-500"
                    : "bg-red-100 text-red-500"
                }`}
              >
                {plan.status}
              </span>
            </div>

            {/* Middle Row: Details */}
            <div className="text-sm text-gray-600 space-y-1">
              <p>
                <strong>Plan ID:</strong> {plan.id}
              </p>
              <p>
                <strong>Price:</strong> ${plan.price}
              </p>
              <p>
                <strong>Benefits:</strong> {plan.benefits}
              </p>
            </div>

            {/* Bottom Row: Actions (Dropdown menu logic waisi hi copy ki hai) */}
            <div className="flex justify-end pt-3 mt-2 border-t border-gray-200">
              <div className="relative inline-block text-left">
                <button
                  onClick={() => setOpenMenu(openMenu === index ? null : index)}
                  className="p-2 rounded-full hover:bg-gray-200"
                >
                  <Image
                    src="/assets/dots.svg"
                    alt="More"
                    width={20}
                    height={20}
                  />
                </button>
                {openMenu === index && (
                  <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white border border-gray-200 z-10">
                    <div className="py-1.5">
                      <button
                        onClick={() => {
                          handleOpenModal("edit", plan);
                          setOpenMenu(null);
                        }}
                        className="w-full text-left flex items-center gap-2 px-6 py-2 text-sm text-gray-500 hover:bg-gray-100"
                      >
                        <Image
                          src="/assets/editblack.svg"
                          alt="Edit"
                          width={16}
                          height={16}
                        />{" "}
                        Edit
                      </button>
                      <button className="w-full text-left flex items-center gap-2 px-6 py-2 text-sm text-gray-500 hover:bg-red-50">
                        <Image
                          src="/assets/delete.svg"
                          alt="Delete"
                          width={16}
                          height={16}
                        />{" "}
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal code remains the same */}
      {showEditModal && (
        <>
          {/* Backdrop with blur */}
          <div
            onClick={closeModal}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          ></div>

          {/* Modal Content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="relative bg-white rounded-xl p-6 sm:p-8 shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* === FIX 2 & 3: Modal Header Updated === */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-baseline">
                  {popupMode === "edit" ? "Diamond Plan" : "Add New Plan"}
                  <span className="text-base font-normal text-gray-500 ml-2">
                    / month
                  </span>
                </h2>
                <button
                  type="button"
                  className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  <span>Add Field</span>
                  <Image
                    src="/assets/blueplus.svg"
                    alt="Add Field"
                    width={18}
                    height={18}
                  />
                </button>
              </div>

              <form className="space-y-6">
                {popupMode === "add" && (
                  <div className="flex flex-col sm:flex-row items-end gap-4">
                    <div className="w-full">
                      <input
                        type="text"
                        placeholder="Add field title"
                        className="w-full bg-gray-100 border-gray-200 border rounded-md px-3 py-2"
                      />
                    </div>
                    <div className="w-full">
                      <input
                        type="text"
                        placeholder="Add placeholder text"
                        className="w-full bg-gray-100 border-gray-200 border rounded-md px-3 py-2"
                      />
                    </div>
                    <button
                      type="button"
                      className="w-full sm:w-auto px-6 py-2 bg-[#5D5FEF] text-white rounded-md hover:bg-[#4a4be0] transition-colors"
                    >
                      add
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-semibold text-sm text-gray-700 mb-1 block">
                      Price ($)
                    </label>
                    <input
                      type="text"
                      className="w-full border-gray-300 border rounded-md px-3 py-2"
                      defaultValue="20.99"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-sm text-gray-700 mb-1 block">
                      Duration
                    </label>
                    <input
                      type="text"
                      className="w-full border-gray-300 border rounded-md px-3 py-2"
                      defaultValue="30 Days"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="font-semibold text-sm text-gray-700 mb-1 block">
                      Status
                    </label>
                    <select
                      className="w-full border-gray-300 border rounded-md px-3 py-2 appearance-none bg-no-repeat bg-right"
                      style={{
                        backgroundImage: `url('/assets/arrowdown.svg')`,
                      }}
                    >
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                </div>

                {/* === FIX 4: Benefits Section Header Updated === */}
                <div className="pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-lg text-gray-900">
                      Benefits
                    </h3>
                    <button
                      type="button"
                      className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
                    >
                      <span>Add Field</span>
                      <Image
                        src="/assets/blueplus.svg"
                        alt="Add Field"
                        width={18}
                        height={18}
                      />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
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
                        <label className="font-semibold text-gray-700 mb-1 block">
                          {item.label}
                        </label>
                        <input
                          type="text"
                          className="w-full border-gray-300 border rounded-md px-3 py-2"
                          defaultValue={item.value}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* === FIX 1: Footer Buttons Layout Updated === */}
                <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 gap-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="w-full px-6 py-3 rounded-md text-sm font-semibold bg-gray-200 text-gray-800 hover:bg-gray-300"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-md bg-[#5D5FEF] text-white text-sm font-semibold hover:bg-[#4a4be0] transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default SubscriptionPlans;
