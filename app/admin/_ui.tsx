// app/admin/_ui.tsx
// Admin paneli paylaşılan sunucu-tarafı yardımcıları ve küçük görsel bileşenler.

import React from "react";

// Çok dilli JSON string ({"tr":"","en":"","de":""}) → güvenli okuma.
export function unpackLang(json: string | null | undefined): {
  tr: string;
  en: string;
  de: string;
} {
  try {
    const o = JSON.parse(json || "{}");
    return {
      tr: typeof o.tr === "string" ? o.tr : "",
      en: typeof o.en === "string" ? o.en : "",
      de: typeof o.de === "string" ? o.de : "",
    };
  } catch {
    return { tr: "", en: "", de: "" };
  }
}

// Tercihen TR, yoksa EN/DE, yoksa ham metin.
export function preferTr(json: string | null | undefined): string {
  const l = unpackLang(json);
  return l.tr || l.en || l.de || "";
}

export function formatDate(d: Date | string): string {
  const date = typeof d === "string" ? new Date(d) : d;
  return new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

const STATUS_STYLES: Record<string, string> = {
  NEW: "bg-kotapink/10 text-kotapink",
  READ: "bg-gray-200 text-gray-700",
  CONTACTED: "bg-teal-light/20 text-teal-700",
  REVIEWING: "bg-amber-100 text-amber-700",
  MATCHED: "bg-green-100 text-green-700",
  REJECTED: "bg-red-100 text-red-700",
  ARCHIVED: "bg-gray-100 text-gray-400",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
        STATUS_STYLES[status] ?? "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
}

export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="font-syne text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
          {title}
        </h1>
        {subtitle && <p className="mt-1 text-sm text-ink/50">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-black/5 bg-white p-5 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function EmptyState({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-black/10 bg-white/50 px-6 py-14 text-center text-sm text-ink/40">
      {text}
    </div>
  );
}
