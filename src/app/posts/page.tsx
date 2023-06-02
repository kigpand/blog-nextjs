import PostsContainer from "@/components/PostsContainer";
import { getAllPosts } from "@/service/post";

export default async function PostsPage() {
  const post = await getAllPosts();
  return (
    <main>
      <PostsContainer posts={post} />
    </main>
  );
}
