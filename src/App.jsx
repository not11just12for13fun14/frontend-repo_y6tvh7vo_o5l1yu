import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Database, Trophy, Rocket, Wrench, ChevronRight, NotebookPen, Cpu } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const skills = [
  { name: 'Python', level: 95 },
  { name: 'SQL', level: 95 },
  { name: 'Apache Spark', level: 90 },
  { name: 'Airflow', level: 88 },
  { name: 'dbt', level: 86 },
  { name: 'Kafka', level: 82 },
  { name: 'AWS (S3, Glue, EMR)', level: 88 },
  { name: 'Docker', level: 85 },
]

const projects = [
  {
    title: 'Telemetry Lakehouse',
    description: 'Ingested, modeled, and served 2B+ F1 telemetry events using streaming + batch on a medallion architecture.',
    tags: ['Kafka', 'Spark Streaming', 'Delta Lake', 'Databricks', 'dbt'],
    link: '#',
  },
  {
    title: 'Race Strategy Simulator',
    description: 'Feature store + ML-ready pipelines to forecast pit windows and tyre degradation under varying weather.',
    tags: ['Feast', 'Airflow', 'scikit-learn', 'S3', 'Parquet'],
    link: '#',
  },
  {
    title: 'Cost-Optimized ETL',
    description: 'Rebuilt legacy ETL to modern ELT with declarative transforms and CI, cutting costs by 37%.',
    tags: ['dbt', 'Snowflake', 'GitHub Actions', 'Great Expectations'],
    link: '#',
  },
]

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-md bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white">
        <Icon size={20} />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wide text-white/70">{label}</p>
        <p className="text-white font-semibold">{value}</p>
      </div>
    </div>
  )
}

function Progress({ label, value }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-200">{label}</span>
        <span className="text-sm text-gray-400">{value}%</span>
      </div>
      <div className="h-2 rounded bg-white/10 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Hero */}
      <section id="home" className="relative h-[100svh] w-full overflow-hidden">
        {/* Spline background */}
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Gradient overlays (don’t block Spline interaction) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950/90 to-transparent" />

        {/* Top navigation */}
        <header className="relative z-10">
          <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-sm bg-gradient-to-br from-red-600 to-red-400 shadow-lg shadow-red-600/30" />
              <div className="leading-tight">
                <p className="text-sm tracking-widest text-white/70">DATA ENGINEER</p>
                <p className="font-semibold">F1 Portfolio</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <a href="#home" className="hover:text-white">Home</a>
              <a href="#about" className="hover:text-white">About</a>
              <a href="#skills" className="hover:text-white">Skills</a>
              <a href="#projects" className="hover:text-white">Projects</a>
              <a href="#contact" className="hover:text-white">Contact</a>
              <a href="/test" className="ml-2 inline-flex items-center gap-1 text-white/70 hover:text-white">
                <Wrench size={16} /> Test
              </a>
            </nav>
          </div>
        </header>

        {/* Hero content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="mx-auto max-w-7xl px-6 w-full">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
                >
                  Building race-ready data pipelines
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300">for high-speed decisions</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="mt-5 text-white/80 max-w-xl"
                >
                  I design and operate scalable data platforms that move like a pit crew: fast, reliable, and precise. From streaming ingestion to analytics and ML, I make data a competitive advantage.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-8 flex flex-wrap items-center gap-4"
                >
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-md bg-red-600 hover:bg-red-500 px-5 py-3 font-medium shadow-lg shadow-red-600/30"
                  >
                    View Projects <ChevronRight size={18} />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 px-5 py-3 font-medium"
                  >
                    Contact Me <Mail size={18} />
                  </a>
                </motion.div>

                <div className="mt-10 grid grid-cols-3 gap-6">
                  <Stat icon={Rocket} label="Latency" value="sub-5s SLAs" />
                  <Stat icon={Database} label="Data" value="> 100 TB" />
                  <Stat icon={Trophy} label="Impact" value="+37% efficiency" />
                </div>
              </div>

              <div className="hidden lg:block">
                {/* Checkered card */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6"
                >
                  <div className="absolute -top-3 right-6 px-3 py-1 rounded bg-red-600 text-xs font-semibold">F1 — DATA OPS</div>
                  <div className="grid grid-cols-6 gap-1 mb-6 opacity-80">
                    {Array.from({ length: 48 }).map((_, i) => (
                      <div key={i} className={`h-3 ${i % 2 === 0 ? 'bg-white/15' : 'bg-white/5'}`} />
                    ))}
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Cpu size={18} className="text-red-400" />
                      <p className="text-sm text-white/80">Streaming + batch pipelines with observability-first design</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Wrench size={18} className="text-red-400" />
                      <p className="text-sm text-white/80">Infrastructure-as-code and CI/CD for reproducible analytics</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <NotebookPen size={18} className="text-red-400" />
                      <p className="text-sm text-white/80">Data contracts and quality gates to keep models on track</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold">About</h2>
              <p className="mt-4 text-white/70 max-w-3xl">
                I’m a data engineer focused on building modern, cloud-native platforms. I specialize in event-driven designs, lakehouse architectures, and reliable batch transformations that scale. My ethos is simple: measure, iterate, and keep shipping.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-6">
              <p className="text-sm text-white/60">Recent highlights</p>
              <ul className="mt-3 space-y-3 text-sm">
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-red-500" />Cut ETL costs 37% by moving to ELT + dbt</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-red-500" />Deployed streaming telemetry with 4x lower latency</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-red-500" />Standardized quality checks with Great Expectations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-bold">Skillset</h2>
            <p className="text-sm text-white/60">Built for performance like a race team</p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((s) => (
              <div key={s.name} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <Progress label={s.name} value={s.level} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-bold">Projects</h2>
            <p className="text-sm text-white/60">Selected work</p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <motion.a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3 }}
                className="group rounded-xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 block"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <div className="text-xs px-2 py-1 rounded bg-red-600/80">Case Study</div>
                </div>
                <p className="mt-3 text-white/70 text-sm">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs bg-white/10 rounded px-2 py-1 text-white/80">{t}</span>
                  ))}
                </div>
                <div className="mt-5 inline-flex items-center gap-2 text-red-400 group-hover:text-red-300">
                  Explore <ChevronRight size={16} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold">Let’s talk</h2>
              <p className="mt-3 text-white/70 max-w-2xl">
                Have a challenge where performance matters? I’m open to collaborating on data platforms, analytics engineering, and reliability for ML systems.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a href="mailto:your.email@example.com" className="inline-flex items-center gap-2 rounded-md bg-red-600 hover:bg-red-500 px-5 py-3 font-medium">
                  <Mail size={18} /> Email
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 px-5 py-3 font-medium">
                  <Github size={18} /> GitHub
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 px-5 py-3 font-medium">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <p className="text-sm text-white/60">Availability</p>
              <div className="mt-2 text-white">Part-time consulting, full-time roles by discussion</div>
              <div className="mt-6 text-sm text-white/60">Location</div>
              <div className="text-white">Remote / EU time zones</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Your Name — Data Engineer</p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <a href="/test" className="hover:text-white">System Check</a>
            <span className="h-3 w-3 rounded-full bg-red-500 shadow shadow-red-500/40" /> High-Performance Mode
          </div>
        </div>
      </footer>
    </div>
  )
}
