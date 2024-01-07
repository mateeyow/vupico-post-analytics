import { fetchPosts } from '@/api/posts';
import { fetchUsers } from '@/api/users';
import PostCard from '@/components/PostCard';

async function getPosts() {
  const [posts, users] = await Promise.all([fetchPosts(), fetchUsers()]);

  const userMap = new Map(users.map((user) => [user.id, user]));

  return posts.map((post) => {
    const user = userMap.get(post.userId);
    return {
      ...post,
      user,
    };
  });
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className='flex flex-col mx-auto py-4 gap-3'>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}
