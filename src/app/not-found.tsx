import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-full gap-4'>
      <h1 className='text-2xl md:text-4xl font-bold'>404! Page not found</h1>
      <Link href='/' className='underline text-xl md:text-2xl text-cyan-600'>
        Return Home
      </Link>
    </div>
  );
}
