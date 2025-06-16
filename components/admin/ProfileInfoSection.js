'use client';
import React from 'react';
import Image from 'next/image';

const ProfileInfoSection = ({ title, data, onEdit }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-md font-semibold text-gray-800">{title}</h3>
        <button onClick={onEdit} className="flex items-center text-[#5D5FEF] hover:underline text-sm">
          Edit
          <Image src="/assets/edit.png" alt="edit" width={16} height={16} className="ml-1" />
        </button>
      </div>
      <div className="space-y-2 text-sm text-gray-600">
        {data.map((item, i) => (
          <div key={i}>
            <span className="font-medium text-black">{item.label}:</span> {item.value || 'N/A'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileInfoSection;
