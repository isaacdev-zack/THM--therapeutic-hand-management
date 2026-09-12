"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { EllipsisVertical } from "lucide-react";
import { ConfirmModal, useToast } from "@/components/admin/AdminUi";
import { MessagesPanel } from "@/components/admin/MessagesPanel";
import type { DashboardContact } from "@/components/admin/MessagesPanel";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
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

export type { DashboardContact };

type BurgerIcon = "rest" | "x" | "spread";
const BURGER_X_MS = 220;
type Tab = "applications" | "messages" | "settings";
type CampusFilter = "all" | "nairobi" | "kisumu";
type PeriodFilter = "all" | "week";

function campusLabel(campus: string) {
  if (campus === "nairobi") return "Nairobi";
  if (campus === "kisumu") return "Kisumu";
  return campus || "—";
}

function CampusBadge({ campus }: { campus: string }) {
  return (
    <span className="inline-flex whitespace-nowrap rounded-full bg-thm-purple px-2.5 py-1 text-xs font-bold text-thm-gold">
      {campusLabel(campus)}
    </span>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-9 shrink-0 rounded-full px-3.5 text-sm font-bold transition ${
        active
          ? "bg-thm-purple text-thm-gold"
          : "bg-white text-thm-purple hover:bg-thm-cream"
      }`}
    >
      {children}
    </button>
  );
}

function ApplicationRowMenu({
  open,
  onToggle,
  onClose,
  onView,
  onDelete,
}: {
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  onView: () => void;
  onDelete: () => void;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ top: 0, right: 0 });

  useEffect(() => {
    if (!open || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setCoords({
      top: rect.bottom + 6,
      right: window.innerWidth - rect.right,
    });
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        buttonRef.current?.contains(target) ||
        menuRef.current?.contains(target)
      ) {
        return;
      }
      onClose();
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-label="Application actions"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={onToggle}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full text-thm-purple transition hover:bg-thm-cream"
      >
        <EllipsisVertical className="h-5 w-5" />
      </button>
      {open
        ? createPortal(
            <div
              ref={menuRef}
              role="menu"
              style={{ top: coords.top, right: coords.right }}
              className="fixed z-[75] min-w-[9.5rem] overflow-hidden rounded-xl bg-white py-1 shadow-[0_12px_32px_rgba(30,19,38,0.16)]"
            >
              <button
                type="button"
                role="menuitem"
                onClick={onView}
                className="block w-full px-4 py-2.5 text-left text-sm font-bold text-thm-purple hover:bg-thm-cream"
              >
                View
              </button>
              <button
                type="button"
                role="menuitem"
                onClick={onDelete}
                className="block w-full px-4 py-2.5 text-left text-sm font-bold text-thm-ink hover:bg-thm-cream"
              >
                Delete
              </button>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

function toCsv(header: string[], rows: string[][]) {
  return [header, ...rows]
    .map((row) =>
      row
        .map((cell) => {
          const value = String(cell ?? "");
          return `"${value.replace(/"/g, '""')}"`;
        })
        .join(","),
    )
    .join("\n");
}

function downloadCsv(filename: string, csv: string) {
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function isoDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dayStartMs(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day, 0, 0, 0, 0).getTime();
}

function dayEndMs(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day, 23, 59, 59, 999).getTime();
}

function weekDateRange() {
  const to = new Date();
  const from = new Date();
  from.setDate(from.getDate() - 6);
  return { from: isoDate(from), to: isoDate(to) };
}

