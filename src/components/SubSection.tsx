import { twMerge } from 'tailwind-merge';

export default function SubSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cls = twMerge(className, 'text-xl font-semibold text-slate-500');

  return <h2 className={cls}>{children}</h2>;
}
