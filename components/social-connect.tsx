import {
  DeviceMobileIcon,
  MailIcon,
  MarkGithubIcon
} from "@primer/octicons-react";
import Avatar from "./avatar";
import Image from "./Image";
import SocialLink from "./social-link";

export default function SocialConnect() {
  return (
    <div className="flex gap-1 bg-gray-200 rounded-full w-max">
      <div className="w-16 h-16 rounded-full border-4">
        <Avatar src="/assets/profile/adrian.jpg" size={64} />
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
          <Image src="/assets/icons/linked-in.png" width={20} height={16} alt="LinkedIN Logo" style={{marginRight: "-2px"}}/>
        </SocialLink>
      </div>
    </div>
  );
}
