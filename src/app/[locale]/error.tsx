'use client';
import { useEffect } from 'react';

export default function Error({
  reset,
  error,
}: {
  error: any;
  reset: () => void;
}) {
  useEffect(() => {
    console.error('error', error);
  }, [error]);

  return (
    <div className='h-full text-center mt-48'>
      <h1 className='text-2xl md:text-4xl font-bold'>
        Oops! Something went wrong
      </h1>
      <button
        onClick={reset}
        className='text-xl md:text-2xl rounded border border-slate-400 py-2 px-4 bg-slate-700 text-white hover:bg-slate-800 mt-6'>
        Refresh Page
      </button>
    </div>
  );
}
