import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full py-5 pl-5 flex items-center">
      <div className="font-bold text-3xl">Woody's</div>
      <nav className="absolute flex right-10">
        <Link href={"/"} className="cursor-pointer hover:underline">
          home
        </Link>
        <Link href={"/about"} className="ml-5 cursor-pointer hover:underline">
          about
        </Link>
        <Link href={"/posts"} className="ml-5 cursor-pointer hover:underline">
          posts
        </Link>
        <Link href={"/contact"} className="ml-5 cursor-pointer hover:underline">
          contact
        </Link>
      </nav>
    </div>
  );
}
