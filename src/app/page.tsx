import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="bg-slate-500 rounded-full w-44 h-44">사진</div>
      <p className="mt-2">
        <b className="text-2xl">안녕하세요</b>
        <br />
        <b>프론트엔드 개발자</b>
        <br />
        <span className="text-sm">김지훈입니다.</span>
      </p>
      <Link
        href={"/contact"}
        className="bg-yellow-500 font-bold rounded-lg px-3 py-1"
      >
        contact me
      </Link>
    </main>
  );
}
