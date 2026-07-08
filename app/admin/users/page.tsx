// app/admin/users/page.tsx
// Kullanıcılar & Roller — Invenimus admin yetki rolü yönetimi. Yalnızca ADMIN.

import prisma from "@/app/lib/prisma";
import Link from "next/link";
import { validateRequest } from "@/app/auth";
import { hasInvenimusRole } from "@/app/lib/invenimus-auth";
import { PageHeader, Card, EmptyState } from "../_ui";
import UserRow, { type UserDTO } from "./UserRow";

export const dynamic = "force-dynamic";

export default async function UsersPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { user: me } = await validateRequest();

  // Sayfa seviyesinde de guard: yalnızca ADMIN.
  if (!hasInvenimusRole(me?.invenimusRole, "ADMIN")) {
    return (
      <div>
        <PageHeader title="Kullanıcılar & Roller" />
        <EmptyState text="Bu sayfa yalnızca yöneticilere (ADMIN) açıktır." />
      </div>
    );
  }

  const { q } = await searchParams;
  const query = (q ?? "").trim();

  const where = query
    ? {
        OR: [
          { username: { contains: query, mode: "insensitive" as const } },
          { name: { contains: query, mode: "insensitive" as const } },
          { email: { contains: query, mode: "insensitive" as const } },
        ],
      }
    : {};

  // Önce yetkili olanlar, sonra diğerleri.
  const [staff, others] = await Promise.all([
    prisma.user.findMany({
      where: { ...where, invenimusRole: { not: null } },
      select: { id: true, name: true, username: true, email: true, avatarUrl: true, invenimusRole: true },
      orderBy: { createdAt: "desc" },
      take: 100,
    }),
    prisma.user.findMany({
      where: { ...where, invenimusRole: null },
      select: { id: true, name: true, username: true, email: true, avatarUrl: true, invenimusRole: true },
      orderBy: { createdAt: "desc" },
      take: 100,
    }),
  ]);

  const toDTO = (u: (typeof staff)[number]): UserDTO => ({
    id: u.id,
    name: u.name || u.username || "",
    email: u.email || "",
    avatarUrl: u.avatarUrl,
    invenimusRole: u.invenimusRole,
  });

  return (
    <div>
      <PageHeader
        title="Kullanıcılar & Roller"
        subtitle="Admin paneli erişim yetkilerini yönet (ADMIN > EDITOR > VIEWER)"
      />

      <form className="mb-5" action="/admin/users">
        <input
          name="q"
          defaultValue={query}
          placeholder="İsim, kullanıcı adı veya e-posta ara…"
          className="w-full max-w-md rounded-full border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-kotapink"
        />
      </form>

      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink/60">
        Yetkili ekip
        <span className="rounded-full bg-gray-200 px-2 py-0.5 text-xs">{staff.length}</span>
      </div>
      {staff.length === 0 ? (
        <EmptyState text="Henüz yetki atanmış kullanıcı yok. Aşağıdan rol ver." />
      ) : (
        <Card className="mb-8 !p-0">
          {staff.map((u) => (
            <UserRow key={u.id} user={toDTO(u)} isSelf={u.id === me!.id} />
          ))}
        </Card>
      )}

      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink/60">
        {query ? "Arama sonuçları" : "Diğer kullanıcılar"}
        <span className="rounded-full bg-gray-200 px-2 py-0.5 text-xs">{others.length}</span>
      </div>
      {others.length === 0 ? (
        <EmptyState text={query ? "Eşleşen kullanıcı yok." : "Kullanıcı yok."} />
      ) : (
        <Card className="!p-0">
          {others.map((u) => (
            <UserRow key={u.id} user={toDTO(u)} isSelf={u.id === me!.id} />
          ))}
        </Card>
      )}

      <p className="mt-6 text-xs text-ink/40">
        Not: Buradaki roller yalnızca Invenimus admin panelini kapsar; kullanıcıların genel
        uygulama rolüne (mağaza vb.) dokunmaz.{" "}
        <Link href="/admin" className="text-kotapink hover:underline">
          Panele dön
        </Link>
      </p>
    </div>
  );
}
