import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="flex justify-end gap-8 pt-6 pr-12 text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
          <div>
            <Link href={`/about`}>
              <a className="hover:underline">About</a>
            </Link>
          </div>
          <div>
            <Link href={`/posts`}>
              <a className="hover:underline">Blog</a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
