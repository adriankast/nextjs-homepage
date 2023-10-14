import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react"
import { PRIMARY_COLOR } from "../lib/constants"

interface Props {
  children: ReactNode;
  path: string;
}

export default function Navlink({ children, path }: Props) {
  const { pathname } = useRouter();
  const disabled = path === pathname;



  return (
    <div>
      <Link
        href={path}
        aria-disabled={disabled}
        style={{textDecorationColor: disabled ? PRIMARY_COLOR : undefined}}>

        {children}

      </Link>
    </div>
  );
}
