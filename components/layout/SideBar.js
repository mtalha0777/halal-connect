// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";

// const Sidebar = () => {
//   const pathname = usePathname();
//   const [isOpen, onClose] = useState(true);

//   const menuItems = [
//     {
//       label: "Dashboard",
//       icon: "/assets/dashboard.svg",
//       path: "/admin/dashboard",
//     },
//     {
//       label: "User Management",
//       icon: "/assets/management.svg",
//       path: "/admin/user-management",
//     },
//     {
//       label: "Content Moderation",
//       icon: "/assets/content.svg",
//       path: "/admin/content-moderation",
//     },
//     {
//       label: "Subscription & Payments",
//       icon: "/assets/subscription.svg",
//       path: "/admin/subscribe-and-payment",
//     },
//     {
//       label: "Reports & Analytics",
//       icon: "/assets/reportanalysis.svg",
//       path: "/admin/reports",
//     },
//     {
//       label: "System Notification",
//       icon: "/assets/systemnotification.svg",
//       path: "/admin/system-notification",
//     },
//   ];

//   return (
//     <>
//       {/* Toggle Button for Mobile */}
//       {/* <button
//         className="md:hidden fixed top-4 left-4 z-50 bg-[#1D225F] p-2 rounded-md shadow-lg flex items-center justify-center"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <div className="space-y-1">
//           <span className="block w-5 h-0.5 bg-white"></span>
//           <span className="block w-5 h-0.5 bg-white"></span>
//           <span className="block w-5 h-0.5 bg-white"></span>
//         </div>
//       </button> */}
 
//      {/* 🔹 Dark overlay — mobile only */}
//       <div
//        className={`fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden ${
//           isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
//         }`}
//         onClick={onClose}
//       />

//       <aside
//         // className={`bg-[#1D225F] text-white flex flex-col justify-between transition-transform duration-300 z-40
//         // ${isOpen ? "translate-x-0" : "-translate-x-full"} 
//         // md:translate-x-0 fixed md:static border-r w-[260px] h-[900px] pt-6 pr-3 pb-4 pl-3`}
      
//                 className={`bg-[#1D225F] text-white flex flex-col justify-between
//           transition-transform duration-300 z-50
//           ${isOpen ? "translate-x-0" : "-translate-x-full"}
//           md:translate-x-0 fixed md:static
//           w-[260px] h-screen pt-6 pr-3 pb-4 pl-3`}
      
//       >
//         {/* Logo Section */}
//         <div>
//           <div className="flex items-center gap-2 mb-10">
//             <Image src="/assets/logo1.svg" alt="logo" width={45} height={45} />
//            <span className="text-lg font-semibold ml-2">Halal Connect</span>

//           </div>

//           {/* Menu Items */}
//           {/* <nav className="w-[236px] h-[252px] flex flex-col gap-2"> */}
//           <nav className="flex flex-col gap-2">
//             {menuItems.map((item, i) => {
//               const isActive =
//                 item.label === "User Management"
//                   ? pathname.startsWith("/admin/user-management") ||
//                     pathname.startsWith("/management/reported-user") ||
//                     pathname.startsWith("/management/blocked-user")
//                   : pathname === item.path;

//               return (
//                 <Link href={item.path} key={i}>
//                   <div className="flex justify-start">
//                     <div
//                       className={`flex items-center justify-between px-3 py-2 rounded-[12px] w-[236px] h-[44px] transition-all
//                       ${
//                         isActive
//                           ? "bg-white text-black font-semibold"
//                           : "text-white hover:bg-white/10"
//                       }`}
//                     >
//                       <div className="flex items-center gap-2 flex-1">
//                         <Image
//                           src={item.icon}
//                           alt={item.label}
//                           width={20}
//                           height={20}
//                           className={`w-5 h-5 object-contain ${
//                             isActive ? "brightness-0" : "invert brightness-0"
//                           }`}
//                         />
//                         <span className="whitespace-nowrap text-sm">
//                           {item.label}
//                         </span>
//                       </div>
//                       <Image
//                         src="/assets/arrowright.svg"
//                         alt="arrow"
//                         width={18}
//                         height={18}
//                         className={`object-contain ${
//                           isActive ? "brightness-0" : "invert brightness-0"
//                         }`}
//                       />
//                     </div>
//                   </div>
//                 </Link>
//               );
//             })}
//           </nav>
//         </div>

