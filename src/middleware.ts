import createMiddleware from 'next-intl/middleware';

export const locales = ['en', 'zh'];

export default createMiddleware({
  defaultLocale: 'en',
  locales,
});

export const config = {
  matcher: ['/', '/(en|zh)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
