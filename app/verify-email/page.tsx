'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function VerifyEmailPage() {
  const [status, setStatus] = useState('loading'); // 'loading', 'success', 'error'
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) {
      setStatus('error');
      return;
    }

    // Simulating an API call to verify email
    setTimeout(() => {
      if (token === 'valid-token') {
        setStatus('success');
      } else {
        setStatus('error');
      }
    }, 2000);
  }, [token]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white text-[#207B6E]">
      <div className="w-full max-w-md rounded-lg bg-gray-100 p-8 shadow-lg text-center">
        {status === 'loading' && (
          <>
            <Loader2 className="mx-auto animate-spin text-[#207B6E]" size={48} />
            <p className="mt-4 text-gray-700">Verifying your email...</p>
          </>
        )}

        {status === 'success' && (
          <>
            <CheckCircle className="mx-auto text-green-600" size={48} />
            <h2 className="mt-4 text-2xl font-bold text-green-600">Email Verified!</h2>
            <p className="mt-2 text-gray-700">Your email has been successfully verified.</p>
            <Link
              href="/login"
              className="mt-4 inline-block rounded bg-[#207B6E] px-4 py-2 text-white hover:bg-[#176257]">
              Go to Login
            </Link>
          </>
        )}

        {status === 'error' && (
          <>
            <XCircle className="mx-auto text-red-600" size={48} />
            <h2 className="mt-4 text-2xl font-bold text-red-600">Verification Failed</h2>
            <p className="mt-2 text-gray-700">Invalid or expired verification link.</p>
            <Link
              href="/register"
              className="mt-4 inline-block rounded bg-[#207B6E] px-4 py-2 text-white hover:bg-[#176257]">
              Register Again
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
