import { Post } from "@/service/post";
import PostItem from "./PostItem";

export default function PostGrid({ post }: { post: Post[] }) {
  return (
    <li className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {post.map((item: Post, i: number) => {
        return (
          <PostItem
            title={item.title}
            text={item.description}
            date={item.date}
            tag={item.category}
            path={item.path}
            key={i}
          />
        );
      })}
    </li>
  );
}
