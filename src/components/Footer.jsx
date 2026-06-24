export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-8 border-neo-green bg-black px-4 py-12 font-mono text-white sm:py-16">
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 text-center md:grid-cols-4 md:gap-12 md:text-left">
        <div className="md:col-span-2">
          <h2 className="mb-6 text-3xl font-black sm:text-4xl">KULDEEP.</h2>
          <p className="max-w-sm text-gray-400">
            Designing for the future with the raw aesthetics of the past. No cookies, no trackers, just code.
          </p>
        </div>

        <div>
          <h3 className="mb-4 border-b border-gray-700 pb-2 font-bold text-neo-green">SITEMAP</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="cursor-hover decoration-neo-pink decoration-2 hover:text-white hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="cursor-hover decoration-neo-pink decoration-2 hover:text-white hover:underline">
                Works
              </a>
            </li>
            <li>
              <a href="#about" className="cursor-hover decoration-neo-pink decoration-2 hover:text-white hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="cursor-hover decoration-neo-pink decoration-2 hover:text-white hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 border-b border-gray-700 pb-2 font-bold text-neo-green">SOCIALS</h3>
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <a href="https://leetcode.com/u/Kuldeep63/" target="_blank" rel="noreferrer" className="cursor-hover text-2xl transition-colors hover:text-neo-blue">
              <i className="ri-code-fill" />
            </a>
            <a href="https://www.instagram.com/kuldeep_chaudhary108/" target="_blank" rel="noreferrer" className="cursor-hover text-2xl transition-colors hover:text-neo-pink">
              <i className="ri-instagram-fill" />
            </a>
            <a href="https://github.com/Kuldeepchaudhary108" target="_blank" rel="noreferrer" className="cursor-hover text-2xl transition-colors hover:text-neo-yellow">
              <i className="ri-github-fill" />
            </a>
            <a href="https://www.linkedin.com/in/kuldeepchaudhary108/" target="_blank" rel="noreferrer" className="cursor-hover text-2xl transition-colors hover:text-neo-purple">
              <i className="ri-linkedin-fill" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500 sm:mt-16">
        <p>© 2026 KULDEEP.exe // SYSTEM_END</p>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 w-full select-none text-center text-[18vw] font-black leading-none text-white opacity-[0.03] sm:text-[20vw]">
        BRUTAL
      </div>
    </footer>
  );
}
