"use client";

import { useState } from "react";
export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("Please select a file first.");
      return;
    }

    setUploading(true);
    setMessage("Uploading...");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setMessage(`File uploaded successfully! URL: ${data.location}`);
      } else {
        setMessage(`Upload failed: ${data.error}`);
      }
    } catch (error) {
      setMessage(`An error occurred: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Upload a File to S3</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} className="mb-4" />
        <button
          type="submit"
          disabled={!file || uploading}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
