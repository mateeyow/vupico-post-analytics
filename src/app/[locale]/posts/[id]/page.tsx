import { fetchPosts, fetchPostData, fetchPostComments } from '@/api/posts';
import BackButton from '@/components/BackButton';
import BarGraph from '@/components/BarGraph';
import CommentTable from '@/components/CommentTable';
import SubSection from '@/components/SubSection';
import { ColDef } from '@ag-grid-community/core';
import type { Comment } from '@/api/posts';
import { unstable_setRequestLocale, getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

const columns: ColDef<Comment>[] = [
  { field: 'id' },
  { field: 'name', filter: true },
  { field: 'email', filter: true },
  { field: 'body', filter: true },
];

export async function generateStaticParams() {
  const posts = await fetchPosts();

  return posts.map((post) => ({
    params: {
      id: post.id.toString(),
    },
  }));
}

async function getPostData(id: string) {
  const [post, comments] = await Promise.all([
    fetchPostData(id),
    fetchPostComments(id),
  ]);

  const domains = comments.map((comment) => {
    // Extract the domain from email address
    const [, domain] = comment.email.split('@');
    return domain;
  });

  return {
    ...post,
    comments: comments ?? [],
    domains,
  };
}

export default async function Page({
  params,
}: {
  params: { id: string; locale: string };
}) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations('PostDetail')
  const post = await getPostData(params.id);
  const sortedData = post.comments.sort(
    (a, b) => a.body.length - b.body.length,
  );

  return (
    <div className='py-6 px-2 md:px-4 xl:px-0'>
      <BackButton msg={t('back')} />
      <div className='flex flex-col py-4 gap-4'>
        <h1 className='text-2xl font-bold'>{post.title}</h1>
        <p>{post.body}</p>
        <hr />
        <section className='flex flex-col gap-4'>
          <SubSection>{t('comments')}</SubSection>
          {post.comments.map((comment) => (
            <div className='bg-white py-4 px-5 rounded' key={comment.id}>
              <div className='mb-2'>
                <h3 className='font-semibold'>{comment.name}</h3>
                <p className='text-xs lowercase italic text-slate-600'>
                  {comment.email}
                </p>
              </div>
              <p>{comment.body}</p>
            </div>
          ))}
        </section>
      </div>

      <hr />
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 my-4'>
        <div className='w-full'>
          <section>
            <SubSection>{t('commentDomains')}</SubSection>
            <ul className='bg-white rounded-lg divide-y mt-4'>
              {post.domains.map((domain) => (
                <li key={domain} className='py-4 px-2'>
                  {domain}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div>
          <SubSection>{t('commentLength')}</SubSection>
          <BarGraph
            data={sortedData.map((comment) => comment.id.toString())}
            xAxisLabel='Post ID'
            yAxisLabel='Comment Length'
            xAxis={sortedData.map((comment) => comment.id)}
            yAxis={sortedData.map((comment) => comment.body.length)}
          />
        </div>
      </div>

      <div className='py-4 flex flex-col gap-4'>
        <SubSection>{t('commentTable')}</SubSection>
        <CommentTable data={post.comments} columns={columns} />
      </div>
    </div>
  );
}
