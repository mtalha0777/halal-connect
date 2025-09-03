"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { signIn, signInWithRedirect } from '@aws-amplify/auth';
import { useAuth } from "@/src/AuthSessionProvider";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { user, loading } = useAuth();

  useEffect(() => {
    // Agar user already authenticated hai toh redirect karo
    if (user && !loading) {
      router.push('/admin/dashboard');
    }
  }, [user, loading]); // router hata diya

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("")
    try {
      await signIn({ 
        username: email, 
        password 
      });
    } catch (err) {
      console.error("Login Error:", err);
      setError("Invalid username or password. Please try again.");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithRedirect({ provider: 'Google' });
    } catch (err) {
      console.error("Google Sign-In Error:", err);
      setError("Failed to sign in with Google. Please try again.");
    }
  };
 if (loading || user) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5D5FEF]"></div>
        </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full sm:max-w-lg bg-white p-6 sm:p-4 md:p-10 rounded-xl shadow-2xl relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Image src="/assets/halallogo.svg" alt="Halal Connect" width={32} height={32} priority className="h-8 w-auto" />
          <span className="text-base font-semibold text-black-600">Halal Connect</span>
        </div>
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-800">Welcome Back</h2>
        <p className="text-center text-sm text-gray-600 mt-1 mb-6">Enter your email and password to login.</p>
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" placeholder="Enter email" required className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] placeholder:text-gray-400" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input type="password" placeholder="Enter password" required className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] placeholder:text-gray-400" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="text-right text-sm mb-4">
              <Link href="/forgotpassword" className="text-sm text-red-600 underline underline-offset-2 decoration-red-600 hover:opacity-90">Forgot Password?</Link>
          </div>
          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
          <button type="submit" className="inline-block w-full bg-[#5D5FEF] hover:brightness-110 text-white text-sm font-medium py-2.5 rounded-md transition shadow-md">
              Log in
          </button>
        </form>
        
        <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-sm text-gray-600">Or continue with</span>
            <div className="flex-grow border-t border-gray-300"></div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleGoogleSignIn}
            type="button" 
            className="flex items-center justify-center w-full sm:w-1/2 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition"
          >
            <Image src="/assets/google-logo.svg" alt="Google" width={20} height={20} className="mr-2"/>
            <span className="text-sm font-medium">Google</span>
          </button>
          
          <button
            type="button"
            className="flex items-center justify-center w-full sm:w-1/2 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition"
          >
            <Image src="/assets/fb-logo.svg" alt="Facebook" width={20} height={20} className="mr-2"/>
            <span className="text-sm font-medium">Facebook</span>
          </button>
        </div>
        
        <p className="text-center text-sm mt-6">
          Don't have an account?{" "}
          <Link href="/signup" className="font-bold hover:underline text-[#5D5FEF]">Register</Link>
        </p>
      </div>
    </div>
  );
}