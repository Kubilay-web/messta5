"use client";

import { useState, useTransition } from "react";
import Link from "@/app/components/LocaleLink";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { signUp } from "../(components)/(authentication-layout)/authentication/sign-up/actions";
import { useInvenimusCopy } from "@/app/lib/useInvenimusCopy";
import LangSwitcher from "@/app/components/site/LangSwitcher";

export default function RegisterForm({ redirect = "/" }: { redirect?: string }) {
  const router = useRouter();
  const { copy } = useInvenimusCopy();
  const a = copy.auth;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [pending, start] = useTransition();

  function validate(): string | null {
    if (!username.trim() || !email.trim() || !password) return a.register.allRequired;
    if (!/^[a-zA-Z0-9_-]+$/.test(username)) return a.register.usernameRule;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return a.register.invalidEmail;
    if (password.length < 8) return a.register.passwordMin;
    return null;
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    start(async () => {
      try {
        const res = await signUp({ username: username.trim(), email: email.trim(), password });
        if (res?.error) setError(res.error);
        else router.push(redirect);
      } catch {
        setError(a.unexpectedError);
      }
    });
  }

  return (
    <div className="flex min-h-screen flex-col bg-paper font-sans text-ink lg:flex-row">
      {/* Sol: marka paneli (KOTA/Invenimus) */}
      <div className="relative hidden overflow-hidden bg-ink text-paper lg:flex lg:w-1/2">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-tech-grid opacity-20" />
          <div className="absolute -left-20 bottom-10 h-[28rem] w-[28rem] animate-floaty-3 rounded-full bg-acid/25 blur-[110px]" />
          <div className="absolute -right-16 top-10 h-[26rem] w-[26rem] animate-floaty rounded-full bg-kotapink/25 blur-[120px]" />
        </div>
        <div className="relative flex h-full w-full flex-col justify-between p-12">
          <Link href="/" className="inline-flex w-fit items-center gap-2.5">
            <LogoMark className="h-8 w-8 text-kotapink" />
            <span className="font-syne text-lg font-extrabold tracking-tight">
              invenimus<span className="text-kotapink">.</span>
            </span>
          </Link>

          <div>
            <span className="font-syne text-sm font-bold tracking-widest text-kotapink">
              {a.register.eyebrow.toUpperCase()} /
            </span>
            <h2 className="mt-4 max-w-md font-syne text-4xl font-extrabold leading-[0.98] tracking-tight xl:text-5xl">
              {a.register.brandTitle}
            </h2>
            <p className="mt-4 max-w-md text-paper/60">{a.register.brandDesc}</p>
            <ul className="mt-7 space-y-3">
              {a.register.perks.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-paper/80">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-acid text-ink">
                    <Check className="h-3 w-3" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs text-paper/40">© {2026} Invenimus — {copy.footer.location}</p>
        </div>
      </div>

      {/* Sağ: form */}
      <div className="relative flex flex-1 items-center justify-center px-4 py-10 sm:px-8">
        <div className="absolute right-5 top-5">
          <LangSwitcher />
        </div>

        <div className="w-full max-w-sm">
          <Link href="/" className="mb-8 inline-flex items-center gap-2.5 lg:hidden">
            <LogoMark className="h-8 w-8 text-ink" />
            <span className="font-syne text-lg font-extrabold tracking-tight">
              invenimus<span className="text-kotapink">.</span>
            </span>
          </Link>

          <h1 className="font-syne text-3xl font-extrabold tracking-tight">
            {a.register.formTitle}
          </h1>
          <p className="mt-2 text-sm text-ink/50">{a.register.formSubtitle}</p>

          <form onSubmit={submit} className="mt-8 flex flex-col gap-4">
            {error && (
              <div className="rounded-xl bg-kotapink/10 px-4 py-3 text-sm font-medium text-kotapink">
                {error}
              </div>
            )}

            <Field label={a.fields.username}>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder={a.fields.usernamePlaceholder}
                autoComplete="username"
                className={inputCls}
              />
            </Field>

            <Field label={a.fields.email}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={a.fields.emailPlaceholder}
                autoComplete="email"
                className={inputCls}
              />
            </Field>

            <Field label={a.fields.password}>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={a.fields.passwordHint}
                  autoComplete="new-password"
                  className={`${inputCls} pr-16`}
                />
                <button
                  type="button"
                  onClick={() => setShow((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-ink/50 hover:text-ink"
                >
                  {show ? a.fields.hide : a.fields.show}
                </button>
              </div>
            </Field>

            <button
              type="submit"
              disabled={pending}
              className="group mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-kotapink disabled:opacity-60"
            >
              {pending ? a.register.submitting : a.register.submit}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </button>

            <p className="text-center text-[11px] text-ink/40">{a.register.terms}</p>
          </form>

          <p className="mt-6 text-center text-sm text-ink/50">
            {a.register.haveAccount}{" "}
            <Link
              href={`/login?redirect=${encodeURIComponent(redirect)}`}
              className="font-semibold text-ink hover:text-kotapink"
            >
              {a.register.signInCta}
            </Link>
          </p>
          <p className="mt-3 text-center text-xs text-ink/40">
            <Link href="/" className="hover:text-ink">
              {a.backHome}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

const inputCls =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-kotapink";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-ink/50">{label}</label>
      {children}
    </div>
  );
}

// Invenimus "M" monogramı (kare currentColor, M paper).
function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="currentColor" />
      <path
        d="M20 18H44V23H36V41H44V46H20V41H28V23H20V18Z"
        fill="#efefef"
      />
    </svg>
  );
}
