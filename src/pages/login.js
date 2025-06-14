import { useState } from 'react';
import Image from 'next/image';
import Logo from '@components/Logo';
import Button from '@components/Button';
import Input from '@components/Input';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md">
        <div className="mb-8 text-center">
          <Logo />
          <h1 className="mt-4 text-2xl font-bold">Welcome to Halal Connect</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <Input 
            label="Email" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <Input 
            label="Password" 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button type="submit" className="w-full mt-4">
            Login
          </Button>
        </form>

        <div className="mt-6 flex justify-center gap-4">
          <button className="p-2 border rounded-full">
            <Image 
              src="/images/google-logo.png" 
              alt="Google" 
              width={24} 
              height={24}
            />
          </button>
          <button className="p-2 border rounded-full">
            <Image 
              src="/images/fb-logo.png" 
              alt="Facebook" 
              width={24} 
              height={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
}