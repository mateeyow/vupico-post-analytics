import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
  const t = useTranslations('404');

  return (
    <div className='flex flex-col items-center justify-center gap-4 h-96'>
      <h1 className='text-xl md:text-3xl font-bold'>{t('title')}</h1>
      <Link href='/' className='underline text-base md:text-xl text-cyan-600'>
        {t('linkMsg')}
      </Link>
    </div>
  );
}
