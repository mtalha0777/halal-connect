"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUp } from '@aws-amplify/auth';

export default function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // Password strength ke liye nayi state
    const [passwordStrength, setPasswordStrength] = useState({ level: "", color: "" });
    const [error, setError] = useState(""); 
    const [loading, setLoading] = useState(false); 
    const router = useRouter();

    // NAYA FUNCTION: Password ki strength check karne ke liye
    const checkPasswordStrength = (pass) => {
        let score = 0;
        if (pass.length > 8) score++;
        if (pass.match(/[a-z]/)) score++;
        if (pass.match(/[A-Z]/)) score++;
        if (pass.match(/[0-9]/)) score++;
        if (pass.match(/[^A-Za-z0-9]/)) score++;

        if (score < 3) {
            setPasswordStrength({ level: "Weak", color: "text-red-500" });
        } else if (score < 5) {
            setPasswordStrength({ level: "Good", color: "text-orange-500" });
        } else {
            setPasswordStrength({ level: "Strong", color: "text-green-500" });
        }
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        if (newPassword) {
            checkPasswordStrength(newPassword);
        } else {
            setPasswordStrength({ level: "", color: "" });
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            // SAHI CODE: 'password' property ko yahan add kiya gaya hai
            const { userId } = await signUp({
                username: username,
                password: password, 
                options: {
                    userAttributes: {
                        email: email,
                        name: username,
                    },
                }
            });
            console.log("Sign up successful:", userId);
            router.push(`/otpverification?username=${username}`);
        } catch (err) {
            console.error("Signup Error:", err);
            // NAYA FEATURE: Email mojood hone ka error check karein
             if (err.name === 'UsernameExistsException' || err.name === 'AliasExistsException')  {
                setError("An account with this username or email already exists. Please login or use a different one.");
            } else {
                setError(err.message);
            }
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
            <h2 className="text-center text-xl sm:text-2xl font-bold text-gray-800">
                Create Account
            </h2>
            <p className="text-center text-sm text-gray-600 mt-1 mb-6">
                Create your account to explore more.
            </p>

            <form onSubmit={handleSignup}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                    <input
                        type="text"
                        placeholder="Enter username"
                        className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] placeholder:text-gray-400"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] placeholder:text-gray-400"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

   <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        {/* NAYA UI ELEMENT: Password strength dikhane ke liye */}
                        {passwordStrength.level && (
                            <span className={`text-xs font-bold ${passwordStrength.color}`}>
                                {passwordStrength.level}
                            </span>
                        )}
                    </div>
                    <input
                        type="password"
                        placeholder="Enter password"
                        className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF]"
                        value={password}
                        onChange={handlePasswordChange} // onChange handler update kiya
                        required
                    />
                </div>
                
                {error && <p className="text-red-500 text-sm text-center my-2">{error}</p>}

                <button type="submit" className="w-full bg-[#5D5FEF] hover:brightness-110 text-white font-medium py-2.5 rounded-md transition shadow-md mt-6" disabled={loading}>
                    {loading ? "Creating Account..." : "Sign Up"}
                </button>
            </form>

            <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-sm text-gray-600">Or continue with</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <p className="text-center text-sm mt-6 text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="font-bold hover:underline text-[#5D5FEF]">
                    Sign in
                </Link>
            </p>
        </div>
    );
}