//         {/* Profile Bottom */}
//         <Link href="/admin/settings">
//           <div className="flex items-center gap-2 mt-10 p-2 rounded-lg cursor-pointer hover:bg-white/10 transition">
//             <Image
//               src="/assets/profile.png"
//               alt="Profile"
//               width={40}
//               height={40}
//               className="rounded-full"
//             />
//             <div className="flex-1">
//               <p className="text-sm">Liam James</p>
//               <p className="text-xs text-gray-300">liam@gmail.com</p>
//             </div>
//             <Image
//               src="/assets/brightarrow.svg"
//               alt="Go"
//               width={18}
//               height={18}
//               className="object-contain invert brightness-0"
//             />
//           </div>
//         </Link>
//       </aside>
//     </>
//   );
// };
// export default Sidebar;



"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Sidebar = ({ isMobileSidebarOpen, toggleMobileSidebar }) => {
  const pathname = usePathname();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    {
      label: "Dashboard",
      icon: "/assets/dashboard.svg",
      path: "/admin/dashboard",
    },
    {
      label: "User Management",
      icon: "/assets/management.svg",
      path: "/admin/user-management",
    },
    {
      label: "Content Moderation",
      icon: "/assets/content.svg",
      path: "/admin/content-moderation",
    },
    {
      label: "Subscription & Payments",
      icon: "/assets/subscription.svg",
      path: "/admin/subscribe-and-payment",
    },
    {
      label: "Reports & Analytics",
      icon: "/assets/reportanalysis.svg",
      path: "/admin/reports",
    },
    {
      label: "System Notification",
      icon: "/assets/systemnotification.svg",
      path: "/admin/system-notification",
    },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {!isDesktop && isMobileSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={toggleMobileSidebar}
        />
      )}

      <aside
        className={`bg-[#1D225F] text-white flex flex-col justify-between
          transition-transform duration-300 z-50
          ${isMobileSidebarOpen || isDesktop ? "translate-x-0" : "-translate-x-full"}
          fixed
          w-[260px] h-screen pt-6 pr-3 pb-4 pl-3`}
      >
         {/* Logo Section */}
       <div>
        <div className="flex items-center gap-2 mb-10">
           <Image src="/assets/logo1.svg" alt="logo" width={45} height={45} />
           <span className="text-lg font-semibold ml-2">Halal Connect</span>

          </div>

           {/* Menu Items */}
           {/* <nav className="w-[236px] h-[252px] flex flex-col gap-2"> */}
       <nav className="flex flex-col gap-2">
  {menuItems.map((item, i) => {
    const isActive =
      item.label === "User Management"
        ? pathname.startsWith("/admin/user-management") ||
          pathname.startsWith("/management/reported-user") ||
          pathname.startsWith("/management/blocked-user")  ||
          pathname.startsWith("/contentdetails/view-details")  ||
          pathname.startsWith("/contentdetails/block-details") 
      : item.label === "Content Moderation"
        ? pathname.startsWith("/admin/content-moderation") ||
          pathname.startsWith("/management/user-details")   
          : item.label === "Subscription & Payments"
        ? pathname.startsWith("/admin/subscribe-and-payment") ||
          pathname.startsWith("/subscription/details")  
            : item.label === "System Notification"
        ? pathname.startsWith("/admin/system-notification") ||
          pathname.startsWith("/notification/create")   
      : pathname === item.path;

              return (
                <Link href={item.path} key={i}>
                  <div className="flex justify-start">
                    <div
                      className={`flex items-center justify-between px-3 py-2 rounded-[12px] w-[236px] h-[44px] transition-all
                      ${
                        isActive
                          ? "bg-white text-black font-semibold"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-2 flex-1">
                        <Image
                          src={item.icon}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={`w-5 h-5 object-contain ${
                            isActive ? "brightness-0" : "invert brightness-0"
                          }`}
                        />
                        <span className="whitespace-nowrap text-sm">
                          {item.label}
                        </span>
                      </div>
                      <Image
                        src="/assets/arrowright.svg"
                        alt="arrow"
                        width={18}
                        height={18}
                        className={`object-contain ${
                          isActive ? "brightness-0" : "invert brightness-0"
                        }`}
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Profile Bottom */}
        <Link href="/admin/settings">
          <div className="flex items-center gap-2 mt-10 p-2 rounded-lg cursor-pointer hover:bg-white/10 transition">
            <Image
              src="/assets/profile.png"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex-1">
              <p className="text-sm">Liam James</p>
              <p className="text-xs text-gray-300">liam@gmail.com</p>
            </div>
            <Image
              src="/assets/brightarrow.svg"
              alt="Go"
              width={18}
              height={18}
              className="object-contain invert brightness-0"
            />
          </div>
        </Link>
      </aside>
    </>
  );
};
export default Sidebar;