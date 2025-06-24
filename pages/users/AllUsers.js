'use client';
import React from 'react';
import Image from 'next/image';

const AllUsers = () => {
  const users = [
    { id: 1234, name: 'John Smith', email: 'john@email.com', date: '12 Jan 2024', plan: 'Free', status: 'Verified' },
    { id: 1356, name: 'Emily Davis', email: 'emily@email.com', date: '12 Jan 2024', plan: 'Gold', status: 'Verified' },
    { id: 5688, name: 'Alex Carter', email: 'alex@email.com', date: '12 Jan 2024', plan: 'Premium', status: 'Unverified' },
  ];

  return (
    <section className="mt-4">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E5E7EB]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">All Users</h3>

          <button className="text-black border border-gray-300 px-3 py-1 rounded-md bg-[#F9F9F9] text-sm">
            View all
          </button>
        </div>

        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b text-[#000000B3] font-normal">
              <th className="py-2">User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Join Date</th>
              <th>Plan</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i} className="border-b text-[#0000006B]">
                <td className="py-2">{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.date}</td>
                <td>{user.plan}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Verified'
                        ? 'bg-green-100 text-green-500'
                        : 'bg-red-100 text-red-500'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td>
                  <Image
                    src="/assets/dots.svg"
                    alt="Actions"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllUsers;
