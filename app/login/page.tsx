'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Mail, Lock, LogIn, UserPlus, HelpCircle, Shield } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signIn('credentials', { redirect: false, email, password });
    if (result?.ok) router.push('/dashboard');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 flex items-center text-2xl font-bold text-[#207B6E]">
          <LogIn className="mr-2" /> Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="mb-2 flex items-center text-gray-700">
              <Mail className="mr-2" /> Email
            </label>
            <input
              type="email"
              className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 flex items-center text-gray-700">
              <Lock className="mr-2" /> Password
            </label>
            <input
              type="password"
              className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center rounded py-2 text-white bg-[#207B6E] hover:bg-[#14201D]
">
            <LogIn className="mr-2" /> Login
          </button>
        </form>

        <div className="mt-4 flex justify-between">
          <Link href="/register" className="flex items-center text-[#207B6E] hover:underline">
            <UserPlus className="mr-1" /> Register
          </Link>
          <Link href="/forgot-password" className="flex items-center text-[#207B6E] hover:underline">
            <HelpCircle className="mr-1" /> Forgot Password?
          </Link>
        </div>

        <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
          <Shield className="mr-1" /> OAuth/JWT-based authentication
        </div>
      </div>
    </div>
  );
}