function PaginationBar({
  currentPage,
  totalPages,
  totalItems,
  rowsPerPage,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
}) {
  if (totalItems === 0) return null;

  const from = (currentPage - 1) * rowsPerPage + 1;
  const to = Math.min(currentPage * rowsPerPage, totalItems);

  return (
    <div className="flex flex-col gap-3 bg-thm-cream/50 p-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-4">
      <span className="text-center text-xs font-semibold text-thm-ink sm:text-left sm:text-sm">
        <span className="sm:hidden">
          {from}–{to} of {totalItems} · Pg {currentPage}/{totalPages}
        </span>
        <span className="hidden sm:inline">
          Showing {from} to {to} of {totalItems}
          <span className="ml-2 text-thm-purple">
            · Page {currentPage} of {totalPages}
          </span>
        </span>
      </span>
      <div className="grid grid-cols-2 gap-2 sm:flex sm:gap-2">
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="h-11 rounded-xl bg-white px-4 text-sm font-bold text-thm-purple shadow-sm disabled:opacity-40 sm:h-10"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="h-11 rounded-xl bg-thm-purple px-4 text-sm font-bold text-white shadow-sm disabled:opacity-40 sm:h-10"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default function DashboardClient({
  initialApplications,
  initialMessages,
  adminUsername,
  loadError = false,
}: {
  initialApplications: DashboardApplication[];
  initialMessages: DashboardContact[];
  adminUsername: string;
  loadError?: boolean;
}) {
  const [activeTab, setActiveTab] = useState<Tab>("applications");
  const [applications, setApplications] = useState(initialApplications);
  const [messages, setMessages] = useState(initialMessages);
  const [appPage, setAppPage] = useState(1);
  const [viewApp, setViewApp] = useState<DashboardApplication | null>(null);
  const [deleteTarget, setDeleteTarget] =
    useState<DashboardApplication | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);
  const [confirmSave, setConfirmSave] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [query, setQuery] = useState("");
  const [campusFilter, setCampusFilter] = useState<CampusFilter>("all");
  const [periodFilter, setPeriodFilter] = useState<PeriodFilter>("all");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [burgerIcon, setBurgerIcon] = useState<BurgerIcon>("spread");
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const burgerTimer = useRef<number | null>(null);
  const [menuAppId, setMenuAppId] = useState<string | null>(null);
  const rowsPerPage = 10;
  const router = useRouter();
  const toast = useToast();

  const clearBurgerTimer = () => {
    if (burgerTimer.current != null) {
      window.clearTimeout(burgerTimer.current);
      burgerTimer.current = null;
    }
  };

  const closeSidebar = () => {
    if (!sidebarOpen) {
      setBurgerIcon("rest");
      return;
    }
    clearBurgerTimer();
    setBurgerIcon("x");
    setSidebarOpen(false);
    burgerTimer.current = window.setTimeout(() => {
      setBurgerIcon("rest");
      burgerTimer.current = null;
    }, BURGER_X_MS);
  };

  const openSidebar = () => {
    clearBurgerTimer();
    setBurgerIcon("x");
    setSidebarOpen(true);
    burgerTimer.current = window.setTimeout(() => {
      setBurgerIcon("spread");
      burgerTimer.current = null;
    }, BURGER_X_MS);
  };

  useEffect(() => () => clearBurgerTimer(), []);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => {
      setIsMobile(mq.matches);
      if (mq.matches) {
        setSidebarOpen(false);
        setBurgerIcon("rest");
      }
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const [appsRes, msgsRes] = await Promise.all([
          fetch("/api/admin/applications"),
          fetch("/api/admin/contacts"),
        ]);
        if (appsRes.ok) {
          const data = await appsRes.json();
          if (data.applications) setApplications(data.applications);
        }
        if (msgsRes.ok) {
          const data = await msgsRes.json();
          if (data.messages) setMessages(data.messages);
        }
      } catch {
        // ignore poll errors
      }
    }, 5000);

    const params = new URLSearchParams(window.location.search);
    if (params.get("login") === "success") {
      toast("success", "Signed in successfully.");
      window.history.replaceState(null, "", window.location.pathname);
    }

    return () => clearInterval(interval);
  }, [toast]);

  useEffect(() => {
    if (loadError) {
      toast("error", "We couldn't load dashboard data. Please refresh.");
    }
  }, [loadError, toast]);

  useEffect(() => {
    if (!sidebarOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeSidebar();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sidebarOpen]);

  const filteredApps = useMemo(() => {
    const q = query.trim().toLowerCase();
    const weekCutoff = Date.now() - 7 * 24 * 60 * 60 * 1000;
    const fromMs = dateFrom ? dayStartMs(dateFrom) : null;
    const toMs = dateTo ? dayEndMs(dateTo) : null;
    return applications.filter((app) => {
      if (campusFilter !== "all" && app.campus !== campusFilter) return false;
      const submitted = new Date(app.created_at_iso || app.created_at).getTime();
      if (fromMs != null || toMs != null) {
        if (Number.isNaN(submitted)) return false;
        if (fromMs != null && submitted < fromMs) return false;
        if (toMs != null && submitted > toMs) return false;
      } else if (periodFilter === "week") {
        if (Number.isNaN(submitted) || submitted < weekCutoff) return false;
      }
      if (!q) return true;
      const haystack = [
        app.full_name,
        app.email,
        app.phone,
        app.campus,
        campusLabel(app.campus),
        app.id,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [applications, query, campusFilter, periodFilter, dateFrom, dateTo]);

  const appPages = Math.max(1, Math.ceil(filteredApps.length / rowsPerPage));
  const paginatedApps = filteredApps.slice(
    (appPage - 1) * rowsPerPage,
    appPage * rowsPerPage,
  );

  const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  const weekCount = applications.filter(
    (app) =>
      new Date(app.created_at_iso || app.created_at).getTime() >= weekAgo,
  ).length;
  const nairobiCount = applications.filter(
    (app) => app.campus === "nairobi",
  ).length;
  const kisumuCount = applications.length - nairobiCount;
  const emptyAppsCopy = loadError
    ? "We couldn't load applications. Please refresh."
    : query.trim() ||
        campusFilter !== "all" ||
        periodFilter !== "all" ||
        dateFrom ||
        dateTo
      ? "No matching applications."
      : "No applications yet.";

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      const res = await fetch("/api/admin/logout", { method: "POST" });
      if (!res.ok) {
        toast("error", "We couldn't log you out. Please try again.");
        setLoggingOut(false);
        setConfirmLogout(false);
        return;
      }
      router.push("/admin?logout=success");
      router.refresh();
    } catch {
      toast("error", "We couldn't log you out. Please try again.");
      setLoggingOut(false);
      setConfirmLogout(false);
    }
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);

    try {
      const res = await fetch(
        `/api/admin/applications?id=${encodeURIComponent(deleteTarget.id)}`,
        { method: "DELETE" },
      );

      if (!res.ok) {
        toast(
          "error",
          res.status === 401
            ? "Your session expired. Sign in again."
            : "We couldn't delete that application. Please try again.",
        );
        setDeleting(false);
        return;
      }

      setApplications((prev) => {
        const next = prev.filter((app) => app.id !== deleteTarget.id);
        const pages = Math.max(1, Math.ceil(next.length / rowsPerPage));
        setAppPage((p) => Math.min(p, pages));
        return next;
      });
      setViewApp((app) => (app?.id === deleteTarget.id ? null : app));
      setDeleteTarget(null);
      toast("success", "Application deleted.");
    } catch {
      toast("error", "We couldn't delete that application. Please try again.");
    } finally {
      setDeleting(false);
    }
  };

  const handleExport = () => {
    if (!filteredApps.length) {
      toast("error", "There are no applications to export.");
      return;
    }
    const csv = toCsv(
      [
        "No.",
        "Full Name",
        "Email",
        "Phone",
        "Campus",
        "ID / Passport",
        "Submitted",
      ],
      filteredApps.map((app, i) => [
        String(i + 1),
        app.full_name,
        app.email,
        app.phone,
        campusLabel(app.campus),
        app.data.idNumber || "",
        app.created_at,
      ]),
    );
    downloadCsv(
      `thm_applications_${new Date().toISOString().split("T")[0]}.csv`,
      csv,
    );
    toast("success", "CSV downloaded.");
  };

  const requestSave = (e: FormEvent) => {
    e.preventDefault();

    if (!currentPassword) {
      toast("error", "Current password is required.");
      return;
    }

    if (!newUsername && !newPassword) {
      toast("error", "Enter a new email and/or new password.");
      return;
    }

    if (newPassword && newPassword !== confirmPassword) {
      toast("error", "New passwords do not match.");
      return;
    }

    setConfirmSave(true);
  };

  const handleUpdate = async () => {
    setLoading(true);

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

      if (res.ok) {
        setNewUsername("");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setConfirmSave(false);
        toast("success", "Account details saved.");
      } else if (res.status >= 500) {
        toast("error", "We couldn't save those changes. Please try again.");
      } else {
        const data = await res.json().catch(() => ({}));
        toast(
          "error",
          typeof data.error === "string"
            ? data.error
            : "We couldn't save those changes. Please try again.",
        );
      }
    } catch {
      toast("error", "We couldn't save those changes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const weekRange = weekDateRange();
  const weekChipActive =
    periodFilter === "week" ||
    (dateFrom === weekRange.from && dateTo === weekRange.to);
  const allTimeChipActive = periodFilter === "all" && !dateFrom && !dateTo;

  const navButtonClass = (tab: Tab) =>
    `flex w-full items-center rounded-lg px-4 py-3 text-left text-sm font-bold transition-colors ${
      activeTab === tab
        ? "bg-thm-gold text-thm-ink"
        : "text-white hover:bg-white/10"
    }`;

  const goToTab = (tab: Tab) => {
    setActiveTab(tab);
    if (tab === "applications") setAppPage(1);
    if (isMobile) closeSidebar();
  };

  useLockBodyScroll(sidebarOpen && isMobile);

  const burgerClass = `admin-burger${
    burgerIcon === "x" ? " is-x" : burgerIcon === "spread" ? " is-spread" : ""
  }`;

  const sidebarInner = (opts: { showCollapse: boolean }) => (
    <>
      <div
        className={`flex items-center gap-3 pt-[max(1rem,env(safe-area-inset-top))] pb-4 ${
          sidebarOpen || isMobile ? "px-4" : "justify-center px-1.5"
        }`}
      >
        {sidebarOpen || isMobile ? (
          <Image
            src="/logo-mark-light.png"
            alt="THM"
            width={140}
            height={40}
            className="h-9 min-w-0 flex-1 object-contain object-left"
            priority
          />
        ) : null}
        {opts.showCollapse ? (
          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-thm-gold text-thm-ink shadow-sm transition hover:brightness-95"
            aria-label="Toggle navigation"
            aria-expanded={sidebarOpen}
            onClick={() => (sidebarOpen ? closeSidebar() : openSidebar())}
          >
            <span className={burgerClass} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        ) : (
          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-thm-gold text-thm-ink shadow-sm transition hover:brightness-95"
            aria-label="Close navigation"
            onClick={closeSidebar}
          >
            <span className="admin-burger is-x" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        )}
      </div>

      {sidebarOpen || isMobile ? (
        <>
          <p className="truncate px-5 pb-4 text-xs font-semibold text-thm-gold">
            {adminUsername}
          </p>
          <nav className="flex flex-1 flex-col gap-2 px-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <button
              type="button"
              onClick={() => goToTab("applications")}
              className={navButtonClass("applications")}
            >
              Applications
            </button>
            <button
              type="button"
              onClick={() => goToTab("messages")}
              className={navButtonClass("messages")}
            >
              Messages
            </button>
            <button
              type="button"
              onClick={() => goToTab("settings")}
              className={navButtonClass("settings")}
            >
              Settings
            </button>
          </nav>
        </>
      ) : null}
    </>
  );

  return (
    <div className="relative flex h-dvh max-h-dvh overflow-hidden bg-thm-cream text-thm-ink">
      {/* Mobile drawer — portaled so it always covers the full viewport */}
      {mounted
        ? createPortal(
            <div className="md:hidden">
              <button
                type="button"
                aria-label="Close menu"
                onClick={closeSidebar}
                className={`fixed inset-0 z-[60] bg-thm-ink/55 transition-opacity ${
                  sidebarOpen
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
              />
              <aside
                className={`fixed top-0 bottom-0 left-0 z-[65] flex h-[100dvh] w-[min(18rem,88vw)] flex-col bg-thm-purple text-white shadow-[8px_0_32px_rgba(30,19,38,0.22)] transition-transform duration-200 ease-out ${
                  sidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                {sidebarInner({ showCollapse: false })}
              </aside>
            </div>,
            document.body,
          )
        : null}

      {/* Desktop docked sidebar */}
      <aside
        className={`relative z-10 hidden h-full shrink-0 flex-col bg-thm-purple text-white transition-[width] duration-200 md:flex ${
          sidebarOpen ? "w-60" : "w-14"
        }`}
      >
        {sidebarInner({ showCollapse: true })}
      </aside>

      {/* Content */}
      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
        <header className="relative z-30 flex h-14 shrink-0 items-center gap-3 border-b border-thm-lilac/70 bg-white px-3 sm:h-16 sm:px-5">
          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-thm-purple text-white md:hidden"
            aria-label="Open navigation"
            onClick={openSidebar}
          >
            <span className="admin-burger" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-thm-purple">
              {activeTab === "applications"
                ? "Applications"
                : activeTab === "messages"
                  ? "Messages"
                  : "Settings"}
            </p>
            <p className="truncate text-xs text-thm-muted">{adminUsername}</p>
          </div>
          <button
            type="button"
            onClick={() => setConfirmLogout(true)}
            className="h-10 shrink-0 rounded-md bg-thm-purple px-3 text-sm font-bold text-white transition hover:bg-thm-purple-deep sm:px-4"
          >
            Logout
          </button>
        </header>

        <main className="relative z-0 min-h-0 min-w-0 flex-1 overflow-y-auto overscroll-contain p-3 sm:p-4 md:p-6 lg:p-8">
          {activeTab === "applications" ? (
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 sm:gap-4">
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="rounded-2xl bg-white p-3 sm:p-4">
                  <p className="text-[10px] font-bold tracking-wider text-thm-purple uppercase sm:text-xs">
                    Total
                  </p>
                  <p className="mt-1 font-poppins text-2xl font-bold text-thm-ink sm:text-3xl">
                    {applications.length}
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-3 sm:p-4">
                  <p className="text-[10px] font-bold tracking-wider text-thm-purple uppercase sm:text-xs">
                    Week
                  </p>
                  <p className="mt-1 font-poppins text-2xl font-bold text-thm-ink sm:text-3xl">
                    {weekCount}
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-3 sm:p-4">
                  <p className="text-[10px] font-bold tracking-wider text-thm-purple uppercase sm:text-xs">
                    Campus
                  </p>
                  <p className="mt-1 text-[11px] font-semibold leading-tight text-thm-ink sm:mt-2 sm:text-sm">
                    {nairobiCount} Nairobi
                    <br className="sm:hidden" />
                    <span className="hidden sm:inline"> · </span>
                    {kisumuCount} Kisumu
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl bg-white">
                <div className="flex flex-col gap-3 bg-thm-cream/50 p-3 sm:gap-4 sm:p-5">
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                    <div className="min-w-0">
                      <h2 className="font-poppins text-lg font-bold text-thm-purple sm:text-xl">
                        Application directory
                      </h2>
                      <p className="mt-1 text-sm font-semibold text-thm-ink">
                        Total applications:{" "}
                        <span className="text-thm-purple">
                          {filteredApps.length}
                        </span>
                      </p>
                    </div>
                    <div className="flex w-full flex-col gap-2 sm:flex-row lg:w-auto">
                      <input
                        type="search"
                        value={query}
                        onChange={(e) => {
                          setQuery(e.target.value);
                          setAppPage(1);
                        }}
                        placeholder="Search name, email, phone…"
                        className="h-11 w-full rounded-xl bg-white px-3 text-sm outline-none placeholder:text-thm-ink/40 focus:ring-2 focus:ring-thm-gold/40 sm:h-10 sm:min-w-[14rem] lg:w-64"
                      />
                      <button
                        type="button"
                        onClick={handleExport}
                        className="flex h-11 w-full items-center justify-center rounded-xl bg-thm-gold px-5 text-sm font-bold text-thm-ink transition hover:brightness-95 sm:h-10 sm:w-auto"
                      >
                        Export CSV
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
                    <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0">
                      <FilterChip
                        active={campusFilter === "all"}
                        onClick={() => {
                          setCampusFilter("all");
                          setAppPage(1);
                        }}
                      >
                        All campuses
                      </FilterChip>
                      <FilterChip
                        active={campusFilter === "nairobi"}
                        onClick={() => {
                          setCampusFilter("nairobi");
                          setAppPage(1);
                        }}
                      >
                        Nairobi
                      </FilterChip>
                      <FilterChip
                        active={campusFilter === "kisumu"}
                        onClick={() => {
                          setCampusFilter("kisumu");
                          setAppPage(1);
                        }}
                      >
                        Kisumu
                      </FilterChip>
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0">
                      <FilterChip
                        active={allTimeChipActive}
                        onClick={() => {
                          setPeriodFilter("all");
                          setDateFrom("");
                          setDateTo("");
                          setAppPage(1);
                        }}
                      >
                        All time
                      </FilterChip>
                      <FilterChip
                        active={weekChipActive}
                        onClick={() => {
                          const range = weekDateRange();
                          setPeriodFilter("week");
                          setDateFrom(range.from);
                          setDateTo(range.to);
                          setAppPage(1);
                        }}
                      >
                        This week
                      </FilterChip>
                    </div>
                    <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center">
                      <label className="flex h-9 min-w-0 items-center gap-2 rounded-full bg-white px-3 text-sm font-bold text-thm-purple">
                        <span className="shrink-0 text-xs font-semibold text-thm-ink/50">
                          From
                        </span>
                        <input
                          type="date"
                          value={dateFrom}
                          max={dateTo || undefined}
                          onChange={(e) => {
                            setDateFrom(e.target.value);
                            setPeriodFilter("all");
                            setAppPage(1);
                          }}
                          className="min-w-0 flex-1 bg-transparent text-sm font-bold text-thm-purple outline-none"
                        />
                      </label>
                      <label className="flex h-9 min-w-0 items-center gap-2 rounded-full bg-white px-3 text-sm font-bold text-thm-purple">
                        <span className="shrink-0 text-xs font-semibold text-thm-ink/50">
                          To
                        </span>
                        <input
                          type="date"
                          value={dateTo}
                          min={dateFrom || undefined}
                          onChange={(e) => {
                            setDateTo(e.target.value);
                            setPeriodFilter("all");
                            setAppPage(1);
                          }}
                          className="min-w-0 flex-1 bg-transparent text-sm font-bold text-thm-purple outline-none"
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="md:hidden">
                  {paginatedApps.length > 0 ? (
                    paginatedApps.map((app, index) => (
                      <div
                        key={app.id}
                        className="space-y-3 p-4 odd:bg-white even:bg-thm-cream/35"
                      >
                        <div className="flex items-start gap-2">
                          <button
                            type="button"
                            onClick={() => setViewApp(app)}
                            className="min-w-0 flex-1 space-y-2 text-left"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="min-w-0">
                                <p className="font-bold text-thm-ink">
                                  {app.full_name}
                                </p>
                                <p className="mt-0.5 break-all font-mono text-xs text-thm-purple">
                                  {app.email}
                                </p>
                              </div>
                              <span className="shrink-0 text-xs font-bold text-thm-gold">
                                #{(appPage - 1) * rowsPerPage + index + 1}
                              </span>
                            </div>
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-thm-ink">
                              <CampusBadge campus={app.campus} />
                              <span className="font-semibold">{app.phone}</span>
                              <span>{app.created_at}</span>
                            </div>
                          </button>
                          <ApplicationRowMenu
                            open={menuAppId === `m-${app.id}`}
                            onToggle={() =>
                              setMenuAppId((id) =>
                                id === `m-${app.id}` ? null : `m-${app.id}`,
                              )
                            }
                            onClose={() => setMenuAppId(null)}
                            onView={() => {
                              setMenuAppId(null);
                              setViewApp(app);
                            }}
                            onDelete={() => {
                              setMenuAppId(null);
                              setDeleteTarget(app);
                            }}
                          />
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="p-10 text-center text-sm font-semibold text-thm-purple">
                      {emptyAppsCopy}
                    </p>
                  )}
                </div>

                <div className="hidden overflow-x-auto md:block">
                  <table className="w-full min-w-[760px] border-collapse text-left">
                    <thead className="bg-thm-cream/50">
                      <tr>
                        {[
                          "No.",
                          "Name",
                          "Email",
                          "Mobile",
                          "Campus",
                          "Submitted",
                          "Actions",
                        ].map((label) => (
                          <th
                            key={label}
                            className={`px-3 py-3 text-xs font-bold tracking-wider text-thm-purple uppercase sm:px-4 ${
                              label === "Actions" ? "text-right" : ""
                            } ${
                              label === "Campus" || label === "Mobile"
                                ? "whitespace-nowrap"
                                : ""
                            }`}
                          >
                            {label}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedApps.length > 0 ? (
                        paginatedApps.map((app, index) => (
                          <tr
                            key={app.id}
                            onClick={() => setViewApp(app)}
                            className="cursor-pointer transition-colors odd:bg-white even:bg-thm-cream/35 hover:bg-thm-cream/70"
                          >
                            <td className="px-3 py-3 text-sm text-thm-purple sm:px-4">
                              {(appPage - 1) * rowsPerPage + index + 1}
                            </td>
                            <td className="px-3 py-3 text-sm font-bold text-thm-ink sm:px-4">
                              {app.full_name}
                            </td>
                            <td className="px-3 py-3 font-mono text-sm text-thm-ink sm:px-4">
                              {app.email}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3 text-sm text-thm-ink sm:px-4">
                              {app.phone}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3 text-sm sm:px-4">
                              <CampusBadge campus={app.campus} />
                            </td>
                            <td className="px-3 py-3 text-sm text-thm-ink sm:px-4">
                              {app.created_at}
                            </td>
                            <td
                              className="px-3 py-3 sm:px-4"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div className="flex justify-end">
                                <ApplicationRowMenu
                                  open={menuAppId === `d-${app.id}`}
                                  onToggle={() =>
                                    setMenuAppId((id) =>
                                      id === `d-${app.id}`
                                        ? null
                                        : `d-${app.id}`,
                                    )
                                  }
                                  onClose={() => setMenuAppId(null)}
                                  onView={() => {
                                    setMenuAppId(null);
                                    setViewApp(app);
                                  }}
                                  onDelete={() => {
                                    setMenuAppId(null);
                                    setDeleteTarget(app);
                                  }}
                                />
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan={7}
                            className="p-12 text-center font-semibold text-thm-purple"
                          >
                            {emptyAppsCopy}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                <PaginationBar
                  currentPage={appPage}
                  totalPages={appPages}
                  totalItems={filteredApps.length}
                  rowsPerPage={rowsPerPage}
                  onPageChange={setAppPage}
                />
              </div>
            </div>
          ) : null}

          {activeTab === "messages" ? (
            <MessagesPanel
              messages={messages}
              onMessagesChange={setMessages}
              toast={toast}
            />
          ) : null}

          {activeTab === "settings" ? (
            <div className="mx-auto w-full max-w-[560px] rounded-2xl bg-white p-4 sm:p-6 md:p-8">
              <h2 className="mb-2 font-poppins text-xl font-bold text-thm-purple sm:text-2xl">
                Account Settings
              </h2>
              <p className="mb-6 text-sm font-medium text-thm-ink sm:mb-8">
                Confirm your current password, then set a new email and/or
                password.
              </p>
              <form onSubmit={requestSave} className="space-y-5 sm:space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-bold text-thm-ink">
                    Current password
                  </label>
                  <div className="relative">
                    <input
                      type={showCurrentPassword ? "text" : "password"}
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="Enter current password"
                      autoComplete="current-password"
                      className="h-[48px] w-full rounded-xl bg-thm-cream/70 py-0 pr-16 pl-4 text-base outline-none transition focus:bg-white focus:ring-2 focus:ring-thm-gold/40 sm:h-[52px]"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowCurrentPassword((v) => !v)}
                      className="absolute top-1/2 right-4 -translate-y-1/2 text-sm font-bold text-thm-purple"
                    >
                      {showCurrentPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-thm-ink">
                    New email / username{" "}
                    <span className="font-normal text-thm-purple">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    placeholder="Enter new email"
                    autoComplete="username"
                    className="h-[48px] w-full rounded-xl bg-thm-cream/70 px-4 text-base outline-none transition focus:bg-white focus:ring-2 focus:ring-thm-gold/40 sm:h-[52px]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-thm-ink">
                    New password
                  </label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter new password"
                      autoComplete="new-password"
                      className="h-[48px] w-full rounded-xl bg-thm-cream/70 py-0 pr-16 pl-4 text-base outline-none transition focus:bg-white focus:ring-2 focus:ring-thm-gold/40 sm:h-[52px]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword((v) => !v)}
                      className="absolute top-1/2 right-4 -translate-y-1/2 text-sm font-bold text-thm-purple"
                    >
                      {showNewPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-thm-ink">
                    Confirm new password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Re-enter new password"
                      autoComplete="new-password"
                      className="h-[48px] w-full rounded-xl bg-thm-cream/70 py-0 pr-16 pl-4 text-base outline-none transition focus:bg-white focus:ring-2 focus:ring-thm-gold/40 sm:h-[52px]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((v) => !v)}
                      className="absolute top-1/2 right-4 -translate-y-1/2 text-sm font-bold text-thm-purple"
                    >
                      {showConfirmPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={
                    loading ||
                    !currentPassword ||
                    (!newUsername && !newPassword) ||
                    Boolean(newPassword && newPassword !== confirmPassword)
                  }
                  className="h-12 w-full rounded-md bg-thm-gold font-bold text-thm-ink transition hover:brightness-95 disabled:opacity-50 sm:w-40"
                >
                  {loading ? "Saving..." : "Save Changes"}
                </button>
              </form>
            </div>
          ) : null}
        </main>
      </div>

      <ApplicationViewModal app={viewApp} onClose={() => setViewApp(null)} />

      <ConfirmModal
        open={Boolean(deleteTarget)}
        title="Delete this application?"
        description={
          deleteTarget ? (
            <>
              This permanently removes{" "}
              <span className="break-all font-medium text-thm-ink">
                {deleteTarget.full_name} ({deleteTarget.email})
              </span>
              . This cannot be undone.
            </>
          ) : null
        }
        confirmLabel={deleting ? "Deleting..." : "Delete"}
        tone="danger"
        loading={deleting}
        onCancel={() => {
          if (deleting) return;
          setDeleteTarget(null);
        }}
        onConfirm={confirmDelete}
      />

      <ConfirmModal
        open={confirmLogout}
        title="Log out?"
        description="You'll need your email and password to sign back in."
        confirmLabel="Log out"
        loading={loggingOut}
        onCancel={() => {
          if (loggingOut) return;
          setConfirmLogout(false);
        }}
        onConfirm={handleLogout}
      />

      <ConfirmModal
        open={confirmSave}
        title="Save account changes?"
        description="This will update the email and/or password used to sign in to the admin portal."
        confirmLabel="Save changes"
        loading={loading}
        onCancel={() => {
          if (loading) return;
          setConfirmSave(false);
        }}
        onConfirm={handleUpdate}
      />
    </div>
  );
}

function FormValue({
  label,
  value,
  wide = false,
}: {
  label: string;
  value: string;
  wide?: boolean;
}) {
  if (!value) return null;
  return (
    <div className={wide ? "sm:col-span-2" : undefined}>
      <p className="mb-1 text-xs font-bold tracking-wider text-thm-purple uppercase">
        {label}
      </p>
      <p className="rounded-xl bg-thm-cream/70 px-4 py-3 text-sm whitespace-pre-wrap text-thm-ink">
        {value}
      </p>
    </div>
  );
}

function ApplicationViewModal({
  app,
  onClose,
}: {
  app: DashboardApplication | null;
  onClose: () => void;
}) {
  useLockBodyScroll(Boolean(app));

  useEffect(() => {
    if (!app) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [app, onClose]);

  if (!app) return null;

  const d = app.data;
  const medical =
    d.hasMedicalCondition === "yes"
      ? d.medicalConditionDetails || "Yes"
      : d.hasMedicalCondition === "no"
        ? "No"
        : "";

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-thm-ink/60 p-0 sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="app-view-title"
        className="flex max-h-[92dvh] w-full max-w-2xl flex-col rounded-t-2xl bg-white shadow-[0_16px_48px_rgba(30,19,38,0.18)] sm:max-h-[85dvh] sm:rounded-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 px-5 pt-5 sm:px-6 sm:pt-6">
          <div className="min-w-0">
            <p className="text-xs font-bold tracking-wider text-thm-gold uppercase">
              Submitted application
            </p>
            <h3
              id="app-view-title"
              className="mt-1 font-poppins text-xl font-bold text-thm-purple"
            >
              {app.full_name}
            </h3>
            <p className="mt-1 break-all text-sm text-thm-ink/70">{app.email}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-xl bg-thm-cream px-3 py-2 text-sm font-bold text-thm-purple"
          >
            Close
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <CampusBadge campus={app.campus} />
            <span className="text-xs font-semibold text-thm-ink/70">
              {app.created_at}
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <FormValue label="Phone" value={app.phone} />
            <FormValue label="ID / Passport" value={d.idNumber} />
            <FormValue label="Date of birth" value={d.dateOfBirth} />
            <FormValue label="Gender" value={d.gender} />
            <FormValue label="Religion" value={d.religion} />
            <FormValue label="Nationality" value={d.nationality} />
            <FormValue label="County of origin" value={d.countyOfOrigin} />
            <FormValue label="Current residence" value={d.currentResidence} />
            <FormValue label="Medical condition" value={medical} wide />
            <FormValue
              label="Father"
              value={[d.fatherName, d.fatherPhone, d.fatherEmail]
                .filter(Boolean)
                .join(" · ")}
              wide
            />
            <FormValue
              label="Mother"
              value={[d.motherName, d.motherPhone, d.motherEmail]
                .filter(Boolean)
                .join(" · ")}
              wide
            />
            <FormValue
              label="Other next of kin"
              value={[d.otherNokName, d.otherNokPhone, d.otherNokEmail]
                .filter(Boolean)
                .join(" · ")}
              wide
            />
            <FormValue
              label="Fee payer"
              value={
                d.feePayer === "other"
                  ? [
                      "Other",
                      d.feePayerOtherName,
                      d.feePayerOtherRelationship,
                      d.feePayerOtherPhone,
                    ]
                      .filter(Boolean)
                      .join(" · ")
                  : d.feePayer
              }
              wide
            />
            <FormValue
              label="Education"
              value={[
                d.educationLevel,
                d.gradeAttained,
                d.schoolName,
                d.yearCompleted,
              ]
                .filter(Boolean)
                .join(" · ")}
              wide
            />
            <FormValue label="Referral" value={d.referralSource} />
            <FormValue label="Signature" value={d.signature} />
          </div>
        </div>
      </div>
    </div>
  );
}
