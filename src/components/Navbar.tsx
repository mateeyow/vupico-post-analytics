import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='px-2 sm:px-4 py-2.5 w-full border-b bg-white'>
      <div className='mx-auto flex flex-wrap justify-between items-center container py-2'>
        <ul>
          <li>
            <Link href='/' className='font-medium hover:text-teal-700'>
              Posts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
