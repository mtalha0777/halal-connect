'use client';

import Image from 'next/image';
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter(); 
  return (
    
    <div className="w-full max-w-lg bg-white p-10 rounded-xl shadow-2xl relative z-10">

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
          <span className="text-base font-semibold text-black-600">Halal Connect</span>
        </div>

        {/* Headings */}
        <h2 className="text-center text-3xl font-bold text-gray-800">Welcome Back</h2>
        <p className="text-center text-sm text-gray-600 mt-1 mb-6">
          Enter your username and password to login.
        </p>

        {/* Login Form */}
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] placeholder-gray-400"
            />
          </div>

          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] placeholder-gray-400"
            />
          </div>

          <div className="text-right text-sm mb-4">
            <a
              href="/Login/forgotpassword"
              className="text-sm text-red-600 underline underline-offset-2 decoration-red-600 hover:opacity-90"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="button"
            onClick={() => router.push("/admin/dashboard")}
            className="inline-block w-full bg-[#5D5FEF] hover:brightness-110 text-white text-sm font-medium py-2 rounded-md transition shadow-md"
          >
            Log in
          </button>
        </form>

        {/* OR Continue With */}
        <div className="text-center text-sm text-gray-500 my-4">Or continue with</div>

        {/* Social Logins */}
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => alert("Google login")}
            className="flex items-center justify-center w-1/2 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition"
          >
            <Image
              src="/assets/google-logo.png"
              alt="Google"
              width={20}
              height={20}
              className="mr-2"
            />
            <span className="text-sm">Google</span>
          </button>
          <button
            type="button"
            onClick={() => alert("Facebook login")}
            className="flex items-center justify-center w-1/2 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition"
          >
            <Image
              src="/assets/fb-logo.png"
              alt="Facebook"
              width={20}
              height={20}
              className="mr-2"
            />
            <span className="text-sm">Facebook</span>
          </button>
        </div>

        {/* Don't have an account */}
        <p className="text-center text-sm mt-6">
          Don’t have an account?{" "}
          <a
            href="/Login/signup"
            className="font-semibold hover:underline"
            style={{ color: "#5D5FEF" }}
          >
            Register
          </a>
        </p>
      </div>
  );
}
