"use client";
import React, { useState } from "react";
import Image from "next/image";

const Badge = ({ status }) => (
  <span
    className={`px-2 py-1 rounded-full text-xs font-medium ${
      status === "Verified"
        ? "bg-green-100 text-green-600"
        : "bg-red-100 text-red-500"
    }`}
  >
    {status}
  </span>
);

const AllUsers = () => {
  const [openMenu, setOpenMenu] = useState(null);

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
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-[#E5E7EB]">
        {/* ------- Title bar ------- */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">All Users</h3>
        </div>

        <div className="hidden lg:block overflow-x-auto border border-gray-300 rounded-lg">
          <table className="min-w-[600px] w-full text-left text-sm">
            <thead className="bg-gray-100 text-gray-600 font-medium">
              <tr className="border-b border-gray-300">
                <th className="py-3 px-4">User ID</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Join Date</th>
                <th className="py-3 px-4">Plan</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {users.map((user, i) => (
                <tr
                  key={user.id}
                  className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
                >
                  <td className="py-4 px-4">{user.id}</td>
                  <td className="py-4 px-4">{user.name}</td>
                  <td className="py-4 px-4">{user.email}</td>
                  <td className="py-4 px-4">{user.date}</td>
                  <td className="py-4 px-4">{user.plan}</td>
                  <td className="py-4 px-4">
                    <Badge status={user.status} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="relative inline-block">
                      <button
                        onClick={() => setOpenMenu(openMenu === i ? null : i)}
                        className="p-2 hover:bg-gray-200 rounded-full"
                      >
                        <Image
                          src="/assets/dots.svg"
                          alt="Actions"
                          width={20}
                          height={20}
                        />
                      </button>
                      {openMenu === i && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md border shadow-lg z-30">
                          <button
                            onClick={() => setOpenMenu(null)}
                            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-black hover:bg-red-50"
                          >
                            <Image
                              src="/assets/view-file.svg"
                              alt=""
                              width={16}
                              height={16}
                            />{" "}
                            View Details
                          </button>
                          <button
                            onClick={() => setOpenMenu(null)}
                            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-black hover:bg-red-50"
                          >
                            <Image
                              src="/assets/delete.svg"
                              alt=""
                              width={16}
                              height={16}
                            />{" "}
                            Delete User
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="lg:hidden space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3"
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold text-gray-800">{user.name}</p>
                <Badge status={user.status} />
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p>
                  <strong>ID:</strong> {user.id}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Plan:</strong> {user.plan}
                </p>
              </div>
              <div className="flex justify-end pt-3 mt-2 border-t border-gray-200">
                <button
                  onClick={() => setOpenMenu(null)}
                  className="flex items-center gap-2 w-full px-4 py-2 text-sm text-black hover:bg-red-50"
                >
                  <Image
                    src="/assets/view-file.svg"
                    alt=""
                    width={16}
                    height={16}
                  />{" "}
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllUsers;
