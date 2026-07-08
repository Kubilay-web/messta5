"use client";

// app/admin/users/UserRow.tsx
// Tek kullanıcı: Invenimus yetki rolünü (ADMIN/EDITOR/VIEWER/NONE) değiştirir.

import { useState, useTransition } from "react";
import { Check } from "lucide-react";
import { updateUserInvenimusRole } from "../actions";
import type { InvenimusRole } from "@/app/lib/invenimus-auth";

export type UserDTO = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string | null;
  invenimusRole: string | null;
};

const OPTIONS: { value: InvenimusRole | "NONE"; label: string; tone: string }[] = [
  { value: "NONE", label: "Erişim yok", tone: "text-ink/40" },
  { value: "VIEWER", label: "İzleyici", tone: "text-blue-600" },
  { value: "EDITOR", label: "Editör", tone: "text-amber-600" },
  { value: "ADMIN", label: "Yönetici", tone: "text-green-600" },
];

export default function UserRow({ user, isSelf }: { user: UserDTO; isSelf: boolean }) {
  const [role, setRole] = useState<InvenimusRole | "NONE">(
    (user.invenimusRole as InvenimusRole) ?? "NONE"
  );
  const [pending, start] = useTransition();
  const [err, setErr] = useState<string | null>(null);

  const change = (next: InvenimusRole | "NONE") => {
    if (next === role) return;
    const prev = role;
    setRole(next);
    setErr(null);
    start(async () => {
      const res = await updateUserInvenimusRole(user.id, next);
      if (!res.ok) {
        setRole(prev);
        setErr(res.message ?? "Hata");
      }
    });
  };

  return (
    <div className="flex flex-col gap-3 border-b border-black/5 px-4 py-3.5 last:border-0 sm:flex-row sm:items-center sm:gap-4 sm:px-5">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-ink text-xs font-bold text-paper">
          {user.avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={user.avatarUrl} alt="" className="h-full w-full object-cover" />
          ) : (
            (user.name || user.email || "?").slice(0, 2).toUpperCase()
          )}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">
            {user.name || "—"}
            {isSelf && (
              <span className="ml-2 rounded bg-acid px-1.5 py-0.5 text-[10px] font-bold text-ink">
                sen
              </span>
            )}
          </p>
          <p className="truncate text-xs text-ink/40">{user.email}</p>
        </div>
      </div>

      <div className="flex shrink-0 flex-wrap gap-1.5">
        {OPTIONS.map((o) => {
          const activeOpt = role === o.value;
          return (
            <button
              key={o.value}
              disabled={pending}
              onClick={() => change(o.value)}
              className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                activeOpt
                  ? "bg-ink text-paper"
                  : `bg-white ring-1 ring-black/10 hover:bg-gray-100 ${o.tone}`
              }`}
            >
              {activeOpt && <Check className="h-3 w-3" />}
              {o.label}
            </button>
          );
        })}
      </div>
      {err && <span className="text-xs text-red-600 sm:ml-2">{err}</span>}
    </div>
  );
}
