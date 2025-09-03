"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { confirmSignUp, resendSignUpCode } from '@aws-amplify/auth';
import { useRouter, useSearchParams } from 'next/navigation';

export default function OTPVerification() {
 const [code, setCode] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
const username = searchParams.get('username');
 const inputsRef = useRef([]); 
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false; // Sirf numbers allow karein

    const newCode = [...code];
    newCode[index] = element.value;
    setCode(newCode);

 if (element.nextSibling && element.value) {
      // Yeh check karega ke next sibling ek input element hai
      if (element.nextSibling.tagName === 'INPUT') {
          element.nextSibling.focus();
      }
    }
  };
const handleVerification = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const verificationCode = code.join("");
    if (verificationCode.length < 6) {
        setError("Please enter the complete 6-digit code.");
        setLoading(false);
        return;
    }
   try {
        // 'Auth.' hata dein
        await confirmSignUp({ username: username, confirmationCode: verificationCode });
        alert("Account verified successfully! Please login.");
        router.push('/login');
    } catch (err) {
        console.error("Verification Error:", err);
        setError("Invalid verification code. Please try again.");
    } finally {
        setLoading(false);
    }
  };
  
    const handleResendCode = async () => {
        setMessage('');
        setError('');
    try {
            // 'Auth.' hata dein
            await resendSignUpCode({ username: username });
            setMessage('A new verification code has been sent to your email.');
        } catch (err) {
            setError('Failed to resend code. Please try again after some time.');
            console.error('Resend code error:', err);
        }
    };

  return (
    <div className="w-full sm:max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-2xl relative z-10">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Image src="/assets/halallogo.svg" alt="Halal Connect" width={32} height={32} className="h-8 w-auto" />
        <span className="text-base font-semibold text-black">Halal Connect</span>
      </div>
      <h2 className="text-center text-xl sm:text-2xl font-bold text-black mb-1">OTP Verification</h2>
      <p className="text-center text-sm text-gray-600 mb-6">
        We sent a 6-digit code to **{username}**. Please enter it below.
      </p>

      <form onSubmit={handleVerification}>
        <div className="flex justify-center gap-2 sm:gap-3 mb-4">
          {code.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-gray-300 rounded-md text-center text-lg text-black focus:outline-none focus:ring-2 focus:ring-[#5D5FEF]"
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
              ref={(el) => (inputsRef.current[index] = el)}
            />
          ))}
        </div>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        {message && <p className="text-green-600 text-sm text-center mb-4">{message}</p>}

        <button type="submit" disabled={loading} className="w-full bg-[#5D5FEF] hover:brightness-110 text-white text-sm font-medium py-2.5 rounded-md transition shadow-md">
          {loading ? "Verifying..." : "Verify"}
        </button>
      </form>

      <p className="text-center text-sm mt-6 text-gray-600">
        Didn’t receive the OTP?{" "}
        <button onClick={handleResendCode} className="font-bold hover:underline text-[#5D5FEF]">
          Resend Code
        </button>
      </p>
    </div>
  );
}