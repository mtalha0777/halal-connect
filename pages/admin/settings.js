'use client';
import React, { useState } from 'react';
import Sidebar from '../../components/layout/SideBar';
import Topbar from '../../components/layout/TopBar';
import ProfileInfoSection from '../../components/admin/ProfileInfoSection';
// import EditModal from '../../components/admin/EditModal';
import Image from 'next/image';
// import AdminProfileCard from '../../components/admin/AdminProfileCard';
const Settings = () => {
  const [activeModal, setActiveModal] = useState(null);
 const [showUploadModal, setShowUploadModal] = useState(false);

  const [admin, setAdmin] = useState({
    name: 'Liam James',
    email: 'liam123@gmail.com',
    age: '63 year',
    dob: '01-10-2000',
    gender: 'Male',
    phone: '+92 3045683047',
    address: '1600 Amphitheatre Parkway, Mountain View, CA 94043, U',
    language: 'English',
  });

  const handleSave = (section, updatedFields) => {
    setAdmin({ ...admin, ...updatedFields });
    setActiveModal(null);
  };

  return (
    <div className="flex min-h-screen font-sans">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <main className="pt-28 px-6 bg-[#f8f8f8] min-h-screen">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Left Profile Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex flex-col items-center text-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-purple-200 mb-4">
                <Image src="/assets/adminimage.png" alt={admin.name} fill className="object-cover" />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">{admin.name}</h2>
              <p className="text-sm text-gray-500">Admin</p>
              <div className="mt-6 w-full space-y-3">
              {/* Divider Line */}
<hr className="w-full border-t border-gray-300 mt-2 mb-4" />

{/* Password Setting Button */}
<button className="w-full flex items-center justify-start gap-2 px-4 py-2 text-sm bg-transparent hover:bg-gray-100 text-[#000000] rounded">
  <Image
    src="/assets/password.svg"
    alt="Password"
    width={18}
    height={18}
    className="brightness-0"
  />
  <span>Password Setting</span>
</button>

{/* Logout Button */}
<button className="w-full flex items-center justify-start gap-2 px-4 py-2 text-sm bg-transparent hover:bg-gray-100 text-[#000000] rounded">
  <Image
    src="/assets/logout.svg"
    alt="Logout"
    width={18}
    height={18}
    className="brightness-0"
  />
  <span>Logout</span>
</button>


              </div>
            </div>

            {/* Right Section Header */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-purple-200">
                    <Image src="/assets/adminimage.png" alt="Admin" fill className="object-cover" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">{admin.name}</h2>
                    <p className="text-sm text-gray-500">Admin</p>
                  </div>
                </div>
               <button
              onClick={() => setShowUploadModal(true)}
              className="px-4 py-2 text-sm text-[#5D5FEF] no-underline hover:underline hover:text-[#2e2fff] transition cursor-pointer"
                >
                   Upload Picture
              </button>


              </div>

              <div className="space-y-6">
               <ProfileInfoSection
                title="Personal Information"
                data={[
                // First row
                 { label: 'Name:', value: admin.name },
                  { label: 'Age', value: admin.age },
                  { label: 'Gender:', value: admin.gender },
                // Second row (separately rendered)
                  { label: 'Date of Birth:', value: admin.dob },
                   ]}
                  onEdit={() => setActiveModal('personal')}
                  icon="/assets/personaluser.svg"
                />


                <ProfileInfoSection
               title="Contact"
                data={[
               { label: 'Email Address:', value: admin.email },
               { label: 'Location', value: admin.phone },
                 ]}
                onEdit={() => setActiveModal('contact')}
                icon="/assets/contact.svg"    
              />

                <ProfileInfoSection
                  title="Location"
                  data={[{ label: 'Address:', value: admin.address }]}
                  onEdit={() => setActiveModal('location')}
                  icon="/assets/location.svg"
                />

                <ProfileInfoSection
                  title="Language"
                  data={[{ label: 'Address:', value: admin.language }]}
                  onEdit={() => setActiveModal('language')}
                  icon="/assets/language.svg"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
{/* Upload Modal */}
{showUploadModal && (
  <div className="fixed inset-0 z-50 bg-[#00000099] flex items-center justify-center">
    <div className="w-[660px] h-[355px] bg-white rounded-[12px] p-[32px] flex flex-col gap-[40px]">
      <h2 className="text-xl font-bold text-[#000]">Profile Picture</h2>

      <div className="w-[596px] h-[151px] border border-[#00000066] rounded-[8px] flex flex-col items-center justify-center mx-auto">
        <Image src="/assets/upload.svg" alt="Upload" width={40} height={40} />
        <p className="mt-2 text-sm text-gray-600">Upload Profile Pic</p>
      </div>

      <div className="flex justify-between w-full">
        <button
          onClick={() => setShowUploadModal(false)}
          className="w-[288px] h-[48px] px-[10px] py-[10px] rounded-[8px] bg-gray-200 text-[#5D5FEF] hover:bg-gray-300 transition"
        >
          Close
        </button>
        <button
          onClick={() => alert('Saved!')}
          className="w-[288px] h-[48px] px-[10px] py-[10px] rounded-[8px] bg-[#5D5FEF] text-white hover:bg-[#4b4df0] transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
)}

     
{activeModal === 'personal' && (
  <div className="fixed inset-0 bg-[#00000099] z-50 flex items-center justify-center">
    <div className="w-[660px] bg-white rounded-[12px] p-[32px] flex flex-col gap-[40px] z-50 relative">
      <h2 className="text-xl font-semibold text-gray-800">Edit Personal Information</h2>

      <div className="flex flex-col gap-6">
        {/* Row 1: Name + Age */}
        <div className="flex gap-4">
          {/* Name */}
          <div className="w-1/2 flex flex-col gap-1">
            <label className="text-sm text-gray-600">Name</label>
            <input
              type="text"
              value={admin.name}
              onChange={(e) => setAdmin({ ...admin, name: e.target.value })}
              placeholder="Enter name"
              className="h-[44px] border border-[#00000066] rounded-[8px] px-4 text-sm text-gray-700"
            />
          </div>

          {/* Age */}
          <div className="w-1/2 flex flex-col gap-1">
            <label className="text-sm text-gray-600">Age</label>
            <input
              type="text"
              value={admin.age}
              onChange={(e) => setAdmin({ ...admin, age: e.target.value })}
              placeholder="Enter age"
              className="h-[44px] border border-[#00000066] rounded-[8px] px-4 text-sm text-gray-700"
            />
          </div>
        </div>

        {/* Row 2: Gender + DOB */}
        <div className="flex gap-4">
          {/* Gender */}
          <div className="w-1/2 flex flex-col gap-1">
            <label className="text-sm text-gray-600">Gender</label>
            <input
              type="text"
              value={admin.gender}
              onChange={(e) => setAdmin({ ...admin, gender: e.target.value })}
              placeholder="Enter gender"
              className="h-[44px] border border-[#00000066] rounded-[8px] px-4 text-sm text-gray-700"
            />
          </div>

          {/* Date of Birth */}
          <div className="w-1/2 flex flex-col gap-1">
            <label className="text-sm text-gray-600">Date of Birth</label>
        <input
  type="text"
  value={admin.dob === '01-10-2000' ? '' : admin.dob}
  onChange={(e) => setAdmin({ ...admin, dob: e.target.value })}
  placeholder="DD/MM/YYYY"
  className="h-[44px] border border-[#00000066] rounded-[8px] px-4 text-sm text-gray-700"
/>

          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between pt-2">
        <button
          onClick={() => setActiveModal(null)}
          className="w-[288px] h-[48px] px-[10px] py-[10px] rounded-[8px] bg-gray-200 text-[#5D5FEF] hover:bg-gray-300 transition"
        >
          Close
        </button>
        <button
          onClick={() =>
            handleSave('personal', {
              name: admin.name,
              age: admin.age,
              gender: admin.gender,
              dob: admin.dob,
            })
          }
          className="w-[288px] h-[48px] rounded-[8px] bg-[#5D5FEF] text-white text-sm font-medium"
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
)}



{activeModal === 'contact' && (
  <div className="fixed inset-0 bg-[#00000099] z-50 flex items-center justify-center">
    <div className="w-[660px] bg-white rounded-[12px] p-[32px] flex flex-col gap-[40px] z-50 relative">
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800">Contact</h2>

      {/* Inputs Section */}
      <div className="flex flex-col gap-6">
        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Email Address</label>
          <input
            type="text"
            value={admin.email}
            onChange={(e) => setAdmin({ ...admin, email: e.target.value })}
            placeholder="Enter email"
            className="w-full h-[44px] border border-[#00000066] rounded-[8px] px-4 text-sm text-gray-700"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Phone</label>
          <input
            type="text"
            value={admin.phone}
            onChange={(e) => setAdmin({ ...admin, phone: e.target.value })}
            placeholder="Enter phone number"
            className="w-full h-[44px] border border-[#00000066] rounded-[8px] px-4 text-sm text-gray-700"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between pt-2">
        <button
          onClick={() => setActiveModal(null)}
          className="w-[288px] h-[48px] px-[10px] py-[10px] rounded-[8px] bg-gray-200 text-[#5D5FEF] hover:bg-gray-300 transition"
        >
          Close
        </button>
        <button
          onClick={() =>
            handleSave('contact', {
              email: admin.email,
              phone: admin.phone,
            })
          }
          className="w-[288px] h-[48px] rounded-[8px] bg-[#5D5FEF] text-white text-sm font-medium"
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
)}


{activeModal === 'location' && (
  <div className="fixed inset-0 bg-[#00000099] z-50 flex items-center justify-center">
    <div className="w-[660px] h-[272px] bg-white rounded-[12px] p-8 flex flex-col gap-[40px] z-50 relative">

      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800">Location</h2>

      {/* Label + Input with icon */}
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600 ml">Location</label>

        <div className="w-[596px] h-[44px] border border-[#00000066] rounded-[8px] flex items-center justify-between px-4 mx-auto">
          <input
            type="text"
            value={admin.address}
            onChange={(e) => setAdmin({ ...admin, address: e.target.value })}
            className="w-full h-full outline-none text-sm text-gray-700 bg-transparent pr-4"
            placeholder="Enter your address"
          />
          <Image src="/assets/locationblue.svg" alt="Location Icon" width={20} height={20} />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <button
          onClick={() => setActiveModal(null)}
          className="w-[288px] h-[48px] px-[10px] py-[10px] rounded-[8px] bg-gray-200 text-[#5D5FEF] hover:bg-gray-300 transition"
        >
          Close
        </button>

        <button
          onClick={() => handleSave('location', { address: admin.address })}
          className="w-[288px] h-[48px] rounded-[8px] bg-[#5D5FEF] text-white text-sm font-medium"
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
)}



     
{activeModal === 'language' && (
  <div className="fixed inset-0 bg-[#00000099] z-50 flex items-center justify-center">
    <div className="w-[660px] bg-white rounded-[12px] p-[32px] flex flex-col gap-[40px] z-50 relative">
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800">Language</h2>

      {/* Input Field with Label */}
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">Add Language</label>
        <input
          type="text"
          value={admin.language}
          onChange={(e) => setAdmin({ ...admin, language: e.target.value })}
          placeholder="Language"
          className="w-full h-[44px] border border-[#00000066] rounded-[8px] px-4 text-sm text-gray-700"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <button
          onClick={() => setActiveModal(null)}
          className="w-[288px] h-[48px] px-[10px] py-[10px] rounded-[8px] bg-gray-200 text-[#5D5FEF] hover:bg-gray-300 transition"
        >
          Close
        </button>
        <button
          onClick={() => handleSave('language', { language: admin.language })}
          className="w-[288px] h-[48px] rounded-[8px] bg-[#5D5FEF] text-white text-sm font-medium"
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

export default Settings;
