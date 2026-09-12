"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

type ToastKind = "success" | "error";

type ToastItem = {
  id: number;
  kind: ToastKind;
  message: string;
};

type ToastFn = (kind: ToastKind, message: string) => void;

const ToastContext = createContext<ToastFn | null>(null);

export function useToast() {
  const toast = useContext(ToastContext);
  if (!toast) {
    throw new Error("useToast must be used within AdminUiProvider");
  }
  return toast;
}

export function AdminUiProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const toast = useCallback<ToastFn>((kind, message) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev.slice(-3), { id, kind, message }]);
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((item) => item.id !== id));
    }, 3600);
  }, []);

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div className="pointer-events-none fixed top-[max(0.75rem,env(safe-area-inset-top))] right-3 left-3 z-[80] flex flex-col items-stretch gap-2 sm:right-4 sm:left-auto sm:w-[22rem]">
        <AnimatePresence>
          {toasts.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className={`w-full rounded-md px-4 py-3 text-center text-sm font-bold shadow-lg sm:text-left ${
                item.kind === "success"
                  ? "bg-thm-purple text-thm-gold"
                  : "bg-thm-ink text-thm-gold"
              }`}
            >
              {item.message}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function ConfirmModal({
  open,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  tone = "default",
  loading = false,
  onCancel,
  onConfirm,
}: {
  open: boolean;
  title: string;
  description: ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  tone?: "default" | "danger";
  loading?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-thm-ink/60 p-0 sm:items-center sm:p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="admin-confirm-title"
        className="w-full max-w-[440px] rounded-t-2xl bg-white p-5 shadow-[0_16px_48px_rgba(30,19,38,0.18)] sm:rounded-2xl sm:p-6"
      >
        <h3
          id="admin-confirm-title"
          className="font-poppins text-lg font-bold text-thm-purple"
        >
          {title}
        </h3>
        <div className="mt-2 text-sm text-thm-ink/80">{description}</div>
        <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            disabled={loading}
            onClick={onCancel}
            className="h-12 w-full rounded-xl bg-thm-cream px-4 text-sm font-bold text-thm-purple transition hover:brightness-95 disabled:opacity-50 sm:h-10 sm:w-auto sm:font-medium"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            disabled={loading}
            onClick={onConfirm}
            className={`h-12 w-full rounded-md px-4 text-sm font-bold transition disabled:opacity-50 sm:h-10 sm:w-auto ${
              tone === "danger"
                ? "bg-thm-ink text-thm-gold hover:bg-thm-purple-deep"
                : "bg-thm-gold text-thm-ink hover:brightness-95"
            }`}
          >
            {loading ? "Please wait..." : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
