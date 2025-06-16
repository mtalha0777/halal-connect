'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Topbar = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  // Reusable search function
  const performSearch = () => {
    const term = searchTerm.toLowerCase();

    if (term.includes('dashboard')) router.push('/admin/dashboard');
    else if (term.includes('user')) router.push('/admin/usermanagement');
    else if (term.includes('content')) router.push('/admin/contentmoderation');
    else if (term.includes('subscription')) router.push('/admin/subscribeandpayment');
    else if (term.includes('report')) router.push('/admin/reports');
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  };

  return (
  <header className="fixed top-0 left-64 right-0 z-50 bg-white shadow-sm">
  <div className="flex items-center justify-between px-6 py-4">
        {/* Left: Welcome */}
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">Welcome Back</h2>
          <Image src="/assets/wave.png" alt="wave" width={28} height={28} />
        </div>

        {/* Right: Search + Icons */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <div className="relative w-80">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none w-full placeholder-black text-black"
            />
            <Image
              src="/assets/search1.png"
              alt="Search"
              width={22}
              height={22}
              className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={performSearch} // ✅ search icon now works!
            />
          </div>

          {/* Bell Icon */}
          <Link href="/admin/notifications">
            <Image
              src="/assets/bellicon.png"
              alt="Notifications"
              width={30}
              height={30}
              className="cursor-pointer"
            />
          </Link>

          {/* Settings Icon */}
          <Link href="/admin/settings">
            <Image
              src="/assets/setting.png"
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
