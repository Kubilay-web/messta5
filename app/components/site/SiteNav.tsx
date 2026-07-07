"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import Magnetic from "../motion/Magnetic";

// KOTA tarzı üst bar + tam ekran flyout menü.
// Logo (K mark) + "Hire us" mıknatıslı buton + hamburger.
// Menü açıkken sayfa scroll kilitlenir, Services alt menüsü açılıp kapanır.
const LINKS = [
  { label: "Çalışmalar", href: "#work" },
  { label: "Studio", href: "#agency" },
  {
    label: "Hizmetler",
    children: [
      { label: "Ürün Keşfi & Strateji", href: "#services" },
      { label: "MVP Mühendisliği", href: "#services" },
      { label: "Yapay Zeka Entegrasyonu", href: "#services" },
    ],
  },
  { label: "Referanslar", href: "#articles" },
  { label: "İletişim", href: "#contact" },
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

// Messta "M" monogramı — köşeleri yuvarlatılmış kare içinde keskin M harfi.
function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="currentColor" />
      <path
        d="M13 46V18h9l10 14 10-14h9v28h-9.5V31.5L33 45h-2L20.5 31.5V46H13Z"
        className="fill-paper"
      />
    </svg>
  );
}

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Sabit üst bar — kompakt, cam efektli */}
      <header className="fixed inset-x-0 top-0 z-[60] flex items-center justify-between px-[6%] py-3.5">
        <a
          href="#top"
          aria-label="Messta — Ana sayfa"
          className="flex items-center gap-2.5 text-ink"
        >
          <LogoMark className="h-8 w-8 transition-transform duration-500 hover:rotate-[360deg]" />
          <span className="font-syne text-lg font-extrabold tracking-tight">
            messta<span className="text-kotapink">.</span>
          </span>
        </a>

        <div className="flex items-center gap-3">
          <Magnetic strength={0.35}>
            <a
              href="#contact"
              className="group hidden items-center gap-2 rounded-full border border-ink/25 px-4 py-2 text-[13px] font-medium transition-colors hover:bg-ink hover:text-paper sm:inline-flex"
            >
              <span>Çalışalım</span>
              <ArrowIcon className="h-3 w-3 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
            </a>
          </Magnetic>

          <button
            type="button"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-[70] flex h-10 w-10 items-center justify-center rounded-full border border-ink/25 transition-colors hover:bg-ink hover:text-paper"
          >
            <span className="flex flex-col items-center justify-center gap-[5px]">
              <span
                className={`block h-px w-5 bg-current transition-transform duration-300 ${
                  open ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-5 bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Flyout menü */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-ink/30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-50 flex h-full w-full max-w-[520px] flex-col justify-between bg-ink px-[7%] pb-12 pt-28 text-paper sm:px-16"
              initial={reduce ? { opacity: 0 } : { x: "100%" }}
              animate={reduce ? { opacity: 1 } : { x: 0 }}
              exit={reduce ? { opacity: 0 } : { x: "100%" }}
              transition={{ duration: 0.6, ease: [0.75, 0, 0.25, 1] }}
            >
              <nav>
                <ul className="space-y-1">
                  {LINKS.map((item, i) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + i * 0.05, duration: 0.5 }}
                    >
                      {item.children ? (
                        <div>
                          <button
                            type="button"
                            onClick={() => setSub((v) => !v)}
                            className="flex w-full items-center justify-between py-2 font-syne text-4xl font-bold tracking-tight sm:text-5xl"
                          >
                            {item.label}
                            <Plus
                              className={`h-6 w-6 transition-transform duration-300 ${
                                sub ? "rotate-45" : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence initial={false}>
                            {sub && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35 }}
                                className="overflow-hidden pl-1"
                              >
                                {item.children.map((c) => (
                                  <li key={c.label}>
                                    <a
                                      href={c.href}
                                      onClick={() => setOpen(false)}
                                      className="block py-1.5 text-lg text-paper/70 transition-colors hover:text-acid"
                                    >
                                      {c.label}
                                    </a>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <a
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 font-syne text-4xl font-bold tracking-tight transition-colors hover:text-acid sm:text-5xl"
                        >
                          {item.label}
                        </a>
                      )}
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-10">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="group inline-flex items-center gap-3 rounded-full bg-acid px-6 py-3.5 font-medium text-ink"
                  >
                    Projeni başlat
                    <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </nav>

              <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-paper/50">
                <a href="mailto:hello@messta.studio" className="hover:text-paper">
                  hello@messta.studio
                </a>
                <span>İstanbul — Berlin</span>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
