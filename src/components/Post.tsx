import { getFeaturedPosts } from "@/service/post";
import PostGrid from "./PostGrid";

export default async function Post() {
  const post = await getFeaturedPosts();
  return (
    <section>
      <h2 className="text-2xl font-bold my-2">Featured Posts</h2>
      <PostGrid post={post} />
    </section>
  );
}
