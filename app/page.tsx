const projects = [
  {
    title: "The Weekly Dough Pipeline",
    description:
      "Built a data pipeline to collect and structure viral sandwich recipes from social platforms. \
      Designed ingestion → transformation → analytics layers to extract ingredients, normalize recipes, and analyze popularity patterns. Focus: data modeling, pipeline reliability, and exploratory analytics.",
    stack: ["Python", "APIs/Scraping", "Pandas", "Data Modeling"],
    github: "https://github.com/ekilikci/the-weekly-dough-pipeline",
  },
  {
    title: "Marketing Data Pipeline Simulator",
    description:
      "An end-to-end event pipeline inspired by Braze/Salesforce-style data, from raw ingestion to curated analytics tables.",
    stack: ["Airflow", "Spark", "Delta", "Databricks"],
  },
  {
    title: "Bread Hydration Analyzer",
    description:
      "Analyzing bread recipes, hydration ratios and baking outcomes through structured recipe data.",
    stack: ["Python", "SQL", "Visualization"],
  },
];

const skills = [
  "Python",
  "SQL",
  "Spark",
  "Databricks",
  "Airflow",
  "AWS",
  "Terraform",
  "Data Modeling",
  "Data Governance",
  "Data Mesh",
  "Stakeholder Management",
];

export default function Home() {
  return (
    <main className="min-h-screen text-slate-100 overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-[#020617]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#581c87_0%,transparent_35%),radial-gradient(circle_at_20%_20%,#831843_0%,transparent_25%)] opacity-70" />

      <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <p className="font-semibold tracking-wide text-purple-200">
          Ece Kılıkçı
        </p>

        <div className="hidden md:flex gap-6 text-sm text-slate-300">
          <a className="hover:text-pink-300 transition" href="#about">
            About
          </a>
          <a className="hover:text-pink-300 transition" href="#projects">
            Projects
          </a>
          <a className="hover:text-pink-300 transition" href="#skills">
            Skills
          </a>
          <a className="hover:text-pink-300 transition" href="/resume.pdf">
            Resume
          </a>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div>
          <div className="inline-flex mb-6 rounded-full border border-purple-400/30 bg-white/5 px-4 py-2 text-sm text-purple-200 backdrop-blur">
            Data Engineer · Data Platforms · Analytics
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-7">
            Engineering reliable data systems from{" "}
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-fuchsia-300 bg-clip-text text-transparent">
              real-world signals.
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            I’m a self-taught Data Engineer with experience in marketing and
            operations data pipelines. I build practical, trusted data solutions
            with Databricks, Spark, Airflow, SQL and cloud platforms.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg shadow-purple-900/40 hover:scale-[1.02] transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="border border-white/15 bg-white/5 backdrop-blur px-6 py-3 rounded-2xl text-slate-200 hover:border-pink-300/50 transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 blur-3xl opacity-30" />
          <img
            src="/avatar.jpg"
            alt="Ece Kılıkçı"
            className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border border-purple-300/40 shadow-2xl shadow-purple-950/60"
          />
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.25em] text-pink-300 mb-4">
            About
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            From process improvement to data engineering.
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed max-w-4xl">
            My background in quality, compliance, Lean Six Sigma and data
            governance helps me bridge business needs and technical execution. I
            enjoy working closely with stakeholders, designing practical data
            solutions, and building pipelines that teams can actually trust.
          </p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
          <p className="text-sm uppercase tracking-[0.25em] text-pink-300 mb-3">
            Now
          </p>

          <ul className="text-slate-300 space-y-2">
            <li>• On parental leave, returning soon</li>
            <li>• Building personal data projects</li>
            <li>• Exploring data product / senior roles</li>
          </ul>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-sm uppercase tracking-[0.25em] text-pink-300 mb-4">
          Selected Work
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Projects with engineering, analytics and storytelling.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* {projects.map((project) => (
            
            <article
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur p-6 hover:border-pink-300/40 hover:bg-white/[0.08] transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-purple-200 group-hover:text-pink-200 transition">
                {project.title}
              </h3>

              <p className="text-slate-400 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="text-xs bg-slate-950/60 border border-white/10 text-slate-300 px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))} */}
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur p-6 hover:border-pink-300/40 hover:bg-white/[0.08] hover:scale-[1.02] transition-all duration-300"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-purple-200 group-hover:text-pink-200 transition">
                {project.title}
              </h3>
              {/* Description */}
              <p className="text-slate-400 leading-relaxed mb-6">
                {project.description}
              </p>
              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="text-xs bg-slate-950/60 border border-white/10 text-slate-300 px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {/* GitHub Button */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl 
                  bg-gradient-to-r from-purple-500 to-pink-500 text-white 
                  shadow-lg shadow-purple-900/30 
                  hover:scale-105 hover:shadow-pink-900/30 transition-all duration-300"
                >
                  View Code
                  <span className="text-lg">→</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-sm uppercase tracking-[0.25em] text-pink-300 mb-4">
          Toolbox
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Skills & focus areas
        </h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-slate-300 hover:border-purple-300/40 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 py-10 border-t border-white/10 text-slate-500">
        Engineering the data behind everyday things.
      </footer>
    </main>
  );
}
