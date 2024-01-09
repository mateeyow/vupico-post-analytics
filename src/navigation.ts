import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { locales } from './middleware';

export const { Link, useRouter, usePathname } = createLocalizedPathnamesNavigation({
  locales,
  pathnames: {},
});
