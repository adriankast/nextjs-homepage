import Link from "next/link";

export default function News() {
  return (
    <div className="font-bold border border-black mt-2">
      <span className="absolute -m-4">📢</span>
      <span className="p-2">Welcome to my new website!</span>
      <br />
      <span className="p-2">
        Read more about it{" "}
        <Link href="/about">
          <a className="underline hover:underline-offset-2">here</a>
        </Link>
      </span>
    </div>
  );
}
