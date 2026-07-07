import type { Metadata } from "next";
import { ArrowUpRight, Star, Menu, X } from "lucide-react";
import SmoothScroll from "./components/motion/SmoothScroll";
import CustomCursor from "./components/motion/CustomCursor";
import Reveal from "./components/motion/Reveal";
import Magnetic from "./components/motion/Magnetic";
import HeroTitle from "./components/motion/HeroTitle";
import WorkCard from "./components/motion/WorkCard";

// KOTA (kota.co.uk) tarzı — açık temalı kreatif web tasarım & marka ajansı.
// Gerçek site paleti: bg #efefef, siyah metin, Syne display + neutral grotesk
// gövde, magenta (#ff34f3) vurgu, pastel proje blokları. Görseller CSS placeholder.
// Full responsive; mobil menü CSS-only (peer/checkbox) → Server Component kalır.
export const metadata: Metadata = {
  title: "KOTA — Creative Web Design & Branding Agency, London & NYC",
  description:
    "We're a creative web design and branding agency based in London that crafts beautiful work for brands who refuse to blend in.",
};

const INK = "#0a0a0a";
const ACCENT = "#ff34f3";

const NAV = [
  { label: "Work", href: "#work" },
  { label: "Agency", href: "#agency" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Culture", href: "#culture" },
  { label: "Contact", href: "#contact" },
];

const BADGES = ["Digital Agency Network", "Clutch", "Awwwards", "CSSDA"];

const SERVICE_LINKS = [
  { label: "Web design & development", href: "#services" },
  { label: "Branding", href: "#services" },
  { label: "Digital marketing", href: "#services" },
];

const SERVICES = [
  {
    n: "01",
    title: "Web design & development",
    copy: "Crafting digital experiences where beauty meets ROI — creative design, development, copywriting, e-commerce and WordPress builds engineered to convert.",
    items: ["Creative design", "Development", "Copywriting", "E-commerce", "WordPress"],
    color: "#a8e1ec",
  },
  {
    n: "02",
    title: "Branding",
    copy: "It all starts with your brand. Strategy-led identities with a distinctive tone of voice and a visual system built to flex.",
    items: ["Brand strategy", "Tone of voice", "Visual identity"],
    color: "#c4b5f3",
  },
  {
    n: "03",
    title: "Digital marketing",
    copy: "Motion graphics, creative campaigns and ongoing marketing support that keeps ambitious brands moving.",
    items: ["Motion graphics", "Creative campaigns", "Marketing support"],
    color: "#efb2d9",
  },
];

const PILLARS = [
  { n: "01", title: "Design with guts", copy: "We make bold choices that help brands stand out, not blend in." },
  { n: "02", title: "Nail the process", copy: "A clear, collaborative process from kick-off to launch — no surprises." },
  { n: "03", title: "Build to flex", copy: "Scalable systems and code that grow with your business." },
  { n: "04", title: "Create to convert", copy: "Beautiful work that also does the job: turning visitors into customers." },
];

const WORK = [
  { name: "UPP", tag: "Web design & development", year: "2025", color: "#d7e1d3" },
  { name: "The Goat Agency", tag: "Branding", year: "2025", color: "#f8e5cb" },
  { name: "ISI Global", tag: "Web & branding", year: "2025", color: "#a8e1ec" },
  { name: "Incentive Games", tag: "Web design", year: "2025", color: "#c4b5f3" },
  { name: "Wogan Coffee", tag: "E-commerce", year: "2025", color: "#efb2d9" },
  { name: "Florence", tag: "Brand & web", year: "2025", color: "#d7e1d3" },
];

const RESULTS = [
  { value: "67.6%", label: "rise in engaged sessions per user after 1 month" },
  { value: "70.8%", label: "increase in average engagement time after 3 months" },
  { value: "83.1%", label: "increase in sales after 1 year" },
  { value: "104.9%", label: "increase in organic visits after 1 month" },
];

const PARTNERS = [
  "Jamie Oliver",
  "Comptoir Libanais",
  "British Red Cross",
  "Penguin",
  "Diageo",
  "Universal",
  "Nando's",
  "Sky",
];

const TESTIMONIALS = [
  {
    quote:
      "They were incredibly responsive and the quality of design blew us away. They felt like an extension of our team.",
    name: "Client Name",
    role: "Director, Company One",
  },
  {
    quote:
      "Strategic thinking paired with beautiful execution. Our new site does everything we hoped and more.",
    name: "Client Name",
    role: "Marketing Manager, Company Two",
  },
  {
    quote:
      "From branding to build, they understood exactly what we needed and delivered on every detail.",
    name: "Client Name",
    role: "Key Account Director, Company Three",
  },
  {
    quote:
      "Beyond the aesthetics, the site is incredibly functional. The CMS gives us the control we need to stay fresh.",
    name: "Client Name",
    role: "CMO, Company Four",
  },
  {
    quote:
      "It was our brand positioning work that made everything click. Empathetic, patient, quick and hugely talented.",
    name: "Client Name",
    role: "Head of Brand, Company Five",
  },
  {
    quote:
      "They've continued to support us long after launch — creative, knowledgeable and genuinely invested in our growth.",
    name: "Client Name",
    role: "Founder, Company Six",
  },
];

const POSTS = [
  { title: "Branding trends that will define the year ahead", tag: "Expertise" },
  { title: "Why great design starts with guts, not guidelines", tag: "Inspiration" },
  { title: "Inside our latest award recognition", tag: "Culture" },
  { title: "Brand-first vs dev-first: what actually sets a studio apart", tag: "Expertise" },
  { title: "10 creative websites to inspire your next design", tag: "Inspiration" },
  { title: "What your next website brief should include", tag: "Expertise" },
];

const FAQS = [
  {
    q: "How much does a project cost?",
    a: "Most of our projects sit between £30k and £150k depending on scope, complexity and the number of services involved.",
  },
  {
    q: "How long does a project take?",
    a: "A typical web design and build runs 12–14 weeks. We'll always share a clear timeline at kick-off.",
  },
  {
    q: "Can you work to a deadline?",
    a: "Yes — we regularly accommodate fixed launch dates and plan the process backwards from your deadline.",
  },
  {
    q: "What happens after launch?",
    a: "We offer ongoing support and maintenance, plus revisions and iterative improvements as your brand grows.",
  },
  {
    q: "How do you handle revisions and feedback?",
    a: "Your feedback drives every iteration. Our process is collaborative, so your voice is heard at each stage.",
  },
  {
    q: "Are marketing services an extra cost?",
    a: "We offer clear, upfront pricing for any add-on services — no surprises, whether as a package or a la carte.",
  },
];

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <div className="min-h-screen bg-[#efefef] font-sans text-[#0a0a0a] antialiased">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-black/10 bg-[#efefef]/80 backdrop-blur">
          {/* CSS-only mobil menü — peer/checkbox (server component) */}
          <input type="checkbox" id="nav-toggle" className="peer hidden" aria-hidden="true" />

          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
            <a href="#top" className="font-syne text-2xl font-extrabold tracking-tight">
              KOTA<span style={{ color: ACCENT }}>.</span>
            </a>

            <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-700 lg:flex">
              {NAV.map((n) =>
                n.label === "Services" ? (
                  <div key={n.label} className="group relative">
                    <a href={n.href} className="inline-flex items-center gap-1 transition hover:text-black">
                      {n.label}
                      <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:rotate-90" />
                    </a>
                    <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
                      <div className="rounded-2xl border border-black/10 bg-white p-2 shadow-xl">
                        {SERVICE_LINKS.map((s) => (
                          <a
                            key={s.label}
                            href={s.href}
                            className="block rounded-xl px-4 py-2.5 text-sm text-neutral-700 transition hover:bg-black/5 hover:text-black"
                          >
                            {s.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a key={n.label} href={n.href} className="transition hover:text-black">
                    {n.label}
                  </a>
                )
              )}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden text-sm font-medium text-neutral-700 transition hover:text-black sm:block"
              >
                Hire us
              </a>
              <a
                href="#contact"
                className="hidden items-center gap-1.5 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800 sm:inline-flex"
              >
                Start your project <ArrowUpRight className="h-4 w-4" />
              </a>

              <label
                htmlFor="nav-toggle"
                className="inline-flex cursor-pointer items-center justify-center rounded-full border border-black/15 p-2 text-neutral-800 transition hover:bg-black/5 lg:hidden"
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5 peer-checked:hidden" />
                <X className="hidden h-5 w-5 peer-checked:block" />
              </label>
            </div>
          </div>

          {/* Mobil açılır menü */}
          <div className="hidden border-t border-black/10 bg-[#efefef] peer-checked:block lg:!hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
              {NAV.map((n) => (
                <a
                  key={n.label}
                  href={n.href}
                  className="flex items-center justify-between border-b border-black/5 py-3 text-base font-medium text-neutral-800 transition hover:text-black"
                >
                  {n.label}
                  <ArrowUpRight className="h-4 w-4 text-neutral-400" />
                </a>
              ))}
              <a
                href="#contact"
                className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-black px-4 py-3 text-sm font-semibold text-white"
              >
                Start your project <ArrowUpRight className="h-4 w-4" />
              </a>
            </nav>
          </div>
        </header>

        <main id="top">
          {/* Hero */}
          <section className="relative overflow-hidden">
            <div
              className="pointer-events-none absolute -right-40 -top-40 h-[38rem] w-[38rem] rounded-full opacity-30 blur-3xl"
              style={{ backgroundColor: "#efb2d9" }}
            />
            <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
              <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/15 px-3 py-1 text-xs font-medium text-neutral-600">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
                Celebrating 13 years · London &amp; NYC
              </p>
              <HeroTitle
                className="max-w-6xl font-syne text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.5rem]"
                text="We're a creative web design and branding agency based in London that crafts beautiful work for brands who"
                accent="refuse to blend in."
                accentColor={ACCENT}
              />
              <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <Magnetic>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
                  >
                    Start your project <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href="#work"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-black/20 px-6 py-3 text-sm font-semibold text-black transition hover:bg-black/5"
                  >
                    See our work
                  </a>
                </Magnetic>
              </div>
              <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-neutral-500">
                {BADGES.map((b) => (
                  <span key={b}>{b}</span>
                ))}
              </div>
            </div>
          </section>

          {/* Marquee */}
          <section className="border-y border-black/10 bg-black py-6 text-white" aria-hidden="true">
            <div className="flex overflow-hidden">
              <div className="flex shrink-0 animate-ticker items-center gap-12 pr-12">
                {[...PARTNERS, ...PARTNERS].map((p, i) => (
                  <span
                    key={`${p}-${i}`}
                    className="whitespace-nowrap font-syne text-lg font-bold text-white/70"
                  >
                    {p}
                    <span className="ml-12" style={{ color: ACCENT }}>
                      ✦
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Services */}
          <section id="services" className="border-b border-black/10">
            <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
              <Reveal>
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-neutral-500">
                  What we do
                </h2>
                <p className="mb-14 max-w-3xl font-syne text-3xl font-extrabold leading-tight sm:text-5xl">
                  Three ways we help ambitious brands grow.
                </p>
              </Reveal>
              <div className="grid gap-6 md:grid-cols-3">
                {SERVICES.map((s, i) => (
                  <Reveal
                    key={s.title}
                    delay={i * 0.1}
                    className="group flex h-full flex-col rounded-[1.5rem] p-8 transition hover:-translate-y-1"
                    style={{ backgroundColor: s.color }}
                  >
                    <span className="font-syne text-2xl font-extrabold text-black/40">{s.n}</span>
                    <h3 className="mb-3 mt-6 font-syne text-2xl font-bold">{s.title}</h3>
                    <p className="mb-6 text-sm leading-relaxed text-black/70">{s.copy}</p>
                    <ul className="mb-8 space-y-1.5 text-sm text-black/80">
                      {s.items.map((it) => (
                        <li key={it} className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-black/60" />
                          {it}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-black"
                    >
                      Find out more
                      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Philosophy */}
          <section id="agency" className="border-b border-black/10">
            <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
              <Reveal>
                <h2 className="mb-14 max-w-3xl font-syne text-3xl font-extrabold leading-tight sm:text-5xl">
                  Our approach in four principles.
                </h2>
              </Reveal>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {PILLARS.map((p, i) => (
                  <Reveal key={p.n} delay={i * 0.08} className="flex flex-col border-t-2 border-black pt-5">
                    <div className="mb-4 font-syne text-5xl font-extrabold" style={{ color: ACCENT }}>
                      {p.n}
                    </div>
                    <h3 className="mb-2 font-syne text-xl font-bold">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-neutral-600">{p.copy}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Work */}
          <section id="work" className="border-b border-black/10">
            <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
              <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-neutral-500">
                    Selected work
                  </h2>
                  <p className="font-syne text-3xl font-extrabold sm:text-5xl">
                    Brands that refuse to blend in.
                  </p>
                </div>
                <a href="#contact" className="hidden text-sm font-semibold text-black underline-offset-4 hover:underline sm:inline-flex">
                  View all cases →
                </a>
              </Reveal>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {WORK.map((w, i) => (
                  <Reveal key={w.name} delay={(i % 3) * 0.08}>
                    <WorkCard name={w.name} tag={w.tag} year={w.year} color={w.color} ink={INK} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="border-b border-black/10 bg-black text-white">
            <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
              <Reveal>
                <h2 className="mb-14 max-w-3xl font-syne text-3xl font-extrabold leading-tight sm:text-5xl">
                  Work that delivers real results.
                </h2>
              </Reveal>
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {RESULTS.map((r, i) => (
                  <Reveal key={r.label} delay={i * 0.08} className="flex flex-col border-t border-white/20 pt-5">
                    <div className="font-syne text-5xl font-extrabold sm:text-6xl" style={{ color: ACCENT }}>
                      {r.value}
                    </div>
                    <p className="mt-3 text-sm text-white/60">{r.label}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Partners grid */}
          <section className="border-b border-black/10">
            <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
              <p className="mb-10 text-center text-xs uppercase tracking-widest text-neutral-500">
                Trusted by brands big and small
              </p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {PARTNERS.slice(0, 6).map((p) => (
                  <div
                    key={p}
                    className="flex items-center justify-center rounded-xl border border-black/10 py-7 text-center text-sm font-semibold text-neutral-500"
                  >
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section id="culture" className="border-b border-black/10">
            <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
              <Reveal>
                <h2 className="mb-14 font-syne text-3xl font-extrabold sm:text-5xl">
                  What our clients say.
                </h2>
              </Reveal>
              <div className="grid gap-6 lg:grid-cols-3">
                {TESTIMONIALS.map((t, i) => (
                  <Reveal
                    key={t.name}
                    delay={i * 0.1}
                    className="flex h-full flex-col rounded-[1.5rem] border border-black/10 bg-white p-8"
                  >
                    <div className="mb-5 flex gap-1">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-current" style={{ color: ACCENT }} />
                      ))}
                    </div>
                    <p className="mb-6 flex-1 text-base leading-relaxed text-neutral-800">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <footer>
                      <p className="font-syne text-sm font-bold text-black">{t.name}</p>
                      <p className="text-xs text-neutral-500">{t.role}</p>
                    </footer>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Blog */}
          <section id="blog" className="border-b border-black/10">
            <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
              <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-4">
                <h2 className="font-syne text-3xl font-extrabold sm:text-5xl">From the blog.</h2>
                <a href="#blog" className="hidden text-sm font-semibold text-black underline-offset-4 hover:underline sm:inline-flex">
                  All articles →
                </a>
              </Reveal>
              <div className="grid gap-6 md:grid-cols-3">
                {POSTS.map((post, i) => (
                  <Reveal key={post.title} delay={i * 0.1} className="h-full">
                    <a
                      href="#blog"
                      className="group flex h-full flex-col rounded-[1.5rem] border border-black/10 bg-white p-8 transition hover:-translate-y-1"
                    >
                      <span
                        className="mb-5 w-fit rounded-full border border-black/15 px-3 py-1 text-xs font-medium"
                        style={{ color: ACCENT }}
                      >
                        {post.tag}
                      </span>
                      <h3 className="mb-8 flex-1 font-syne text-xl font-bold leading-snug">{post.title}</h3>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-black">
                        Read more
                        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="border-b border-black/10">
            <div className="mx-auto max-w-4xl px-5 py-24 sm:px-8">
              <Reveal>
                <h2 className="mb-14 font-syne text-3xl font-extrabold sm:text-5xl">
                  Frequently asked questions.
                </h2>
              </Reveal>
              <Reveal className="divide-y divide-black/10 border-y border-black/10">
                {FAQS.map((f) => (
                  <details key={f.q} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-syne text-lg font-bold sm:text-xl">
                      {f.q}
                      <span
                        className="shrink-0 text-2xl leading-none transition group-open:rotate-45"
                        style={{ color: ACCENT }}
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">{f.a}</p>
                  </details>
                ))}
              </Reveal>
            </div>
          </section>

          {/* CTA / Contact */}
          <section id="contact" className="border-b border-black/10" style={{ backgroundColor: ACCENT }}>
            <div className="mx-auto max-w-7xl px-5 py-28 text-center sm:px-8">
              <Reveal>
                <h2 className="mx-auto max-w-4xl font-syne text-4xl font-extrabold leading-[1.05] sm:text-6xl">
                  Got a project in mind? Let&apos;s make something that refuses to blend in.
                </h2>
              </Reveal>
              <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <Magnetic>
                  <a
                    href="mailto:hello@kota.co.uk"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
                  >
                    hello@kota.co.uk
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href="#top"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-black/30 px-6 py-3 text-sm font-semibold text-black transition hover:bg-black/5"
                  >
                    Back to top
                  </a>
                </Magnetic>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-[#efefef]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
            <div className="grid gap-10 md:grid-cols-4">
              <div className="md:col-span-1">
                <div className="font-syne text-2xl font-extrabold">
                  KOTA<span style={{ color: ACCENT }}>.</span>
                </div>
                <p className="mt-3 max-w-xs text-sm text-neutral-600">
                  Creative web design and branding agency based in London &amp; NYC.
                </p>
                <form className="mt-6 max-w-xs">
                  <label
                    htmlFor="newsletter"
                    className="mb-2 block text-xs font-semibold uppercase tracking-widest text-neutral-500"
                  >
                    Sign up to our newsletter
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      id="newsletter"
                      type="email"
                      placeholder="you@email.com"
                      className="w-full rounded-full border border-black/15 bg-white px-4 py-2 text-sm outline-none transition focus:border-black/40"
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe"
                      className="inline-flex shrink-0 items-center justify-center rounded-full bg-black p-2.5 text-white transition hover:bg-neutral-800"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  Sectors
                </h4>
                <ul className="space-y-2 text-sm text-neutral-600">
                  {["Agencies", "SaaS", "B2B", "Healthcare", "Media", "Retail"].map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  Company
                </h4>
                <ul className="space-y-2 text-sm text-neutral-600">
                  {NAV.map((n) => (
                    <li key={n.label}>
                      <a href={n.href} className="transition hover:text-black">
                        {n.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  Say hello
                </h4>
                <a
                  href="mailto:hello@kota.co.uk"
                  className="text-sm text-neutral-700 transition hover:text-black"
                >
                  hello@kota.co.uk
                </a>
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-neutral-600">
                  {["LinkedIn", "Instagram", "Facebook", "Bluesky"].map((s) => (
                    <a key={s} href="#contact" className="transition hover:text-black">
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-6 text-xs text-neutral-500 sm:flex-row">
              <span>© 2013–2026 KOTA. All rights reserved.</span>
              <div className="flex gap-4">
                <a href="#top" className="transition hover:text-black">Privacy</a>
                <a href="#top" className="transition hover:text-black">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  );
}
