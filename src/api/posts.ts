import { fetchJSON } from './client';

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export type Comment = {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
};

export function fetchPosts() {
  return fetchJSON<Post[]>('posts');
}

export function fetchPostData(id: string) {
  return fetchJSON<Post>(`posts/${id}`);
}

export function fetchPostComments(id: string) {
  return fetchJSON<Comment[]>(`posts/${id}/comments`);
}
