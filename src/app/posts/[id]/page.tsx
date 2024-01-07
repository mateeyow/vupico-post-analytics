import { fetchPosts, fetchPostData, fetchPostComments } from '@/api/posts';
import BackButton from '@/components/BackButton';
import BarGraph from '@/components/BarGraph';
import SubSection from '@/components/SubSection';

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

export default async function Page({ params }: { params: { id: string } }) {
  const post = await getPostData(params.id);

  return (
    <div className='py-6 px-2 md:px-4 xl:px-0'>
      <BackButton />
      <div className='flex flex-col py-4 gap-4'>
        <h1 className='text-2xl font-bold'>{post.title}</h1>
        <p>{post.body}</p>
        <hr />
        <section className='flex flex-col gap-4'>
          <SubSection>Comments</SubSection>
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
            <SubSection>Comment Domains</SubSection>
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
          <BarGraph />
        </div>
      </div>
    </div>
  );
}
