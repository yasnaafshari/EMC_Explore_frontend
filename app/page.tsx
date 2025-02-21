import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white text-[#207B6E]">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Welcome to EMC Explore</h1>
        <p className="mt-2 text-lg">Your gateway to seamless data exploration.</p>

        <div className="mt-6 flex justify-center space-x-4">
          <Link href="/login">
            <button className="rounded bg-[#207B6E] px-4 py-2 text-white hover:bg-[#176257]">
              Login
            </button>
          </Link>

          <Link href="/register">
            <button className="rounded border border-[#207B6E] px-4 py-2 text-[#207B6E] hover:bg-[#207B6E] hover:text-white">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
