// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import NotificationPopup from "../modals/NotificationPopup";

// const Topbar = () => {
//   const router = useRouter();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showPopup, setShowPopup] = useState(false); // 👈 popup state

//   const performSearch = () => {
//     const term = searchTerm.toLowerCase();
//     if (term.includes("dashboard")) router.push("/admin/dashboard");
//     else if (term.includes("user")) router.push("/admin/usermanagement");
//     else if (term.includes("content")) router.push("/admin/contentmoderation");
//     else if (term.includes("subscription"))
//       router.push("/admin/subscribeandpayment");
//     else if (term.includes("report")) router.push("/admin/reports");
//   };

//   const handleSearch = (e) => {
//     if (e.key === "Enter") performSearch();
//   };

//   return (
//     <>
//       {/* Topbar Header */}
//         <header className="fixed top-0 left-[260px] right-0 z-50 bg-white shadow-sm">
//         <div className="flex flex-wrap md:flex-nowrap items-center justify-between px-4 md:px-6 py-4 gap-4">

//           {/* Welcome Message */}
//           <div className="flex items-center gap-2">
//             <h2 className="text-xl font-semibold whitespace-nowrap">
//               Welcome Back
//             </h2>
//             <Image src="/assets/wave.svg" alt="wave" width={28} height={28} />
//           </div>

//           {/* Right Section */}
//           <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto">
//             {/* Search Input */}
//             <div className="relative w-full md:w-80">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 onKeyDown={handleSearch}
//                 className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none w-full placeholder-black text-black"
//               />
//               <Image
//                 src="/assets/search.svg"
//                 alt="Search"
//                 width={22}
//                 height={22}
//                 className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer"
//                 onClick={performSearch}
//               />
//             </div>

//             {/* Icons */}
//             <div className="flex items-center gap-4">
//               {/* Bell Icon */}
//               <div className="relative">
//                 <Image
//                   src="/assets/bellicon.svg"
//                   alt="Notifications"
//                   width={30}
//                   height={30}
//                   className="cursor-pointer"
//                   onClick={() => setShowPopup(!showPopup)}
//                 />
//                 {showPopup && (
//                   <>
//                     <div
//                       className="fixed inset-0 bg-[#00000099] z-40"
//                       onClick={() => setShowPopup(false)}
//                     ></div>
//                     <div className="absolute top-10 right-0 z-50">
//                       <NotificationPopup onClose={() => setShowPopup(false)} />
//                     </div>
//                   </>
//                 )}
//               </div>

//               {/* Settings Icon */}
//               <Link href="/admin/settings">
//                 <Image
//                   src="/assets/setting.svg"
//                   alt="Settings"
//                   width={30}
//                   height={30}
//                   className="cursor-pointer"
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Topbar;



"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import NotificationPopup from "../modals/NotificationPopup";

const Topbar = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const performSearch = () => {
    const term = searchTerm.toLowerCase();
    if (term.includes("dashboard")) router.push("/admin/dashboard");
    else if (term.includes("user")) router.push("/admin/usermanagement");
    else if (term.includes("content")) router.push("/admin/contentmoderation");
    else if (term.includes("subscription")) router.push("/admin/subscribeandpayment");
    else if (term.includes("report")) router.push("/admin/reports");
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") performSearch();
  };

  return (
    <header className="fixed top-0 left-0 md:left-[260px] right-0 z-50 bg-white shadow-sm">
      {/* <div className="flex items-center justify-between px-4 py-3"> */}
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between px-4 md:px-6 py-4 gap-4">
        {/* Left Section - Welcome Message (Hidden on mobile when search is active) */}
        {!showMobileSearch && (
          <div className="flex items-center gap-2">
            <h2 className="text-lg md:text-xl font-semibold whitespace-nowrap">Welcome Back</h2>
            <Image 
              src="/assets/wave.svg" 
              alt="wave" 
              width={24} 
              height={24}
              className="w-6 h-6 md:w-7 md:h-7"
            />
          </div>
        )}

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search - Mobile (Icon only when collapsed) */}
          <div className="md:hidden">
            {showMobileSearch ? (
              <div className="absolute top-3 left-0 right-0 mx-4 bg-white z-50 flex items-center">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleSearch}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
                  autoFocus
                />
                <Image
                  src="/assets/close.svg"
                  alt="Close"
                  width={20}
                  height={20}
                  className="absolute right-3 cursor-pointer"
                  onClick={() => setShowMobileSearch(false)}
                />
              </div>
            ) : (
              <Image
                src="/assets/search.svg"
                alt="Search"
                width={24}
                height={24}
                className="cursor-pointer"
                onClick={() => setShowMobileSearch(true)}
              />
            )}
          </div>

          {/* Search - Desktop */}
          <div className="hidden md:block relative w-64">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none w-full"
            />
            <Image
              src="/assets/search.svg"
              alt="Search"
              width={20}
              height={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={performSearch}
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            {/* Notification Bell */}
            <div className="relative">
              <Image
                src="/assets/bellicon.svg"
                alt="Notifications"
                width={30}
                height={30}
                className="cursor-pointer"
                onClick={() => setShowPopup(!showPopup)}
              />
              {showPopup && (
                <>
                 <div
                     className="fixed inset-0 bg-[#00000099] z-40"
                      onClick={() => setShowPopup(false)}
                    ></div>
                    <div className="absolute top-10 right-0 z-50">
                      <NotificationPopup onClose={() => setShowPopup(false)} />
                    </div>

                </>
              )}
            </div>

            {/* Settings Gear */}
            <Link href="/admin/settings">
              <Image
                src="/assets/setting.svg"
                alt="Settings"
                width={30}
                height={30}
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;

