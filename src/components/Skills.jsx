export default function Skills() {
  const categories = [
    {
      title: "Frontend Development",
      accent: "bg-neo-blue",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Next.js (App Router)",
        "TypeScript",
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Design (Flexbox, Grid)",
        "Chart.js",
      ],
    },
    {
      title: "Backend Development",
      accent: "bg-neo-yellow",
      items: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "MongoDB",
        "Mongoose",
        "PostgreSQL",
        "Prisma ORM",
        "Authentication & Authorization",
        "NextAuth.js (GitHub, Google)",
        "Razorpay Integration",
      ],
    },
    {
      title: "Cloud & DevOps",
      accent: "bg-neo-red",
      items: [
        "AWS",
        "AWS Lambda",
        "AWS API Gateway",
        "AWS EC2",
        "AWS S3",
        "Docker",
        "Terraform",
        "Linux",
        "CI/CD",
        "PM2 Process Manager",
        "Nginx",
        "Environment Configuration",
        "Production Debugging",
      ],
    },
    {
      title: "Full-Stack & Tools",
      accent: "bg-white",
      items: [
        "Git",
        "GitHub",
        "GitLab",
        "Postman",
        "Version Control",
        "API Testing",
        "Project Documentation",
      ],
    },
    {
      title: "UI/UX & Figma",
      accent: "bg-neo-white",
      items: [
        "Figma Basics",
        "Wireframing",
        "Prototyping",
        "UI Review",
        "Usability Thinking",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-y-4 border-black bg-[#eef0f4] py-16 text-black sm:py-20"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(#d9dde4 1px, transparent 1px), linear-gradient(90deg, #d9dde4 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4">
        <div className="mb-8 flex flex-col items-center justify-between border-b-4 border-black pb-4 text-center md:mb-10 md:flex-row md:items-end md:text-left">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-black sm:text-5xl md:text-8xl">
            TECH<span className="text-neo-green">_STACK</span>
          </h2>
          <div className="mb-2 flex items-center gap-2 md:mb-4">
            <div className="h-3 w-3 animate-pulse rounded-full bg-black" />
            <p className="font-mono text-xs font-bold text-black sm:text-sm">
              /// TECHNOLOGIES &amp; EXPERTISE
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="relative border-4 border-black bg-white p-3 shadow-hard transition-transform duration-200 hover:-translate-y-1 sm:p-4"
            >
              <div className="absolute -right-1 top-2 h-full w-full border-4 border-black bg-black sm:-right-2 sm:top-3" aria-hidden="true" />
              <div className="relative z-10 border-2 border-black bg-white p-3 sm:p-4">
                <div
                  className={`mb-4 inline-block border-2 border-black px-3 py-2 font-mono text-sm font-black uppercase sm:text-lg ${category.accent} text-black`}
                >
                  {category.title}
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="border border-black bg-white px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-black shadow-[2px_2px_0_rgba(0,0,0,0.25)] sm:px-3 sm:text-[11px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t-4 border-black pt-4 font-mono text-xs text-gray-600 sm:flex-row sm:justify-between">
          <span>TOTAL_CATEGORIES: 5</span>
          <span>SKILL_CHIPS: 43</span>
        </div>
      </div>
    </section>
  );
}
