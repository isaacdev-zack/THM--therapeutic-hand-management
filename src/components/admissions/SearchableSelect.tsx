"use client";

import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { ChevronDown } from "lucide-react";

type SearchableSelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  placeholder?: string;
  required?: boolean;
  searchPlaceholder?: string;
};

type PanelPosition = {
  top: number;
  left: number;
  width: number;
  maxHeight: number;
};

export function SearchableSelect({
  value,
  onChange,
  options,
  placeholder = "Select…",
  required,
  searchPlaceholder = "Search…",
}: SearchableSelectProps) {
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [panel, setPanel] = useState<PanelPosition | null>(null);

  const filtered = options.filter((option) =>
    option.toLowerCase().includes(query.trim().toLowerCase()),
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  const updatePanel = () => {
    const trigger = buttonRef.current;
    if (!trigger) return;

    const rect = trigger.getBoundingClientRect();
    const margin = 8;
    const searchHeight = 52;
    const preferredListHeight = 208;
    const spaceBelow = window.innerHeight - rect.bottom - margin;
    const spaceAbove = rect.top - margin;
    const openUpward =
      spaceBelow < searchHeight + 120 && spaceAbove > spaceBelow;

    const maxHeight = Math.max(
      120,
      Math.min(
        preferredListHeight,
        openUpward ? spaceAbove - searchHeight - 4 : spaceBelow - searchHeight - 4,
      ),
    );

    setPanel({
      left: Math.max(
        margin,
        Math.min(rect.left, window.innerWidth - rect.width - margin),
      ),
      width: Math.min(rect.width, window.innerWidth - margin * 2),
      maxHeight,
      top: Math.max(
        margin,
        openUpward
          ? rect.top - searchHeight - maxHeight - 4
          : rect.bottom + 4,
      ),
    });
  };

  useLayoutEffect(() => {
    if (!open) {
      setPanel(null);
      return;
    }

    updatePanel();
    window.addEventListener("resize", updatePanel);
    window.addEventListener("scroll", updatePanel, true);

    return () => {
      window.removeEventListener("resize", updatePanel);
      window.removeEventListener("scroll", updatePanel, true);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (rootRef.current?.contains(target)) return;
      if ((target as Element).closest?.("[data-county-panel]")) return;
      setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [open]);

  const panelContent =
    open && panel ? (
      <div
        data-county-panel
        className="fixed z-[9999] overflow-hidden rounded-xl border-2 border-slate-200 bg-white shadow-[0_16px_48px_rgba(30,19,38,0.18)]"
        style={{
          top: panel.top,
          left: panel.left,
          width: panel.width,
        }}
      >
        <div className="border-b border-slate-100 p-2">
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={searchPlaceholder}
            autoFocus
            className="box-border h-10 w-full rounded-lg border border-slate-200 px-3 text-base outline-none focus:border-thm-purple sm:text-sm"
          />
        </div>
        <ul
          id={listId}
          role="listbox"
          className="overflow-y-auto overscroll-contain py-1"
          style={{ maxHeight: panel.maxHeight }}
        >
          {filtered.length > 0 ? (
            filtered.map((option) => (
              <li key={option} role="option" aria-selected={value === option}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(option);
                    setOpen(false);
                    setQuery("");
                  }}
                  className={`w-full px-4 py-3 text-left text-sm transition-colors hover:bg-thm-purple/5 sm:py-2.5 ${
                    value === option
                      ? "bg-thm-purple/10 font-medium text-thm-purple"
                      : "text-thm-ink"
                  }`}
                >
                  {option}
                </button>
              </li>
            ))
          ) : (
            <li className="px-4 py-3 text-sm text-thm-muted">No matches</li>
          )}
        </ul>
      </div>
    ) : null;

  return (
    <div ref={rootRef} className="relative w-full min-w-0">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((prev) => !prev)}
        className="box-border flex h-12 w-full min-w-0 items-center justify-between gap-2 rounded-xl border-2 border-slate-200 bg-white px-4 text-left text-sm text-thm-ink outline-none transition-colors focus:border-thm-purple"
      >
        <span className={`truncate ${value ? "" : "text-slate-400"}`}>
          {value || placeholder}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-thm-muted transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {required ? (
        <input
          tabIndex={-1}
          aria-hidden
          value={value}
          required
          onChange={() => {}}
          className="pointer-events-none absolute h-0 w-0 opacity-0"
        />
      ) : null}

      {mounted && panelContent
        ? createPortal(panelContent, document.body)
        : null}
    </div>
  );
}
