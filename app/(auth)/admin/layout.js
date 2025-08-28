"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
export default function AdminLayout({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (loading) {
      return; 
    }
    if (!user) {
      router.push('/login'); 
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <div>Loading...</div>; 
  }
  return <>{children}</>;
}