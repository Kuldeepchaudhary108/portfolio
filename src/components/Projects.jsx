import { projectCards } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="overflow-hidden border-t-4 border-black bg-neo-yellow px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <h2
          className="mb-10 text-4xl font-black uppercase tracking-tighter text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)] text-stroke-black sm:text-5xl md:mb-16 md:text-9xl"
        >
          Selected Works
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {projectCards.map((project, index) => (
            <article key={project.title} className={`reveal group bg-white border-4 border-black p-3 shadow-hard sm:p-4 ${index % 2 === 1 ? 'md:mt-20' : ''}`}>
              <div className="relative mb-5 aspect-video overflow-hidden border-2 border-black bg-black transition-all group-hover:shadow-none sm:mb-6">
                <img src={project.image} alt={project.alt} className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className={`mb-2 text-3xl font-black uppercase transition-colors glitch-hover sm:text-4xl ${project.accent}`}>{project.title}</h3>
                  <p className="mb-4 max-w-xs font-mono text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 font-mono text-xs font-bold">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-neo-black px-2 py-1 text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-hover flex h-11 w-11 items-center justify-center self-start border-2 border-black bg-neo-green shadow-hard-sm transition-all hover:bg-black hover:text-white sm:h-12 sm:w-12"
                >
                  <i className="ri-arrow-right-up-line text-2xl" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center sm:mt-24">
          <a
            href="https://github.com/Arham43-ops?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="cursor-hover inline-block border-4 border-black bg-neo-black px-8 py-4 font-mono text-base font-bold text-white shadow-hard transition-all hover:bg-neo-white hover:text-black hover:shadow-none sm:px-12 sm:py-5 sm:text-xl"
          >
            VIEW ALL REPOS ON GITHUB
          </a>
        </div>
      </div>
    </section>
  );
}
