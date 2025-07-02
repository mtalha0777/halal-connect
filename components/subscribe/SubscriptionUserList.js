import React, { useState } from "react";
import Image from "next/image";
const SubscriptionUserList = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [tooltipTarget, setTooltipTarget] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const handleViewDetails = () => {
    window.location.href = "/subscription/details";
  };

  const subscriptionUsers = [
    {
      userId: "1234",
      name: "Ahmed Raza",
      duration: "1 Week",
      plan: "Premium",
      startDate: "12 Jan 2024",
      expiryDate: "12 Jan 2024",
      status: "Active",
    },
    {
      userId: "1356",
      name: "Rabia Siddiqui",
      duration: "1 Month",
      plan: "Gold",
      startDate: "12 Jan 2024",
      expiryDate: "12 Jan 2024",
      status: "Active",
    },
    {
      userId: "5688",
      name: "Hamza Farooq",
      duration: "3 Month",
      plan: "Premium",
      startDate: "12 Jan 2024",
      expiryDate: "12 Jan 2024",
      status: "Expired",
    },
    {
      userId: "8765",
      name: "Mahnoor Javed",
      duration: "1 Week",
      plan: "Gold",
      startDate: "12 Jan 2024",
      expiryDate: "12 Jan 2024",
      status: "Active",
    },
    {
      userId: "8765",
      name: "Fahad Iqbal",
      duration: "3 Month",
      plan: "Premium",
      startDate: "12 Jan 2024",
      expiryDate: "12 Jan 2024",
      status: "Active",
    },
    {
      userId: "8765",
      name: "Fatima Noor",
      duration: "1 Week",
      plan: "Gold",
      startDate: "12 Jan 2024",
      expiryDate: "12 Jan 2024",
      status: "Expired",
    },
    {
      userId: "8765",
      name: "Hassan Shah",
      duration: "1 Month",
      plan: "Premium",
      startDate: "12 Jan 2024",
      expiryDate: "12 Jan 2024",
      status: "Active",
    },
    {
      userId: "8765",
      name: "Ayesha Khan",
      duration: "3 Month",
      plan: "Gold",
      startDate: "12 Jan 2024",
      expiryDate: "12 Jan 2024",
      status: "Active",
    },
    {
      userId: "8765",
      name: "Zain Ul Abideen",
      duration: "1 Week",
      plan: "Premium",
      startDate: "12 Jan 2024",
      expiryDate: "12 Jan 2024",
      status: "Expired",
    },
    {
      userId: "8765",
      name: "Hina Tariq",
      duration: "3 Month",
      plan: "Gold",
      startDate: "12 Jan 2024",
      expiryDate: "12 Jan 2024",
      status: "Active",
    },
  ];

  const handleMouseEnter = (event) => {
    setTooltipOpen(true);
    setTooltipTarget(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setTooltipOpen(false);
  };

  return (
   <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
  <h3 className="text-lg font-semibold">Subscription User List</h3>
  <div className="flex space-x-2 overflow-x-auto w-full md:w-auto pb-2">
          <button className="px-3 py-1 bg-white border border-gray-400 text-black rounded-md text-sm flex items-center gap-1">
            Yearly
            <Image
              src="/assets/dropdown.svg"
              alt="Arrow"
              width={15}
              height={15}
            />
          </button>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-md text-sm">
            View all
          </button>
        </div>
      </div>
      <div className="border border-[#E5E7EB] rounded-md overflow-hidden">
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr className="bg-gray-100">
          <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
          User ID
        </th>
          <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
                Name
              </th>
              <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
                Duration
              </th>
              <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
                Plan
              </th>
              <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
                Start Date
              </th>
              <th className="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
                Expiry Date
              </th>
              <th className="px-3 md:px-8 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
                Status
              </th>
              <th className="px-3 md:px-8 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
                Export
              </th>
          <th className="px-3 md:px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
  Action
</th>
          </tr>
        </thead>
       <tbody className="bg-white divide-y divide-gray-200">
            {subscriptionUsers.map((user, index) => (
              <tr key={index}>
                <td className="px-3 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.userId}
                </td>
              <td className="px-3 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.name}
                </td>
             <td className="px-3 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.duration}
                </td>
             <td className="px-3 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.plan}
                </td>
             <td className="px-3 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.startDate}
                </td>
              <td className="px-3 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.expiryDate}
                </td>
             <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 inline-flex text-sm leading-5 font-normal rounded-full ${
                    user.status === "Active" ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500"
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                  <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full whitespace-nowrap">
                    Export
                  </span>
                </td>
              <td className="px-3 md:px-8 py-4 whitespace-nowrap text-right">
  <div className="flex justify-end">
    <div className="relative">
      <Image
        src="/assets/dots.svg"
        alt="More Options"
        width={20}
        height={20}
        className="cursor-pointer"
        onClick={() => setOpenMenu(openMenu === index ? null : index)}
      />
      {openMenu === index && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-50 border border-gray-200">
          <div
            className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={handleViewDetails}
          >
            <Image
              src="/assets/view-file.svg"
              alt="Edit"
              width={16}
              height={16}
              className="mr-2"
            />
            <span>View Details</span>
                      </div>
                    </div>
                  )}
                </div>
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

export default SubscriptionUserList;
