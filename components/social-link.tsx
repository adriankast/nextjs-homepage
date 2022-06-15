interface Props {
  children: React.ReactNode;
  title: string;
  link: string;
}

export default function SocialLink({ children, title, link }: Props) {
  return (
    <a href={link} target="_blank" title={title}>
      <div className="bg-gray-700 w-12 h-12 rounded-full border border-white grid justify-center items-center -ml-3 text-white hover:border-2 transition-all">
        {children}
      </div>
    </a>
  );
}
