"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/admin/AdminUi";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("logout") === "success") {
      toast("success", "You have been logged out.");
      window.history.replaceState(null, "", window.location.pathname);
    } else if (params.get("logout") === "failed") {
      toast("error", "We couldn't log you out. Please try again.");
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, [toast]);

  const handleCredentials = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        router.push("/admin/dashboard?login=success");
        router.refresh();
        return;
      }

      toast(
        "error",
        res.status >= 500
          ? "We couldn't complete sign-in. Please try again in a moment."
          : data.error || "Sign-in failed. Please try again.",
      );
      setLoading(false);
    } catch {
      toast(
        "error",
        "We couldn't complete sign-in. Please try again in a moment.",
      );
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-thm-cream p-4">
      <div className="relative w-full max-w-[480px] overflow-hidden rounded-[24px] bg-thm-purple p-6 shadow-2xl sm:p-8 md:p-12">
        <div className="pointer-events-none absolute -top-12 -right-12 h-48 w-48 rounded-full bg-thm-gold/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-thm-gold/10 blur-3xl" />

        <div className="relative z-10">
          <div className="mb-5 flex justify-center sm:mb-6">
            <Image
              src="/logo-mark-light.png"
              alt="THM"
              width={160}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </div>
          <h1 className="mb-6 text-center font-poppins text-2xl font-bold text-white sm:mb-8 sm:text-3xl">
            Admin Portal
          </h1>

          <form onSubmit={handleCredentials} className="space-y-4 sm:space-y-5">
            <input
              type="email"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="h-[48px] w-full rounded-full border border-white/40 bg-transparent px-5 text-base text-white placeholder:text-white/60 focus:border-thm-gold focus:outline-none sm:h-[52px] sm:px-6"
              required
              autoComplete="username"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-[48px] w-full rounded-full border border-white/40 bg-transparent py-0 pl-5 pr-16 text-base text-white placeholder:text-white/60 focus:border-thm-gold focus:outline-none sm:h-[52px] sm:pl-6"
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute top-1/2 right-4 z-10 -translate-y-1/2 text-sm font-bold text-thm-gold hover:text-white"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex h-[52px] w-full items-center justify-center rounded-full bg-thm-gold font-bold text-thm-ink transition hover:brightness-95 disabled:opacity-70"
            >
              {loading ? "Signing in..." : "Continue"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
