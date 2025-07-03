"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MoreVertical } from "lucide-react";
const FeatureSubscriptionPlans = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const subscriptionPlans = [
    {
      planId: "01",
      benefits: "10 Super Like",
      price: "9.99",
      duration: "1 Hour",
      status: "Active",
    },
    {
      planId: "02",
      benefits: "20 Super Like",
      price: "14.99",
      duration: "1 Hour",
      status: "Active",
    },
    {
      planId: "03",
      benefits: "40 Super Like",
      price: "99.99",
      duration: "1 Hour",
      status: "Disable",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Features Subscription Plans
        </h3>
        <div className="w-full md:w-auto overflow-x-auto pb-2">
          <div className="flex  border-gray-200">
            {["Boost Profile", "Super Message", "Super Like"].map(
              (plan, idx) => (
                <button
                  key={idx}
                  className={`px-4 py-2 whitespace-nowrap text-sm font-medium transition-colors ${
                    plan === "Super Like"
                      ? "text-[#5D5FEF] border-b-2 border-[#5D5FEF]"
                      : "text-gray-500 hover:text-[#5D5FEF]"
                  }`}
                >
                  {plan}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg overflow-hidden mt-4">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                  Plan ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                  Benefits
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                  Price ($)
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-gray-900 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-900 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {subscriptionPlans.map((plan, index) => (
                <tr key={plan.planId} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 ">
                    {plan.planId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {plan.benefits}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {plan.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {plan.duration}
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
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="relative inline-block text-left">
                      <button
                        onClick={() =>
                          setOpenMenu(openMenu === index ? null : index)
                        }
                        className="p-2 rounded-full hover:bg-gray-100"
                      >
                        <MoreVertical className="h-5 w-5 text-gray-500" />
                      </button>
                      {openMenu === index && (
                        <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white border border-gray-200 z-10">
                          <div className="py-1">
                            <button className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              <Image
                                src="/assets/editblack.svg"
                                alt="Edit"
                                width={16}
                                height={16}
                              />{" "}
                              Edit
                            </button>
                            <button className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-red-50">
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
  );
};
export default FeatureSubscriptionPlans;
