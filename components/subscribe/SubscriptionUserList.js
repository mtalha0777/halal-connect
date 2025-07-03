"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SubscriptionUserList = ({ users }) => {
  const [openMenu, setOpenMenu] = useState(null);

  if (!users || users.length === 0) {
    return <p className="p-6">No subscription users to display.</p>;
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Subscription User List
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          <button className="px-3 py-1.5 bg-white border border-gray-300 text-black rounded-md text-sm flex items-center gap-2 hover:bg-gray-50">
            Yearly{" "}
            <Image
              src="/assets/dropdown.svg"
              alt="Arrow"
              width={16}
              height={16}
            />
          </button>
          <button className="px-4 py-1.5 bg-[#5D5FEF] text-white rounded-md text-sm font-semibold hover:bg-[#4a4be0]">
            View all
          </button>
        </div>
      </div>
      <div className="hidden lg:block border border-gray-200 rounded-lg overflow-hidden mt-4">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                  User ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                  Plan
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                  Start Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                  Expiry Date
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-900 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-900 uppercase tracking-wider">
                  Export
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-900 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {users.map((user, index) => (
                <tr
                  key={user.userId}
                  className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 ">
                    {user.userId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {user.duration}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {user.subscriptionPlan}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {user.subscriptionStartDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {user.subscriptionExpiryDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-500"
                          : "bg-red-100 text-red-500"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <button className="bg-gray-100 text-gray-600 text-sm font-semibold px-3 py-1 rounded-full hover:bg-gray-200">
                      Export
                    </button>
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
                        <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white border border-gray-200 z-10">
                          <div className="py-1">
                            <Link
                              href={`/subscription/details/${user.userId}`}
                              className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
                            >
                              <Image
                                src="/assets/view-file.svg"
                                alt="View"
                                width={16}
                                height={16}
                              />{" "}
                              View Details
                            </Link>
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

      {/* ===== 2. MOBILE VIEW: CARDS (only on small screens) ===== */}
      <div className="lg:hidden space-y-4 mt-4">
        {users.map((user, index) => (
          <div
            key={user.userId}
            className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3"
          >
            {/* Top Row: Name and Status */}
            <div className="flex justify-between items-start">
              <p className="font-semibold text-gray-800 pr-4">{user.name}</p>
              <span
                className={`px-2 py-1 text-xs whitespace-nowrap rounded-full font-semibold ${
                  user.status === "Active"
                    ? "bg-green-100 text-green-500"
                    : "bg-red-100 text-red-500"
                }`}
              >
                {user.status}
              </span>
            </div>

            {/* Middle Row: Details */}
            <div className="text-sm text-gray-600 space-y-1">
              <p>
                <strong>User ID:</strong> {user.userId}
              </p>
              <p>
                <strong>Plan:</strong> {user.subscriptionPlan} ({user.duration})
              </p>
              <p>
                <strong>Start Date:</strong> {user.subscriptionStartDate}
              </p>
              <p>
                <strong>Expiry Date:</strong> {user.subscriptionExpiryDate}
              </p>
            </div>

            {/* Bottom Row: Actions */}
            <div className="flex justify-between items-center pt-3 mt-2 border-t border-gray-200">
              <button className="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full hover:bg-gray-300">
                Export
              </button>
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
                    <div className="py-1">
                      <Link
                        href={`/subscription/details/${user.userId}`}
                        className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
                      >
                        <Image
                          src="/assets/view-file.svg"
                          alt="View"
                          width={16}
                          height={16}
                        />{" "}
                        View Details
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionUserList;
