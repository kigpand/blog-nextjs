import { getNonFeaturedPosts } from "@/service/post";
import PostItem from "./PostItem";
import PostGrid from "./PostGrid";
import MultiCarosel from "./MultiCarosel";

export default async function PostCarosel() {
  const posts = await getNonFeaturedPosts();
  return (
    <section className="my-4">
      <h2 className="text-2xl font-bold my-2">You May Like</h2>
      <MultiCarosel>
        {posts.map((item, i) => (
          <PostItem
            title={item.title}
            text={item.description}
            date={item.date}
            tag={item.category}
            path={item.path}
            key={i}
          />
        ))}
      </MultiCarosel>
    </section>
  );
}
