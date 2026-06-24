export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden border-b-4 border-black px-4 py-24 pt-24 sm:py-20 sm:pt-20">
      <div className="absolute left-[10%] top-1/3 hidden h-16 w-16 rotate-12 border-4 border-black bg-neo-blue shadow-hard animate-bounce lg:block" />
      <div className="absolute bottom-1/3 right-[10%] hidden h-24 w-24 rounded-full border-4 border-black bg-neo-pink shadow-hard animate-pulse lg:block" />
      <div className="pointer-events-none absolute right-8 top-20 select-none text-7xl font-black opacity-5 sm:right-20 sm:text-9xl">
        CODE
      </div>

      <div className="relative z-10 max-w-5xl text-center">
        <div className="reveal mb-6 inline-block rotate-[-2deg] border-2 border-black bg-neo-white px-4 py-1 shadow-hard">
          <span className="mr-2 bg-black px-2 font-mono font-bold text-neo-green">
            ●
          </span>
          <span className="font-mono font-bold">SYSTEM STATUS: ONLINE</span>
        </div>

        <h1 className="reveal mb-6 text-5xl font-black uppercase leading-[0.9] tracking-tighter mix-blend-darken sm:text-6xl md:text-[10vw]">
          FULL STACK
          <br />
          <span className="text-white text-stroke-black">DEVELOPER</span>
        </h1>

        <p className="reveal mx-auto mb-10 max-w-2xl rotate-1 border-2 border-black bg-neo-yellow p-4 font-mono text-sm leading-relaxed shadow-hard sm:text-lg md:text-2xl">
          I engineer scalable web platforms and AI-powered systems that actually
          solve problems. <br />
          <b>Next.js • Web3 • CI/CD • Cloud Deployment</b>
          <br />
          <b className="mt-5">• AI-Driven Automation •</b>
        </p>

        <div className="reveal flex flex-col justify-center gap-4 sm:gap-6 md:flex-row">
          <a
            href="#projects"
            className="cursor-hover border-2 border-black bg-black px-8 py-4 text-lg font-bold text-white shadow-hard transition-all hover:-translate-x-1 hover:-translate-y-1 hover:bg-neo-green hover:text-black hover:shadow-none sm:px-10 sm:py-5 sm:text-xl"
          >
            VIEW DATABASE
          </a>
          <a
            href="/Assets/Resume/Resume.pdf"
            download
            className="cursor-hover flex items-center justify-center gap-2 border-2 border-black bg-neo-white px-8 py-4 text-lg font-bold text-black shadow-hard transition-all hover:-translate-x-1 hover:-translate-y-1 hover:bg-neo-pink hover:shadow-none sm:px-10 sm:py-5 sm:text-xl"
          >
            <i className="ri-download-line" /> DOWNLOAD CV
          </a>
        </div>
      </div>
    </section>
  );
}
