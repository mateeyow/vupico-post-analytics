import Skeleton from '@/components/Skeleton';

export default function LoadingPage() {
  return (
    <div className='py-6'>
      <Skeleton className='max-w-20' />
      <Skeleton size='md' className='max-w-lg' />
      <Skeleton className='max-w-2xl' />
      <div className='pt-4'>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  );
}
