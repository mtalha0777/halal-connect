'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { MoreVertical } from 'lucide-react';

const SubscriptionPlans = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [popupMode, setPopupMode] = useState("edit"); 

  const plans = [
    { id: '01', duration: '1 Month', benefits: '5', price: '20 $', status: 'Active' },
    { id: '02', duration: '3 Month', benefits: '8', price: '50 $', status: 'Active' },
    { id: '03', duration: '6 Month', benefits: '8', price: '100 $', status: 'Active' },
    { id: '04', duration: '1 Year', benefits: '12', price: '180 $', status: 'Disable' },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      {/* Title and Toggle Buttons */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Subscription Plans</h3>
        <div className="flex gap-8">
             {['Diamond', 'Gold', 'Silver'].map((plan, idx) => (
            <button
              key={idx}
              className={`relative text-sm font-medium ${
                plan === 'Diamond' ? 'text-[#5D5FEF]' : 'text-gray-500'
              }`}
             >
              {plan}
              {plan === 'Diamond' && (
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
  className="flex items-center gap-2 text-[#0066FF] font-medium"
>
  Add Field
  <Image src="/assets/plusblue.png" alt="Plus" width={16} height={16} />
</button>


</div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className="bg-gray-100 rounded-md">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Plan ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Duration</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Benefits</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Price ($)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {plans.map((plan, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{plan.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{plan.duration}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{plan.benefits}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{plan.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 inline-flex text-sm leading-5 font-normal rounded-full ${
                      plan.status === 'Active'
                        ? 'bg-green-100 text-green-500'
                        : 'bg-red-100 text-red-500'
                    }`}
                  >
                    {plan.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 relative">
                  <div className="relative">
                    <MoreVertical
  className="h-5 w-5 text-gray-500 cursor-pointer"
  onClick={() => {
    setOpenMenu(index); // ✅ only opens dropdown now
  }}
/>


                 {openMenu === index && (
  <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-50 border border-gray-200">
    {/* Edit Click */}
    <div
      className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
      onClick={() => {
        setPopupMode("edit");
        setShowEditModal(true); // ✅ now modal opens from dropdown
        setOpenMenu(null);      // close the dropdown
      }}
    >
      <Image src="/assets/edit-icon.png" alt="Edit" width={16} height={16} className="mr-2" />
      <span>Edit</span>
    </div>

    {/* Delete (Optional) */}
    <div className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer">
      <Image src="/assets/delete.png" alt="Delete" width={16} height={16} className="mr-2" />
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
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
      onClick={() => setShowEditModal(false)}
    />
    <div className="relative bg-white rounded-[12px] p-8 z-50 shadow-lg w-full max-w-[660px] max-h-[90vh] overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        {popupMode === "edit" ? (
          <h2 className="text-xl font-bold mb-6">
            <span className="text-black font-semibold">Diamond Plan</span>
            <span className="text-gray-500 font-normal">/month</span>
          </h2>
        ) : (
          <h2 className="text-xl font-bold mb-6">
            <span className="text-black font-semibold">Diamond Plan</span>
            <span className="text-gray-500 font-normal">/month</span>
          </h2>
        )}

        <button
          onClick={() => {
            setPopupMode("add");
            setShowEditModal(true);
          }}
          className="group flex items-center gap-2 px-4 py-2 text-[#0066FF] font-medium"
        >
          Add Field
          <Image src="/assets/plusblue.png" alt="Plus" width={16} height={16} />
        </button>
      </div>

    {/* CONDITIONAL CONTENT */}
<>
  {/* Price + Duration + Status */}
 <div className="grid grid-cols-2 gap-6 mb-6">
  {/* Price Field */}
  <div className="flex flex-col">
    <label className="font-semibold text-[#000000B8] mb-1">Price</label>
    <input
      type="text"
      className="w-full border border-gray-300 rounded px-3 py-2"
      defaultValue="20.99$"
    />
  </div>

   {/* Duration Field */}
  <div className="flex flex-col">
    <label className="font-semibold text-[#000000B8] mb-1">Duration</label>
    <input
      type="text"
      className="w-full border border-gray-300 rounded px-3 py-2"
      defaultValue="30 Days"
    />
  </div>

  {/* Status Dropdown */}
  <div className="col-span-2 flex flex-col">
    <label className="font-semibold text-[#000000B8] mb-1">Activate / Deactivate</label>
    <select className="border border-gray-300 rounded px-3 py-2 text-sm text-[#000000B8]">
      <option value="active">Active</option>
      <option value="inactive">Inactive</option>
    </select>
  </div>
</div>


  {/* ✅ Conditional Rendering STARTS here */}
{popupMode === "edit" && (
  <>
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-bold text-[#000000B8]">Benefits</h3>
      <button
        className="flex items-center text-[#0066FF] underline space-x-1"
        onClick={() => setPopupMode("add")}
      >
        <span>Add Field</span>
        <img src="/assets/plusblue.png" alt="plus" className="w-4 h-4" />
      </button>
    </div>

    <div className="grid grid-cols-2 gap-6 text-sm text-[#000000B8] mb-4">
      {/* All 8 Fields Here */}
      {/* Example */}
      <div>
        <label className="font-semibold mb-1 block">Send Links</label>
        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue="100" />
      </div>
      <div>
        <label className="font-semibold mb-1 block">Sporkle</label>
        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue="2" />
      </div>
      <div>
        <label className="font-semibold mb-1 block">Message Request</label>
        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue="4" />
      </div>
      <div>
        <label className="font-semibold mb-1 block">Boot</label>
        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue="2" />
      </div>
      <div>
        <label className="font-semibold mb-1 block">Rewind</label>
        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue="Unlimited" />
      </div>
      <div>
        <label className="font-semibold mb-1 block">Who Like You</label>
        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue="Unlimited" />
      </div>
      <div>
        <label className="font-semibold mb-1 block">Explore Reset</label>
        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue="Unlimited" />
      </div>
      <div>
        <label className="font-semibold mb-1 block">Super Chats</label>
        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue="50" />
      </div>
    </div>
  </>

  )}
  </>
{/* ✅ ONLY SHOW THIS IF popupMode === "add" */}
{popupMode === "add" && (
  <>
    {/* Add the 8 default fields here (same as edit mode) */}
    <div className="grid grid-cols-2 gap-6 text-sm text-[#000000B8] mb-4">
      <div>
        <label className="font-semibold mb-1 block">Send Links</label>
        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue="100" />
      </div>
      <div>
        <label className="font-semibold mb-1 block">Sporkle</label>
        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue="2" />
      </div>
      <div>
        <label className="font-semibold mb-1 block">Message Request</label>
        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue="4" />
      </div>
      <div>
        <label className="font-semibold mb-1 block">Boot</label>
        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue="2" />
      </div>
      <div>
        <label className="font-semibold mb-1 block">Rewind</label>
        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue="Unlimited" />
      </div>
      <div>
        <label className="font-semibold mb-1 block">Who Like You</label>
        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue="Unlimited" />
      </div>
      <div>
        <label className="font-semibold mb-1 block">Explore Reset</label>
        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue="Unlimited" />
      </div>
      <div>
        <label className="font-semibold mb-1 block">Super Chats</label>
        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue="50" />
      </div>
    </div>

    {/* Add Field Title + Placeholder */}
    <div className="flex items-center justify-end gap-4 mt-4">
      <div
        className="rounded px-3 py-2"
        style={{ backgroundColor: "#F6F6F6", height: "44px", width: "240px" }}
      >
        <input
          type="text"
          placeholder="Add Field Title"
          className="w-full h-full bg-[#F6F6F6] text-[#00000099] placeholder-[#00000099] outline-none"
        />
      </div>
      <div
        className="rounded px-3 py-2"
        style={{ backgroundColor: "#F6F6F6", height: "44px", width: "240px" }}
      >
        <input
          type="text"
          placeholder="Add Placeholder Text"
          className="w-full h-full bg-[#F6F6F6] text-[#00000099] placeholder-[#00000099] outline-none"
        />
      </div>

      <button
        className="text-white text-sm px-4 py-2 rounded"
        style={{ backgroundColor: "#5D5FEF" }}
      >
        Add
      </button>
    </div>
  </>
)}


      {/* Footer Buttons */}
      <div className="flex justify-between items-center mt-6 gap-6">
        <button
          className="w-[288px] h-[48px] rounded-[8px] px-[10px] py-[10px] text-sm transition"
          style={{
            color: '#5D5FEF',
            backgroundColor: '#00000014',
            border: '1px solid #00000014',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#d3d3d3';
            e.target.style.color = '#3B49DF';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#00000014';
            e.target.style.color = '#5D5FEF';
          }}
          onClick={() => setShowEditModal(false)}
        >
          Close
        </button>
        <button
          className="w-[288px] h-[48px] rounded-[8px] px-[10px] py-[10px] bg-[#5D5FEF] text-white text-sm hover:bg-[#4a4be0] transition"
        >
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