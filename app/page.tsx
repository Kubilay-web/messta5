import Link from "next/link";
import SmoothScroll from "./components/motion/SmoothScroll";
import CustomCursor from "./components/motion/CustomCursor";
import HeroTitle from "./components/motion/HeroTitle";
import Magnetic from "./components/motion/Magnetic";
import Reveal from "./components/motion/Reveal";
import Counter from "./components/motion/Counter";
import Tilt from "./components/motion/Tilt";
import WorkCard from "./components/motion/WorkCard";
import TestimonialSlider from "./components/motion/TestimonialSlider";
import SiteNav from "./components/site/SiteNav";
import EthosSection from "./components/site/EthosSection";
import LogoMarquee from "./components/site/LogoMarquee";
import Faq from "./components/site/Faq";

const PINK = "#f74ea1";

const ETHOS = [
  {
    index: "01",
    title: "Design with guts.",
    body: "We build immersive, brand-led digital experiences that wow and work hard — the kind that raise eyebrows, spark emotion and move people to act.",
    image: "https://picsum.photos/seed/kota-ethos-1/900/700",
    tint: "#f74ea1",
  },
  {
    index: "02",
    title: "Nail the process.",
    body: "We're collaborative, decisive and clear from day one. You'll feel the momentum, you'll always know where you stand, and you'll have a team that knows when to lead and when to listen.",
    image: "https://picsum.photos/seed/kota-ethos-2/900/700",
    tint: "#d8f34e",
  },
  {
    index: "03",
    title: "Build to flex.",
    body: "We're ready for your growth — in fact, we're rooting for it. Whether it's a new campaign, product or pivot, we make sure your digital presence is set up to flex with you.",
    image: "https://picsum.photos/seed/kota-ethos-3/900/700",
    tint: "#111111",
  },
  {
    index: "04",
    title: "Create to convert.",
    body: "We sweat the small stuff. From brand visuals to UX flow, every decision is intentional — designed to boost engagement, drive conversions and build brand equity.",
    image: "https://picsum.photos/seed/kota-ethos-4/900/700",
    tint: "#8ab4ff",
  },
];

const WORK = [
  { name: "arden", tag: "Brand · Web design", year: "2026", color: "#f74ea1", ink: "#0b0b0b" },
  { name: "northwind", tag: "E-commerce", year: "2025", color: "#111111", ink: "#d8f34e" },
  { name: "lumen", tag: "Brand strategy", year: "2025", color: "#d8f34e", ink: "#0b0b0b" },
  { name: "verity", tag: "Web development", year: "2024", color: "#8ab4ff", ink: "#0b0b0b" },
  { name: "solace", tag: "Digital marketing", year: "2024", color: "#ff6a3d", ink: "#0b0b0b" },
  { name: "atlas", tag: "Brand · Web design", year: "2023", color: "#1f6feb", ink: "#ffffff" },
];

const STATS = [
  { value: "104.9%", label: "Average uplift in organic sessions" },
  { value: "67.6%", label: "Increase in conversion rate" },
  { value: "13", label: "Years crafting for bold brands" },
  { value: "42", label: "Industry awards & counting" },
];

const TESTIMONIALS = [
  {
    quote:
      "Brilliant from day one. Quick to respond, a lovely group of people, with a great eye for design and detail. We're sure they'll be partners for a long time to come.",
    name: "Laura W.",
    role: "Third Generation Director",
  },
  {
    quote:
      "The brand positioning work made everything click. Empathetic, patient, flexible, quick — and incredibly talented with visual identity and digital experiences.",
    name: "Shanice D.",
    role: "Chief Marketing Officer",
  },
  {
    quote:
      "Beyond the aesthetics, the website is incredibly functional. The CMS gives us the flexibility we need to keep content fresh, and the UX has significantly improved.",
    name: "Jenny R.",
    role: "Head of Digital",
  },
  {
    quote:
      "They translated a messy brief into a clear, confident brand system. Every stakeholder was aligned by the end — rare, and genuinely valuable.",
    name: "Marcus T.",
    role: "Founder",
  },
];

