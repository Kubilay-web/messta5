// app/admin/layout.tsx
// Admin paneli kök layout'u — yetki guard'ı burada (enum tabanlı MesstaRole).
// Giriş yoksa /login'e; Messta rolü olmayan kullanıcıda 403 ekranı.
// VIEWER salt-görüntüler, EDITOR içerik+başvuru yönetir, ADMIN her şeyi + kullanıcı/rol.

import { redirect } from "next/navigation";
import Link from "next/link";
import { validateRequest } from "@/app/auth";
import { hasMesstaRole, MESSTA_ROLE_LABEL, type MesstaRole } from "@/app/lib/messta-auth";
import AdminSidebar from "./AdminSidebar";

export const metadata = {
  title: "Admin · Messta",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user } = await validateRequest();

  if (!user) redirect("/login");

  // Herhangi bir Messta rolü yoksa panele erişim yok.
  if (!hasMesstaRole(user.messtaRole, "VIEWER")) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center font-sans text-ink">
        <span className="rounded-full bg-kotapink/10 px-4 py-1.5 text-sm font-semibold text-kotapink">
          403 · Yetkisiz
        </span>
        <h1 className="mt-6 font-syne text-3xl font-extrabold tracking-tight">
          Bu alana erişimin yok
        </h1>
        <p className="mt-3 max-w-md text-ink/60">
          Admin paneli yalnızca Messta yetki rolü (ADMIN / EDITOR / VIEWER) atanmış
          hesaplara açıktır. Yetki için bir yöneticiyle görüş.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-kotapink"
        >
          ← Ana sayfaya dön
        </Link>
      </div>
    );
  }

  const role = user.messtaRole as MesstaRole;
  const userName = user.displayName || user.username || user.email || "Kullanıcı";

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-ink lg:flex">
      <AdminSidebar userName={userName} role={role} roleLabel={MESSTA_ROLE_LABEL[role]} />
      <main className="min-w-0 flex-1">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
          {children}
        </div>
      </main>
    </div>
  );
}
