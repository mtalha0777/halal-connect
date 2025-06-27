import React, { useEffect, useState } from "react";

const backgrounds = [
  "/assets/a1.webp",
  "/assets/a2.webp",
  "/assets/b1.webp",
  "/assets/b2.webp",
  "/assets/c1.webp",
  "/assets/c2.webp",
  "/assets/c3.webp",
  "/assets/d1.webp",
  "/assets/d2.webp",
  "/assets/e1.webp",
];

export default function BackgroundWrapper({ children }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-gray-100 flex items-center justify-center overflow-hidden">
      {/* Rotating Background Image */}
<div className="absolute inset-0 z-0 overflow-hidden">
  <img
    src={backgrounds[index]}
    alt="Background"
    className="w-full h-full object-cover object-center blur-sm brightness-75"
  />
</div>

      {/* Foreground content */}
      <div className="relative z-10 w-full flex justify-center items-center px-4">
        {children}
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-xs text-white/80 z-10">
        2025 © Halal Connect. All rights reserved.
      </footer>
    </div>
  );
}



