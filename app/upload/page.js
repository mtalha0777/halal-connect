"use client";
import React, { useState } from "react";
import Image from "next/image";
import AdminLayout from "@/components/layout/AdminLayout";
import { useUser } from "../context/UserContext";
export default function UploadPage() {
  const { setUser } = useUser();
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

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
        alert("Profile picture updated successfully!");
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

  return (
    <section>
      <div className="w-full max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Upload a New Profile Picture
        </h2>

        {/* Upload Area with Input */}
        <div className="w-full h-auto border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-6 text-center">
          <p className="text-gray-500 mb-4">Select a file from your computer</p>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              setSelectedFile(e.target.files[0]);
              setError("");
            }}
            className="block w-full max-w-xs text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100 cursor-pointer"
          />
        </div>

        {/* Show a preview of the selected image */}
        {selectedFile && (
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-2">Image Preview:</p>
            <Image
              src={URL.createObjectURL(selectedFile)}
              alt="Preview"
              width={120}
              height={120}
              className="rounded-full object-cover inline-block border-2 border-purple-200 p-1"
            />
          </div>
        )}

        {/* Show error or uploading message */}
        <div className="h-6 mt-4 text-center">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {uploading && (
            <p className="text-blue-500 text-sm">Uploading, please wait...</p>
          )}
        </div>

        {/* Upload Button */}
        <div className="flex justify-end w-full mt-6">
          <button
            onClick={handleUpload}
            disabled={!selectedFile || uploading}
            className="w-full md:w-auto px-8 py-3 rounded-lg bg-[#5D5FEF] text-white font-semibold hover:bg-[#4b4df0] transition disabled:bg-gray-400"
          >
            {uploading ? "Uploading..." : "Upload Picture"}
          </button>
        </div>
      </div>
    </section>
  );
}
UploadPage.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
