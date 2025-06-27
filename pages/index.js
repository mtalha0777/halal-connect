import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // router.replace("/admin/dashboard");
    router.replace("/Login/login");
  }, [router]);

  return null;
}
