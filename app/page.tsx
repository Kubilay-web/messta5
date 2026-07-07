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

// ————————————————————————————————————————————————————————————
// Messta — teknoloji & startup fikirlerini hayata geçiren venture studio.
// KOTA tarzı animasyon sistemini (framer-motion + lenis + özel imleç) yeniden
// kullanan, tamamen responsive (mobil → masaüstü, flexbox/grid) tek sayfa.
// ————————————————————————————————————————————————————————————

const STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Prisma",
  "AWS",
  "Docker",
  "Kubernetes",
  "OpenAI",
  "Stripe",
];

const CAPABILITIES = [
  {
    icon: Sparkles,
    title: "Ürün Keşfi & Strateji",
    body: "Fikri; kullanıcı araştırması, pazar analizi ve hızlı prototiplerle test edilebilir bir ürün vizyonuna dönüştürüyoruz.",
    tag: "0–2 hafta",
  },
  {
    icon: Braces,
    title: "MVP Mühendisliği",
    body: "Ölçeklenebilir mimari, temiz kod ve modern altyapıyla ilk çalışan sürümü haftalar içinde yayına alıyoruz.",
    tag: "Full-stack",
  },
  {
    icon: Cpu,
    title: "Yapay Zeka Entegrasyonu",
    body: "LLM, RAG ve otomasyon katmanlarını ürünün içine gömerek gerçek iş değeri üreten özellikler kuruyoruz.",
    tag: "AI-native",
  },
  {
    icon: LineChart,
    title: "Büyüme & Ölçekleme",
    body: "Analitik, deney altyapısı ve performans optimizasyonuyla ürünü ilk kullanıcıdan milyonlara taşıyoruz.",
    tag: "0 → 1 → n",
  },
  {
    icon: Layers,
    title: "Tasarım Sistemi",
    body: "Marka, arayüz ve mikro-etkileşimleri tek bir ölçeklenebilir tasarım dilinde birleştiriyoruz.",
    tag: "Design ops",
  },
  {
    icon: ShieldCheck,
    title: "Güvenlik & Uyum",
    body: "Kimlik doğrulama, ödeme ve veri güvenliğini kurumsal standartlarda baştan doğru kuruyoruz.",
    tag: "Enterprise",
  },
];

const PROCESS = [
  {
    index: "01",
    title: "Keşfet",
    body: "Fikri parçalarına ayırıyor, riskleri ve fırsatları haritalayıp net bir yol planı çıkarıyoruz.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    tint: "#f74ea1",
  },
  {
    index: "02",
    title: "İnşa Et",
    body: "Tasarım ve mühendislik tek takım halinde çalışır; her hafta dokunulabilir bir sürüm teslim edilir.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    tint: "#d8f34e",
  },
  {
    index: "03",
    title: "Büyüt",
    body: "Yayına alır, veriyle öğrenir ve ürünü pazarın gerçek talebine göre hızla iterasyona sokarız.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tint: "#0b0b0b",
  },
];

const VENTURES = [
  { name: "fintra", tag: "Fintech · Ödeme altyapısı", year: "2025", color: "#d8f34e" },
  { name: "nomad", tag: "SaaS · Uzaktan ekipler", year: "2025", color: "#f74ea1" },
  { name: "medix", tag: "HealthTech · AI teşhis", year: "2024", color: "#0b0b0b", ink: "#efefef" },
  { name: "cargoo", tag: "Lojistik · Optimizasyon", year: "2024", color: "#7ae3c3" },
  { name: "lumen", tag: "EnerjiTech · IoT", year: "2023", color: "#111827", ink: "#efefef" },
  { name: "verse", tag: "Yapay zeka · Üretken içerik", year: "2023", color: "#c7b8ff" },
];

const TESTIMONIALS = [
  {
    quote:
      "Fikirden yayınlanan ürüne 9 haftada ulaştık. Messta bir ajans değil, gerçek bir kurucu ortak gibi çalıştı.",
    name: "Elif Demir",
    role: "Kurucu, Fintra",
  },
  {
    quote:
      "Yapay zeka özelliklerimizi onlar kurdu ve dönüşüm oranımız iki katına çıktı. Mühendislik kalitesi olağanüstü.",
    name: "Marco Rossi",
    role: "CTO, Nomad",
  },
  {
    quote:
      "İlk yatırım turumuzu onların hazırladığı prototiple kapattık. Hız ve titizlik nadiren bir arada olur.",
    name: "Aylin Kaya",
    role: "CEO, Medix",
  },
  {
    quote:
      "Ölçeklenme sancılarımızı 3 ayda çözdüler. Altyapımız artık 10 kat trafiği gülerek kaldırıyor.",
    name: "James Park",
    role: "VP Eng, Cargoo",
  },
];

