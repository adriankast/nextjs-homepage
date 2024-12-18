import Link from "next/link";

export default function News() {
  return (
    <div className="font-bold border border-black mt-2">
      <span className="absolute -m-4">📢</span>
      <span className="p-2">Welcome to my website!</span>
      <br />
      <span className="p-2">
        Check out the 🆕{" "}
        <Link href="/projects" className="underline hover:underline-offset-2">
        project section
        </Link>
      </span>
    </div>
  );
}
