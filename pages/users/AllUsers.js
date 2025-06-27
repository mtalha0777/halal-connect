"use client";
import React from "react";
import Image from "next/image";

const AllUsers = () => {
  const users = [
    {
      id: 1234,
      name: "John Smith",
      email: "john@email.com",
      date: "12 Jan 2024",
      plan: "Free",
      status: "Verified",
    },
    {
      id: 1356,
      name: "Emily Davis",
      email: "emily@email.com",
      date: "12 Jan 2024",
      plan: "Gold",
      status: "Verified",
    },
    {
      id: 5688,
      name: "Alex Carter",
      email: "alex@email.com",
      date: "12 Jan 2024",
      plan: "Premium",
      status: "Unverified",
    },
  ];

  return (
    <section className="mt-4">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E5E7EB]">
        {/* ------- Title bar ------- */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">All Users</h3>
          <button className="text-black border border-gray-300 px-3 py-1 rounded-md bg-[#F9F9F9] text-sm">
            View all
          </button>
        </div>

        <div className="overflow-x-auto px-1">
          {/* Main container with rounded corners */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <table className="min-w-[600px] w-full text-left text-sm border-separate border-spacing-0">
              {/* Header row */}
              <thead>
                <tr className="bg-gray-200 text-[#000000B3] font-normal">
                  <th className="py-3 px-4 border-b border-gray-300">
                    User&nbsp;ID
                  </th>
                  <th className="py-3 px-4 border-b border-gray-300">Name</th>
                  <th className="py-3 px-4 border-b border-gray-300">Email</th>
                  <th className="py-3 px-4 border-b border-gray-300">
                    Join&nbsp;Date
                  </th>
                  <th className="py-3 px-4 border-b border-gray-300">Plan</th>
                  <th className="py-3 px-4 border-b border-gray-300">Status</th>
                  <th className="py-3 px-4 border-b border-gray-300">Action</th>
                </tr>
              </thead>

              {/* Data rows */}
              <tbody>
                {users.map((user, i) => (
                  <tr key={i} className="text-[#0000006B] hover:bg-gray-50">
                    <td className="py-3 px-4 border-b border-gray-300">
                      {user.id}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300">
                      {user.name}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300">
                      {user.email}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300">
                      {user.date}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300">
                      {user.plan}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300">
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
                    <td className="py-3 px-4 border-b border-gray-300">
                      <Image
                        src="/assets/dots.svg"
                        alt="Actions"
                        width={20}
                        height={20}
                        className="cursor-pointer mx-auto"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllUsers;
