'use client';
import React, { useState } from 'react';
import Sidebar from '../../components/layout/SideBar';
import Topbar from '../../components/layout/TopBar';
import ProfileInfoSection from '../../components/admin/ProfileInfoSection';
import EditModal from '../../components/admin/EditModal';
import Image from 'next/image';
import AdminProfileCard from '../../components/admin/AdminProfileCard';
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
    src="/assets/password.png"
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
    src="/assets/logout.png"
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
          icon="/assets/personaluser.png"
/>


                <ProfileInfoSection
               title="Contact"
                data={[
               { label: 'Email Address:', value: admin.email },
               { label: 'Location', value: admin.phone },
                 ]}
                onEdit={() => setActiveModal('contact')}
                icon="/assets/contactuser.png"    
              />

                <ProfileInfoSection
                  title="Location"
                  data={[{ label: 'Address:', value: admin.address }]}
                  onEdit={() => setActiveModal('location')}
                  icon="/assets/location.png"
                />

                <ProfileInfoSection
                  title="Language"
                  data={[{ label: 'Address:', value: admin.language }]}
                  onEdit={() => setActiveModal('language')}
                  icon="/assets/language.png"
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
        <Image src="/assets/upload.png" alt="Upload" width={40} height={40} />
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




      {/* Modals */}
      <EditModal
        visible={activeModal === 'personal'}
        title="Edit Personal Information"
        fields={[
          { name: 'name', label: 'Name', value: admin.name },
          { name: 'age', label: 'Age', value: admin.age },
          { name: 'gender', label: 'Gender', value: admin.gender },
          { name: 'dob', label: 'Date of Birth', value: admin.dob },
        ]}
        onClose={() => setActiveModal(null)}
        onSave={(fields) => handleSave('personal', fields)}
      />

      <EditModal
        visible={activeModal === 'contact'}
        title="Edit Contact"
        fields={[
          { name: 'email', label: 'Email Address', value: admin.email },
          { name: 'phone', label: 'Phone', value: admin.phone },
        ]}
        onClose={() => setActiveModal(null)}
        onSave={(fields) => handleSave('contact', fields)}
      />

      {activeModal === 'location' && (
  <div className="fixed inset-0 bg-[#00000099] z-50 flex items-center justify-center">
   <div className="w-[660px] h-[272px] bg-white rounded-[12px] p-8 flex flex-col gap-[40px] z-50 relative">

      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800">Location</h2>

      {/* Address Input Box with Image */}
      <div className="w-[596px] h-[44px] border border-[#00000066] rounded-[8px] flex items-center justify-between px-4 mx-auto">
  <input
    type="text"
    value={admin.address}
    onChange={(e) => setAdmin({ ...admin, address: e.target.value })}
    className="w-full h-full outline-none text-sm text-gray-700 bg-transparent pr-4"
    placeholder="Enter your address"
  />
  <Image src="/assets/locationblue.png" alt="Location Icon" width={20} height={20} />
</div>


      {/* Action Buttons */}
      <div className="flex justify-between">
        <button
    onClick={() => setShowUploadModal(false)}
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


      <EditModal
        visible={activeModal === 'language'}
        title="Edit Language"
        fields={[
          { name: 'language', label: 'Language', value: admin.language },
        ]}
        onClose={() => setActiveModal(null)}
        onSave={(fields) => handleSave('language', fields)}
      />
    </div>
  );
};

export default Settings;
