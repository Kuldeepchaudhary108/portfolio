export default function About() {
  return (
    <section
      id="about"
      className="relative my-12 mx-auto max-w-7xl overflow-hidden border-x-4 border-black bg-white px-4 py-16 shadow-hard-lg sm:py-20 md:py-24"
    >
      {/* <div className="absolute left-0 top-0 hidden h-48 w-48 -translate-x-1/3 -translate-y-1/3 border-4 border-black bg-neo-blue lg:block" /> */}
      {/* <div className="absolute bottom-10 right-10 hidden h-24 w-24 b lg:block" /> */}

      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
        <div className="reveal md:col-span-6 lg:col-span-5">
          <div className="relative mx-auto max-w-[560px] px-3 sm:px-0">
            <div className="absolute -left-3 -top-3 h-16 w-16 border-4 border-black bg-neo-blue shadow-hard sm:-left-6 sm:-top-6 sm:h-28 sm:w-28" />
            <div className="absolute -bottom-3 -right-3 h-16 w-16 border-4 border-black bg-neo-yellow shadow-hard sm:-bottom-6 sm:-right-6 sm:h-28 sm:w-28" />

            <div className="relative z-10 border-4 border-black bg-white p-3 shadow-hard-xl sm:p-4">
              <div className="group relative overflow-hidden border-4 border-black bg-gray-200">
                <img
                  src="/Assets/images/image.jpeg"
                  alt="Kuldeep"
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />

                <span className="absolute left-2 top-2 z-10 border-2 border-black bg-white px-2 py-1 font-mono text-[10px] font-bold text-black shadow-hard-sm sm:left-3 sm:top-3">
                  ABOUT.ME
                </span>
                <span className="absolute bottom-2 right-2 z-10 border-2 border-black bg-neo-red px-2 py-1 font-mono text-[10px] font-bold text-white shadow-hard-sm sm:bottom-3 sm:right-3">
                  LIVE_FRAME
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal flex flex-col justify-center md:col-span-6 lg:col-span-7">
          <div className="mb-3 inline-flex w-fit flex-col">
            <span className="font-mono text-sm uppercase tracking-[0.3em] text-black/70">
              WHO AM I ?
            </span>
          </div>

          <h2 className="mb-6 text-3xl font-black uppercase leading-tight sm:text-4xl md:text-6xl">
            Building Digital Experiences
          </h2>

          <p className="mb-6 max-w-3xl font-mono text-base leading-relaxed text-gray-800 sm:text-lg md:text-xl">
            I&apos;m a passionate web developer with expertise in creating
            modern, scalable web applications. With a strong foundation in both
            frontend and backend technologies, I bring ideas to life through
            clean code and intuitive design.
          </p>

          <p className="mb-8 max-w-3xl font-mono text-base leading-relaxed text-gray-700 sm:text-lg">
            When I&apos;m not coding, you&apos;ll find me exploring new
            technologies, contributing to open-source projects, or sharing
            knowledge with the developer community.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
            <div className="border-2 border-transparent bg-neo-black px-3 py-2 font-mono text-xs text-white sm:px-4 sm:text-sm">
              📍 LOCATION: Noida, India (Open Worldwide)
            </div>
            <div className="border-2 border-black bg-neo-green px-3 py-2 font-mono text-xs text-black sm:px-4 sm:text-sm">
              🟢 STATUS: AVAILABLE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
