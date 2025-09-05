"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth } from "@/src/firebase";
import { 
    createUserWithEmailAndPassword, 
    updateProfile,
    sendEmailVerification,
    GoogleAuthProvider, 
    signInWithPopup    
} from "firebase/auth";
import toast from "react-hot-toast";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordStrength, setPasswordStrength] = useState({ score: 0, text: '', color: '' });
    const [loading, setLoading] = useState(false); 
    const router = useRouter();


    const handleUsernameChange = (e) => {
        const value = e.target.value;
    
        const regex = /^[a-zA-Z0-9]*$/;
        if (regex.test(value)) {
            setUsername(value);
        }
    };
    
  
    const checkPasswordStrength = (pass) => {
        let score = 0;
        let text = 'Weak';
        let color = 'text-red-500';

        if (pass.length > 5) score++;
        if (pass.length > 8) score++;
        if (/[A-Z]/.test(pass)) score++;
        if (/[0-9]/.test(pass)) score++;
        if (/[^A-Za-z0-9]/.test(pass)) score++;

        if (score > 4) { text = 'Strong'; color = 'text-green-500'; }
        else if (score > 2) { text = 'Good'; color = 'text-yellow-500'; }
        
        setPasswordStrength({ score, text, color });
    };
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword); 
        checkPasswordStrength(newPassword);
    };


    const handleSignup = async (e) => {
        e.preventDefault();
        if (passwordStrength.score < 3) {
            toast.error("Password is too weak. Please use a stronger password.");
            return;
        }
        setLoading(true);
        const toastId = toast.loading('Creating account...');
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await updateProfile(user, { displayName: username });
            await sendEmailVerification(user);
            toast.success("Account created!.", { id: toastId });
            router.push('/login');
        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                toast.error("This email is already registered.", { id: toastId });
            } else if (err.code === 'auth/invalid-email') {
                toast.error("Please enter a valid email address.", { id: toastId });
            } else {
                toast.error("An error occurred during signup.", { id: toastId });
            }
        } finally {
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
            console.error("Google Sign-In Error:", err);
            toast.error("Failed to sign in with Google.", { id: toastId });
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
                        onChange={handleUsernameChange}
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
                        onChange={handlePasswordChange}
                        required
                    />
                    {/* Password Strength Indicator */}
                    {password.length > 0 && (
                        <div className="mt-1 text-xs">
                            Strength: <span className={passwordStrength.color}>{passwordStrength.text}</span>
                        </div>
                    )}
                </div>
                

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
 <div className="flex justify-center">
                <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    disabled={loading}
                    className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition"
                >
                    <Image src="/assets/google-logo.svg" alt="Google" width={20} height={20} className="mr-2"/>
                    <span className="text-sm font-medium">Google</span>
                </button>
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