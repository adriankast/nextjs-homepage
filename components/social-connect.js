import {
  DeviceMobileIcon,
  MailIcon,
  MarkGithubIcon,
} from "@primer/octicons-react";
import Image from "./Image";
import SocialLink from "./social-link";

export default function SocialConnect() {
  return (
    <div className="flex gap-1 bg-gray-200 rounded-full w-max">
      <div className="w-16 h-16 rounded-full border-4">
        <Image
          src="/assets/blog/authors/adrian.jpg"
          width="64"
          height="64"
          className="rounded-full"
        />
      </div>
      <div className="flex items-center z-10">
        <SocialLink title="Write a mail" link="mailto:info@adriankast.de">
          <MailIcon size={16} />
        </SocialLink>
        <SocialLink title="Give me a call" link="tel:+4915678673195">
          <DeviceMobileIcon size={16} />
        </SocialLink>
        <SocialLink title="Code on Github" link="https://github.com/adriankast">
          <MarkGithubIcon size={16} />
        </SocialLink>
        <SocialLink
          title="Connect via LinkedIn"
          link="https://www.linkedin.com/in/adriankast/"
        >
          LI
        </SocialLink>
      </div>
    </div>
  );
}