const ARTICLES = [
  { cat: "Expertise, Inspiration", title: "Branding inspiration: design trends for 2026", seed: "art-1" },
  { cat: "Expertise", title: "Design with guts: a manifesto for creative bravery", seed: "art-2" },
  { cat: "Culture, Our work", title: "We win a Lovie award for Best Web Design — Aesthetic", seed: "art-3" },
  { cat: "Expertise", title: "Brand-first vs dev-first: what actually sets teams apart", seed: "art-4" },
  { cat: "Inspiration", title: "10 creative websites to inspire your next design", seed: "art-5" },
  { cat: "Inspiration", title: "Web design inspiration: 50 sites to bookmark", seed: "art-6" },
];

const FAQS = [
  {
    q: "How much does web design and development typically cost?",
    a: "The majority of our projects sit between £30k and £150k, but costs depend on the final scope of work and vary from project to project. We generally prefer to agree a fixed cost with milestone payments.",
  },
  {
    q: "How long does a project usually take?",
    a: "A web design and build typically lasts around 12–14 weeks, whereas brand-into-website-and-marketing can take six months or more. There are always ways to phase a launch around your timescales — it's always worth reaching out.",
  },
  {
    q: "Do you work with clients outside the UK?",
    a: "Yes. We partner with brands across the UK, US and Europe. Timezones are rarely an issue — clear async updates and scheduled check-ins keep everyone moving in the same direction.",
  },
  {
    q: "What happens after launch?",
    a: "We don't disappear. From performance monitoring to iterative CRO, ongoing content and campaign support, we can stay on as a long-term partner to keep your digital presence sharp.",
  },
];

