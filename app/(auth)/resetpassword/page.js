"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from 'next/navigation';
// Is page ke liye 'confirmResetPassword' import karna hai
import { confirmResetPassword } from '@aws-amplify/auth';

// Component ka naam ResetPassword hona chahiye
export default function ResetPassword() {
  // Is page ke liye 'code' aur 'newPassword' ki state chahiye
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  // Yeh function code aur naye password ko submit karega
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
        // Sahi function 'confirmResetPassword' ko call karein
        await confirmResetPassword({ 
            username: email, 
            confirmationCode: code, 
            newPassword: newPassword 
        });
           router.push('/confirmation');
    } catch (err) {
        console.error("Password Reset Error:", err);
        setError(err.message);
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="w-full sm:max-w-lg bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl relative z-10">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Image src="/assets/halallogo.svg" alt="Halal Connect" width={32} height={32} className="h-8 w-auto"/>
        <span className="text-base font-semibold text-black">Halal Connect</span>
      </div>
      <h2 className="text-center text-xl sm:text-2xl font-bold text-black mb-1">Reset Password</h2>
      <p className="text-center text-sm text-gray-600 mb-6">
        A verification code was sent to **{email || "your email"}**. Enter the code and your new password.
      </p>

      <form onSubmit={handleResetPassword} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Verification Code</label>
          <input
            type="text"
            placeholder="Enter code from email"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF]"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF]"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button type="submit" disabled={loading} className="w-full bg-[#5D5FEF] hover:brightness-110 text-white font-medium py-2.5 rounded-md transition shadow-md !mt-6">
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
}