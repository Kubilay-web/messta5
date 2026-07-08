// app/admin/page.tsx
// Admin panel özeti (dashboard): sayaçlar + son başvurular.

import Link from "next/link";
import { Inbox, Handshake, Users, LayoutList, ArrowRight } from "lucide-react";
import prisma from "@/app/lib/prisma";
import { Card, PageHeader, StatusBadge, formatDate, EmptyState } from "./_ui";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const [
    leadTotal,
    leadNew,
    investorTotal,
    investorNew,
    teamCount,
    contentCount,
    recentLeads,
    recentInvestors,
  ] = await Promise.all([
    prisma.messtaLead.count(),
    prisma.messtaLead.count({ where: { status: "NEW" } }),
    prisma.messtaInvestorApplication.count(),
    prisma.messtaInvestorApplication.count({ where: { status: "NEW" } }),
    prisma.messtaTeamMember.count(),
    prisma.messtaContentItem.count(),
    prisma.messtaLead.findMany({ orderBy: { createdAt: "desc" }, take: 5 }),
    prisma.messtaInvestorApplication.findMany({ orderBy: { createdAt: "desc" }, take: 5 }),
  ]);

  const stats = [
    { label: "Toplam başvuru", value: leadTotal, badge: leadNew, icon: Inbox, href: "/admin/leads" },
    {
      label: "Yatırımcı başvurusu",
      value: investorTotal,
      badge: investorNew,
      icon: Handshake,
      href: "/admin/investors",
    },
    { label: "Kadro üyesi", value: teamCount, icon: Users, href: "/admin/team" },
    { label: "İçerik öğesi", value: contentCount, icon: LayoutList, href: "/admin/content" },
  ];

  return (
    <div>
      <PageHeader title="Panel" subtitle="Messta yönetim özeti" />

      {/* Sayaçlar */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Link key={s.label} href={s.href}>
            <Card className="group h-full transition-shadow hover:shadow-md">
              <div className="flex items-start justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-paper">
                  <s.icon className="h-5 w-5" />
                </span>
                {typeof s.badge === "number" && s.badge > 0 && (
                  <span className="rounded-full bg-kotapink px-2 py-0.5 text-xs font-bold text-paper">
                    {s.badge} yeni
                  </span>
                )}
              </div>
              <div className="mt-4 font-syne text-3xl font-extrabold tracking-tight">
                {s.value}
              </div>
              <div className="mt-1 flex items-center gap-1 text-sm text-ink/50">
                {s.label}
                <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Son başvurular */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-syne text-lg font-bold">Son başvurular</h2>
            <Link href="/admin/leads" className="text-sm text-kotapink hover:underline">
              Tümü
            </Link>
          </div>
          {recentLeads.length === 0 ? (
            <EmptyState text="Henüz başvuru yok." />
          ) : (
            <Card className="divide-y divide-black/5 !p-0">
              {recentLeads.map((l) => (
                <div key={l.id} className="flex items-center justify-between gap-3 px-5 py-3.5">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{l.name}</p>
                    <p className="truncate text-xs text-ink/40">{l.email}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <StatusBadge status={l.status} />
                    <span className="hidden text-xs text-ink/40 sm:block">
                      {formatDate(l.createdAt)}
                    </span>
                  </div>
                </div>
              ))}
            </Card>
          )}
        </div>

        <div>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-syne text-lg font-bold">Son yatırımcı başvuruları</h2>
            <Link href="/admin/investors" className="text-sm text-kotapink hover:underline">
              Tümü
            </Link>
          </div>
          {recentInvestors.length === 0 ? (
            <EmptyState text="Henüz yatırımcı başvurusu yok." />
          ) : (
            <Card className="divide-y divide-black/5 !p-0">
              {recentInvestors.map((a) => (
                <div key={a.id} className="flex items-center justify-between gap-3 px-5 py-3.5">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">
                      {a.name}
                      <span className="ml-2 rounded bg-gray-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase text-ink/50">
                        {a.audience === "investor" ? "Yatırımcı" : "Kurucu"}
                      </span>
                    </p>
                    <p className="truncate text-xs text-ink/40">{a.company || a.email}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <StatusBadge status={a.status} />
                    <span className="hidden text-xs text-ink/40 sm:block">
                      {formatDate(a.createdAt)}
                    </span>
                  </div>
                </div>
              ))}
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
