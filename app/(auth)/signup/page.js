"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth } from "@/src/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); 
    const [loading, setLoading] = useState(false); 
    const router = useRouter();

    const handleSignup = async (e) => {
        e.preventDefault(); // Page ko reload hone se rokein
        setLoading(true); // Loading shuru
        setError(""); // Purane error saaf karein

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await updateProfile(user, {
                displayName: username,
            });

            console.log("User signed up successfully:", user);
            alert("Account created successfully! Please login.");
            router.push('/login');

        } catch (err) {
            console.error("Signup Error:", err);
            setError(err.message); 
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] placeholder:text-gray-400"
                 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                
            
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                <button
                    type="submit"
                    className="w-full bg-[#5D5FEF] hover:brightness-110 text-white font-medium py-2.5 rounded-md transition shadow-md mt-6"
                    disabled={loading} 
                >
                    {loading ? "Creating Account..." : "Sign Up"}
                </button>
            </form>

            <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-sm text-gray-600">Or continue with</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
             
                <a href="#" className="flex items-center justify-center w-full sm:w-1/2 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition">
                    <Image src="/assets/google-logo.svg" alt="Google" width={20} height={20} className="mr-2"/>
                    <span className="text-sm font-medium">Google</span>
                </a>
                <a href="#" className="flex items-center justify-center w-full sm:w-1/2 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition">
                    <Image src="/assets/fb-logo.svg" alt="Facebook" width={20} height={20} className="mr-2"/>
                    <span className="text-sm font-medium">Facebook</span>
                </a>
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