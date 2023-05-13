import { Post } from "@/service/post";
import PostItem from "./PostItem";

export default function PostGrid({ post }: { post: Post[] }) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {post.map((item: Post, i: number) => {
        return (
          <PostItem
            title={item.title}
            text={item.description}
            date={item.date}
            tag={item.category}
            key={i}
          />
        );
      })}
    </div>
  );
}
