"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import NotificationPopup from "../modals/NotificationPopup";
import { useSidebar } from "@/app/context/SidebarContext";
const Topbar = () => {
  const router = useRouter();
  const { isSidebarOpen, toggleSidebar, isDesktop } = useSidebar();
  const [searchTerm, setSearchTerm] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const performSearch = () => {
    const term = searchTerm.toLowerCase();
    if (term.includes("dashboard")) router.push("/admin/dashboard");
    else if (term.includes("user")) router.push("/admin/usermanagement");
    else if (term.includes("content")) router.push("/admin/contentmoderation");
    else if (term.includes("subscription"))
      router.push("/admin/subscribeandpayment");
    else if (term.includes("report")) router.push("/admin/reports");
  };

  const handleSearch = (e) => e.key === "Enter" && performSearch();
  return (
    <header
      className={`fixed top-0 right-0 z-40 bg-white shadow-sm transition-all duration-300 ${
        isDesktop && isSidebarOpen ? "left-0 md:left-[260px]" : "left-0"
      }`}
    >
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between px-4 md:px-6 py-4 gap-4">
        {!isDesktop && (
          <button
            onClick={toggleSidebar}
            className="p-2 text-gray-600 rounded-md focus:outline-none"
            aria-label="Toggle sidebar"
          >
            {isSidebarOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        )}

        {!showMobileSearch && (
          <div className="flex items-center gap-2">
            <h2 className="text-lg md:text-xl font-semibold whitespace-nowrap">
              Welcome Back
            </h2>
            <Image
              src="/assets/wave.svg"
              alt="wave"
              width={24}
              height={24}
              className="w-6 h-6 md:w-7 md:h-7"
            />
          </div>
        )}

        <div className="flex items-center gap-4">
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
                width={20}
                height={20}
                className="cursor-pointer"
                onClick={() => setShowMobileSearch(true)}
              />
            )}
          </div>

          <div className="hidden md:block relative w-85">
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
                <div
                  className="
                    fixed top-20 left-1/2 -translate-x-1/2 z-50
                    md:absolute md:top-full md:left-auto md:right-0 md:translate-x-0 md:mt-2
                  "
                >
                  <NotificationPopup onClose={() => setShowPopup(false)} />
                </div>
              </>
            )}
          </div>

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
    </header>
  );
};

export default Topbar;
