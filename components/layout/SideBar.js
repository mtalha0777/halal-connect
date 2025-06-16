'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';


const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true); // For responsive toggle

  const menuItems = [
    { label: 'Dashboard', icon: '/assets/dashboard.png', path: '/admin/dashboard' },
    { label: 'User Management', icon: '/assets/manage.png', path: '/admin/usermanagement' },
    { label: 'Content Moderation', icon: '/assets/content.png', path: '/admin/contentmoderation' },
    { label: 'Subscription & Payments', icon: '/assets/subscription.png', path: '/admin/subscribeandpayment' },
    { label: 'Reports & Analytics', icon: '/assets/reportanalysis.png', path: '/admin/reports' },
    {label: 'System Notification', icon: '/assets/systemnotification.png', path: '/admin/systemnotification' },
  ];

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src="/assets/arrowright.png" alt="toggle" width={20} height={20} />
      </button>

      <aside className={`bg-[#1D225F] text-white p-6 flex flex-col justify-between
        min-h-screen w-64 transition-transform duration-300 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 fixed md:static z-40`}
      >
        {/* Logo Section */}
        <div>
          <div className="flex items-center gap-2 mb-10">
            <Image src="/assets/logo1.png" alt="logo" width={40} height={40} />
            <span className="text-base font-semibold">Halal Connect</span>
          </div>

          {/* Menu Items */}
          <nav className="w-[236px] h-[252px] flex flex-col gap-2">
            {menuItems.map((item, i) => {
              const isActive = pathname === item.path;

              return (
               <Link href={item.path} key={i}>
  <div className="flex justify-start">
    <div
      className={`flex items-center justify-between px-3 py-2 rounded-lg w-full max-w-[220px] transition-all
        ${isActive ? 'bg-white text-black font-semibold' : 'text-white hover:bg-white/10'}`}
    >
      <div className="flex items-center gap-2 flex-1">
        <Image
          src={item.icon}
          alt={item.label}
          width={20}
          height={20}
          className={`w-5 h-5 object-contain ${isActive ? 'brightness-0' : 'invert brightness-0'}`}
        />
        <span className="whitespace-nowrap text-sm">{item.label}</span>
      </div>
      <Image
        src="/assets/arrowright.png"
        alt="arrow"
        width={18}
        height={18}
        className={`object-contain ${isActive ? 'brightness-0' : 'invert brightness-0'}`}
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
      src="/assets/arrowright.png"
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
