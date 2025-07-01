import React from "react";
import { MoreVertical } from "lucide-react";

const FeatureSubscriptionPlans = () => {
  const subscriptionPlans = [
    {
      planId: "01",
      benefits: "10 Super Like",
      price: "9.99 $",
      duration: "1 Hour",
      status: "Active",
    },
    {
      planId: "02",
      benefits: "20 Super Like",
      price: "14.99 $",
      duration: "1 Hour",
      status: "Active",
    },
    {
      planId: "03",
      benefits: "40 Super Like",
      price: "99.99 $",
      duration: "1 Hour",
      status: "Disable",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6 overflow-x-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
        <h3 className="text-lg font-semibold">Features Subscription Plans</h3>
        <div className="flex gap-4 md:gap-8 overflow-x-auto w-full md:w-auto pb-2">
          {["Boost Profile", "Super Message", "Super Like"].map((plan, idx) => (
            <button
              key={idx}
              className={`relative whitespace-nowrap text-sm font-medium ${
                plan === "Super Like" ? "text-[#5D5FEF]" : "text-gray-700"
              }`}
            >
              {plan}
              {plan === "Super Like" && (
                <span className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-[#5D5FEF]" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="border border-[#E5E7EB] rounded-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className="bg-gray-100">
              <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Plan ID
              </th>
              <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Benefits
              </th>
              <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Price ($)
              </th>
              <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Duration
              </th>
              <th className="px-4 md:px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                Status
              </th>
              <th className="px-2 md:px-4 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {subscriptionPlans.map((plan, index) => (
              <tr key={index}>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {plan.planId}
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {plan.benefits}
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {plan.price}
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {plan.duration}
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                  <div className="flex justify-center">
                    <span
                      className={`px-3 py-1 inline-flex text-sm leading-5 font-normal rounded-full ${
                        plan.status === "Active"
                          ? "bg-green-100 text-green-500"
                          : "bg-red-100 text-red-500"
                      }`}
                    >
                      {plan.status}
                    </span>
                  </div>
                </td>
                <td className="px-2 md:px-7 py-4 whitespace-nowrap">
                  <div className="flex justify-end w-full">
                    <MoreVertical className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeatureSubscriptionPlans;
