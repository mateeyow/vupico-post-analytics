import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { locales } from '@/middleware';
import LocaleButton from './LocaleButton';

export default function Navbar({ locale = 'en' }: { locale?: string }) {
  const t = useTranslations('Navigation');
  const localesProps = locales.map((loc) => ({
    locale: loc,
    text: t('locale', { locale: loc }),
  }));

  return (
    <div className='px-2 sm:px-4 py-2.5 w-full border-b bg-white'>
      <div className='mx-auto flex flex-wrap justify-between items-center container py-2'>
        <nav>
          <ul>
            <li>
              <Link
                href={`/${locale}`}
                className='font-medium hover:text-teal-700'>
                {t('posts')}
              </Link>
            </li>
          </ul>
        </nav>
        <div className='flex flex-row items-center gap-2'>
          <LocaleButton locales={localesProps} />
        </div>
      </div>
    </div>
  );
}
