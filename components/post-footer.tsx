import {
  ArrowLeftIcon,
  CheckCircleIcon,
  CircleIcon,
  CopilotErrorIcon,
  CopyIcon,
  CrossReferenceIcon,
  KebabHorizontalIcon,
  ShareIcon,
  XCircleIcon,
} from "@primer/octicons-react";
import Link from "next/link";
import { useState } from "react";
import CopyButton from "./copyButton";

interface Props {
  source: string;
}

function getHref() {
  return window?.location?.href ?? "";
}

export default function PostFooter({ source }: Props) {
  return (
    <div className="max-w-4xl mx-auto font-bold">
      <div className="grid gap-1 items-center" style={{gridTemplateColumns: "auto 1fr"}}>
        <ShareIcon />
        <CopyButton getText={getHref}>copy post URL</CopyButton>
        <CrossReferenceIcon />
        <Link href={source} className="hover:underline" target="_blank">
          
            comment this post on Notion
          
        </Link>
        <ArrowLeftIcon />
        <Link href="/posts" className="hover:underline">
          back to all posts
        </Link>
      </div>
    </div>
  );
}
