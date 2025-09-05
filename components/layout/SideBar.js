"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/app/(auth)/context/AuthContext";
const Sidebar = ({ isMobileSidebarOpen, toggleMobileSidebar, isDesktop }) => {
  const pathname = usePathname();
  const { user } = useAuth();

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
      path: "/admin/system-notifications",
    },
  ];

  return (
    <>
      {!isDesktop && isMobileSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={toggleMobileSidebar}
        />
      )}

      <aside
        className={`bg-[#1D225F] text-white flex flex-col justify-between z-50
    fixed w-[260px] h-screen pt-6 pr-3 pb-4 pl-3
    transition-transform duration-300 ease-in-out
    ${
      isDesktop
        ? "translate-x-0"
        : isMobileSidebarOpen
        ? "translate-x-0"
        : "-translate-x-full"
    }
  `}
      >
        {/* Logo Section */}
        <div>
          <div className="flex items-center gap-2 mb-10">
            <Image src="/assets/logo1.svg" alt="logo" width={45} height={45} />
            <span className="text-lg font-semibold ml-2">Halal Connect</span>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col gap-2">
            {menuItems.map((item, i) => {
              const isActive =
                item.label === "User Management"
                  ? pathname.startsWith("/admin/user-management") ||
                    pathname.startsWith("/management/reported-user") ||
                    pathname.startsWith("/management/blocked-user") ||
                    pathname.startsWith("/contentdetails/viewDetails") ||
                    pathname.startsWith("/contentdetails/blockDetails")
                  : item.label === "Content Moderation"
                  ? pathname.startsWith("/admin/content-moderation") ||
                    pathname.startsWith("/management/userDetails")
                  : item.label === "Subscription & Payments"
                  ? pathname.startsWith("/admin/subscribe-and-payment") ||
                    pathname.startsWith("/subscription/Details")
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
              src="/assets/default-profile.png"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex-1">
              <p className="text-sm font-medium">{user?.displayName || 'User'}</p>
              <p className="text-xs text-gray-300">{user?.email}</p>
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
