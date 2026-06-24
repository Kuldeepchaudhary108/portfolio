export default function Navbar() {
  return (
    <nav className="pointer-events-none fixed top-0 z-50 w-full px-4 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between pointer-events-auto">
        <a
          href="#"
          className="cursor-hover border-2 border-black bg-neo-white px-4 py-1 text-2xl font-black shadow-hard transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-neo-yellow hover:shadow-none"
        >
          Kuldeep.exe
        </a>

        <div className="hidden gap-4 border-2 border-black bg-white p-2 shadow-hard md:flex">
          <a href="#about" className="cursor-hover px-3 py-1 font-mono text-sm font-bold transition-colors hover:bg-black hover:text-white">
            /ABOUT
          </a>
          <a href="#skills" className="cursor-hover px-3 py-1 font-mono text-sm font-bold transition-colors hover:bg-black hover:text-white">
            /SKILLS
          </a>
          <a href="#experience" className="cursor-hover px-3 py-1 font-mono text-sm font-bold transition-colors hover:bg-black hover:text-white">
            /LOGS
          </a>
          <a href="#projects" className="cursor-hover px-3 py-1 font-mono text-sm font-bold transition-colors hover:bg-black hover:text-white">
            /WORK
          </a>
          <a href="#contact" className="cursor-hover border border-black bg-neo-yellow px-3 py-1 font-mono text-sm font-bold transition-colors hover:bg-neo-pink">
            HIRE ME
          </a>
        </div>
      </div>
    </nav>
  );
}
