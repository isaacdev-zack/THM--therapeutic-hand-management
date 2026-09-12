"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { EllipsisVertical } from "lucide-react";
import { ConfirmModal } from "@/components/admin/AdminUi";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

export type DashboardContact = {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  created_at: string;
  created_at_iso: string;
};

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

function RowMenu({
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
        aria-label="Message actions"
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

function MessageViewModal({
  msg,
  onClose,
}: {
  msg: DashboardContact | null;
  onClose: () => void;
}) {
  useLockBodyScroll(Boolean(msg));

  useEffect(() => {
    if (!msg) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [msg, onClose]);

  if (!msg) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-thm-ink/60 p-0 sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="msg-view-title"
        className="flex max-h-[92dvh] w-full max-w-2xl flex-col rounded-t-2xl bg-white shadow-[0_16px_48px_rgba(30,19,38,0.18)] sm:max-h-[85dvh] sm:rounded-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 px-5 pt-5 sm:px-6 sm:pt-6">
          <div className="min-w-0">
            <p className="text-xs font-bold tracking-wider text-thm-gold uppercase">
              Contact message
            </p>
            <h3
              id="msg-view-title"
              className="mt-1 font-poppins text-xl font-bold text-thm-purple"
            >
              {msg.name}
            </h3>
            <p className="mt-1 break-all text-sm text-thm-ink/70">{msg.email}</p>
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
          <div className="mb-4 text-xs font-semibold text-thm-ink/70">
            {msg.created_at}
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <p className="mb-1 text-xs font-bold tracking-wider text-thm-purple uppercase">
                Phone
              </p>
              <p className="rounded-xl bg-thm-cream/70 px-4 py-3 text-sm text-thm-ink">
                {msg.phone}
              </p>
            </div>
            <div>
              <p className="mb-1 text-xs font-bold tracking-wider text-thm-purple uppercase">
                Subject
              </p>
              <p className="rounded-xl bg-thm-cream/70 px-4 py-3 text-sm text-thm-ink">
                {msg.subject}
              </p>
            </div>
            <div className="sm:col-span-2">
              <p className="mb-1 text-xs font-bold tracking-wider text-thm-purple uppercase">
                Message
              </p>
              <p className="rounded-xl bg-thm-cream/70 px-4 py-3 text-sm whitespace-pre-wrap text-thm-ink">
                {msg.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MessagesPanel({
  messages,
  onMessagesChange,
  toast,
}: {
  messages: DashboardContact[];
  onMessagesChange: (next: DashboardContact[]) => void;
  toast: (kind: "success" | "error", message: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [period, setPeriod] = useState<"all" | "week">("all");
  const [page, setPage] = useState(1);
  const [menuId, setMenuId] = useState<string | null>(null);
  const [viewMsg, setViewMsg] = useState<DashboardContact | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<DashboardContact | null>(
    null,
  );
  const [deleting, setDeleting] = useState(false);
  const rowsPerPage = 10;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const weekCutoff = Date.now() - 7 * 24 * 60 * 60 * 1000;
    return messages.filter((msg) => {
      const submitted = new Date(msg.created_at_iso || msg.created_at).getTime();
      if (period === "week") {
        if (Number.isNaN(submitted) || submitted < weekCutoff) return false;
      }
      if (!q) return true;
      return [msg.name, msg.email, msg.phone, msg.subject, msg.message, msg.id]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [messages, query, period]);

  const pages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
  const paginated = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  const weekCount = messages.filter(
    (msg) =>
      new Date(msg.created_at_iso || msg.created_at).getTime() >=
      Date.now() - 7 * 24 * 60 * 60 * 1000,
  ).length;
  const emptyCopy =
    query.trim() || period !== "all"
      ? "No matching messages."
      : "No contact messages yet.";

  const confirmDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      const res = await fetch(
        `/api/admin/contacts?id=${encodeURIComponent(deleteTarget.id)}`,
        { method: "DELETE" },
      );
      if (!res.ok) {
        toast(
          "error",
          res.status === 401
            ? "Your session expired. Sign in again."
            : "We couldn't delete that message. Please try again.",
        );
        setDeleting(false);
        return;
      }
      const next = messages.filter((m) => m.id !== deleteTarget.id);
      onMessagesChange(next);
      setViewMsg((m) => (m?.id === deleteTarget.id ? null : m));
      setDeleteTarget(null);
      setPage((p) => Math.min(p, Math.max(1, Math.ceil(next.length / rowsPerPage))));
      toast("success", "Message deleted.");
    } catch {
      toast("error", "We couldn't delete that message. Please try again.");
    } finally {
      setDeleting(false);
    }
  };

  const handleExport = () => {
    if (!filtered.length) {
      toast("error", "There are no messages to export.");
      return;
    }
    const rows = [
      ["No.", "Name", "Email", "Phone", "Subject", "Message", "Submitted"],
      ...filtered.map((msg, i) => [
        String(i + 1),
        msg.name,
        msg.email,
        msg.phone,
        msg.subject,
        msg.message,
        msg.created_at,
      ]),
    ];
    const csv = rows
      .map((row) =>
        row.map((cell) => `"${String(cell ?? "").replace(/"/g, '""')}"`).join(","),
      )
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `thm_contact_messages_${new Date().toISOString().split("T")[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    toast("success", "CSV downloaded.");
  };

  return (
    <>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 sm:gap-4">
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          <div className="rounded-2xl bg-white p-3 sm:p-4">
            <p className="text-[10px] font-bold tracking-wider text-thm-purple uppercase sm:text-xs">
              Total
            </p>
            <p className="mt-1 font-poppins text-2xl font-bold text-thm-ink sm:text-3xl">
              {messages.length}
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
        </div>

        <div className="overflow-hidden rounded-2xl bg-white">
          <div className="flex flex-col gap-3 bg-thm-cream/50 p-3 sm:gap-4 sm:p-5">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0">
                <h2 className="font-poppins text-lg font-bold text-thm-purple sm:text-xl">
                  Contact messages
                </h2>
                <p className="mt-1 text-sm font-semibold text-thm-ink">
                  From the website contact form:{" "}
                  <span className="text-thm-purple">{filtered.length}</span>
                </p>
              </div>
              <div className="flex w-full flex-col gap-2 sm:flex-row lg:w-auto">
                <input
                  type="search"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setPage(1);
                  }}
                  placeholder="Search name, email, subject…"
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
            <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0">
              <FilterChip
                active={period === "all"}
                onClick={() => {
                  setPeriod("all");
                  setPage(1);
                }}
              >
                All time
              </FilterChip>
              <FilterChip
                active={period === "week"}
                onClick={() => {
                  setPeriod("week");
                  setPage(1);
                }}
              >
                This week
              </FilterChip>
            </div>
          </div>

          <div className="md:hidden">
            {paginated.length > 0 ? (
              paginated.map((msg, index) => (
                <div
                  key={msg.id}
                  className="space-y-3 p-4 odd:bg-white even:bg-thm-cream/35"
                >
                  <div className="flex items-start gap-2">
                    <button
                      type="button"
                      onClick={() => setViewMsg(msg)}
                      className="min-w-0 flex-1 space-y-2 text-left"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="font-bold text-thm-ink">{msg.name}</p>
                          <p className="mt-0.5 break-all font-mono text-xs text-thm-purple">
                            {msg.email}
                          </p>
                        </div>
                        <span className="shrink-0 text-xs font-bold text-thm-gold">
                          #{(page - 1) * rowsPerPage + index + 1}
                        </span>
                      </div>
                      <p className="line-clamp-2 text-sm text-thm-ink">
                        <span className="font-semibold">{msg.subject}</span>
                        {" — "}
                        {msg.message}
                      </p>
                      <p className="text-xs text-thm-muted">{msg.created_at}</p>
                    </button>
                    <RowMenu
                      open={menuId === `m-${msg.id}`}
                      onToggle={() =>
                        setMenuId((id) =>
                          id === `m-${msg.id}` ? null : `m-${msg.id}`,
                        )
                      }
                      onClose={() => setMenuId(null)}
                      onView={() => {
                        setMenuId(null);
                        setViewMsg(msg);
                      }}
                      onDelete={() => {
                        setMenuId(null);
                        setDeleteTarget(msg);
                      }}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="p-10 text-center text-sm font-semibold text-thm-purple">
                {emptyCopy}
              </p>
            )}
          </div>

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead className="bg-thm-cream/50">
                <tr>
                  {["No.", "Name", "Email", "Subject", "Submitted", "Actions"].map(
                    (label) => (
                      <th
                        key={label}
                        className={`px-3 py-3 text-xs font-bold tracking-wider text-thm-purple uppercase sm:px-4 ${
                          label === "Actions" ? "text-right" : ""
                        }`}
                      >
                        {label}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {paginated.length > 0 ? (
                  paginated.map((msg, index) => (
                    <tr
                      key={msg.id}
                      onClick={() => setViewMsg(msg)}
                      className="cursor-pointer transition-colors odd:bg-white even:bg-thm-cream/35 hover:bg-thm-cream/70"
                    >
                      <td className="px-3 py-3 text-sm text-thm-purple sm:px-4">
                        {(page - 1) * rowsPerPage + index + 1}
                      </td>
                      <td className="px-3 py-3 text-sm font-bold text-thm-ink sm:px-4">
                        {msg.name}
                      </td>
                      <td className="px-3 py-3 font-mono text-sm text-thm-ink sm:px-4">
                        {msg.email}
                      </td>
                      <td className="max-w-[16rem] truncate px-3 py-3 text-sm text-thm-ink sm:px-4">
                        {msg.subject}
                      </td>
                      <td className="px-3 py-3 text-sm text-thm-ink sm:px-4">
                        {msg.created_at}
                      </td>
                      <td
                        className="px-3 py-3 sm:px-4"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex justify-end">
                          <RowMenu
                            open={menuId === `d-${msg.id}`}
                            onToggle={() =>
                              setMenuId((id) =>
                                id === `d-${msg.id}` ? null : `d-${msg.id}`,
                              )
                            }
                            onClose={() => setMenuId(null)}
                            onView={() => {
                              setMenuId(null);
                              setViewMsg(msg);
                            }}
                            onDelete={() => {
                              setMenuId(null);
                              setDeleteTarget(msg);
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={6}
                      className="p-12 text-center font-semibold text-thm-purple"
                    >
                      {emptyCopy}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <PaginationBar
            currentPage={page}
            totalPages={pages}
            totalItems={filtered.length}
            rowsPerPage={rowsPerPage}
            onPageChange={setPage}
          />
        </div>
      </div>

      <MessageViewModal msg={viewMsg} onClose={() => setViewMsg(null)} />

      <ConfirmModal
        open={Boolean(deleteTarget)}
        title="Delete this message?"
        description={
          deleteTarget ? (
            <>
              This permanently removes the message from{" "}
              <span className="break-all font-medium text-thm-ink">
                {deleteTarget.name} ({deleteTarget.email})
              </span>
              .
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
    </>
  );
}
