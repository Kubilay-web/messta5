"use client";

// app/components/site/ContactForm.tsx
// CTA bölümündeki "Fikrini anlat" formu. Server action ile MesstaLead'e yazar.

import { useActionState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { submitLead, type ActionResult } from "@/app/lib/messta-actions";
import type { MesstaCopy } from "@/app/components/site-i18n/messta-content";

const initial: ActionResult = { ok: false };

export default function ContactForm({ copy }: { copy: MesstaCopy["contact"] }) {
  const [state, formAction, pending] = useActionState(submitLead, initial);

  if (state.ok) {
    return (
      <div className="mx-auto mt-12 flex max-w-md items-center gap-3 rounded-2xl border border-ink/15 bg-white px-6 py-5 text-left">
        <CheckCircle2 className="h-6 w-6 shrink-0 text-kotapink" />
        <p className="text-sm font-medium text-ink">{copy.formSuccess}</p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="mx-auto mt-12 grid max-w-xl grid-cols-1 gap-4 text-left sm:grid-cols-2"
    >
      <input type="hidden" name="source" value="contact" />
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-name" className="text-xs font-medium text-ink/50">
          {copy.formName}
        </label>
        <input
          id="cf-name"
          name="name"
          required
          minLength={2}
          className="rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-kotapink"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-email" className="text-xs font-medium text-ink/50">
          {copy.formEmail}
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          className="rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-kotapink"
        />
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="cf-idea" className="text-xs font-medium text-ink/50">
          {copy.formIdea}
        </label>
        <textarea
          id="cf-idea"
          name="idea"
          required
          minLength={5}
          rows={4}
          placeholder={copy.formIdeaPlaceholder}
          className="resize-none rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-kotapink"
        />
      </div>

      {state.message && !state.ok && (
        <p className="text-sm text-kotapink sm:col-span-2">{state.message}</p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-ink px-8 py-4 text-lg font-medium text-paper transition-colors hover:bg-kotapink disabled:opacity-60 sm:w-auto"
        >
          {pending ? copy.formSubmitting : copy.formSubmit}
          <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
        </button>
      </div>
    </form>
  );
}
