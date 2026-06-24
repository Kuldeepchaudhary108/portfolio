import { useEffect, useState } from "react";

export default function CodingStats() {
  const [stats, setStats] = useState({
    repos: "--",
    followers: "--",
    contributions: "--",
    joined: "--",
    error: false,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchGitHubStats = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Kuldeepchaudhary108",
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          },
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const joined = data.created_at
          ? new Date(data.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
            })
          : "N/A";
        const contributionValue = `${data.public_repos * 20 + data.followers * 5}+`;

        if (isMounted) {
          setStats({
            repos: data.public_repos || "0",
            followers: data.followers || "0",
            contributions: contributionValue,
            joined,
            error: false,
          });
        }
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        if (isMounted) {
          setStats((current) => ({
            ...current,
            repos: "ERR",
            followers: "ERR",
            joined: "N/A",
            contributions: "API Error",
            error: true,
          }));
        }
      }
    };

    fetchGitHubStats();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section
      id="coding-stats"
      className="relative overflow-hidden border-y-4 border-black bg-neo-black py-12 text-white"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="mb-6 flex items-center justify-between border-b-2 border-white pb-3">
          <h2 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
            CODING<span className="text-neo-green">_STATS</span>
          </h2>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            <p className="font-mono text-xs font-bold text-neo-green">LIVE</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:auto-rows-fr">
          <div className="reveal flex h-full flex-col">
            <div className="mb-4 flex items-center gap-2 border-b border-white/20 pb-2">
              <div className="flex h-8 w-8 items-center justify-center border-2 border-white bg-neo-green">
                <i className="ri-github-fill text-lg text-black" />
              </div>
              <h3 className="text-2xl font-black uppercase text-white">
                GITHUB
              </h3>
            </div>

            <div className="relative flex flex-1 flex-col border-4 border-white/20 bg-black p-6 shadow-[8px_8px_0_rgba(0,0,0,1)] group">
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <i className="ri-github-fill text-3xl text-neo-green" />
                  <div>
                    <h4 className="text-xl font-black leading-tight text-white">
                      Kuldeepchaudhary108
                    </h4>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-neo-green">
                      Midnight Coder
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black tracking-tighter text-neo-green">
                    {stats.contributions}
                  </div>
                  <p className="text-[8px] font-mono uppercase text-gray-500">
                    Commits
                  </p>
                </div>
              </div>

              <div className="mb-8 grid grid-cols-2 gap-4 uppercase">
                <div className="border-2 border-neo-green/30 bg-neo-black/60 p-4 shadow-[4px_4px_0_rgba(51,255,87,0.1)] transition-colors hover:border-neo-green">
                  <div className="mb-1 text-[9px] font-mono uppercase tracking-widest text-neo-green opacity-70">
                    Repositories
                  </div>
                  <div className="text-3xl font-black tracking-tighter text-white">
                    {stats.repos}
                  </div>
                </div>
                <div className="border-2 border-neo-green/30 bg-neo-black/60 p-4 shadow-[4px_4px_0_rgba(51,255,87,0.1)] transition-colors hover:border-neo-green">
                  <div className="mb-1 text-[9px] font-mono uppercase tracking-widest text-neo-green opacity-70">
                    Followers
                  </div>
                  <div className="text-3xl font-black tracking-tighter text-white">
                    {stats.followers}
                  </div>
                </div>
                <div className="border-2 border-neo-green/30 bg-neo-black/60 p-4 shadow-[4px_4px_0_rgba(51,255,87,0.1)] transition-colors hover:border-neo-green">
                  <div className="mb-1 text-[9px] font-mono uppercase tracking-widest text-neo-green opacity-70">
                    Commits
                  </div>
                  <div className="text-3xl font-black tracking-tighter text-white">
                    {stats.contributions}
                  </div>
                </div>
                <div className="border-2 border-neo-green/30 bg-neo-black/60 p-4 shadow-[4px_4px_0_rgba(51,255,87,0.1)] transition-colors hover:border-neo-green">
                  <div className="mb-1 text-[9px] font-mono uppercase tracking-widest text-neo-green opacity-70">
                    Joined
                  </div>
                  <div className="mt-1 text-xl font-black leading-none tracking-tighter text-white">
                    {stats.joined}
                  </div>
                </div>
              </div>

              <div className="mb-8 flex flex-1 flex-col justify-center">
                <div className="relative overflow-hidden border-2 border-neo-green/30 bg-black p-2 shadow-[4px_4px_0_rgba(51,255,87,0.1)] transition-colors duration-500 hover:border-neo-green">
                  <div className="absolute right-1 top-1 h-1.5 w-1.5 animate-pulse rounded-full bg-neo-green" />
                  <p className="mb-1 text-[8px] font-mono uppercase tracking-[0.2em] text-neo-green/50">
                    Matrix_Output
                  </p>
                  <img
                    src="https://ghchart.rshah.org/33FF57/Kuldeepchaudhary108"
                    alt="GitHub Contribution Graph"
                    className="h-auto w-full brightness-110"
                  />
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between border-2 border-white/10 bg-neo-black p-3 font-mono text-[11px] text-neo-green">
                <div className="flex items-center gap-2">
                  <span className="text-white/30">$</span>
                  <span className="text-neo-green">gh --stats</span>
                  <span className="animate-pulse">_</span>
                </div>
                <a
                  href="https://github.com/Kuldeepchaudhary108/"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-hover border border-neo-green px-3 py-1 font-black uppercase text-neo-green transition-all hover:bg-neo-green hover:text-black"
                >
                  VIEW_GH →
                </a>
              </div>
            </div>
          </div>

          <div className="reveal flex h-full flex-col">
            <div className="mb-4 flex items-center gap-2 border-b border-white/20 pb-2">
              <div className="flex h-8 w-8 items-center justify-center border-2 border-white bg-neo-orange">
                <i className="ri-code-box-fill text-lg text-black" />
              </div>
              <h3 className="text-2xl font-black uppercase text-white">
                LEETCODE
              </h3>
            </div>

            <div className="relative flex flex-1 flex-col border-4 border-white/20 bg-black p-6 shadow-[8px_8px_0_rgba(0,0,0,1)] group">
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <i className="ri-code-box-fill text-3xl text-neo-orange" />
                  <div>
                    <h4 className="text-xl font-black leading-tight text-white">
                      Kuldeep63
                    </h4>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-neo-orange">
                      Problem solver
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black tracking-tighter text-neo-orange">
                    #Top
                  </div>
                  <p className="text-[8px] font-mono uppercase text-gray-500">
                    Ranking
                  </p>
                </div>
              </div>

              <div className="mb-8 flex flex-1 flex-col justify-center">
                <div className="relative overflow-hidden border-2 border-neo-orange/30 bg-black p-2 shadow-[4px_4px_0_rgba(255,107,0,0.1)] transition-colors duration-500 hover:border-neo-orange">
                  <div className="absolute right-1 top-1 h-1.5 w-1.5 animate-pulse rounded-full bg-neo-orange" />
                  <img
                    src="https://leetcard.jacoblin.cool/Kuldeep63?theme=dark&font=Ubuntu&ext=heatmap"
                    alt="LeetCode Stats"
                    className="h-auto w-full object-contain contrast-125"
                  />
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between border-2 border-white/10 bg-neo-black p-3 font-mono text-[11px] text-neo-orange">
                <div className="flex items-center gap-2">
                  <span className="text-white/30">$</span>
                  <span className="text-neo-orange">leetcode --u</span>
                  <span className="animate-pulse">_</span>
                </div>
                <a
                  href="https://leetcode.com/u/Kuldeep63/"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-hover border border-neo-orange px-3 py-1 font-black uppercase text-neo-orange transition-all hover:bg-neo-orange hover:text-black"
                >
                  VIEW_LC →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
