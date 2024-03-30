import Navlink from "./navlink";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="flex justify-end gap-8 pt-6 pr-12 text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-6">
          <Navlink path="/">Home</Navlink>
          <Navlink path="/about">About</Navlink>
          <Navlink path="/posts">Blog</Navlink>
          <Navlink path="/projects">Projects</Navlink>
        </div>
      </nav>
    </header>
  );
}
