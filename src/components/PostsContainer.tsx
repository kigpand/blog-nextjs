"use client";

import { Post } from "@/service/post";
import { useState } from "react";
import PostGrid from "./PostGrid";

type Props = {
  posts: Post[];
};

export default function PostsContainer({ posts }: Props) {
  const [post, setPost] = useState<Post[]>(posts);
  return (
    <section>
      <PostGrid post={post} />
    </section>
  );
}
