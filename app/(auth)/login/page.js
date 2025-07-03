"use client";

import Image from "next/image";
import Link from "next/link"; 
import { useRouter } from "next/navigation"; // 

export default function Login() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault(); 
    router.push("/admin/dashboard");
  };

  return (
    <div className="w-full sm:max-w-lg bg-white p-6 sm:p-4 md:p-10 rounded-xl shadow-2xl relative z-10">
      {/* Logo + Name */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <Image
          src="/assets/halallogo.svg"
          alt="Halal Connect"
          width={32}
          height={32}
          priority
          className="h-8 w-auto"
        />
        <span className="text-base font-semibold text-black-600">
          Halal Connect
        </span>
      </div>

      {/* Headings - Responsive Font Size */}
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-800">
        Welcome Back
      </h2>
      <p className="text-center text-sm text-gray-600 mt-1 mb-6">
        Enter your username and password to login.
      </p>

      {/* Login Form */}
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter username"
            required // Add basic validation
            className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] placeholder:text-gray-400"
          />
        </div>

        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            required // Add basic validation
            className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] placeholder:text-gray-400"
          />
        </div>

        <div className="text-right text-sm mb-4">
          {/* FIX: Use Link component for better performance */}
          <Link
            href="/forgotpassword"
            className="text-sm text-red-600 underline underline-offset-2 decoration-red-600 hover:opacity-90"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit" // Use type="submit" for forms
          className="inline-block w-full bg-[#5D5FEF] hover:brightness-110 text-white text-sm font-medium py-2.5 rounded-md transition shadow-md"
        >
          Log in
        </button>
      </form>

      {/* OR Continue With */}
      <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-sm text-gray-600">Or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
      </div>


      {/* Social Logins */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Google */}
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full sm:w-1/2 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition"
        >
          <Image
            src="/assets/google-logo.svg"
            alt="Google"
            width={20}
            height={20}
            className="mr-2"
          />
          <span className="text-sm font-medium">Google</span>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full sm:w-1/2 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition"
        >
          <Image
            src="/assets/fb-logo.svg"
            alt="Facebook"
            width={20}
            height={20}
            className="mr-2"
          />
          <span className="text-sm font-medium">Facebook</span>
        </a>
      </div>

      {/* Don't have an account */}
      <p className="text-center text-sm mt-6">
        Don’t have an account?{" "}
        {/* FIX: Use Link component for better performance */}
        <Link
          href="/signup"
          className="font-bold hover:underline  text-[#5D5FEF]"
        >
          Register
        </Link>
      </p>
    </div>
  );
}
