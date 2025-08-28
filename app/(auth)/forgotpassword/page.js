"use client";
import React, { useState } from "react"; 
import Image from "next/image";
import Link from "next/link";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/src/firebase";

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(''); 
    const [error, setError] = useState(''); 
    const [loading, setLoading] = useState(false);

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setError('');

        try {
            await sendPasswordResetEmail(auth, email);
            setMessage("Password reset link has been sent to your email. Please check your inbox (and spam folder).");

        } catch (err) {
            console.error("Password Reset Error:", err);
            setError("Failed to send reset email. Please check if the email address is correct.");
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
              Enter your email, and we’ll send you a link to reset your password.
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
                
                {message && <p className="text-green-600 text-sm text-center">{message}</p>}
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                <button
                    type="submit"
                    className="w-full bg-[#5D5FEF] hover:brightness-110 text-white font-medium py-2.5 rounded-md transition shadow-md !mt-6"
                    disabled={loading}
                >
                    {loading ? "Sending..." : "Send Reset Link"}
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