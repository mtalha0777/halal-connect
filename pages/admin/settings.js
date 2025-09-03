"use client";
import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../../components/layout/SideBar";
import Topbar from "../../components/layout/TopBar";
import ProfileInfoSection from "../../components/admin/ProfileInfoSection";
import Image from "next/image";
import { signOut } from '@aws-amplify/auth';
import { useAuth } from "@/src/AuthSessionProvider";

const Settings = () => {
  const router = useRouter();
  const { user, signOut } = useAuth();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null); 
  const [showUploadModal, setShowUploadModal] = useState(false); 
  const [isDesktop, setIsDesktop] = useState(false); 
  const [admin, setAdmin] = useState({
    name: "", 
    email: "", 
    age: "", 
    dob: "", 
    gender: "", 
    phone: "", 
    address: "", 
    language: "",
  });

  useEffect(() => {
if (!user) {
      router.push('/login');
    }
  }, [user, router]);


  useEffect(() => {
    if (user) {
      setAdmin(prevAdmin => ({
        ...prevAdmin,
        name: user.name || user.given_name || user.username || '',
        email: user.email || '',
        phone: user.phone_number || '',
      }));
    }
  }, [user]);


  useEffect(() => {
    const checkScreenSize = () => setIsDesktop(window.innerWidth >= 768);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMobileSidebar = useCallback(() => {
    setIsMobileSidebarOpen(prev => !prev);
  }, []);

  const handleLogout = async () => {
    await signOut();
    router.push('/login');
  };

  const handleSave = (section, updatedFields) => {
    setAdmin(prevAdmin => ({ ...prevAdmin, ...updatedFields }));
    setActiveModal(null);
  };

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center min-h-screen">
  //       Loading user data...
  //     </div>
  //   );
  // }
  if (!user) {
    return null;
  }

  return (
    <div className="flex min-h-screen font-sans bg-[#f8f8f8]">
      <Sidebar
        isMobileSidebarOpen={isMobileSidebarOpen}
        toggleMobileSidebar={toggleMobileSidebar}
        isDesktop={isDesktop}
      />
      
      <main
        className={`flex-1 flex flex-col p-6 pt-24 md:ml-[260px] ${
          isDesktop && isMobileSidebarOpen ? "ml-[260px]" : ""
        }`}
      >
        <Topbar
          toggleMobileSidebar={toggleMobileSidebar}
          isMobileSidebarOpen={isMobileSidebarOpen}
          isDesktop={isDesktop}
        />

        <div className="flex justify-center">
          <div className="w-full max-w-[1190px] flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-[200px] lg:w-[240px] h-auto md:h-[492px] bg-white rounded-xl p-4 shadow-sm border border-gray-200 flex flex-col items-center text-center gap-4 md:gap-5">
              <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-purple-200 mt-2 md:mt-4">
                <Image
                  src="/assets/adminimage.png"
                  alt={admin.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">
                {admin.name}
              </h2>
              <p className="text-sm text-gray-500">Admin</p>
              <div className="mt-2 w-full space-y-3">
                <hr className="w-full border-t border-gray-300" />

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

                <button
                  className="w-full flex items-center justify-start gap-2 px-4 py-2 text-sm bg-transparent hover:bg-gray-100 text-[#000000] rounded"
                  onClick={handleLogout} 
                >
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

            {/* Right Content Section */}
            <div className="flex-1 min-w-0">
              {/* Profile Header - Responsive */}
              <div className="w-full md:w-[925px] h-auto md:h-[140px] gap-4 md:gap-[43px] rounded-xl p-4 md:p-5 bg-white shadow-sm border border-gray-200 flex flex-col md:flex-row items-center justify-between mb-4 md:mb-6">
                <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
                  <div className="relative w-12 h-12 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-purple-200">
                    <Image
                      src="/assets/adminimage.png"
                      alt="Admin"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg md:text-2xl font-bold text-gray-800">
                      {admin.name}
                    </h2>
                    <p className="text-md md:text-lg text-gray-500">Admin</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowUploadModal(true)}
                  className="mt-3 md:mt-0 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-[#5D5FEF] underline hover:underline hover:text-[#2e2fff] transition cursor-pointer w-full md:w-auto text-center"
                >
                  Upload Picture
                </button>
              </div>

              {/* Information Sections - Responsive */}
              <div className="space-y-4 md:space-y-6 mt-4 md:mt-6">
                <ProfileInfoSection
                  title="Personal Information"
                  data={[
                    { label: "Name:", value: admin.name },
                    { label: "Age:", value: admin.age },
                    { label: "Gender:", value: admin.gender },
                    { label: "Date of Birth:", value: admin.dob },
                  ]}
                  onEdit={() => setActiveModal("personal")}
                  icon="/assets/personaluser.svg"
                />

                <ProfileInfoSection
                  title="Contact"
                  data={[
                    { label: "Email Address:", value: admin.email },
                    { label: "Phone:", value: admin.phone },
                  ]}
                  onEdit={() => setActiveModal("contact")}
                  icon="/assets/contact.svg"
                />

                <ProfileInfoSection
                  title="Location"
                  data={[{ label: "Address:", value: admin.address }]}
                  onEdit={() => setActiveModal("location")}
                  icon="/assets/location.svg"
                />

                <ProfileInfoSection
                  title="Language"
                  data={[{ label: "Language:", value: admin.language }]}
                  onEdit={() => setActiveModal("language")}
                  icon="/assets/language.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 bg-[#00000099] flex items-center justify-center p-4">
          <div className="w-full max-w-[660px] h-auto max-h-[90vh] bg-white rounded-[12px] p-6 md:p-[32px] flex flex-col gap-6 md:gap-[40px] overflow-y-auto">
            <h2 className="text-xl font-bold text-[#000]">Profile Picture</h2>

            <div className="w-full h-[120px] md:h-[151px] border border-[#00000066] rounded-[8px] flex flex-col items-center justify-center p-4">
              <Image
                src="/assets/upload.svg"
                alt="Upload"
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10"
              />
              <p className="mt-2 text-sm text-gray-600">Upload Profile Pic</p>
            </div>

            <div className="flex flex-col md:flex-row justify-between w-full gap-3">
              <button
                onClick={() => setShowUploadModal(false)}
                className="w-full md:w-[288px] h-[48px] px-[10px] py-[10px] rounded-[8px] bg-gray-200 text-[#5D5FEF] hover:bg-gray-300 transition"
              >
                Close
              </button>
              <button
                onClick={() => alert("Saved!")}
                className="w-full md:w-[288px] h-[48px] px-[10px] py-[10px] rounded-[8px] bg-[#5D5FEF] text-white hover:bg-[#4b4df0] transition"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Personal Information Modal - Responsive */}
      {activeModal === "personal" && (
        <div className="fixed inset-0 bg-[#00000099] z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-[660px] bg-white rounded-xl md:rounded-[12px] p-6 md:p-[32px] flex flex-col gap-6 md:gap-[40px] relative max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              Edit Personal Information
            </h2>

            <div className="flex flex-col gap-4 md:gap-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-4">
                <div className="w-full md:w-1/2 flex flex-col gap-1">
                  <label className="text-sm text-gray-600">Name</label>
                  <input
                    type="text"
                    value={admin.name}
                    onChange={(e) =>
                      setAdmin({ ...admin, name: e.target.value })
                    }
                    placeholder="Enter name"
                    className="h-10 md:h-[44px] border border-gray-300 md:border-[#00000066] rounded-lg md:rounded-[8px] px-3 md:px-4 text-sm text-gray-700"
                  />
                </div>

                <div className="w-full md:w-1/2 flex flex-col gap-1">
                  <label className="text-sm text-gray-600">Age</label>
                  <input
                    type="text"
                    value={admin.age}
                    onChange={(e) =>
                      setAdmin({ ...admin, age: e.target.value })
                    }
                    placeholder="Enter age"
                    className="h-10 md:h-[44px] border border-gray-300 md:border-[#00000066] rounded-lg md:rounded-[8px] px-3 md:px-4 text-sm text-gray-700"
                  />
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 md:gap-4">
                <div className="w-full md:w-1/2 flex flex-col gap-1">
                  <label className="text-sm text-gray-600">Gender</label>
                  <input
                    type="text"
                    value={admin.gender}
                    onChange={(e) =>
                      setAdmin({ ...admin, gender: e.target.value })
                    }
                    placeholder="Enter gender"
                    className="h-10 md:h-[44px] border border-gray-300 md:border-[#00000066] rounded-lg md:rounded-[8px] px-3 md:px-4 text-sm text-gray-700"
                  />
                </div>

                <div className="w-full md:w-1/2 flex flex-col gap-1">
                  <label className="text-sm text-gray-600">Date of Birth</label>
                  <input
                    type="text"
                    value={admin.dob === "01-10-2000" ? "" : admin.dob}
                    onChange={(e) =>
                      setAdmin({ ...admin, dob: e.target.value })
                    }
                    placeholder="DD/MM/YYYY"
                    className="h-10 md:h-[44px] border border-gray-300 md:border-[#00000066] rounded-lg md:rounded-[8px] px-3 md:px-4 text-sm text-gray-700"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-0 pt-2">
              <button
                onClick={() => setActiveModal(null)}
                className="w-full md:w-[288px] h-10 md:h-[48px] px-4 md:px-[10px] py-2 md:py-[10px] rounded-lg md:rounded-[8px] bg-gray-200 text-[#5D5FEF] hover:bg-gray-300 transition"
              >
                Close
              </button>
              <button
                onClick={() =>
                  handleSave("personal", {
                    name: admin.name,
                    age: admin.age,
                    gender: admin.gender,
                    dob: admin.dob,
                  })
                }
                className="w-full md:w-[288px] h-10 md:h-[48px] rounded-lg md:rounded-[8px] bg-[#5D5FEF] text-white text-sm font-medium"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {activeModal === "contact" && (
        <div className="fixed inset-0 bg-[#00000099] z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-[660px] bg-white rounded-xl md:rounded-[12px] p-6 md:p-[32px] flex flex-col gap-6 md:gap-[40px] relative max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              Contact
            </h2>

            <div className="flex flex-col gap-4 md:gap-6">
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-600">Email Address</label>
                <input
                  type="text"
                  value={admin.email}
                  onChange={(e) =>
                    setAdmin({ ...admin, email: e.target.value })
                  }
                  placeholder="Enter email"
                  className="w-full h-10 md:h-[44px] border border-gray-300 md:border-[#00000066] rounded-lg md:rounded-[8px] px-3 md:px-4 text-sm text-gray-700"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-600">Phone</label>
                <input
                  type="text"
                  value={admin.phone}
                  onChange={(e) =>
                    setAdmin({ ...admin, phone: e.target.value })
                  }
                  placeholder="Enter phone number"
                  className="w-full h-10 md:h-[44px] border border-gray-300 md:border-[#00000066] rounded-lg md:rounded-[8px] px-3 md:px-4 text-sm text-gray-700"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-0 pt-2">
              <button
                onClick={() => setActiveModal(null)}
                className="w-full md:w-[288px] h-10 md:h-[48px] px-4 md:px-[10px] py-2 md:py-[10px] rounded-lg md:rounded-[8px] bg-gray-200 text-[#5D5FEF] hover:bg-gray-300 transition"
              >
                Close
              </button>
              <button
                onClick={() =>
                  handleSave("contact", {
                    email: admin.email,
                    phone: admin.phone,
                  })
                }
                className="w-full md:w-[288px] h-10 md:h-[48px] rounded-lg md:rounded-[8px] bg-[#5D5FEF] text-white text-sm font-medium"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Location Modal */}
      {activeModal === "location" && (
        <div className="fixed inset-0 bg-[#00000099] z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-[660px] bg-white rounded-xl md:rounded-[12px] p-6 md:p-8 flex flex-col gap-6 md:gap-[40px] relative max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              Location
            </h2>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Location</label>
              <div className="w-full md:w-[596px] h-10 md:h-[44px] border border-gray-300 md:border-[#00000066] rounded-lg md:rounded-[8px] flex items-center justify-between px-3 md:px-4 mx-auto">
                <input
                  type="text"
                  value={admin.address}
                  onChange={(e) =>
                    setAdmin({ ...admin, address: e.target.value })
                  }
                  className="w-full h-full outline-none text-sm text-gray-700 bg-transparent pr-3 md:pr-4"
                  placeholder="Enter your address"
                />
                <Image
                  src="/assets/locationblue.svg"
                  alt="Location Icon"
                  width={18}
                  height={18}
                  className="w-4 h-4 md:w-5 md:h-5"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-0">
              <button
                onClick={() => setActiveModal(null)}
                className="w-full md:w-[288px] h-10 md:h-[48px] px-4 md:px-[10px] py-2 md:py-[10px] rounded-lg md:rounded-[8px] bg-gray-200 text-[#5D5FEF] hover:bg-gray-300 transition"
              >
                Close
              </button>
              <button
                onClick={() =>
                  handleSave("location", { address: admin.address })
                }
                className="w-full md:w-[288px] h-10 md:h-[48px] rounded-lg md:rounded-[8px] bg-[#5D5FEF] text-white text-sm font-medium"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Language Modal */}
      {activeModal === "language" && (
        <div className="fixed inset-0 bg-[#00000099] z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-[660px] bg-white rounded-xl md:rounded-[12px] p-6 md:p-[32px] flex flex-col gap-6 md:gap-[40px] relative max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              Language
            </h2>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Add Language</label>
              <input
                type="text"
                value={admin.language}
                onChange={(e) =>
                  setAdmin({ ...admin, language: e.target.value })
                }
                placeholder="Language"
                className="w-full h-10 md:h-[44px] border border-gray-300 md:border-[#00000066] rounded-lg md:rounded-[8px] px-3 md:px-4 text-sm text-gray-700"
              />
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-0">
              <button
                onClick={() => setActiveModal(null)}
                className="w-full md:w-[288px] h-10 md:h-[48px] px-4 md:px-[10px] py-2 md:py-[10px] rounded-lg md:rounded-[8px] bg-gray-200 text-[#5D5FEF] hover:bg-gray-300 transition"
              >
                Close
              </button>
              <button
                onClick={() =>
                  handleSave("language", { language: admin.language })
                }
                className="w-full md:w-[288px] h-10 md:h-[48px] rounded-lg md:rounded-[8px] bg-[#5D5FEF] text-white text-sm font-medium"
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