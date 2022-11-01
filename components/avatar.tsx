import Image from './Image'

interface Props {
  src: String;
  size: Number
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
