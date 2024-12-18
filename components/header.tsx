import Navlink from "./navlink";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="flex justify-end gap-8 pt-6 pr-6 text-xl font-bold tracking-tight leading-tight mb-6 sm:text-2xl md:pr-12 md:text-4xl md:tracking-tighter ">
          <Navlink path="/">Home</Navlink>
          <Navlink path="/about">About</Navlink>
          <Navlink path="/posts">Blog</Navlink>
          <Navlink path="/projects">Projects</Navlink>
        </div>
      </nav>
    </header>
  );
}
