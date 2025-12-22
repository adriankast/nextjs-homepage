import NextImage, { ImageProps } from "next/image";

// opt-out of image optimization, no-op
const customLoader = ({ src }: { src: string }) => src;

export default function Image(props: ImageProps) {
  return (
    <NextImage
      {...props}
      loader={customLoader}
      unoptimized
    />
  );
}