'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
const Sidebar = () => {

  const pathname = usePathname(); // ← ye yahan hona chahiye
  const menuItems = [
  { label: 'Dashboard', icon: '/assets/dashboard.png', path: '/admin/dashboard' },
  { label: 'User Management', icon: '/assets/manage.png', path: '/admin/usermanagement' },
  { label: 'Content Moderation', icon: '/assets/content.png', path: '/admin/contentmoderation' },
  { label: 'Subscription & Payments', icon: '/assets/subscription.png', path: '/admin/subscriptionandpayment' },
  { label: 'Reports & Analytics', icon: '/assets/reportanalysis.png', path: '/admin/reports' },
];


  return (
    <aside className="w-64 min-h-screen bg-[#111B47] text-white p-6 flex flex-col justify-between">
      {/* Logo Section */}
      <div>
        <div className="flex items-center gap-2 mb-10">
          <Image src="/assets/logo1.png" alt="logo" width={40} height={40} />
          <span className="text-base font-semibold">Halal Connect</span>
        </div>

        {/* Menu Items */}
        <nav className="space-y-6">

         
  

          {menuItems.map((item, i) => {
  const isActive = pathname === item.path;
  return (
    <div
      key={i}
      className={`flex items-center justify-between px-3 py-2 rounded-lg ${
        isActive ? 'bg-white text-black font-semibold' : 'text-white'
      }`}
    >
      {/* Icon + Text Group */}
      <div className="flex items-center gap-2 flex-1">
        <Image
          src={item.icon}
          alt={item.label}
          width={20}
          height={20}
          className={`w-5 h-5 object-contain ${
            isActive ? 'brightness-0' : 'invert brightness-0'
          }`}
        />
        <span className="whitespace-nowrap text-xs">{item.label}</span>
      </div>

      {/* Arrow Icon */}
      <Image
        src="/assets/arrowright.png"
        alt="arrow"
        width={18}
        height={18}
        className={`object-contain ${isActive ? 'brightness-0' : 'invert brightness-0'}`}
      />
    </div>
  );
})}

        </nav>
      </div>

      {/* Profile Bottom */}
      <div className="flex items-center gap-2 mt-10">
        <Image
          src="/assets/profile.png"
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="text-sm">Liam James</p>
          <p className="text-xs text-gray-300">liam@gmail.com</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
