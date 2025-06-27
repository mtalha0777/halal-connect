import { useEffect } from "react";

export default function GoogleRedirect() {
  useEffect(() => {
    window.location.replace("https://www.google.com");
  }, []);
  return <p>Redirecting to Google…</p>; // optional loader message
}
