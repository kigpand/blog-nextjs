interface IPostItem {
  title: string;
  tag: string;
  text: string;
  date: string;
}

export default function PostItem({ title, tag, text, date }: IPostItem) {
  return (
    <div className="w-52">
      <div className="w-full h-32 bg-slate-400 rounded-t-lg"></div>
      <div className="w-full py-2 flex flex-col items-center shadow-lg rounded-b-lg">
        <div className="text-xs w-full text-end my-1 pr-2">{date}</div>
        <div className="font-bold text-xs">{title}</div>
        <div className="text-xs">{text}</div>
        <div className="bg-green-200 rounded-md text-xs px-1 mt-1">{tag}</div>
      </div>
    </div>
  );
}
