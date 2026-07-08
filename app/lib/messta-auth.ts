// app/lib/messta-auth.ts
// Messta admin paneli yetkilendirmesi. Rol Prisma enum'ından (MesstaRole) gelir
// ve hiyerarşiktir: ADMIN > EDITOR > VIEWER.
//  - VIEWER : salt görüntüleme
//  - EDITOR : içerik (CMS/kadro) + gelen başvuruların yönetimi
//  - ADMIN  : yukarıdakiler + kullanıcı & rol yönetimi
// Guard'lar hem sunucu bileşenlerinde (layout/sayfa) hem server action'larda kullanılır.

import { redirect } from "next/navigation";
import { validateRequest } from "@/app/auth";

export type MesstaRole = "ADMIN" | "EDITOR" | "VIEWER";

export const MESSTA_ROLE_RANK: Record<MesstaRole, number> = {
  VIEWER: 1,
  EDITOR: 2,
  ADMIN: 3,
};

export const MESSTA_ROLE_LABEL: Record<MesstaRole, string> = {
  ADMIN: "Yönetici",
  EDITOR: "Editör",
  VIEWER: "İzleyici",
};

// role, en az `min` seviyesinde mi? (tip daraltması ile birlikte)
export function hasMesstaRole(
  role: string | null | undefined,
  min: MesstaRole
): role is MesstaRole {
  if (!role || !(role in MESSTA_ROLE_RANK)) return false;
  return MESSTA_ROLE_RANK[role as MesstaRole] >= MESSTA_ROLE_RANK[min];
}

export function isMesstaRole(v: unknown): v is MesstaRole {
  return v === "ADMIN" || v === "EDITOR" || v === "VIEWER";
}

// Panele erişimi olan kullanıcıyı döndürür (herhangi bir Messta rolü).
// Erişim yoksa null döner — layout burada 403/redirect kararını verir.
export async function getMesstaViewer() {
  const { user } = await validateRequest();
  if (!user || !hasMesstaRole(user.messtaRole, "VIEWER")) return null;
  return user;
}

// Server action guard'ı: en az `min` rolü ister; yoksa hata fırlatır.
export async function requireMesstaRole(min: MesstaRole) {
  const { user } = await validateRequest();
  if (!user) redirect("/login");
  if (!hasMesstaRole(user.messtaRole, min)) {
    throw new Error("Bu işlem için yeterli yetkiniz yok.");
  }
  return user;
}
