import {
  ArrowUpRight,
  Rocket,
  Cpu,
  Sparkles,
  LineChart,
  Boxes,
  ShieldCheck,
  Zap,
  Braces,
  Layers,
  Globe,
  MousePointerClick,
  TrendingUp,
  Search,
  Palette,
  Mail,
  BarChart3,
  Handshake,
  Users,
} from "lucide-react";

import SmoothScroll from "./components/motion/SmoothScroll";
import CustomCursor from "./components/motion/CustomCursor";
import ScrollProgress from "./components/site/ScrollProgress";
import SiteNav from "./components/site/SiteNav";
import HeroTitle from "./components/motion/HeroTitle";
import Reveal from "./components/motion/Reveal";
import Magnetic from "./components/motion/Magnetic";
import Counter from "./components/motion/Counter";
import Tilt from "./components/motion/Tilt";
import WorkCard from "./components/motion/WorkCard";
import EthosSection from "./components/site/EthosSection";
import TestimonialSlider from "./components/motion/TestimonialSlider";
import Faq from "./components/site/Faq";
import LogoMarquee from "./components/site/LogoMarquee";
import ContactForm from "./components/site/ContactForm";
import InvestorForm from "./components/site/InvestorForm";

import { getServerLocale } from "./lib/locale";
import type { Locale } from "./lib/i18n-routing";
import { getInvenimusPageContent } from "./lib/invenimus-page-content";
import prisma from "./lib/prisma";
import { validateRequest } from "./auth";
import { hasInvenimusRole } from "./lib/invenimus-auth";
import { STACK, pickLang } from "./components/site-i18n/invenimus-content";

// ————————————————————————————————————————————————————————————
// Invenimus — teknoloji & startup fikirlerini hayata geçiren venture studio.
// Çok dilli (TR/EN/DE): metinler invenimus-content.ts sözlüğünden, locale çerezden
// (NEXT_LOCALE) gelir. KOTA tarzı animasyon sistemi (framer-motion + lenis +
// özel imleç) korunur. Tamamen responsive tek sayfa.
// ————————————————————————————————————————————————————————————

// Dilden bağımsız görsel metadata (ikon/renk) — metin sözlükten eşleşir.
const SERVICE_ICONS = [Sparkles, Braces, Cpu, LineChart, Layers, ShieldCheck];
const MARKETING_ICONS = [TrendingUp, Search, Palette, MousePointerClick, Mail, BarChart3];
const FEATURE_ICONS = [Zap, Boxes, Globe];
const TEAM_ACCENTS = ["#f74ea1", "#d8f34e", "#7ae3c3", "#c7b8ff", "#0b0b0b", "#111827"];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export async function generateMetadata() {
  const lang = (await getServerLocale()) as Locale;
  const { seo } = await getInvenimusPageContent(lang);
  return {
    title: seo.title,
    description: seo.description,
    openGraph: seo.ogImage
      ? { title: seo.title, description: seo.description, images: [{ url: seo.ogImage }] }
      : { title: seo.title, description: seo.description },
  };
}

