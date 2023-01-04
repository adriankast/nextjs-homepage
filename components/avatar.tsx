import Image from './Image'

interface Props {
  src: string;
  size: number
}

export default function Avatar({ src, size }: Props) {
  return (
    <Image
    src={src}
    width={size}
    height={size}
    className="rounded-full"
  />
  )
}
