'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Send, ArrowLeft, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const validateEmail = (email: string) => {
    return email.toLowerCase().endsWith('@erasmusmc.nl');
  };

  const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Please use your @erasmusmc.nl email address');
      return;
    }

    // Placeholder for password reset logic
    console.log({ email });
    alert('If the email exists, a reset link has been sent.');
    router.push('/login');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white text-[#207B6E]">
      <div className="w-full max-w-md rounded-lg bg-gray-100 p-8 shadow-lg">
        <h2 className="mb-6 flex items-center text-2xl font-bold text-[#207B6E]">
          <Send className="mr-2" /> Forgot Password
        </h2>
        <form onSubmit={handleReset}>
          <div className="mb-4">
            <label className="mb-2 flex items-center text-gray-700">
              <Mail className="mr-2" /> Email
            </label>
            <input
              type="email"
              placeholder="example@erasmusmc.nl"
              className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#207B6E]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="mt-1 text-sm text-gray-600">
              Please use your @erasmusmc.nl email address
            </div>
          </div>

          {error && (
            <div className="mb-4 flex items-center rounded bg-red-100 p-3 text-red-700">
              <AlertCircle className="mr-2" size={20} />
              {error}
            </div>
          )}

          <button
            type="submit"
            className="flex w-full items-center justify-center rounded bg-[#207B6E] py-2 text-white hover:bg-[#176257]">
            <Send className="mr-2" /> Send Reset Link
          </button>
        </form>

        <div className="mt-4 flex justify-center">
          <Link href="/login" className="flex items-center text-[#207B6E] hover:underline">
            <ArrowLeft className="mr-1" /> Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
