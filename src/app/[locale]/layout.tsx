import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { locales } from '../../middleware';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'Layout' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(params.locale);

  return (
    <html lang={params.locale}>
      <body className={`${inter.className} h-svh w-full bg-slate-100`}>
        <Navbar locale={params.locale} />
        <main className='mx-auto container'>{children}</main>
      </body>
    </html>
  );
}
