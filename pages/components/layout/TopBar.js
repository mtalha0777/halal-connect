'use client';

import Image from 'next/image';

const Topbar = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Page Title */}
      
<div className="flex items-center gap-2">
    <h2 className="text-xl font-semibold">Welcome Back</h2>
    <Image src="/assets/wave.png" alt="wave" width={28} height={28} />
  </div>
      {/* Right Side: Search + Notifications + Profile */}
      <div className="flex items-center gap-6">
        {/* Search Input */}
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none w-96 placeholder-black text-black"
          />
          <Image
            src="/assets/search1.png"
            alt="Search"
            width={22}
            height={22}
            className="absolute left-3 top-1/2 -translate-y-1/2"
          />
        </div>

        {/* Notification Bell */}
        <div className="relative cursor-pointer">
           <Image
                src="/assets/bellicon.png"
                alt="Notifications"
                width={35}
                height={35}
                className="cursor-pointer"
              />
       
        </div>
 {/* Settings Icon */}
    <Image
      src="/assets/setting.png"
      alt="Settings"
      width={35}
      height={35}
      className="cursor-pointer"
    />
      </div>
    </header>
  );
};

export default Topbar;
