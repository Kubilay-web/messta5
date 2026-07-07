import type { Metadata } from "next";
import { ArrowUpRight, Menu, X, Plus } from "lucide-react";
import SmoothScroll from "./components/motion/SmoothScroll";
import Reveal from "./components/motion/Reveal";

/* -------------------------------------------------------------------------
   KOTA (kota.co.uk) ana sayfası — Tailwind ile birebir yeniden yazım.
   İçerik + görseller orijinal siteden (extracted zip). Palet: bg #efefef,
   siyah metin, magenta #f74ea1 vurgu, siyah "Results" bölümü. Full responsive.
--------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Web Design Agency London & NYC | Creative Digital Agency",
  description:
    "Discover KOTA, an award-winning Creative Digital Agency based in London & NYC. Experts in Web Design, Branding & Digital Marketing strategy.",
};

const ACCENT = "#f74ea1";
const CDN = "https://kota-content.b-cdn.net/app/uploads";

const NAV = [
  { label: "Work", href: "https://kota.co.uk/work/" },
  { label: "Agency", href: "https://kota.co.uk/about/" },
  { label: "Blog", href: "https://kota.co.uk/blog/" },
  { label: "Culture", href: "https://kota.co.uk/culture/" },
  { label: "Contact", href: "https://kota.co.uk/contact/" },
];

const AWARDS = [
  `${CDN}/2024/06/DAN-1-500x167.png`,
  `${CDN}/2023/10/clutch.svg`,
  `${CDN}/2023/10/awwwards.svg`,
  `${CDN}/2023/10/cssda.svg`,
];

const SERVICES = [
  {
    title: "Web design & development",
    img: `${CDN}/2023/11/creative-web-design.jpg`,
    links: ["Creative web design", "Web development", "Copywriting", "E-Commerce", "WordPress"],
    copy: "Crafting digital experiences where beauty meets ROI, turning heads and unlocking revenue potential with every click.",
    href: "https://kota.co.uk/services/web-design-development/",
  },
  {
    title: "Branding",
    img: `${CDN}/2023/11/bento3.jpg`,
    links: ["Brand strategy", "Tone of voice", "Visual identity"],
    copy: "It all starts with your brand. We use sound strategic thinking to create or elevate your brand identity, from your visuals to your voice.",
    href: "https://kota.co.uk/services/branding/",
  },
  {
    title: "Digital Marketing",
    img: `${CDN}/2023/11/back-end.jpg`,
    links: ["Motion graphics", "Creative campaigns", "Marketing support"],
    copy: "Delivering eye-catching motion graphics and campaigns that earn attention, spark emotion and increase conversions.",
    href: "https://kota.co.uk/services/digital-marketing/",
  },
];

const PILLARS = [
  {
    n: "01",
    title: "Design with guts.",
    copy: "We build immersive, brand-led digital experiences that wow and work hard. The kind that raises eyebrows, sparks emotion, and moves people to act.",
  },
  {
    n: "02",
    title: "Nail the process.",
    copy: "We're collaborative, decisive, and clear from day one. You'll feel the momentum. You'll know where you stand. You'll have a team that knows when to lead, and when to listen.",
  },
  {
    n: "03",
    title: "Build to flex.",
    copy: "We're ready for your growth. In fact, we're rooting for it. Whether it's a new campaign, product, or pivot, we make sure your digital presence is set up to flex with you.",
  },
  {
    n: "04",
    title: "Create to convert.",
    copy: "We sweat the small stuff. From brand visuals to UX flow, every decision is intentional—designed to boost engagement, drive conversions, and build brand equity.",
  },
];

const WORK = [
  {
    name: "UPP",
    year: "2025",
    desc: "We crafted a cinematic web experience for a Hollywood powerhouse.",
    tags: ["Web design & development", "Agencies"],
    img: `${CDN}/2025/07/UPP-V2.png`,
    href: "https://kota.co.uk/work/upp/",
  },
  {
    name: "The Goat Agency",
    year: "2025",
    desc: "Influence everywhere: a future-ready website for The Goat Agency.",
    tags: ["Web design & development", "Agencies"],
    img: `${CDN}/2025/08/GOAT-FeaturedImage.png`,
    href: "https://kota.co.uk/work/",
  },
  {
    name: "ISI Global",
    year: "2025",
    desc: "We revamped this global design agency's digital identity.",
    tags: ["Branding", "Web design & development", "Agencies", "Retail"],
    img: `${CDN}/2025/02/hero.webp`,
    href: "https://kota.co.uk/work/isi-global/",
  },
  {
    name: "Incentive Games",
    year: "2025",
    desc: "We designed for play with Incentive Games' new website.",
    tags: ["Web design & development", "B2B tech, software & SaaS"],
    img: `${CDN}/2025/04/ig-featured-mobile.jpg`,
    href: "https://kota.co.uk/work/incentive-games/",
  },
  {
    name: "Wogan Coffee",
    year: "2023",
    desc: "We completely transformed the image of Bristol's finest coffee company.",
    tags: ["Branding", "Web design & development", "E-Commerce", "Digital Marketing", "Retail"],
    img: `${CDN}/2023/10/wogan-featured-2.jpg`,
    href: "https://kota.co.uk/work/wogan-coffee/",
  },
];

const RESULTS = [
  { value: "67.6%", label: "rise in engaged sessions per user after 1 month.", logo: `${CDN}/2025/04/Pison-Logo-White.svg`, href: "https://kota.co.uk/work/pison/" },
  { value: "70.8%", label: "increase in average engagement time after 3 months.", logo: `${CDN}/2025/04/DKA-Logo-White.svg`, href: "https://kota.co.uk/work/dka/" },
  { value: "83.14%", label: "increase in sales after 1 year.", logo: `${CDN}/2025/04/Wogan-Logo-White.svg`, href: "https://kota.co.uk/work/wogan-coffee/" },
  { value: "104.9%", label: "increase in organic visits after 1 month.", logo: `${CDN}/2025/04/ISI-Logo-White.svg`, href: "https://kota.co.uk/work/isi-global/" },
];

const PARTNERS = [
  "Jamie-oliver", "comptoir-libanais-1", "british-red-cross", "sym", "penguin",
  "raw", "penhaligons", "stoli", "bounce", "tangerine",
  "tribepad", "matchroom", "diageo", "sonovate", "saatchi",
].map((n) => `${CDN}/2023/10/${n}.svg`);

const TESTIMONIALS = [
  { quote: "Kota have been brilliant from day one to work with. Very quick to respond to any queries, a lovely group of people, with a great eye for design and detail. I've loved working with them so far, and I'm sure they'll be partners for much more time to come!", name: "Laura Wogan", role: "Third Generation Director" },
  { quote: "It was our brand positioning work that really made everything click. KOTA were empathetic, patient, flexible, quick, and, most importantly, incredibly talented with brand positioning, visual identity, and digital experiences. I've already recommended them twice!", name: "Shanice Daeche", role: "CMO" },
  { quote: "Beyond the aesthetics, the website is incredibly functional. The CMS gives us the flexibility and control we need to keep our content fresh and relevant, and they have significantly improved the website's UX. We couldn't be happier!", name: "Jenny Frame", role: "Marketing Manager" },
  { quote: "We needed something that would blur the lines between web, technology, and cinema, and reflect who we are: an artist-led, tech-forward company creating work at the highest level. From the very first conversations, KOTA understood that vision. It's no exaggeration to say the final product redefines what a website can be.", name: "Shaun Obanion", role: "PR Manager, Universal Production Partners" },
  { quote: "Beyond the initial launch, KOTA have continued to support us over the past 12 months with ongoing SEO, helping us build visibility and performance in a really strategic, considered way. We wouldn't hesitate to recommend KOTA to any brand looking for a smart, design-led agency that truly understands digital growth.", name: "Bianca Cristescu", role: "Key Account Director, ISI Global" },
  { quote: "As a design agency ourselves, handing responsibility for our web re-design to another creative agency needed to be well considered. We were immediately impressed by their designs and their interpretation of our brief. Nice bunch of people to work with too!", name: "Laurie Bushe", role: "Head of Marketing" },
];

const POSTS = [
  { title: "Branding inspiration: design trends for 2026", cat: "Expertise, Inspiration", img: `${CDN}/2025/11/brand-trend-2026.png` },
  { title: "Design with guts: KOTA's manifesto for creative bravery", cat: "Expertise, Inspiration", img: `${CDN}/2025/12/Design-with-guts.png` },
  { title: "KOTA wins a Lovie award for Best Web Design – Aesthetic!", cat: "Culture, Our work", img: `${CDN}/2025/11/Lovie-awards.png` },
  { title: "Brand-First vs Dev-First: What actually sets KOTA apart (and why it matters)", cat: "Expertise", img: `${CDN}/2025/10/Rebel-against-boring.png` },
  { title: "10 creative websites to inspire your next design (2025 update)", cat: "Inspiration", img: `${CDN}/2025/01/creative-web-design-inspo-2025.png` },
  { title: "Web design inspiration: 50 sites to bookmark", cat: "Inspiration", img: `${CDN}/2025/08/website-design-inspo.png` },
  { title: "Clutch names KOTA a 2024 Global Winner, Clutch Champion & Top Branding Company", cat: "Culture, Our work", img: `${CDN}/2024/06/clutch-top-branding-company-2024-1.png` },
  { title: "KOTA earns 2025 Great Place to Work Certification™ 🎉", cat: "Culture", img: `${CDN}/2024/12/Great-place-to-work-KOTA.png` },
  { title: "What your 2026 website brief should include", cat: "Expertise", img: `${CDN}/2025/11/2026-brief-template.png` },
];

const FAQS = [
  { q: "How much does web design and development typically cost?", a: "The majority of our projects sit between £30k and £150k, but project costs will depend on the final scope of work and vary from project to project. We generally prefer to agree a fixed cost with agreed milestone payments." },
  { q: "How long does a project usually take?", a: "A web design and build project can last around 12-14 weeks, whereas brand-into-website-and-marketing can take 6 months or more. There are always ways to consider business objectives (such as phased launches) so even if your timescales don't work with this, it's always worth reaching out." },
  { q: "Can your creative agency accommodate tight deadlines?", a: "Sure thing! We're ready to mobilise our design and development teams, prioritising the essentials to turn your dream site from a fast-approaching deadline into a reality. Flexibility and focus are our middle names, ensuring your project crosses the finish line." },
  { q: "What ongoing support and maintenance do you offer post-launch?", a: "SiteCare is a huge part of what we offer here at KOTA. Think of us as the guardians of your digital home, offering a suite of post-launch support and maintenance services to ensure your website continues to thrive. From regular updates to performance tuning, we're on hand to keep your site smooth, secure, and evolving along with your brand." },
  { q: "How do you handle revisions and feedback during the design process?", a: "Your feedback is the secret sauce in our design process. We welcome your thoughts, tweaks, and \"aha\" moments, incorporating them into each iteration to ensure the end product is nothing short of perfection. Our process is built on collaboration, making sure your voice is heard loud and clear at every turn." },
  { q: "Are there additional costs for digital marketing services integrated into web projects?", a: "Integrating our digital marketing services into your web project is like adding rocket fuel to your online presence. We offer clear, upfront pricing for any add-on services, ensuring you know exactly what to expect—no surprises. Whether part of a package deal or a la carte, we tailor our digital marketing solutions to fit your budget and goals." },
];

const SECTORS = ["Agencies", "SaaS and Tech", "B2B Transformation", "Healthcare", "Media & Entertainment", "Retail"];
const SOCIALS = ["LinkedIn", "Facebook", "Instagram", "Bluesky"];

/* Boşluklu (harf aralıklı) bölüm başlığı — KOTA "O u r  S e r v i c e s" tarzı */
function Spaced({ children }: { children: string }) {
  return <span className="[word-spacing:0.4em] [letter-spacing:0.35em]">{children}</span>;
}

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#efefef] font-sans text-black antialiased">
        {/* ============================ HEADER ============================ */}
        <header className="sticky top-0 z-50 border-b border-black/10 bg-[#efefef]/85 backdrop-blur">
          <input type="checkbox" id="nav" className="peer hidden" aria-hidden />
          <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-5 py-4 md:px-10">
            <a href="https://kota.co.uk" className="font-syne text-2xl font-extrabold tracking-tight">
              KOTA<span style={{ color: ACCENT }}>.</span>
            </a>

            <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-700 lg:flex">
              {NAV.map((n) => (
                <a key={n.label} href={n.href} className="transition hover:text-black">
                  {n.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a href="https://kota.co.uk/contact/" className="hidden text-sm font-medium text-neutral-700 transition hover:text-black sm:block">
                Hire us
              </a>
              <a
                href="https://kota.co.uk/start-your-project/"
                className="hidden items-center gap-1.5 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 sm:inline-flex"
              >
                Start your project <ArrowUpRight className="h-4 w-4" />
              </a>
              <label htmlFor="nav" className="inline-flex cursor-pointer items-center justify-center rounded-full border border-black/15 p-2 lg:hidden" aria-label="Menu">
                <Menu className="h-5 w-5 peer-checked:hidden" />
                <X className="hidden h-5 w-5 peer-checked:block" />
              </label>
            </div>
          </div>
          {/* Mobil menü */}
          <div className="hidden border-t border-black/10 bg-[#efefef] peer-checked:block lg:!hidden">
            <nav className="mx-auto flex max-w-[90rem] flex-col px-5 py-3">
              {NAV.map((n) => (
                <a key={n.label} href={n.href} className="flex items-center justify-between border-b border-black/5 py-3 text-base font-medium">
                  {n.label} <ArrowUpRight className="h-4 w-4 text-neutral-400" />
                </a>
              ))}
              <a href="https://kota.co.uk/start-your-project/" className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white">
                Start your project <ArrowUpRight className="h-4 w-4" />
              </a>
            </nav>
          </div>
        </header>

        <main>
          {/* ============================ HERO ============================ */}
          <section className="mx-auto max-w-[90rem] px-5 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24">
            <p className="mb-10 inline-flex items-center gap-2 rounded-full border border-black/20 px-4 py-1.5 text-xs font-medium text-neutral-600">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
              Celebrating 13 years · 2013–2026 · London &amp; NYC
            </p>
            <h1 className="max-w-[16ch] font-syne text-[2.65rem] font-extrabold leading-[0.98] tracking-tight sm:text-6xl md:max-w-[18ch] md:text-7xl lg:text-[6.5rem]">
              We&apos;re a creative web design and branding agency based in London that crafts beautiful work for brands who{" "}
              <span style={{ color: ACCENT }}>refuse to blend in.</span>
            </h1>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="https://kota.co.uk/start-your-project/" className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition hover:opacity-90">
                Start your project <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="https://kota.co.uk/work/" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/25 px-7 py-3.5 text-sm font-semibold transition hover:bg-black/5">
                See our work
              </a>
            </div>

            <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-6 opacity-80">
              {AWARDS.map((src) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={src} src={src} alt="Award" loading="lazy" className="h-8 w-auto object-contain md:h-10" />
              ))}
            </div>
          </section>

          {/* ============================ SERVICES ============================ */}
          <section id="services" className="border-t border-black/10">
            <div className="mx-auto max-w-[90rem] px-5 py-20 md:px-10 md:py-28">
              <Reveal>
                <h2 className="mb-14 font-syne text-2xl font-bold uppercase tracking-tight text-neutral-500 md:text-3xl">
                  <Spaced>Our</Spaced> <span className="text-black"><Spaced>Services</Spaced></span>
                </h2>
              </Reveal>
              <div className="grid gap-6 lg:grid-cols-3">
                {SERVICES.map((s, i) => (
                  <Reveal key={s.title} delay={i * 0.08}>
                    <a href={s.href} className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-black/10 bg-white transition hover:-translate-y-1">
                      <div className="aspect-[16/10] overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                      </div>
                      <div className="flex flex-1 flex-col p-7">
                        <h3 className="font-syne text-2xl font-bold">{s.title}</h3>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {s.links.map((l) => (
                            <span key={l} className="rounded-full border border-black/15 px-3 py-1 text-xs text-neutral-600">{l}</span>
                          ))}
                        </div>
                        <p className="mt-5 text-sm leading-relaxed text-neutral-600">{s.copy}</p>
                        <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold">
                          Find out more <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ============================ PHILOSOPHY ============================ */}
          <section id="agency" className="border-t border-black/10">
            <div className="mx-auto max-w-[90rem] px-5 py-20 md:px-10 md:py-28">
              <Reveal>
                <h2 className="max-w-[20ch] font-syne text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">
                  Brand-led. <span style={{ color: ACCENT }}>Strategically built.</span>
                </h2>
              </Reveal>
              <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                {PILLARS.map((p, i) => (
                  <Reveal key={p.n} delay={i * 0.07} className="border-t-2 border-black pt-5">
                    <div className="mb-6 font-syne text-sm font-bold tracking-widest text-neutral-400">{p.n} /</div>
                    <h3 className="mb-3 font-syne text-2xl font-bold">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-neutral-600">{p.copy}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ============================ WORK ============================ */}
          <section id="work" className="border-t border-black/10">
            <div className="mx-auto max-w-[90rem] px-5 py-20 md:px-10 md:py-28">
              <Reveal className="mb-6">
                <h2 className="font-syne text-2xl font-bold uppercase text-neutral-500 md:text-3xl">
                  <Spaced>Our</Spaced> <span className="text-black"><Spaced>Work</Spaced></span>
                </h2>
              </Reveal>
              <Reveal className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <p className="max-w-2xl font-syne text-3xl font-extrabold leading-tight md:text-5xl">
                  Making brands a damn site better.
                </p>
                <a href="https://kota.co.uk/work/" className="inline-flex w-fit items-center gap-2 rounded-full border border-black/25 px-6 py-3 text-sm font-semibold transition hover:bg-black/5">
                  View all projects <ArrowUpRight className="h-4 w-4" />
                </a>
              </Reveal>

              <div className="grid gap-10 md:grid-cols-2">
                {WORK.map((w, i) => (
                  <Reveal key={w.name} delay={(i % 2) * 0.08} className={i === 0 ? "md:col-span-2" : ""}>
                    <a href={w.href} className="group block">
                      <div className={`overflow-hidden rounded-[1.6rem] bg-neutral-200 ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={w.img} alt={w.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                      </div>
                      <div className="mt-5 flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-syne text-2xl font-bold md:text-3xl">
                            {w.name} <span className="text-neutral-400">— {w.year}</span>
                          </h3>
                          <p className="mt-2 max-w-xl text-neutral-600">{w.desc}</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {w.tags.map((t) => (
                              <span key={t} className="rounded-full border border-black/15 px-3 py-1 text-xs text-neutral-600">{t}</span>
                            ))}
                          </div>
                        </div>
                        <ArrowUpRight className="mt-1 h-6 w-6 shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ============================ RESULTS (black) ============================ */}
          <section
            className="relative border-t border-black/10 bg-black bg-cover bg-center text-white"
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.72),rgba(0,0,0,.72)), url(${CDN}/2024/05/Statistics-bg-black.jpeg)` }}
          >
            <div className="mx-auto max-w-[90rem] px-5 py-20 md:px-10 md:py-28">
              <Reveal>
                <h2 className="mb-16 font-syne text-2xl font-bold uppercase text-white/50 md:text-3xl">
                  <Spaced>Our</Spaced> <span className="text-white"><Spaced>Results</Spaced></span>
                </h2>
              </Reveal>
              <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                {RESULTS.map((r, i) => (
                  <Reveal key={r.value} delay={i * 0.07} className="border-t border-white/25 pt-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={r.logo} alt="" loading="lazy" className="mb-6 h-6 w-auto object-contain opacity-90" />
                    <div className="font-syne text-5xl font-extrabold md:text-6xl" style={{ color: ACCENT }}>{r.value}</div>
                    <p className="mt-3 text-sm text-white/60">{r.label}</p>
                    <a href={r.href} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-white/80 transition hover:text-white">
                      View project <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ============================ PARTNERS ticker ============================ */}
          <section className="border-t border-black/10 py-14">
            <p className="mb-10 text-center text-xs uppercase tracking-[0.3em] text-neutral-500">
              <Spaced>Our Partners</Spaced>
            </p>
            <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
              <div className="flex shrink-0 animate-ticker items-center gap-16 pr-16">
                {[...PARTNERS, ...PARTNERS].map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={`${src}-${i}`} src={src} alt="Partner" loading="lazy" className="h-7 w-auto shrink-0 object-contain opacity-60 grayscale md:h-9" />
                ))}
              </div>
            </div>
          </section>

          {/* ============================ TESTIMONIALS ============================ */}
          <section id="culture" className="border-t border-black/10">
            <div className="mx-auto max-w-[90rem] px-5 py-20 md:px-10 md:py-28">
              <Reveal>
                <h2 className="mb-14 font-syne text-3xl font-extrabold md:text-5xl">What our clients say</h2>
              </Reveal>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {TESTIMONIALS.map((t, i) => (
                  <Reveal key={t.name} delay={(i % 3) * 0.08} className="flex h-full flex-col rounded-[1.6rem] border border-black/10 bg-white p-8">
                    <p className="flex-1 text-[0.95rem] leading-relaxed text-neutral-800">&ldquo;{t.quote}&rdquo;</p>
                    <footer className="mt-6 border-t border-black/10 pt-5">
                      <p className="font-syne text-sm font-bold">{t.name}</p>
                      <p className="text-xs text-neutral-500">{t.role}</p>
                    </footer>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ============================ BLOG ============================ */}
          <section id="blog" className="border-t border-black/10">
            <div className="mx-auto max-w-[90rem] px-5 py-20 md:px-10 md:py-28">
              <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-4">
                <h2 className="font-syne text-3xl font-extrabold md:text-5xl">Latest articles</h2>
                <a href="https://kota.co.uk/blog/" className="inline-flex items-center gap-2 rounded-full border border-black/25 px-6 py-3 text-sm font-semibold transition hover:bg-black/5">
                  View our blog <ArrowUpRight className="h-4 w-4" />
                </a>
              </Reveal>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {POSTS.map((post, i) => (
                  <Reveal key={post.title} delay={(i % 3) * 0.08} className="h-full">
                    <a href="https://kota.co.uk/blog/" className="group flex h-full flex-col">
                      <div className="aspect-[16/10] overflow-hidden rounded-[1.4rem] bg-neutral-200">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={post.img} alt={post.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                      </div>
                      <span className="mt-5 text-xs uppercase tracking-widest" style={{ color: ACCENT }}>{post.cat}</span>
                      <h3 className="mt-2 font-syne text-xl font-bold leading-snug transition group-hover:opacity-70">{post.title}</h3>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ============================ FAQ ============================ */}
          <section className="border-t border-black/10">
            <div className="mx-auto max-w-4xl px-5 py-20 md:py-28">
              <Reveal>
                <h2 className="mb-14 font-syne text-3xl font-extrabold md:text-5xl">FAQ&apos;s</h2>
              </Reveal>
              <Reveal className="divide-y divide-black/10 border-y border-black/10">
                {FAQS.map((f) => (
                  <details key={f.q} className="group py-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-syne text-lg font-bold md:text-xl">
                      {f.q}
                      <Plus className="h-6 w-6 shrink-0 transition group-open:rotate-45" style={{ color: ACCENT }} />
                    </summary>
                    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-600">{f.a}</p>
                  </details>
                ))}
              </Reveal>
            </div>
          </section>

          {/* ============================ CTA ============================ */}
          <section id="contact" className="border-t border-black/10" style={{ backgroundColor: ACCENT }}>
            <div className="mx-auto max-w-[90rem] px-5 py-24 text-center md:px-10 md:py-32">
              <Reveal>
                <p className="mb-6 text-xs uppercase tracking-[0.3em] text-black/70">Celebrating 13 years</p>
                <h2 className="mx-auto max-w-4xl font-syne text-4xl font-extrabold leading-[1.03] md:text-7xl">
                  Got a project in mind? Let&apos;s make something that refuses to blend in.
                </h2>
              </Reveal>
              <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
                <a href="https://kota.co.uk/start-your-project/" className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90">
                  Start your project <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href="mailto:hello@kota.co.uk" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/40 px-8 py-4 text-sm font-semibold transition hover:bg-black/10">
                  hello@kota.co.uk
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* ============================ FOOTER ============================ */}
        <footer className="bg-black text-white">
          <div className="mx-auto max-w-[90rem] px-5 py-16 md:px-10 md:py-20">
            <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
              <div>
                <div className="font-syne text-3xl font-extrabold">KOTA<span style={{ color: ACCENT }}>.</span></div>
                <p className="mt-4 max-w-xs text-sm text-white/60">
                  An award-winning creative digital agency based in London &amp; NYC.
                </p>
                <form className="mt-8 max-w-sm">
                  <label htmlFor="news" className="mb-3 block text-xs font-semibold uppercase tracking-widest text-white/50">
                    Sign up to our newsletter
                  </label>
                  <div className="flex items-center gap-2 border-b border-white/25 pb-2">
                    <input id="news" type="email" placeholder="you@email.com" className="w-full bg-transparent text-sm outline-none placeholder:text-white/40" />
                    <button type="submit" aria-label="Subscribe" className="shrink-0 text-white/80 transition hover:text-white">
                      <ArrowUpRight className="h-5 w-5" />
                    </button>
                  </div>
                </form>
              </div>

              <div>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">Our sectors</h4>
                <ul className="space-y-2.5 text-sm text-white/70">
                  {SECTORS.map((s) => (
                    <li key={s}><a href="https://kota.co.uk/work/" className="transition hover:text-white">{s}</a></li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">Company</h4>
                <ul className="space-y-2.5 text-sm text-white/70">
                  {[...NAV, { label: "FAQs", href: "https://kota.co.uk/faqs/" }, { label: "Privacy Policy", href: "https://kota.co.uk/privacy-policy/" }].map((n) => (
                    <li key={n.label}><a href={n.href} className="transition hover:text-white">{n.label}</a></li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">Say hello</h4>
                <a href="mailto:hello@kota.co.uk" className="text-sm text-white/80 transition hover:text-white">hello@kota.co.uk</a>
                <div className="mt-5 flex flex-wrap gap-4 text-sm text-white/70">
                  {SOCIALS.map((s) => (
                    <a key={s} href="https://kota.co.uk/contact/" className="transition hover:text-white">{s}</a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-8 text-xs text-white/50 sm:flex-row">
              <span>© KOTA 2026</span>
              <span>Web Design Agency London &amp; NYC</span>
            </div>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  );
}
