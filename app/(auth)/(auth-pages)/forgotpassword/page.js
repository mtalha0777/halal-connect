"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/src/firebase";
import toast from 'react-hot-toast';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);


    const checkEmailExists = async (email) => {
        try {

            await signInWithEmailAndPassword(auth, email, "dummy-password-12345");
            return true; 
        } catch (error) {
            if (error.code === 'auth/wrong-password') {

                return true;
            } else if (error.code === 'auth/user-not-found') {

                return false;
            } else if (error.code === 'auth/invalid-credential') {
          
                return true;
            } else if (error.code === 'auth/too-many-requests') {
               
                return true;
            }
          
            return true;
        }
    };

    const handlePasswordReset = async (e) => {
    e.preventDefault();
    
    if (!email) {
        toast.error("Please enter an email address.");
        return;
    }
    
    setLoading(true);
    const toastId = toast.loading('Sending reset email...');
    
    try {
        await sendPasswordResetEmail(auth, email);
        toast.success("If this email is registered, you'll receive a reset link.", { 
            id: toastId, 
            duration: 5000 
        });
    } catch (err) {
        toast.error("Failed to send reset email. Please try again.", { id: toastId });
    } finally {
        setLoading(false);
    }
};

    return (
        <div className="w-full sm:max-w-lg bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl relative z-10">
            <div className="flex items-center justify-center gap-2 mb-6">
                <Image
                    src="/assets/halallogo.svg"
                    alt="Halal Connect"
                    width={32}
                    height={32}
                    className="h-8 w-auto"
                />
                <span className="text-base font-semibold text-black">Halal Connect</span>
            </div>

            <h2 className="text-center text-xl sm:text-2xl font-bold text-black mb-3">
                Forgot Password
            </h2>
            <p className="text-center text-sm text-gray-600 mb-6">
                Enter your email, and we'll send you a link to reset your password.
            </p>

            <form onSubmit={handlePasswordReset} className="space-y-5">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your registered email"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] placeholder:text-gray-400"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#5D5FEF] hover:brightness-110 text-white font-medium py-2.5 rounded-md transition shadow-md !mt-6"
                    disabled={loading}
                >
                    {loading ? "Checking..." : "Send Reset Link"}
                </button>
            </form>

            <p className="text-center text-sm mt-6 text-gray-600">
                Back to{" "}
                <Link
                    href="/login"
                    className="font-bold hover:underline text-[#5D5FEF]"
                >
                    Login
                </Link>
            </p>
        </div>
    );
}