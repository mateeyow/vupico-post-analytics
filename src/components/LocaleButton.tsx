'use client';
import { useRouter, usePathname } from '@/navigation';

type LocaleButtonProps = {
  locales: {
    locale: string;
    text: string;
  }[];
};

export default function LocaleButton({ locales }: LocaleButtonProps) {
  const router = useRouter();
  const pathname = usePathname();

  const onChangeLocale = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className='flex flex-row items-center gap-2'>
      {locales.map(({ locale, text }) => (
        <button key={locale} onClick={() => onChangeLocale(locale)}>
          {text}
        </button>
      ))}
    </div>
  );
}
