import { ArrowLeftIcon, CrossReferenceIcon } from "@primer/octicons-react";
import Link from "next/link";

interface Props {
  source: string;
}

export default function PostFooter({ source }: Props) {
  return (
    <div className="max-w-4xl mx-auto">
      <ul>
        <li className="list-none">
          <Link href={source}>
            <a className="hover:underline m-4 font-bold"><CrossReferenceIcon /> Comment this Post on Notion</a>
          </Link>
        </li>
        <li className="list-none">
          <Link href="/posts">
            <a className="hover:underline m-4 font-bold">
              <ArrowLeftIcon /> back to all posts
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