const FAQ = [
  {
    q: "Sadece bir fikrim var, koda hiç dokunmadım. Yine de çalışır mıyız?",
    a: "Kesinlikle. Çoğu ortağımız yola bir sunum veya bir cümlelik fikirle çıkıyor. Keşif aşamasında birlikte vizyonu netleştirip yol haritasına dönüştürüyoruz.",
  },
  {
    q: "Bir MVP ne kadar sürede yayına girer?",
    a: "Kapsama göre değişse de tipik olarak 6–10 hafta içinde gerçek kullanıcıların kullanabileceği çalışan bir sürüm teslim ediyoruz.",
  },
  {
    q: "Kodun ve ürünün sahipliği kimde olur?",
    a: "Tamamı sizde. Tüm kaynak kodu, tasarım dosyaları ve altyapı ilk günden itibaren sizin mülkiyetinizdedir. İsterseniz ekibinize eksiksiz devir yaparız.",
  },
  {
    q: "Ekibinizle nasıl fiyatlandırıyorsunuz?",
    a: "Sabit kapsamlı proje, aylık retainer ve bazı seçili girişimler için hisse + nakit karması modelleri sunuyoruz. İlk görüşmede size en uygun modeli birlikte seçiyoruz.",
  },
  {
    q: "Yayından sonra desteğe devam ediyor musunuz?",
    a: "Evet. Büyüme aşamasında yanınızdayız: yeni özellikler, ölçekleme, performans ve ekibinizin işe alımına kadar destek veriyoruz.",
  },
];

