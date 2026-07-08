"use client";

// app/components/site/InvestorForm.tsx
// Yatırımcı eşleştirme başvuru formu. Server action ile MesstaInvestorApplication'a yazar.

import { useActionState, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import {
  submitInvestorApplication,
  type ActionResult,
} from "@/app/lib/messta-actions";
import type { MesstaCopy } from "@/app/components/site-i18n/messta-content";

const initial: ActionResult = { ok: false };

export default function InvestorForm({ copy }: { copy: MesstaCopy["investors"] }) {
  const [state, formAction, pending] = useActionState(submitInvestorApplication, initial);
  const [audience, setAudience] = useState<"founder" | "investor">("founder");

  if (state.ok) {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-6 py-5 backdrop-blur">
        <CheckCircle2 className="h-6 w-6 shrink-0 text-acid" />
        <p className="text-sm font-medium text-paper">{copy.success}</p>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-paper outline-none transition-colors placeholder:text-paper/30 focus:border-acid";

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <input type="hidden" name="audience" value={audience} />

      {/* Kitle seçimi: kurucu / yatırımcı */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {(["founder", "investor"] as const).map((a) => (
          <button
            key={a}
            type="button"
            onClick={() => setAudience(a)}
            className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors ${
              audience === a
                ? "border-acid bg-acid text-ink"
                : "border-white/15 bg-white/5 text-paper/70 hover:border-white/40"
            }`}
          >
            {copy.audience[a]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input name="name" required minLength={2} placeholder={copy.fields.name} className={fieldClass} />
        <input name="email" type="email" required placeholder={copy.fields.email} className={fieldClass} />
      </div>

      <input name="company" placeholder={copy.fields.company} className={fieldClass} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input name="stage" placeholder={copy.fields.stage} className={fieldClass} />
        <input name="ticket" placeholder={copy.fields.ticket} className={fieldClass} />
      </div>

      <textarea
        name="message"
        rows={3}
        placeholder={copy.fields.messagePlaceholder}
        className={`${fieldClass} resize-none`}
      />

      {state.message && !state.ok && <p className="text-sm text-acid">{state.message}</p>}

      <button
        type="submit"
        disabled={pending}
        className="group mt-1 inline-flex items-center justify-center gap-3 rounded-full bg-acid px-7 py-4 font-medium text-ink transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {pending ? copy.submitting : copy.submit}
        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
      </button>
    </form>
  );
}
