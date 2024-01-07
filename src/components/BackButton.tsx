'use client';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={router.back}
      className='flex flex-row items-center gap-2 text-sm text-slate-600 hover:text-slate-800'>
      <svg
        className='w-4 h-4 '
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 14 10'>
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1'
          d='M13 5H1m0 0 4 4M1 5l4-4'
        />
      </svg>
      <span>Back to Posts</span>
    </button>
  );
}