export default function Page() {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <CustomCursor />
      <SiteNav />

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
              Venture Studio · 2026 için sıra sınırlı
            </span>
          </Reveal>

          <HeroTitle
            className="mt-8 max-w-[15ch] font-syne text-[clamp(1.5rem,6vw,6rem)] font-extrabold leading-[0.95] tracking-tight lg:max-w-5xl"
            text="Fikirleri çalışan"
            accent="ürünlere dönüştürüyoruz."
            accentColor="#f74ea1"
          />

          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <Reveal delay={0.15}>
              <p className="max-w-xl text-lg leading-relaxed text-ink/70 md:text-xl">
                Messta; teknoloji ve startup fikirlerini strateji, tasarım ve
                mühendislikle birleştirip{" "}
                <span className="font-semibold text-ink">
                  haftalar içinde yayına alan
                </span>{" "}
                bir venture studio&apos;dur.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <Magnetic strength={0.3} className="w-full sm:w-auto">
                  <a
                    href="#contact"
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 font-medium text-paper transition-colors hover:bg-kotapink sm:w-auto sm:justify-start"
                  >
                    Fikrini anlat
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                </Magnetic>
                <Magnetic strength={0.25} className="w-full sm:w-auto">
                  <a
                    href="#work"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink/25 px-7 py-4 font-medium transition-colors hover:bg-ink hover:text-paper sm:w-auto sm:justify-start"
                  >
                    <MousePointerClick className="h-5 w-5" />
                    Çalışmalarımız
                  </a>
                </Magnetic>
              </div>
            </Reveal>
          </div>

          {/* Teknoloji şeridi */}
          <div className="mt-16 border-t border-ink/10 pt-8">
            <p className="mb-5 text-xs font-medium uppercase tracking-widest text-ink/40">
              Kullandığımız teknolojiler
            </p>
            <LogoMarquee items={STACK} />
          </div>
        </section>

        {/* ———————————————————————— STATS ———————————————————————— */}
        <section id="agency" className="border-t border-ink/10 px-5 sm:px-8 md:px-[7%] py-20 md:py-28">
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
            {[
              { value: "120+", label: "Yayınlanan ürün" },
              { value: "48M", label: "Toplam kullanıcı erişimi", suffix: "" },
              { value: "9", label: "Ortalama hafta / MVP" },
              { value: "98%", label: "Tekrar çalışma oranı" },
            ].map((s) => (
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
                  NE YAPIYORUZ /
                </span>
                <h2 className="mt-4 max-w-2xl font-syne text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
                  Fikirden ölçeğe kadar
                  <br />
                  tek çatı altında.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-sm text-lg text-ink/60">
                Strateji, tasarım, mühendislik ve büyüme — dağınık ekiplerle
                değil, tek entegre bir takımla.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <Tilt max={6} className="h-full">
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white p-8 transition-colors hover:border-ink/30">
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-acid/0 blur-2xl transition-all duration-500 group-hover:bg-acid/40" />
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-paper transition-colors group-hover:bg-kotapink">
                      <c.icon className="h-6 w-6" />
                    </div>
                    <div className="mb-3 flex items-center gap-3">
                      <h3 className="font-syne text-xl font-bold tracking-tight">
                        {c.title}
                      </h3>
                    </div>
                    <p className="flex-1 text-[0.95rem] leading-relaxed text-ink/60">
                      {c.body}
                    </p>
                    <span className="mt-6 inline-flex w-fit rounded-full border border-ink/15 px-3 py-1 text-xs font-medium text-ink/50">
                      {c.tag}
                    </span>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ———————————————————————— PROCESS (SCROLL REVEAL) ———————————————————————— */}
        <section className="px-5 py-8 sm:px-8 md:px-[7%] md:py-16">
          <Reveal>
            <span className="font-syne text-sm font-bold tracking-widest text-ink/40">
              NASIL ÇALIŞIYORUZ /
            </span>
            <h2 className="mt-4 max-w-3xl font-syne text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
              Üç adımda, sıfırdan
              <br />
              <span className="text-aurora">ölçeğe.</span>
            </h2>
          </Reveal>

          <div className="mt-8">
            {PROCESS.map((p) => (
              <EthosSection
                key={p.index}
                index={p.index}
                title={p.title}
                body={p.body}
                image={p.image}
                tint={p.tint}
              />
            ))}
          </div>
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
                  PORTFÖY /
                </span>
                <h2 className="mt-4 font-syne text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
                  Hayata geçirdiğimiz
                  <br />
                  girişimler.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink/60 transition-colors hover:text-ink"
              >
                Sıradaki senin olabilir
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {VENTURES.map((v, i) => (
              <Reveal key={v.name} delay={(i % 3) * 0.08}>
                <WorkCard
                  name={v.name}
                  tag={v.tag}
                  year={v.year}
                  color={v.color}
                  ink={v.ink}
                />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ———————————————————————— FEATURE STRIP ———————————————————————— */}
        <section className="border-t border-ink/10 bg-ink px-5 sm:px-8 md:px-[7%] py-20 text-paper md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Hız takıntısı",
                body: "İlk çalışan sürüm haftalarla ölçülür, aylarla değil. Her hafta gerçek ilerleme görürsün.",
              },
              {
                icon: Boxes,
                title: "Ürün + kurucu zihniyeti",
                body: "Sadece kod yazmıyoruz; işini, kullanıcını ve büyüme motorunu birlikte tasarlıyoruz.",
              },
              {
                icon: Globe,
                title: "Ölçeğe hazır mimari",
                body: "İlk kullanıcı için de milyonuncu kullanıcı için de aynı sağlam temeli kuruyoruz.",
              },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="flex flex-col">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-acid text-ink">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-syne text-2xl font-bold tracking-tight">
                    {f.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-paper/60">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ———————————————————————— TESTIMONIALS ———————————————————————— */}
        <section
          id="articles"
          className="border-t border-ink/10 px-5 sm:px-8 md:px-[7%] py-20 md:py-32"
        >
          <Reveal>
            <span className="font-syne text-sm font-bold tracking-widest text-ink/40">
              KURUCULAR NE DİYOR /
            </span>
            <h2 className="mt-4 max-w-3xl font-syne text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
              Birlikte kurduğumuz
              <br />
              hikâyeler.
            </h2>
          </Reveal>

          <div className="mt-14">
            <TestimonialSlider items={TESTIMONIALS} accent="#f74ea1" />
          </div>
        </section>

        {/* ———————————————————————— FAQ ———————————————————————— */}
        <section className="border-t border-ink/10 px-5 sm:px-8 md:px-[7%] py-20 md:py-32">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <Reveal>
              <div className="md:sticky md:top-28">
                <span className="font-syne text-sm font-bold tracking-widest text-ink/40">
                  SSS /
                </span>
                <h2 className="mt-4 font-syne text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl">
                  Aklındaki
                  <br />
                  sorular.
                </h2>
                <p className="mt-6 max-w-xs text-ink/60">
                  Cevabını bulamadın mı? Bize yazman yeterli — 24 saat içinde
                  dönüyoruz.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Faq items={FAQ} />
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
                Hadi başlayalım
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-syne text-[12vw] font-extrabold leading-[0.9] tracking-tight sm:text-7xl md:text-8xl">
                Bir fikrin mi var?
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-8 max-w-xl text-lg text-ink/70 md:text-xl">
                Aklındaki fikri 12 aya kalmadan gerçek kullanıcıların
                kullandığı bir ürüne dönüştürelim. İlk görüşme ücretsiz.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Magnetic strength={0.3}>
                  <a
                    href="mailto:hello@messta.studio"
                    className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-lg font-medium text-paper transition-colors hover:bg-kotapink"
                  >
                    hello@messta.studio
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                </Magnetic>
                <Magnetic strength={0.25}>
                  <a
                    href="#top"
                    className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-8 py-4 text-lg font-medium transition-colors hover:bg-ink hover:text-paper"
                  >
                    Başa dön
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
                messta<span className="text-kotapink">.</span>
              </span>
              <p className="mt-2 max-w-xs text-sm text-ink/50">
                Teknoloji & startup fikirlerini hayata geçiren venture studio.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-ink/60">
              <a href="#services" className="hover:text-ink">
                Hizmetler
              </a>
              <a href="#work" className="hover:text-ink">
                Portföy
              </a>
              <a href="#articles" className="hover:text-ink">
                Referanslar
              </a>
              <a href="#contact" className="hover:text-ink">
                İletişim
              </a>
            </div>
            <p className="text-sm text-ink/40">
              © {2026} Messta. İstanbul — Berlin.
            </p>
          </div>
        </footer>
      </main>
    </SmoothScroll>
  );
}