export default async function Page() {
  const lang = (await getServerLocale()) as Locale;
  const { copy, media } = await getInvenimusPageContent(lang);

  // Panele erişimi olan kullanıcıya (invenimusRole atanmış) admin kısayolu göster.
  const { user } = await validateRequest();
  const showAdmin = hasInvenimusRole(user?.invenimusRole, "VIEWER");
  const isLoggedIn = !!user;
  const authName = user?.displayName || user?.username || "";
  const authEmail = user?.email || "";

  // Kadromuz: admin panelinden yayınlanan üyeler varsa onları kullan, yoksa statik.
  const dbTeam = await prisma.invenimusTeamMember
    .findMany({
      where: { published: true },
      orderBy: [{ order: "asc" }, { createdAt: "asc" }],
    })
    .catch(() => []);

  const teamMembers = dbTeam.length
    ? dbTeam.map((m) => ({
        name: m.name,
        role: pickLang(m.role, lang) || m.name,
        bio: pickLang(m.bio, lang),
      }))
    : copy.team.members;

  return (
    <SmoothScroll>
      <ScrollProgress />
      <CustomCursor />
      <SiteNav showAdmin={showAdmin} isLoggedIn={isLoggedIn} />

      <main
        id="top"
        className="min-h-screen w-full overflow-x-hidden bg-paper font-sans text-ink antialiased selection:bg-acid selection:text-ink"
      >
        {/* ———————————————————————— HERO ———————————————————————— */}
        <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pt-32 md:px-[7%] md:pb-24 md:pt-36">
          {/* Animasyonlu arka plan: kayan grid + yüzen renk küreleri */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-tech-grid opacity-70" />
            <div className="absolute -left-24 top-10 h-[32rem] w-[32rem] animate-floaty rounded-full bg-kotapink/30 blur-[100px]" />
            <div className="absolute -right-16 top-1/3 h-[30rem] w-[30rem] animate-floaty-2 rounded-full bg-acid/40 blur-[110px]" />
            <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] animate-floaty-3 rounded-full bg-teal-light/30 blur-[100px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-paper/10 via-transparent to-paper" />
          </div>

          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper/60 px-4 py-2 text-sm font-medium backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-kotapink opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-kotapink" />
              </span>
              {copy.hero.badge}
            </span>
          </Reveal>

          <HeroTitle
            className="mt-8 max-w-[15ch] font-syne text-[clamp(1.5rem,6vw,6rem)] font-extrabold leading-[0.95] tracking-tight lg:max-w-5xl"
            text={copy.hero.titleLead}
            accent={copy.hero.titleAccent}
            accentColor="#f74ea1"
          />

          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <Reveal delay={0.15}>
              <p className="max-w-xl text-lg leading-relaxed text-ink/70 md:text-xl">
                {copy.hero.descA}
                <span className="font-semibold text-ink">{copy.hero.descStrong}</span>
                {copy.hero.descB}
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <Magnetic strength={0.3} className="w-full sm:w-auto">
                  <a
                    href="#contact"
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 font-medium text-paper transition-colors hover:bg-kotapink sm:w-auto sm:justify-start"
                  >
                    {copy.hero.ctaPrimary}
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                </Magnetic>
                <Magnetic strength={0.25} className="w-full sm:w-auto">
                  <a
                    href="#work"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink/25 px-7 py-4 font-medium transition-colors hover:bg-ink hover:text-paper sm:w-auto sm:justify-start"
                  >
                    <MousePointerClick className="h-5 w-5" />
                    {copy.hero.ctaSecondary}
                  </a>
                </Magnetic>
              </div>
            </Reveal>
          </div>

          {/* Teknoloji şeridi */}
          <div className="mt-16 border-t border-ink/10 pt-8">
            <p className="mb-5 text-xs font-medium uppercase tracking-widest text-ink/40">
              {copy.hero.techLabel}
            </p>
            <LogoMarquee items={STACK} />
          </div>
        </section>

        {/* ———————————————————————— STATS ———————————————————————— */}
        <section id="agency" className="border-t border-ink/10 px-5 sm:px-8 md:px-[7%] py-20 md:py-28">
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
            {copy.stats.map((s) => (
              <Reveal key={s.label}>
                <div className="flex flex-col">
                  <Counter
                    value={s.value}
                    className="font-syne text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
                  />
                  <span className="mt-3 text-sm text-ink/60">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ———————————————————————— CAPABILITIES (BENTO) ———————————————————————— */}
        <section
          id="services"
          className="relative overflow-hidden border-t border-ink/10 px-5 sm:px-8 md:px-[7%] py-20 md:py-32"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <div>
                <span className="font-syne text-sm font-bold tracking-widest text-ink/40">
                  {copy.services.eyebrow}
                </span>
                <h2 className="mt-4 max-w-2xl font-syne text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
                  {copy.services.titleA}
                  <br />
                  {copy.services.titleB}
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-sm text-lg text-ink/60">{copy.services.sub}</p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {copy.services.items.map((c, i) => {
              const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
              return (
                <Reveal key={c.title} delay={i * 0.05}>
                  <Tilt max={6} className="h-full">
                    <div className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white p-8 transition-colors hover:border-ink/30">
                      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-acid/0 blur-2xl transition-all duration-500 group-hover:bg-acid/40" />
                      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-paper transition-colors group-hover:bg-kotapink">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="mb-3 flex items-center gap-3">
                        <h3 className="font-syne text-xl font-bold tracking-tight">{c.title}</h3>
                      </div>
                      <p className="flex-1 text-[0.95rem] leading-relaxed text-ink/60">{c.body}</p>
                      <span className="mt-6 inline-flex w-fit rounded-full border border-ink/15 px-3 py-1 text-xs font-medium text-ink/50">
                        {c.tag}
                      </span>
                    </div>
                  </Tilt>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ———————————————————————— PROCESS (SCROLL REVEAL) ———————————————————————— */}
        <section className="px-5 py-8 sm:px-8 md:px-[7%] md:py-16">
          <Reveal>
            <span className="font-syne text-sm font-bold tracking-widest text-ink/40">
              {copy.process.eyebrow}
            </span>
            <h2 className="mt-4 max-w-3xl font-syne text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
              {copy.process.titleA}
              <br />
              <span className="text-aurora">{copy.process.titleAccent}</span>
            </h2>
          </Reveal>

          <div className="mt-8">
            {copy.process.items.map((p, i) => (
              <EthosSection
                key={p.title}
                index={String(i + 1).padStart(2, "0")}
                title={p.title}
                body={p.body}
                image={media.process[i]?.image}
                tint={media.process[i]?.tint}
              />
            ))}
          </div>
        </section>

        {/* ———————————————————————— DİJİTAL PAZARLAMA (NEW) ———————————————————————— */}
        <section
          id="marketing"
          className="relative overflow-hidden border-t border-ink/10 px-5 sm:px-8 md:px-[7%] py-20 md:py-32"
        >
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -right-24 top-20 h-[28rem] w-[28rem] animate-floaty-2 rounded-full bg-kotapink/20 blur-[120px]" />
            <div className="absolute -left-16 bottom-0 h-[24rem] w-[24rem] animate-floaty rounded-full bg-teal-light/20 blur-[110px]" />
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <div>
                <span className="font-syne text-sm font-bold tracking-widest text-kotapink">
                  {copy.marketing.eyebrow}
                </span>
                <h2 className="mt-4 max-w-3xl font-syne text-4xl font-bold leading-[0.98] tracking-tight sm:text-5xl md:text-6xl">
                  {copy.marketing.titleA}{" "}
                  <span className="text-aurora">{copy.marketing.titleAccent}</span>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-md text-lg text-ink/60">{copy.marketing.sub}</p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {copy.marketing.items.map((m, i) => {
              const Icon = MARKETING_ICONS[i % MARKETING_ICONS.length];
              return (
                <Reveal key={m.title} delay={(i % 3) * 0.06}>
                  <Tilt max={5} className="h-full">
                    <div className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white p-8 transition-colors hover:border-kotapink/40">
                      <div className="flex items-start justify-between">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-kotapink/10 text-kotapink transition-colors group-hover:bg-kotapink group-hover:text-paper">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="text-right">
                          <div className="font-syne text-2xl font-extrabold tracking-tight text-ink">
                            {m.metric}
                          </div>
                          <div className="text-[11px] uppercase tracking-wider text-ink/40">
                            {m.metricLabel}
                          </div>
                        </div>
                      </div>
                      <h3 className="mt-6 font-syne text-xl font-bold tracking-tight">{m.title}</h3>
                      <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink/60">
                        {m.body}
                      </p>
                    </div>
                  </Tilt>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12">
              <Magnetic strength={0.3}>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-medium text-paper transition-colors hover:bg-kotapink"
                >
                  {copy.marketing.cta}
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </section>

        {/* ———————————————————————— VENTURES / WORK ———————————————————————— */}
        <section
          id="work"
          className="border-t border-ink/10 px-5 sm:px-8 md:px-[7%] py-20 md:py-32"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <div>
                <span className="font-syne text-sm font-bold tracking-widest text-ink/40">
                  {copy.ventures.eyebrow}
                </span>
                <h2 className="mt-4 font-syne text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
                  {copy.ventures.titleA}
                  <br />
                  {copy.ventures.titleB}
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink/60 transition-colors hover:text-ink"
              >
                {copy.ventures.link}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {media.ventures.map((v, i) => (
              <Reveal key={`${v.name}-${i}`} delay={(i % 3) * 0.08}>
                <WorkCard
                  name={v.name}
                  tag={copy.ventures.tags[i]}
                  year={v.year}
                  color={v.color}
                  ink={v.ink}
                  image={v.image}
                />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ———————————————————————— FEATURE STRIP ———————————————————————— */}
        <section className="border-t border-ink/10 bg-ink px-5 sm:px-8 md:px-[7%] py-20 text-paper md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {copy.features.map((f, i) => {
              const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
              return (
                <Reveal key={f.title} delay={i * 0.08}>
                  <div className="flex flex-col">
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-acid text-ink">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-syne text-2xl font-bold tracking-tight">{f.title}</h3>
                    <p className="mt-4 leading-relaxed text-paper/60">{f.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ———————————————————————— YATIRIMCILARLA BULUŞTURMA (NEW) ———————————————————————— */}
        <section
          id="investors"
          className="relative overflow-hidden bg-ink px-5 sm:px-8 md:px-[7%] py-20 text-paper md:py-32"
        >
          <div className="pointer-events-none absolute inset-0 -z-0 opacity-60">
            <div className="absolute inset-0 bg-tech-grid opacity-20" />
            <div className="absolute right-1/4 top-0 h-[26rem] w-[26rem] animate-floaty rounded-full bg-acid/10 blur-[120px]" />
            <div className="absolute bottom-0 left-1/4 h-[24rem] w-[24rem] animate-floaty-3 rounded-full bg-kotapink/15 blur-[120px]" />
          </div>

          <div className="relative grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            {/* Sol: anlatı + adımlar + istatistik */}
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 font-syne text-sm font-bold tracking-widest text-acid">
                  <Handshake className="h-4 w-4" />
                  {copy.investors.eyebrow}
                </span>
                <h2 className="mt-4 max-w-xl font-syne text-4xl font-bold leading-[0.98] tracking-tight sm:text-5xl md:text-6xl">
                  {copy.investors.titleA}{" "}
                  <span className="text-acid">{copy.investors.titleAccent}</span>
                </h2>
                <p className="mt-6 max-w-lg text-lg text-paper/60">{copy.investors.sub}</p>
              </Reveal>

              <div className="mt-10 space-y-5">
                {copy.investors.steps.map((s, i) => (
                  <Reveal key={s.title} delay={i * 0.08}>
                    <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <span className="font-syne text-2xl font-extrabold text-acid">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-syne text-lg font-bold tracking-tight">{s.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-paper/55">{s.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                {copy.investors.stats.map((s) => (
                  <Reveal key={s.label}>
                    <div>
                      <div className="font-syne text-3xl font-extrabold tracking-tight text-paper sm:text-4xl">
                        {s.value}
                      </div>
                      <div className="mt-1 text-xs text-paper/50">{s.label}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Sağ: başvuru formu */}
            <Reveal delay={0.15}>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur sm:p-9">
                <h3 className="font-syne text-2xl font-bold tracking-tight">
                  {copy.investors.formTitle}
                </h3>
                <p className="mt-2 text-sm text-paper/55">{copy.investors.formSub}</p>
                <div className="mt-6">
                  <InvestorForm
                    copy={copy.investors}
                    isLoggedIn={isLoggedIn}
                    defaultName={authName}
                    defaultEmail={authEmail}
                    redirectTo="/#investors"
                    gateHint={copy.auth.gateHint}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ———————————————————————— TESTIMONIALS ———————————————————————— */}
        <section
          id="articles"
          className="border-t border-ink/10 px-5 sm:px-8 md:px-[7%] py-20 md:py-32"
        >
          <Reveal>
            <span className="font-syne text-sm font-bold tracking-widest text-ink/40">
              {copy.testimonials.eyebrow}
            </span>
            <h2 className="mt-4 max-w-3xl font-syne text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
              {copy.testimonials.titleA}
              <br />
              {copy.testimonials.titleB}
            </h2>
          </Reveal>

          <div className="mt-14">
            <TestimonialSlider items={copy.testimonials.items} accent="#f74ea1" />
          </div>
        </section>

        {/* ———————————————————————— KADROMUZ (NEW) ———————————————————————— */}
        <section
          id="team"
          className="border-t border-ink/10 px-5 sm:px-8 md:px-[7%] py-20 md:py-32"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <div>
                <span className="inline-flex items-center gap-2 font-syne text-sm font-bold tracking-widest text-ink/40">
                  <Users className="h-4 w-4" />
                  {copy.team.eyebrow}
                </span>
                <h2 className="mt-4 max-w-2xl font-syne text-4xl font-bold leading-[0.98] tracking-tight sm:text-5xl md:text-6xl">
                  {copy.team.titleA}{" "}
                  <span className="text-kotapink">{copy.team.titleAccent}</span>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-sm text-lg text-ink/60">{copy.team.sub}</p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 0.07}>
                <Tilt max={5} className="h-full">
                  <div className="group flex h-full flex-col rounded-[1.5rem] border border-ink/10 bg-white p-7 transition-colors hover:border-ink/30">
                    <div className="flex items-center gap-4">
                      <span
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-syne text-lg font-extrabold"
                        style={{
                          backgroundColor: TEAM_ACCENTS[i % TEAM_ACCENTS.length],
                          color:
                            TEAM_ACCENTS[i % TEAM_ACCENTS.length] === "#d8f34e" ||
                            TEAM_ACCENTS[i % TEAM_ACCENTS.length] === "#7ae3c3"
                              ? "#0b0b0b"
                              : "#efefef",
                        }}
                        aria-hidden="true"
                      >
                        {initials(m.name)}
                      </span>
                      <div>
                        <h3 className="font-syne text-lg font-bold tracking-tight">{m.name}</h3>
                        <p className="text-sm text-kotapink">{m.role}</p>
                      </div>
                    </div>
                    <p className="mt-5 text-[0.95rem] leading-relaxed text-ink/60">{m.bio}</p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>

          {/* Aramıza katıl kartı */}
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-[1.5rem] border border-ink/10 bg-ink px-8 py-8 text-paper md:flex-row md:items-center">
              <div>
                <h3 className="font-syne text-2xl font-bold tracking-tight">{copy.team.joinTitle}</h3>
                <p className="mt-2 max-w-md text-paper/60">{copy.team.joinBody}</p>
              </div>
              <Magnetic strength={0.3}>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-acid px-7 py-4 font-medium text-ink transition-transform hover:-translate-y-0.5"
                >
                  {copy.team.joinCta}
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </section>

        {/* ———————————————————————— FAQ ———————————————————————— */}
        <section className="border-t border-ink/10 px-5 sm:px-8 md:px-[7%] py-20 md:py-32">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <Reveal>
              <div className="md:sticky md:top-28">
                <span className="font-syne text-sm font-bold tracking-widest text-ink/40">
                  {copy.faq.eyebrow}
                </span>
                <h2 className="mt-4 font-syne text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl">
                  {copy.faq.titleA}
                  <br />
                  {copy.faq.titleB}
                </h2>
                <p className="mt-6 max-w-xs text-ink/60">{copy.faq.desc}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Faq items={copy.faq.items} />
            </Reveal>
          </div>
        </section>

        {/* ———————————————————————— CTA ———————————————————————— */}
        <section
          id="contact"
          className="relative overflow-hidden px-5 sm:px-8 md:px-[7%] py-24 md:py-36"
        >
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-tech-grid opacity-60" />
            <div className="absolute left-1/4 top-1/4 h-[28rem] w-[28rem] animate-floaty rounded-full bg-kotapink/25 blur-[110px]" />
            <div className="absolute bottom-0 right-1/4 h-[26rem] w-[26rem] animate-floaty-2 rounded-full bg-acid/40 blur-[110px]" />
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper/60 px-4 py-2 text-sm font-medium backdrop-blur">
                <Rocket className="h-4 w-4 text-kotapink" />
                {copy.contact.badge}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-syne text-[12vw] font-extrabold leading-[0.9] tracking-tight sm:text-7xl md:text-8xl">
                {copy.contact.title}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-8 max-w-xl text-lg text-ink/70 md:text-xl">
                {copy.contact.desc}
              </p>
            </Reveal>

            {/* Çalışan iletişim formu */}
            <Reveal delay={0.3}>
              <ContactForm
                copy={copy.contact}
                isLoggedIn={isLoggedIn}
                defaultName={authName}
                defaultEmail={authEmail}
                redirectTo="/#contact"
                gateHint={copy.auth.gateHint}
              />
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Magnetic strength={0.25}>
                  <a
                    href={`mailto:${copy.contact.email}`}
                    className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
                  >
                    <Mail className="h-4 w-4" />
                    {copy.contact.email}
                  </a>
                </Magnetic>
                <Magnetic strength={0.25}>
                  <a
                    href="#top"
                    className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
                  >
                    {copy.contact.backToTop}
                  </a>
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ———————————————————————— FOOTER ———————————————————————— */}
        <footer className="border-t border-ink/10 px-5 sm:px-8 md:px-[7%] py-12">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <span className="font-syne text-2xl font-extrabold tracking-tight">
                invenimus<span className="text-kotapink">.</span>
              </span>
              <p className="mt-2 max-w-xs text-sm text-ink/50">{copy.footer.tagline}</p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-ink/60">
              {copy.footer.links.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-ink">
                  {l.label}
                </a>
              ))}
            </div>
            <p className="text-sm text-ink/40">© {2026} {copy.footer.rights}</p>
          </div>
        </footer>
      </main>
    </SmoothScroll>
  );
}
