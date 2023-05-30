import Image from "next/image";
import Link from "next/link";

type IPostItem = {
  title: string;
  tag: string;
  text: string;
  path: string;
  date: string;
};

export default function PostItem({ title, tag, text, path, date }: IPostItem) {
  return (
    <Link href={`/posts/${path}`}>
      <article className="rounded-md overflow-hidden shadow-md hover:shadow-xl">
        <Image
          className="w-full"
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        ></Image>
        <div className="w-full py-2 flex flex-col items-center p-4">
          <time className="text-xs self-end text-gray-700">{date}</time>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="w-full truncate text-center">{text}</p>
          <div className="bg-green-200 rounded-md text-xs px-2 my-2">{tag}</div>
        </div>
      </article>
    </Link>
  );
}
