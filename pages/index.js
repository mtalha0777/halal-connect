import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/admin/dashboard'); // ✅ redirect to admin dashboard
  }, [router]);

  return null;
}
