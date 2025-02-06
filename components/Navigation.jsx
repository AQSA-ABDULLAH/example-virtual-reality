'use client'; // Ensure it's a client component

import { useRouter } from 'next/navigation'; // Correct import for Next.js 13+
import Link from 'next/link';

export default function Navigation() {
  const router = useRouter(); // ✅ Use useRouter() at the top level

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center bg-gray-100">
      <nav className="bg-blue-500 text-white p-4 w-full flex flex-col justify-around">
        <Link href="/">Home</Link>
        <Link href="/scene1">Scene 1</Link>
        <Link href="/scene2">Scene 2</Link>
        <Link href="/scene3">Scene 3</Link>
      </nav>
      <main className="p-10 text-center">
        <button 
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded" 
          onClick={() => router.push('/scene1')}
        >
          Go to Scene 1
        </button>
      </main>
    </div>
  );
}



