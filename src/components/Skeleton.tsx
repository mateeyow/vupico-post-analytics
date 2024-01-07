'use client';
import { twMerge } from 'tailwind-merge';

type SizeSelection = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'half';

type SkeletonProps = {
  size?: SizeSelection;
  className?: string;
};

type Sizes = {
  [key in SizeSelection]: string;
};

export default function Skeleton({ size = 'sm', className }: SkeletonProps) {
  const sizes: Sizes = {
    sm: 'h-2.5',
    md: 'h-4',
    lg: 'h-6',
    xl: 'h-8',
    '2xl': 'h-10',
    half: 'h-svh',
  };

  const childClass = twMerge(
    'bg-gray-400 rounded-full w-full mb-4',
    sizes[size],
  );

  const cls = twMerge('w-full animate-pulse', className);

  return (
    <div role='status' className={cls}>
      <div className={childClass} />
      <span className='sr-only'>Loading...</span>
    </div>
  );
}
