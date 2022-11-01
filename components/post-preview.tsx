import DateFormatter from "../components/date-formatter";
import Link from "next/link";

export default function PostPreview({
  title,
  date,
  excerpt,
  slug,
}) {
  return (
    <div
      style={{gridTemplateColumns: "auto 1fr"}}
      className="grid gap-4 items-center"
    >
      <div className="bg-gray-700 w-3 h-3 rounded-full m-2"></div>
      <div>
        <h3 className="text-3xl mb-3 leading-snug">
          <Link href={`/posts/${slug}`}>
            <a className="hover:underline" title={excerpt}>{title}</a>
          </Link>
        </h3>
        <div className="text-lg italic">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </div>
  );
}