const CLIENTS = [
  "Penguin",
  "Diageo",
  "Saatchi",
  "Stoli",
  "Matchroom",
  "Sonovate",
  "Tribepad",
  "Red Cross",
  "Bounce",
  "Tangerine",
];

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 17.1 15.17" className={className} aria-hidden="true">
      <path
        d="m17.1,7.58s-.01-.04-.01-.06c.01-.22-.06-.45-.24-.61L9.23.19c-.31-.27-.78-.24-1.06.07-.27.31-.24.78.07,1.06l6.26,5.52H.75c-.41,0-.75.34-.75.75s.34.75.75.75h13.74l-6.26,5.52c-.31.27-.34.75-.07,1.06.15.17.35.25.56.25.18,0,.35-.06.5-.19l7.62-6.72c.18-.16.25-.39.24-.61,0-.02.01-.04.01-.06Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <SiteNav />

      <main
        id="top"
        className="min-h-screen bg-paper font-sans text-ink [--acid:#d8f34e]"
      >
        {/* Celebrating banner */}
        <p className="pt-24 text-center text-sm text-ink/50">
          <a href="#agency" className="hover:text-ink">
            Celebrating 13 years : 2013 — 2026
          </a>
        </p>

        {/* HERO */}
        <section className="px-[7%] pb-16 pt-10 sm:pt-16">
          <HeroTitle
            className="max-w-[16ch] font-syne text-[clamp(2.6rem,7vw,7rem)] font-extrabold leading-[0.92] tracking-[-0.03em]"
            text="A creative web design and branding studio for brands who"
            accent="refuse to blend in."
            accentColor={PINK}
          />

          <div className="mt-12 flex flex-col gap-8 border-t border-ink/15 pt-8 md:flex-row md:items-end md:justify-between">
            <Reveal className="max-w-xl text-lg leading-relaxed text-ink/70">
              Brand-led. Strategically built. We craft beautiful digital work
              where beauty meets ROI — turning heads and unlocking revenue with
              every click.
            </Reveal>
            <Reveal delay={0.1}>
              <Magnetic strength={0.4}>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-medium text-paper transition-colors hover:bg-kotapink hover:text-ink"
                >
                  Start your project
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Magnetic>
            </Reveal>
          </div>
        </section>

        {/* LOGO MARQUEE */}
        <section className="border-y border-ink/15 py-8">
          <LogoMarquee items={CLIENTS} />
        </section>

        {/* ETHOS */}
        <section id="agency" className="px-[7%] py-16 sm:py-24">
          <Reveal className="mb-4 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full" style={{ background: PINK }} />
            <span className="font-syne text-sm font-bold uppercase tracking-widest text-ink/50">
              Brand-led. Strategically built.
            </span>
          </Reveal>
          <div>
            {ETHOS.map((e) => (
              <EthosSection key={e.index} {...e} />
            ))}
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="px-[7%] py-16 sm:py-24">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-syne text-sm font-bold uppercase tracking-widest text-ink/40">
                Our work
              </span>
              <h2 className="mt-3 max-w-[14ch] font-syne text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl">
                Making brands a damn site better.
              </h2>
            </div>
            <Magnetic strength={0.3}>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full border border-ink/25 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
              >
                View all work
                <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Magnetic>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {WORK.map((w) => (
              <Reveal key={w.name}>
                <WorkCard {...w} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section className="bg-ink px-[7%] py-20 text-paper sm:py-28">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <Counter
                  value={s.value}
                  className="block font-syne text-5xl font-extrabold tracking-tight text-acid sm:text-6xl"
                />
                <p className="mt-3 max-w-[22ch] text-sm text-paper/60">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="px-[7%] py-16 sm:py-24">
          <h2 className="mb-12 font-syne text-4xl font-extrabold tracking-tight sm:text-6xl">
            What our clients say
          </h2>
          <TestimonialSlider items={TESTIMONIALS} accent={PINK} />
        </section>

        {/* ARTICLES */}
        <section id="articles" className="px-[7%] py-16 sm:py-24">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="font-syne text-4xl font-extrabold tracking-tight sm:text-6xl">
              From the blog
            </h2>
            <Magnetic strength={0.3}>
              <a
                href="#articles"
                className="group hidden items-center gap-2 rounded-full border border-ink/25 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-ink hover:text-paper sm:inline-flex"
              >
                All articles
                <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Magnetic>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((a) => (
              <Reveal key={a.seed}>
                <a href="#articles" className="group block">
                  <Tilt max={4}>
                    <div className="aspect-[4/3] overflow-hidden rounded-[1.25rem]">
                      <img
                        src={`https://picsum.photos/seed/${a.seed}/800/600`}
                        alt={a.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </Tilt>
                  <p className="mt-5 text-xs uppercase tracking-widest text-ink/40">
                    {a.cat}
                  </p>
                  <h3 className="mt-2 font-syne text-xl font-bold leading-snug tracking-tight transition-colors group-hover:text-kotapink">
                    {a.title}
                  </h3>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="px-[7%] py-16 sm:py-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.4fr_1fr]">
            <h2 className="font-syne text-4xl font-extrabold tracking-tight sm:text-5xl">
              FAQs
            </h2>
            <Faq items={FAQS} />
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="mx-[3%] my-10 overflow-hidden rounded-[2rem] bg-ink px-[6%] py-24 text-paper sm:my-16 sm:py-32"
        >
          <Reveal>
            <span className="font-syne text-sm font-bold uppercase tracking-widest text-acid">
              Let&rsquo;s build something
            </span>
            <h2 className="mt-6 max-w-[18ch] font-syne text-[clamp(2.5rem,6vw,6rem)] font-extrabold leading-[0.95] tracking-tight">
              Got a project in mind? Let&rsquo;s talk.
            </h2>
            <div className="mt-10">
              <Magnetic strength={0.4}>
                <a
                  href="mailto:hello@studio.com"
                  className="group inline-flex items-center gap-3 rounded-full bg-acid px-8 py-4 font-medium text-ink"
                >
                  Start your project
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </section>

        {/* FOOTER */}
        <footer className="px-[7%] pb-10 pt-16">
          <div className="flex flex-col gap-10 border-t border-ink/15 pt-12 md:flex-row md:justify-between">
            <div>
              <a
                href="mailto:hello@studio.com"
                className="font-syne text-3xl font-bold tracking-tight transition-colors hover:text-kotapink sm:text-5xl"
              >
                hello@studio.com
              </a>
              <div className="mt-6 flex gap-6 text-sm text-ink/60">
                {["LinkedIn", "Instagram", "Facebook", "Bluesky"].map((s) => (
                  <Link key={s} href="#" className="hover:text-ink">
                    {s}
                  </Link>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
              <div className="space-y-2">
                {["Work", "Agency", "Blog", "Contact"].map((l) => (
                  <a key={l} href="#top" className="block text-ink/60 hover:text-ink">
                    {l}
                  </a>
                ))}
              </div>
              <div className="space-y-2">
                <p className="text-ink/40">Our sectors</p>
                {["SaaS & Tech", "B2B", "Healthcare", "Retail"].map((l) => (
                  <span key={l} className="block text-ink/60">
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-4 text-xs text-ink/40 sm:flex-row sm:items-center">
            <span>© STUDIO 2026</span>
            <span>Brand-led. Strategically built.</span>
          </div>
        </footer>
      </main>
    </SmoothScroll>
  );
}
