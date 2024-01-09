import { User } from '@/api/users';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

type PostCardProps = {
  title: string;
  body: string;
  id: number;
  user: User | undefined;
};

export default function PostCard({ title, body, id, user }: PostCardProps) {
  const t = useTranslations('PostCard');

  return (
    <article className='rounded shadow bg-white py-4 px-6 flex flex-col'>
      <h1 className='text-xl font-semibold'>{title}</h1>
      {user?.name ? (
        <address className='text-xs text-slate-500'>
          {t('by', { name: user.name })}
        </address>
      ) : null}
      <p className='mt-4 truncate'>{body}</p>

      <div className='mt-5'>
        <Link
          href={`posts/${id}`}
          locale='en'
          className='bg-cyan-500 hover:bg-cyan-600 px-4 py-2 text-sm text-white rounded transition-colors'>
          {t('linkMsg')}
        </Link>
      </div>
    </article>
  );
}
