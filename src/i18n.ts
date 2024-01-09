import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales } from './middleware';

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) {
    notFound();
  }

  return {
    messages: (
      await (locale === 'en'
        ? import('../dictionaries/en.json')
        : import(`../dictionaries/${locale}.json`))
    ).default,
  };
});
