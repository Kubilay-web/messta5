"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import Magnetic from "../motion/Magnetic";

// KOTA tarzı üst bar + tam ekran flyout menü.
// Logo (K mark) + "Hire us" mıknatıslı buton + hamburger.
// Menü açıkken sayfa scroll kilitlenir, Services alt menüsü açılıp kapanır.
const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Agency", href: "#agency" },
  {
    label: "Services",
    children: [
      { label: "Web design & development", href: "#work" },
      { label: "Branding", href: "#work" },
      { label: "Digital marketing", href: "#work" },
    ],
  },
  { label: "Blog", href: "#articles" },
  { label: "Culture", href: "#agency" },
  { label: "Contact", href: "#contact" },
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

function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 90" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M5 5h80v80H5V5zM0 90h90V0H0v90zm64.66-15.67l-5.15-16.61h-.1l-5.35 16.61H47.6l9.49-24.09h4.74l9.39 24.09h-6.56zm-39.77 0V55.67h-6.66v-5.43H37.6v5.43h-6.66v18.66h-6.06zm34.52-59.16c-3.94-.1-7.67 1.74-9.99 4.92-.64.81-1.15 1.7-1.52 2.67-.6 1.64-.9 3.38-.9 5.13v.05c.07 6.78 5.62 12.22 12.4 12.15h.56c6.88-.29 12.22-6.1 11.93-12.97-.28-6.69-5.79-11.96-12.48-11.94m.1 19.48c-3.94 0-6.56-3.38-6.56-7.18s2.62-6.97 6.46-6.97 6.46 3.38 6.46 7.07-2.52 7.08-6.36 7.08m-28.87 5.02l-6.46-10.35h-.1v10.35h-6.06v-24.1h6.06v10.87h.1l6.66-10.87h6.36l-7.87 12 8.38 12.1h-7.06z"
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
      {/* Sabit üst bar */}
      <header className="fixed inset-x-0 top-0 z-[60] flex items-center justify-between px-[7%] py-6">
        <a
          href="#top"
          aria-label="Home"
          className="text-ink transition-transform duration-300 hover:rotate-90"
        >
          <LogoMark className="h-9 w-9" />
        </a>

        <div className="flex items-center gap-4">
          <Magnetic strength={0.35}>
            <a
              href="#contact"
              className="group hidden items-center gap-2 rounded-full border border-ink/25 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-ink hover:text-paper sm:inline-flex"
            >
              <span>Hire us</span>
              <ArrowIcon className="h-3.5 w-3.5 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
            </a>
          </Magnetic>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-[70] flex h-11 w-11 items-center justify-center rounded-full border border-ink/25 transition-colors hover:bg-ink hover:text-paper"
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
                    Start your project
                    <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </nav>

              <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-paper/50">
                <a href="#contact" className="hover:text-paper">
                  hello@studio.com
                </a>
                <span>London — New York</span>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
