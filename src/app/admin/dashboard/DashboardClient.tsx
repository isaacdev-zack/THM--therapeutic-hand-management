"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { EllipsisVertical, LogOut, Search } from "lucide-react";
import { ConfirmModal, useToast } from "@/components/admin/AdminUi";
import type { AdmissionFormData } from "@/types/admission";

export type DashboardApplication = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  campus: string;
  data: AdmissionFormData;
  created_at: string;
  created_at_iso: string;
};

type Tab = "applications" | "settings";
type CampusFilter = "all" | "nairobi" | "kisumu";

function campusLabel(campus: string) {
  if (campus === "nairobi") return "Nairobi";
  if (campus === "kisumu") return "Kisumu";
  return campus || "—";
}

function DetailRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="grid grid-cols-[7.5rem_1fr] gap-2 border-b border-thm-lilac/80 py-2 text-sm last:border-0">
      <dt className="text-thm-muted">{label}</dt>
      <dd className="font-medium text-thm-ink">{value}</dd>
    </div>
  );
}

export default function DashboardClient({
  initialApplications,
  adminUsername,
  loadError,
}: {
  initialApplications: DashboardApplication[];
  adminUsername: string;
  loadError?: boolean;
}) {
  const [applications, setApplications] =
    useState<DashboardApplication[]>(initialApplications);
  const [tab, setTab] = useState<Tab>("applications");
  const [query, setQuery] = useState("");
  const [campus, setCampus] = useState<CampusFilter>("all");
  const [menuId, setMenuId] = useState<string | null>(null);
  const [viewing, setViewing] = useState<DashboardApplication | null>(null);
  const [deleting, setDeleting] = useState<DashboardApplication | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [settingsLoading, setSettingsLoading] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("login") === "success") {
      toast("success", "Welcome back.");
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, [toast]);

  useEffect(() => {
    if (loadError) toast("error", "Some applications could not be loaded.");
  }, [loadError, toast]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return applications.filter((app) => {
      if (campus !== "all" && app.campus !== campus) return false;
      if (!q) return true;
      return (
        app.full_name.toLowerCase().includes(q) ||
        app.email.toLowerCase().includes(q) ||
        app.phone.toLowerCase().includes(q) ||
        app.id.toLowerCase().includes(q)
      );
    });
  }, [applications, campus, query]);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      const res = await fetch("/api/admin/logout", { method: "POST" });
      if (!res.ok) throw new Error("logout failed");
      router.push("/admin?logout=success");
      router.refresh();
    } catch {
      toast("error", "We couldn't log you out. Please try again.");
      setLoggingOut(false);
    }
  };

  const handleDelete = async () => {
    if (!deleting) return;
    setDeleteLoading(true);
    try {
      const res = await fetch(
        `/api/admin/applications?id=${encodeURIComponent(deleting.id)}`,
        { method: "DELETE" },
      );
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        toast("error", data.error || "Could not delete application.");
        return;
      }
      setApplications((prev) => prev.filter((a) => a.id !== deleting.id));
      if (viewing?.id === deleting.id) setViewing(null);
      toast("success", "Application deleted.");
      setDeleting(null);
    } catch {
      toast("error", "Could not delete application.");
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleSettings = async (e: FormEvent) => {
    e.preventDefault();
    setSettingsLoading(true);
    try {
      const res = await fetch("/api/admin/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentPassword,
          newUsername,
          newPassword,
          confirmPassword,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        toast("error", data.error || "Could not update account.");
        return;
      }
      toast("success", "Account updated.");
      setCurrentPassword("");
      setNewUsername("");
      setNewPassword("");
      setConfirmPassword("");
    } catch {
      toast("error", "Could not update account.");
    } finally {
      setSettingsLoading(false);
    }
  };

  return (
    <div className="min-h-dvh bg-thm-cream">
      <header className="border-b border-thm-lilac bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-mark.png"
              alt="THM"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <div>
              <p className="font-poppins text-sm font-bold text-thm-purple">
                Admissions dashboard
              </p>
              <p className="text-xs text-thm-muted">{adminUsername}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
            className="inline-flex h-10 items-center gap-2 rounded-full bg-thm-purple px-4 text-sm font-semibold text-white transition hover:bg-thm-purple-dark disabled:opacity-60"
          >
            <LogOut className="h-4 w-4" />
            {loggingOut ? "…" : "Log out"}
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="mb-5 flex gap-2">
          {(
            [
              ["applications", "Applications"],
              ["settings", "Settings"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={`h-10 rounded-full px-4 text-sm font-bold transition ${
                tab === id
                  ? "bg-thm-purple text-thm-gold"
                  : "bg-white text-thm-purple hover:bg-thm-lilac"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === "applications" ? (
          <div className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative w-full sm:max-w-sm">
                <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-thm-muted" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search name, email, phone…"
                  className="h-11 w-full rounded-full border border-thm-lilac bg-white pr-4 pl-10 text-sm outline-none focus:border-thm-purple"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {(
                  [
                    ["all", "All"],
                    ["nairobi", "Nairobi"],
                    ["kisumu", "Kisumu"],
                  ] as const
                ).map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setCampus(id)}
                    className={`h-9 rounded-full px-3.5 text-sm font-bold transition ${
                      campus === id
                        ? "bg-thm-purple text-thm-gold"
                        : "bg-white text-thm-purple hover:bg-thm-lilac"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-sm text-thm-muted">
              {filtered.length} application{filtered.length === 1 ? "" : "s"}
            </p>

            <div className="overflow-hidden rounded-2xl border border-thm-lilac bg-white">
              <div className="hidden grid-cols-[1.4fr_1fr_0.8fr_0.9fr_2.5rem] gap-3 border-b border-thm-lilac bg-thm-lilac/40 px-4 py-3 text-xs font-bold tracking-wide text-thm-muted uppercase sm:grid">
                <span>Applicant</span>
                <span>Contact</span>
                <span>Campus</span>
                <span>Submitted</span>
                <span />
              </div>

              {filtered.length === 0 ? (
                <p className="px-4 py-12 text-center text-sm text-thm-muted">
                  No applications match your filters.
                </p>
              ) : (
                filtered.map((app) => (
                  <div
                    key={app.id}
                    className="relative grid gap-2 border-b border-thm-lilac px-4 py-4 last:border-0 sm:grid-cols-[1.4fr_1fr_0.8fr_0.9fr_2.5rem] sm:items-center sm:gap-3"
                  >
                    <div>
                      <p className="font-semibold text-thm-ink">{app.full_name}</p>
                      <p className="text-xs text-thm-muted">{app.id}</p>
                    </div>
                    <div className="text-sm">
                      <p className="truncate">{app.email}</p>
                      <p className="text-thm-muted">{app.phone}</p>
                    </div>
                    <p className="text-sm font-medium">
                      {campusLabel(app.campus)}
                    </p>
                    <p className="text-sm text-thm-muted">{app.created_at}</p>
                    <div className="absolute top-3 right-3 sm:static sm:justify-self-end">
                      <div className="relative">
                        <button
                          type="button"
                          aria-label="Application actions"
                          onClick={() =>
                            setMenuId((id) => (id === app.id ? null : app.id))
                          }
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-thm-purple hover:bg-thm-cream"
                        >
                          <EllipsisVertical className="h-5 w-5" />
                        </button>
                        {menuId === app.id ? (
                          <div className="absolute right-0 z-20 mt-1 min-w-[9rem] overflow-hidden rounded-xl bg-white py-1 shadow-lg">
                            <button
                              type="button"
                              className="block w-full px-4 py-2.5 text-left text-sm font-bold text-thm-purple hover:bg-thm-cream"
                              onClick={() => {
                                setViewing(app);
                                setMenuId(null);
                              }}
                            >
                              View
                            </button>
                            <button
                              type="button"
                              className="block w-full px-4 py-2.5 text-left text-sm font-bold text-thm-ink hover:bg-thm-cream"
                              onClick={() => {
                                setDeleting(app);
                                setMenuId(null);
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSettings}
            className="max-w-lg space-y-4 rounded-2xl border border-thm-lilac bg-white p-5 sm:p-6"
          >
            <h2 className="font-poppins text-lg font-bold text-thm-purple">
              Account settings
            </h2>
            <input
              type="password"
              required
              placeholder="Current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="h-11 w-full rounded-xl border border-thm-lilac px-4 text-sm outline-none focus:border-thm-purple"
            />
            <input
              type="email"
              placeholder="New email (optional)"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              className="h-11 w-full rounded-xl border border-thm-lilac px-4 text-sm outline-none focus:border-thm-purple"
            />
            <input
              type="password"
              placeholder="New password (optional)"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="h-11 w-full rounded-xl border border-thm-lilac px-4 text-sm outline-none focus:border-thm-purple"
            />
            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="h-11 w-full rounded-xl border border-thm-lilac px-4 text-sm outline-none focus:border-thm-purple"
            />
            <button
              type="submit"
              disabled={settingsLoading}
              className="h-11 rounded-full bg-thm-gold px-6 text-sm font-bold text-thm-ink transition hover:brightness-95 disabled:opacity-60"
            >
              {settingsLoading ? "Saving…" : "Save changes"}
            </button>
          </form>
        )}
      </div>

      {viewing ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-thm-ink/50 p-0 sm:items-center sm:p-4">
          <div className="max-h-[90dvh] w-full max-w-lg overflow-y-auto rounded-t-2xl bg-white p-5 sm:rounded-2xl sm:p-6">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <h3 className="font-poppins text-lg font-bold text-thm-purple">
                  {viewing.full_name}
                </h3>
                <p className="text-xs text-thm-muted">{viewing.id}</p>
              </div>
              <button
                type="button"
                onClick={() => setViewing(null)}
                className="text-sm font-bold text-thm-purple"
              >
                Close
              </button>
            </div>
            <dl>
              <DetailRow label="Submitted" value={viewing.created_at} />
              <DetailRow label="Campus" value={campusLabel(viewing.campus)} />
              <DetailRow label="Email" value={viewing.email} />
              <DetailRow label="Phone" value={viewing.phone} />
              <DetailRow label="ID / Passport" value={viewing.data.idNumber} />
              <DetailRow label="Date of birth" value={viewing.data.dateOfBirth} />
              <DetailRow label="Gender" value={viewing.data.gender} />
              <DetailRow label="Religion" value={viewing.data.religion} />
              <DetailRow label="Nationality" value={viewing.data.nationality} />
              <DetailRow label="County" value={viewing.data.countyOfOrigin} />
              <DetailRow label="Residence" value={viewing.data.currentResidence} />
              <DetailRow
                label="Medical"
                value={
                  viewing.data.hasMedicalCondition === "yes"
                    ? viewing.data.medicalConditionDetails || "Yes"
                    : viewing.data.hasMedicalCondition || undefined
                }
              />
              <DetailRow
                label="Father"
                value={[viewing.data.fatherName, viewing.data.fatherPhone]
                  .filter(Boolean)
                  .join(" · ")}
              />
              <DetailRow
                label="Mother"
                value={[viewing.data.motherName, viewing.data.motherPhone]
                  .filter(Boolean)
                  .join(" · ")}
              />
              <DetailRow
                label="Other NOK"
                value={[viewing.data.otherNokName, viewing.data.otherNokPhone]
                  .filter(Boolean)
                  .join(" · ")}
              />
              <DetailRow label="Fee payer" value={viewing.data.feePayer} />
              <DetailRow
                label="Education"
                value={[
                  viewing.data.educationLevel,
                  viewing.data.gradeAttained,
                  viewing.data.schoolName,
                  viewing.data.yearCompleted,
                ]
                  .filter(Boolean)
                  .join(" · ")}
              />
              <DetailRow label="Referral" value={viewing.data.referralSource} />
              <DetailRow label="Signature" value={viewing.data.signature} />
            </dl>
          </div>
        </div>
      ) : null}

      <ConfirmModal
        open={Boolean(deleting)}
        title="Delete application?"
        description={
          deleting
            ? `This permanently removes ${deleting.full_name}'s application.`
            : null
        }
        confirmLabel="Delete"
        tone="danger"
        loading={deleteLoading}
        onCancel={() => setDeleting(null)}
        onConfirm={handleDelete}
      />
    </div>
  );
}
