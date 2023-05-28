import {
  CheckCircleIcon,
  XCircleIcon,
  KebabHorizontalIcon,
} from "@primer/octicons-react";
import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  getText: () => string;
}

function getCopyStateIcon(state: string) {
  switch (state) {
    case "success":
      return <CheckCircleIcon />;
    case "failed":
      return <XCircleIcon />;
    case "loading":
      return <KebabHorizontalIcon />;
    default:
      return "";
  }
}

export default function CopyButton({ children, getText }: Props) {
  const [copyState, setCopyState] = useState("");

  const resetCopyState = () => {
    setTimeout(() => {
      setCopyState("");
    }, 2000);
  };

  const copyPostUrl = () => {
    if (navigator?.clipboard) {
      setCopyState("loading");
      navigator.clipboard.writeText(getText()).then(
        () => {
          setCopyState("success");
          resetCopyState();
        },
        () => {
          setCopyState("failed");
          resetCopyState();
        }
      );
    }
  };

  return (
    <span
      onClick={() => {
        copyPostUrl();
      }}
      className="underline underline-offset-4 hover:underline-offset-2 cursor-pointer"
    >
      <span className="mr-2">{children}</span>
      {getCopyStateIcon(copyState)}
    </span>
  );
}
