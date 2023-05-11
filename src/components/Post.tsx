import PostItem from "./PostItem";

export default function Post() {
  const data = [
    {
      title: "2023년 리뷰",
      text: "2023년을 시작하며.",
      date: "2011-05-05",
      tag: "frontend",
    },
    {
      title: "2023년 리뷰",
      text: "2023년을 시작하며.",
      date: "2011-05-05",
      tag: "frontend",
    },
    {
      title: "2023년 리뷰",
      text: "2023년을 시작하며.",
      date: "2011-05-05",
      tag: "frontend",
    },
    {
      title: "2023년 리뷰",
      text: "2023년을 시작하며.",
      date: "2011-05-05",
      tag: "frontend",
    },
    {
      title: "2023년 리뷰",
      text: "2023년을 시작하며.",
      date: "2011-05-05",
      tag: "frontend",
    },
    {
      title: "2023년 리뷰",
      text: "2023년을 시작하며.",
      date: "2011-05-05",
      tag: "frontend",
    },
    {
      title: "2023년 리뷰",
      text: "2023년을 시작하며.",
      date: "2011-05-05",
      tag: "frontend",
    },
  ];
  return (
    <div className="flex justify-center w-full mt-5">
      <div>
        <div className="font-bold">Featured Posts</div>
        <div className="grid grid-cols-4 gap-3">
          {data.map((item: any, i: number) => {
            return (
              <PostItem
                title={item.title}
                text={item.text}
                date={item.date}
                tag={item.tag}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
