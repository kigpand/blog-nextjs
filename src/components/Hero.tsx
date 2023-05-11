import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center">
      <div className="bg-slate-500 rounded-full w-44 h-44">사진</div>
      <div className="mt-2">
        <h1 className="text-2xl font-bold">안녕하세요</h1>
        <h2 className="font-semibold">프론트엔드 개발자</h2>
        <span className="text-sm">김지훈입니다.</span>
      </div>
      <Link
        href={"/contact"}
        className="bg-yellow-500 font-bold rounded-lg px-3 py-1 mt-1"
      >
        contact me
      </Link>
    </section>
  );
}
