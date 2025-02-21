'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, CheckCircle, ArrowLeft, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const validatePassword = (password: string) => {
    if (password.length < 8) return 'Password must be at least 8 characters long';
    if (!/[A-Z]/.test(password)) return 'Password must contain at least one uppercase letter';
    if (!/[a-z]/.test(password)) return 'Password must contain at least one lowercase letter';
    if (!/[0-9]/.test(password)) return 'Password must contain at least one number';
    if (!/[!@#$%^&*]/.test(password)) return 'Password must contain at least one special character (!@#$%^&*)';
    return '';
  };

  const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    const validationError = validatePassword(password);
    if (validationError) {
      setError(validationError);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    // Placeholder for actual reset logic
    console.log({ password });
    alert('Your password has been reset successfully!');
    router.push('/login');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white text-[#207B6E]">
      <div className="w-full max-w-md rounded-lg bg-gray-100 p-8 shadow-lg">
        <h2 className="mb-6 flex items-center text-2xl font-bold text-[#207B6E]">
          <Lock className="mr-2" /> Reset Password
        </h2>
        <form onSubmit={handleReset}>
          <div className="mb-4">
            <label className="mb-2 flex items-center text-gray-700">
              <Lock className="mr-2" /> New Password
            </label>
            <input
              type="password"
              className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#207B6E]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="mt-2 text-sm text-gray-600">
              Password must contain:
              <ul className="ml-4 list-disc">
                <li>At least 8 characters</li>
                <li>One uppercase letter</li>
                <li>One lowercase letter</li>
                <li>One number</li>
                <li>One special character (!@#$%^&*)</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="mb-2 flex items-center text-gray-700">
              <Lock className="mr-2" /> Confirm Password
            </label>
            <input
              type="password"
              className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#207B6E]"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
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
            <CheckCircle className="mr-2" /> Reset Password
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