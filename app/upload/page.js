// // File: app/upload/page.js

// import UploadForm from "@/components/UploadForm"; // Apne component ka sahi path dein

// export default function UploadPage() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md">
//         <UploadForm />
//       </div>
//     </main>
//   );
// }

// --- STEP 3.2: REPLACE THE OLD UPLOAD MODAL WITH THIS NEW ONE ---
{showUploadModal && (
  <div className="fixed inset-0 z-50 bg-[#00000099] flex items-center justify-center p-4">
    <div className="w-full max-w-[660px] bg-white rounded-[12px] p-6 md:p-[32px] flex flex-col gap-6">
      <h2 className="text-xl font-bold text-[#000]">Profile Picture</h2>

      {/* Upload Area with Input */}
      <div className="w-full h-auto border border-[#00000066] rounded-[8px] flex flex-col items-center justify-center p-4">
        <input
          type="file"
          accept="image/*" // Sirf images allow karein
          onChange={(e) => {
            setSelectedFile(e.target.files[0]);
            setError(""); // Purana error clear karein
          }}
          className="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100"
        />
        {/* Show a preview of the selected image */}
        {selectedFile && (
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">Preview:</p>
            <Image
              src={URL.createObjectURL(selectedFile)}
              alt="Preview"
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
          </div>
        )}
      </div>

      {/* Show error or uploading message */}
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      {uploading && <p className="text-blue-500 text-sm text-center">Uploading, please wait...</p>}

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-between w-full gap-3">
        <button
          onClick={() => {
            setShowUploadModal(false);
            setSelectedFile(null); // Modal band hone par file clear karein
            setError("");
          }}
          className="w-full md:w-[288px] h-[48px] rounded-[8px] bg-gray-200 text-[#5D5FEF] hover:bg-gray-300 transition"
        >
          Close
        </button>
        <button
          onClick={handleUpload} // Yahan hum naya function call karenge
          disabled={!selectedFile || uploading}
          className="w-full md:w-[288px] h-[48px] rounded-[8px] bg-[#5D5FEF] text-white hover:bg-[#4b4df0] transition disabled:bg-gray-400"
        >
          {uploading ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  </div>
)}