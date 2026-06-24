import { experienceEntries } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 py-24">
      <h2 className="mb-12 text-center text-5xl font-black uppercase tracking-tighter md:text-8xl">
        Experience<span className="text-neo-red">_Log</span>
      </h2>

      <div className="relative ml-4 space-y-12 border-l-4 border-black md:ml-10">
        {experienceEntries.map((entry) => (
          <div key={entry.title} className="reveal relative pl-8 md:pl-16">
            <div className={`absolute -left-[14px] top-2 h-6 w-6 border-4 border-black ${entry.accent}`} />
            <div className="border-4 border-black bg-white p-6 shadow-hard transition-all hover:shadow-hard-xl">
              <div className="mb-4 flex flex-col items-start justify-between border-b-2 border-dashed border-gray-300 pb-4 md:flex-row md:items-center">
                <h3 className="text-3xl font-black uppercase">{entry.title}</h3>
                <span className="bg-neo-black px-2 py-1 font-mono font-bold text-white">{entry.date}</span>
              </div>
              <p className={`mb-2 font-mono text-xl font-bold ${entry.orgClass}`}>{entry.org}</p>
              <ul className="list-inside list-disc space-y-1 font-mono text-gray-700">
                {entry.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
