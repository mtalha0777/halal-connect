"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useUser } from "@/app/context/UserContext";
import ProfileInfoSection from "../../components/admin/ProfileInfoSection";
import { useRouter } from "next/router";
import AdminLayout from "@/components/layout/AdminLayout";
const SettingsPage = () => {
  const { user, setUser } = useUser();
  const router = useRouter();
  const [activeModal, setActiveModal] = useState(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleEditClick = (modalName) => {
    setEditingUser({ ...user });
    setActiveModal(modalName);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setUser(editingUser);
    setActiveModal(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) return setError("Please select a file first.");
    setUploading(true);
    setError("");

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setUser((prevUser) => ({ ...prevUser, profilePicture: data.location }));
        setShowUploadModal(false);
        setSelectedFile(null);
      } else {
        setError(`Upload failed: ${data.error}`);
      }
    } catch (err) {
      setError(`An error occurred: ${err.message}`);
    } finally {
      setUploading(false);
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1190px] flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-[200px] lg:w-[240px] h-auto md:h-auto bg-white rounded-xl p-4 shadow-sm border border-gray-200 flex flex-col items-center text-center gap-4 md:gap-5 self-start">
          <div className="relative w-16 h-16 md:w-20 md:h-25 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-purple-200 mt-2 md:mt-4">
            <Image
              src={user.profilePicture}
              alt={user.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
          <p className="text-sm text-gray-500">Admin</p>
          <div className="mt-2 w-full space-y-3">
            <hr className="w-full border-t border-gray-300" />
            <button className="w-full flex items-center justify-start gap-2 px-4 py-2 text-sm bg-transparent hover:bg-gray-300 rounded">
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
              onClick={() => router.push("/login")}
              className="w-full flex items-center justify-start gap-2 px-4 py-2 text-sm bg-transparent hover:bg-gray-100 rounded"
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
          <div className="w-full h-auto rounded-xl p-4 md:p-5 bg-white shadow-sm border border-gray-200 flex flex-col md:flex-row items-center justify-between mb-4 md:mb-6">
            <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
              <div className="relative w-12 h-12 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-purple-200">
                <Image
                  src={user.profilePicture}
                  alt={user.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-lg md:text-2xl font-bold text-gray-800">
                  {user.name}
                </h2>
                <p className="text-md md:text-lg text-gray-500">Admin</p>
              </div>
            </div>
            <button
              onClick={() => setShowUploadModal(true)}
              className="mt-3 md:mt-0 px-4 py-2 text-sm text-[#5D5FEF] underline"
            >
              Upload Picture
            </button>
          </div>

          <div className="space-y-4 md:space-y-6 mt-4 md:mt-6">
            <ProfileInfoSection
              title="Personal Information"
              data={[
                { label: "Name:", value: user.name },
                { label: "Age:", value: user.age },
                { label: "Gender:", value: user.gender },
                { label: "Date of Birth:", value: user.dob },
              ]}
              onEdit={() => handleEditClick("personal")}
              icon="/assets/personaluser.svg"
            />
            <ProfileInfoSection
              title="Contact"
              data={[
                { label: "Email Address:", value: user.email },
                { label: "Phone:", value: user.phone },
              ]}
              onEdit={() => handleEditClick("contact")}
              icon="/assets/contact.svg"
            />
            <ProfileInfoSection
              title="Location"
              data={[{ label: "Address:", value: user.address }]}
              onEdit={() => handleEditClick("location")}
              icon="/assets/location.svg"
            />
            <ProfileInfoSection
              title="Language"
              data={[{ label: "Language:", value: user.address }]}
              onEdit={() => handleEditClick("language")}
              icon="/assets/language.svg"
            />
          </div>
        </div>

        {/* --- All Modals --- */}
        {showUploadModal && (
          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-lg p-6 flex flex-col gap-4">
              <h2 className="text-xl font-bold">Upload Profile Picture</h2>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  setSelectedFile(e.target.files[0]);
                  setError("");
                }}
                className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
              />
              {selectedFile && (
                <div className="text-center">
                  <Image
                    src={URL.createObjectURL(selectedFile)}
                    alt="Preview"
                    width={100}
                    height={100}
                    className="rounded-full object-cover inline-block"
                  />
                </div>
              )}
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
              {uploading && (
                <p className="text-blue-500 text-sm text-center">
                  Uploading...
                </p>
              )}
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => {
                    setShowUploadModal(false);
                    setSelectedFile(null);
                    setError("");
                  }}
                  className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                >
                  Close
                </button>
                <button
                  onClick={handleUpload}
                  disabled={!selectedFile || uploading}
                  className="px-4 py-2 rounded-lg bg-[#5D5FEF] text-white hover:bg-[#4a4de6] disabled:bg-gray-400"
                >
                  {uploading ? "Saving..." : "Save"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Other Modals (Updated with Figma Styling) */}
        {activeModal && editingUser && (
          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
            <div className="w-full max-w-lg bg-white rounded-xl p-6 md:p-8 flex flex-col gap-6">
              {/* Modal Title (Figma Style: Bold and Dark) */}
              <h2 className="text-2xl font-bold text-gray-900">
                {activeModal.charAt(0).toUpperCase() + activeModal.slice(1)}
              </h2>

              {/* Input Fields Section */}
              <div className="space-y-5">
                {/* --- Personal Information Modal --- */}
                {activeModal === "personal" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={editingUser.name}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#5D5FEF] focus:border-[#5D5FEF] text-gray-700"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">
                        Age
                      </label>
                      <input
                        type="text"
                        name="age"
                        value={editingUser.age}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#5D5FEF] focus:border-[#5D5FEF] text-gray-700"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">
                        Gender
                      </label>
                      <input
                        type="text"
                        name="gender"
                        value={editingUser.gender}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#5D5FEF] focus:border-[#5D5FEF] text-gray-700"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">
                        Date of Birth
                      </label>
                      <input
                        type="text"
                        name="dob"
                        value={editingUser.dob}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#5D5FEF] focus:border-[#5D5FEF] text-gray-700"
                      />
                    </div>
                  </div>
                )}

                {/* --- Contact Modal --- */}
                {activeModal === "contact" && (
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={editingUser.email}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#5D5FEF] focus:border-[#5D5FEF] text-gray-700"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">
                        Phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={editingUser.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#5D5FEF] focus:border-[#5D5FEF] text-gray-700"
                      />
                    </div>
                  </div>
                )}

                {/* --- Location Modal --- */}
                {activeModal === "location" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      Address
                    </label>
                    <textarea
                      name="address"
                      value={editingUser.address}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#5D5FEF] focus:border-[#5D5FEF] text-gray-700"
                      rows="4"
                    ></textarea>
                  </div>
                )}

                {/* --- Language Modal --- */}
                {activeModal === "language" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      Language
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={editingUser.address}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#5D5FEF] focus:border-[#5D5FEF] text-gray-700"
                    />
                  </div>
                )}
              </div>

              {/* Modal Footer Buttons (Figma Style) */}
              <div className="flex justify-end gap-4 pt-4">
                <button
                  onClick={() => setActiveModal(null)}
                  className="px-6 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 font-medium transition duration-150"
                >
                  Close
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-2 rounded-lg bg-[#5D5FEF] text-white hover:bg-[#4a4de6] font-medium transition duration-150"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
SettingsPage.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
export default SettingsPage;
