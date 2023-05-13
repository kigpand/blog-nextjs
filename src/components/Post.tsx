import { getAllPosts } from "@/service/post";
import PostGrid from "./PostGrid";

export default async function Post() {
  const post = await getAllPosts();
  return (
    <div style={{ width: "70% " }}>
      <div className="font-bold">Featured Posts</div>
      <PostGrid post={post} />
    </div>
  );
}
