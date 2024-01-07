export default function SubSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h2 className='text-xl font-semibold text-slate-500'>{children}</h2>;
}
