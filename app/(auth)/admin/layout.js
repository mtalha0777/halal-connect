"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext'; // Path 
function LoadingScreen() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <p>Loading...</p>
    </div>
  );
}

export default function AdminLayout({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {

    if (loading) {
      return;
    }

    if (!user) {

      router.replace('/login');
    }
  }, [user, loading, router]);


  if (loading || !user) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
}