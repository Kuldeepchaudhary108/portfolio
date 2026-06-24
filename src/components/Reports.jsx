import { reportCards } from '../data';

export default function Reports() {
  const marqueeReports = [...reportCards, ...reportCards];

  return (
    <section id="reports" className="relative overflow-hidden border-t-4 border-black bg-neo-black py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 inline-flex max-w-full items-center gap-2 border-2 border-white/10 bg-white/5 p-3 shadow-hard shadow-neo-blue/20 sm:mb-16 sm:p-4">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full border border-black bg-red-500" />
            <div className="h-3 w-3 rounded-full border border-black bg-yellow-500" />
            <div className="h-3 w-3 rounded-full border border-black bg-green-500" />
          </div>
          <h2 className="ml-3 font-mono text-sm font-bold tracking-tighter text-white sm:ml-4 sm:text-xl">USER_REPORTS.txt</h2>
          <div className="ml-3 bg-neo-blue px-2 text-[9px] font-black uppercase text-black sm:ml-8 sm:text-[10px]">LIVE_FEED</div>
        </div>
      </div>

      <div className="marquee-container group cursor-hover">
        <div className="marquee-content flex select-none gap-4 px-4 py-8 sm:gap-8 sm:py-12">
          {marqueeReports.map((report, index) => (
            <div
              key={`${report.report}-${index}`}
              className="group/card relative w-[82vw] max-w-[450px] flex-shrink-0 overflow-hidden border-4 border-white/10 bg-neo-black p-5 text-left whitespace-normal shadow-hard transition-all duration-500 hover:-translate-y-2 hover:border-neo-green/50 sm:w-[450px] sm:p-8"
            >
              <div className={`absolute left-0 top-0 h-1 w-full ${report.accent}`} />
              <div className="absolute -right-4 -top-4 h-12 w-12 rotate-45 bg-white/5" />
              <div className="mb-5 flex items-start justify-between sm:mb-6">
                <div className={`font-mono text-xs font-bold uppercase tracking-widest ${report.labelClass}`}>{report.report}</div>
                <div className="font-mono text-[10px] text-gray-500">2025.txt</div>
              </div>
              <div className="mb-2 font-mono text-[10px] uppercase tracking-tight text-gray-400">{report.source}</div>
              <p className="mb-5 text-base font-bold leading-snug text-white/90 sm:mb-6 sm:text-xl">{report.quote}</p>
              <div className={`flex gap-1 text-lg ${report.starsClass}`}>
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
