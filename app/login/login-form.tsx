"use client";

import { useState, useTransition } from "react";
import Link from "@/app/components/LocaleLink";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { login } from "../(components)/(authentication-layout)/authentication/sign-in/actions";
import { useMesstaCopy } from "@/app/lib/useMesstaCopy";
import LangSwitcher from "@/app/components/site/LangSwitcher";

export default function LoginForm({ redirect = "/" }: { redirect?: string }) {
  const router = useRouter();
  const { copy } = useMesstaCopy();
  const a = copy.auth;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [pending, start] = useTransition();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!username.trim() || !password) {
      setError(a.login.required);
      return;
    }
    start(async () => {
      try {
        const res = await login({ username: username.trim(), password });
        if (res?.error) setError(res.error);
        else router.push(redirect);
      } catch {
        setError(a.unexpectedError);
      }
    });
  }

  return (
    <div className="flex min-h-screen flex-col bg-paper font-sans text-ink lg:flex-row">
      {/* Sol: marka paneli (KOTA/Messta) */}
      <div className="relative hidden overflow-hidden bg-ink text-paper lg:flex lg:w-1/2">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-tech-grid opacity-20" />
          <div className="absolute -left-24 top-10 h-[28rem] w-[28rem] animate-floaty rounded-full bg-kotapink/25 blur-[110px]" />
          <div className="absolute -right-16 bottom-10 h-[26rem] w-[26rem] animate-floaty-2 rounded-full bg-acid/20 blur-[120px]" />
        </div>
        <div className="relative flex h-full w-full flex-col justify-between p-12">
          <Link href="/" className="inline-flex w-fit items-center gap-2.5">
            <LogoMark className="h-8 w-8 text-kotapink" />
            <span className="font-syne text-lg font-extrabold tracking-tight">
              messta<span className="text-kotapink">.</span>
            </span>
          </Link>

          <div>
            <span className="font-syne text-sm font-bold tracking-widest text-acid">
              {a.login.eyebrow.toUpperCase()} /
            </span>
            <h2 className="mt-4 max-w-md font-syne text-4xl font-extrabold leading-[0.98] tracking-tight xl:text-5xl">
              {a.login.brandTitle}
            </h2>
            <p className="mt-4 max-w-md text-paper/60">{a.login.brandDesc}</p>
            <ul className="mt-7 space-y-3">
              {a.login.perks.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-paper/80">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-acid text-ink">
                    <Check className="h-3 w-3" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs text-paper/40">© {2026} Messta — {copy.footer.location}</p>
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
              messta<span className="text-kotapink">.</span>
            </span>
          </Link>

          <h1 className="font-syne text-3xl font-extrabold tracking-tight">{a.login.formTitle}</h1>
          <p className="mt-2 text-sm text-ink/50">{a.login.formSubtitle}</p>

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

            <Field
              label={a.fields.password}
              extra={
                <Link
                  href="/authentication/reset-password/cover/"
                  className="text-xs font-medium text-kotapink hover:underline"
                >
                  {a.fields.forgotPassword}
                </Link>
              }
            >
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="current-password"
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
              {pending ? a.login.submitting : a.login.submit}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-ink/50">
            {a.login.noAccount}{" "}
            <Link
              href={`/register?redirect=${encodeURIComponent(redirect)}`}
              className="font-semibold text-ink hover:text-kotapink"
            >
              {a.login.signUpCta}
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

function Field({
  label,
  extra,
  children,
}: {
  label: string;
  extra?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <label className="text-xs font-medium text-ink/50">{label}</label>
        {extra}
      </div>
      {children}
    </div>
  );
}

// Messta "M" monogramı (koyu panelde currentColor = paper).
function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="currentColor" />
      <path
        d="M13 46V18h9l10 14 10-14h9v28h-9.5V31.5L33 45h-2L20.5 31.5V46H13Z"
        fill="#efefef"
      />
    </svg>
  );
}
