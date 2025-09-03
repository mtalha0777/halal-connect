"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
// Sirf 'useAuth' hook import karein, Amplify se kuch nahi
import { useAuth } from '@/src/AuthSessionProvider';

export default function AdminLayout({ children }) {
  const router = useRouter();
  // Central Provider se user aur loading state lein
  const { user, loading } = useAuth();

  useEffect(() => {
    // Jab loading mukammal ho jaye, tab check karein
    if (!loading) {
      // Agar loading mukammal hone ke baad bhi user nahi hai, to login par bhejein
      if (!user) {
        router.push('/login');
      }
    }
  }, [user, loading, router]); // Isko user, loading, aur router ke change par chalayein

  // Jab tak Provider loading kar raha hai, yeh layout bhi loading dikhaye
  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Verifying session...</div>;
  }
  
  // Agar user mojood hai, to page (children) dikhayein
  if (user) {
    return <>{children}</>;
  }

  // Agar user nahi hai, to kuch na dikhayein (kyunki useEffect usko redirect kar dega)
  return null;
}