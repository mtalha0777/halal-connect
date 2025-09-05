"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function UserTable({
  userData = [],
  activeTab = "All Users",
  selectedFilter = "Year",
  onFilterChange = () => {},
  tabLinks = [],
  actionType = "all",
}) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const dropdownRef = useRef(null);
  const actionMenuRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
      if (
        actionMenuRef.current &&
        !actionMenuRef.current.contains(event.target)
      ) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white rounded-xl p-6 mt-8 shadow-sm">
      {/* Top Tabs + Filter */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-10 z-20 relative">
          {tabLinks.map((tab, i) => (
            <Link href={tab.href} key={i}>
              <h3
                className={`text-lg font-semibold cursor-pointer ${
                  activeTab === tab.label
                    ? "text-purple-700 border-b-2 border-purple-700 pb-1"
                    : "hover:text-purple-700"
                }`}
              >
                {tab.label}
              </h3>
            </Link>
          ))}
        </div>

        <div ref={dropdownRef} className="relative inline-block text-left">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="text-black border border-gray-300 px-3 py-1 rounded-md bg-[#F9F9F9] text-sm flex items-center gap-2"
          >
            {selectedFilter}
            <Image
              src="/assets/dropdown.svg"
              alt="Dropdown"
              width={16}
              height={16}
            />
          </button>

          {isFilterOpen && (
            <div className="absolute right-0 mt-1 w-36 bg-white rounded-md shadow-lg z-10 border border-gray-200">
              {["Week", "Month", "Year"].map((option) => (
                <button
                  key={option}
                  className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm hover:bg-gray-100 text-gray-700"
                  onClick={() => {
                    onFilterChange(option);
                    setIsFilterOpen(false);
                  }}
                >
                  <Image
                    src="/assets/time.svg"
                    alt="Time"
                    width={14}
                    height={14}
                  />
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b text-[#000000B3] font-normal">
            <th className="py-2">User ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Join Date</th>
            <th>Plan</th>
            <th className="w-[120px]">Status</th>
            <th className="w-[80px] text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, i) => (
            <tr key={i} className="border-b text-[#0000006B]">
              <td className="py-2">{user.id}</td>
              <td>{user.name}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.joinDate}</td>
              <td>{user.plan}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    user.status === "Verified"
                      ? "bg-green-100 text-green-500"
                      : "bg-red-100 text-red-500"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td
                className="text-center relative whitespace-nowrap"
                ref={actionMenuRef}
              >
                <button
                  onClick={() => setOpenMenu(openMenu === i ? null : i)}
                  className="text-lg text-gray-600"
                >
                  <Image
                    src="/assets/dots.svg"
                    alt="Actions"
                    width={20}
                    height={20}
                  />
                </button>

                {openMenu === i && (
                  <div className="absolute right-0 mt-2 w-44 bg-white border rounded-md shadow-md z-10">
                    <Link
                      href="/contentdetails/block-details"
                      className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm hover:bg-gray-100 text-gray-700"
                    >
                      <Image
                        src="/assets/view-file.svg"
                        alt="view"
                        width={20}
                        height={20}
                      />
                      View Details
                    </Link>

                    {actionType === "blocked" && (
                      <Link
                        href="/contentdetails/block-details"
                        className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm hover:bg-gray-100 text-gray-700"
                      >
                        <Image
                          src="/assets/view-file.svg"
                          alt="view"
                          width={20}
                          height={20}
                        />
                        View Details
                      </Link>
                    )}

                    {actionType === "reported" && (
                      <>
                        <button className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm hover:bg-gray-100 text-gray-700">
                          <Image
                            src="/assets/unblock.svg"
                            alt="Suspend"
                            width={20}
                            height={20}
                          />
                          Temporary Suspend
                        </button>
                        <button className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm hover:bg-gray-100 text-gray-700">
                          <Image
                            src="/assets/delete.svg"
                            alt="Delete"
                            width={20}
                            height={20}
                          />
                          Delete User
                        </button>
                      </>
                    )}

                    {actionType === "all" && (
                      <button className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm hover:bg-gray-100 text-gray-700">
                        <Image
                          src="/assets/delete.svg"
                          alt="Delete"
                          width={20}
                          height={20}
                        />
                        Delete User
                      </button>
                    )}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
