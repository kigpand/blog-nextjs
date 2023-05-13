import Hero from "@/components/Hero";
import Post from "@/components/Post";

export default function HomePage() {
  return (
    <main>
      <Hero />
      {/* @ts-expect-error Server Component */}
      <Post />
    </main>
  );
}
