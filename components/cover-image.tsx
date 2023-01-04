import { InfoIcon } from "@primer/octicons-react";
import cn from "classnames";
import Link from "next/link";
import Image from "./Image";

interface Props {
  title: string;
  src: string;
  slug: string | false;
  height: number;
  width: number;
  srcInfo?: string;
  srcUrl?: string;
}

export default function CoverImage({
  title,
  src,
  slug,
  height,
  width,
  srcInfo,
  srcUrl,
}: Props) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm", {
        "hover:shadow-md transition-shadow duration-200": slug,
      })}
      layout="responsive"
      width={width}
      height={height}
      priority
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
      {(srcInfo || srcUrl) && (
        <a href={srcUrl} title={srcInfo} target="_blank">
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row-reverse",
              marginTop: "-20px",
              marginLeft: "-4px",
              position: "relative",
            }}
          >
              <InfoIcon className="bg-white rounded-full" />
          </div>
        </a>
      )}
    </div>
  );
}
