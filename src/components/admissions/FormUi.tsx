"use client";

import type { ReactNode } from "react";

const inputClass =
  "h-12 w-full rounded-xl border-2 border-slate-200 bg-white px-4 text-sm uppercase tracking-wide text-thm-ink outline-none transition-colors placeholder:normal-case placeholder:tracking-normal placeholder:text-slate-400 focus:border-thm-purple";

const textareaClass =
  "min-h-[96px] w-full resize-y rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm text-thm-ink outline-none transition-colors placeholder:text-slate-400 focus:border-thm-purple";

export function FieldLabel({
  children,
  required,
  hint,
}: {
  children: ReactNode;
  required?: boolean;
  hint?: string;
}) {
  return (
    <div className="mb-1.5">
      <label className="block text-xs font-semibold uppercase tracking-wide text-thm-muted">
        {children}
        {required ? <span className="text-thm-purple"> *</span> : null}
      </label>
      {hint ? <p className="mt-0.5 text-xs text-thm-muted/80">{hint}</p> : null}
    </div>
  );
}

export function TextInput({
  className = "",
  uppercase = false,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { uppercase?: boolean }) {
  return (
    <input
      {...props}
      className={`${inputClass} ${uppercase ? "uppercase" : ""} ${className}`}
    />
  );
}

export function TextArea({
  className = "",
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${textareaClass} ${className}`} />;
}

export function SelectInput({
  className = "",
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={`${inputClass} normal-case tracking-normal ${className}`}
    >
      {children}
    </select>
  );
}

export function FormSection({
  step,
  title,
  description,
  children,
}: {
  step: number;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-thm-purple/10 bg-white p-6 shadow-[0_8px_32px_rgba(30,19,38,0.06)] sm:p-8">
      <div className="mb-6 flex items-start gap-4 border-b border-thm-ink/8 pb-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-thm-purple font-poppins text-sm font-bold text-white">
          {step}
        </span>
        <div>
          <h4 className="font-poppins text-lg font-bold text-thm-ink sm:text-xl">
            {title}
          </h4>
          {description ? (
            <p className="mt-1 text-sm leading-relaxed text-thm-muted">
              {description}
            </p>
          ) : null}
        </div>
      </div>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

export function RadioOption({
  name,
  value,
  checked,
  onChange,
  label,
}: {
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-slate-200 px-4 py-3 transition-colors has-[:checked]:border-thm-purple has-[:checked]:bg-thm-purple/5">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 accent-thm-purple"
      />
      <span className="text-sm font-medium text-thm-ink">{label}</span>
    </label>
  );
}
