'use client';
import React from 'react';
import Image from 'next/image';

const AdminProfileCard = ({ name, email, image, onUploadClick }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex flex-col items-center text-center">
      <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-purple-200 mb-4">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-500">{email}</p>
      <button
        onClick={onUploadClick}
        className="mt-4 text-sm text-[#5D5FEF] hover:underline hover:text-[#2e2fff] transition"
      >
        Upload New Picture
      </button>
    </div>
  );
};

export default AdminProfileCard;
