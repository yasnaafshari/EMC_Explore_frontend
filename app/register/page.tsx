'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Lock, User, UserPlus, LogIn } from 'lucide-react';
import Link from 'next/link';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder for actual registration logic
    console.log({ name, email, password });
    router.push('/dashboard'); // Redirect after registration (adjust as needed)
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 flex items-center text-2xl font-bold text-[#207B6E]">
          <UserPlus className="mr-2" /> Register
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="mb-2 flex items-center text-gray-700">
              <User className="mr-2" /> Name
            </label>
            <input
              type="text"
              className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#207B6E]"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 flex items-center text-gray-700">
              <Mail className="mr-2" /> Email
            </label>
            <input
              type="email"
              className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#207B6E]"
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
              className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#207B6E]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center rounded bg-[#207B6E] hover:bg-[#176257] py-2 text-white ">
            <UserPlus className="mr-2" /> Register
          </button>
        </form>

        <div className="mt-4 flex justify-center">
          <Link href="/login" className="flex items-center text-[#207B6E] hover:underline">
            <LogIn className="mr-1" /> Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
}

