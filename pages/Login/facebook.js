import { useEffect } from "react";

export default function FacebookRedirect() {
  useEffect(() => {
    window.location.replace("https://www.facebook.com");
  }, []);
  return <p>Redirecting to Facebook…</p>; // optional loader message
}
