import Hero from "@/components/Hero";
import Post from "@/components/Post";
import PostCarosel from "@/components/PostCarosel";

export default function HomePage() {
  return (
    <main>
      <Hero />
      {/* @ts-expect-error Server Component */}
      <Post />
      {/* @ts-expect-error Server Component */}
      <PostCarosel />
    </main>
  );
}
