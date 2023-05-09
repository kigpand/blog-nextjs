import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full p-5 flex items-center justify-between">
      <Link href={"/"} className="font-bold text-3xl">
        Woody's
      </Link>
      <nav className="flex gap-4">
        <Link href={"/"} className="cursor-pointer hover:underline">
          home
        </Link>
        <Link href={"/about"} className="cursor-pointer hover:underline">
          about
        </Link>
        <Link href={"/posts"} className="cursor-pointer hover:underline">
          posts
        </Link>
        <Link href={"/contact"} className="cursor-pointer hover:underline">
          contact
        </Link>
      </nav>
    </header>
  );
}
