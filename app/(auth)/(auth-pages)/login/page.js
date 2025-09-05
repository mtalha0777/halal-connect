"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendEmailVerification } from "firebase/auth";
import { auth } from "@/src/firebase";
import toast from "react-hot-toast";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("handleLogin function called at:", new Date().toLocaleTimeString());
    setLoading(true);
    const toastId = toast.loading('Logging in...');
 try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        if (user.emailVerified) {
         toast.success('Login successful!', { id: toastId });
            router.push("/admin/dashboard");
        } else {
            await auth.signOut();
               await sendEmailVerification(user); 
 toast.error("Please verify your email first. A new link has been sent.", { id: toastId, duration: 6000 });
        }

    }catch (err) {
    // YEH LINE UPDATE KAREIN
    if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        toast.error("Invalid email or password. Please try again.", { id: toastId });
    } else {
        toast.error("An error occurred during login.", { id: toastId });
    }
    console.error("Login Error:", err.message);
}  finally {
        setLoading(false);
    }
  };
  const handleGoogleSignIn = async () => {
    setLoading(true);
    const toastId = toast.loading('Signing in with Google...');
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      toast.success('Signed in successfully!', { id: toastId });
      router.push("/admin/dashboard");
    } catch (err) {
      console.error("Google Sign-In Error:", err.message);
      toast.error("Failed to sign in with Google.", { id: toastId });
    } finally {
        setLoading(false);
    }
  };

  return (
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
        <button type="submit" className="inline-block w-full bg-[#5D5FEF] hover:brightness-110 text-white text-sm font-medium py-2.5 rounded-md transition shadow-md" disabled={loading}>
            {loading ? "Logging in..." : "Log in"}
        </button>
      </form>
      
      <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-sm text-gray-600">Or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
      </div>
      
       <div className="flex justify-center">
        <button
          onClick={handleGoogleSignIn}
          type="button" 
           className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition"
          disabled={loading}
        >
          <Image src="/assets/google-logo.svg" alt="Google" width={20} height={20} className="mr-2"/>
          <span className="text-sm font-medium">Google</span>
        </button>
      </div>
      
      <p className="text-center text-sm mt-6">
        Don’t have an account?{" "}
        <Link href="/signup" className="font-bold hover:underline  text-[#5D5FEF]">Register</Link>
      </p>
    </div>
  );
}