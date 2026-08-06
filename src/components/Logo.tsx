"use client";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

/**
 * THM Logo — Therapeutic Hands Management Emblem + Dynamic Typography
 * Supports 'light' (for dark backdrops) and 'dark' (for white backdrops).
 */
export function Logo({ variant = "light", className = "" }: LogoProps) {
  const textColor = variant === "light" ? "#FFFFFF" : "#702F99";
  const goldColor = "#F8BC0A";
  const subTextColor = variant === "light" ? "rgba(255,255,255,0.75)" : "#535862";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Emblem Icon: Interlocking Caring Hands + Heart */}
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 shrink-0 transition-transform duration-300 group-hover:scale-105"
        role="img"
        aria-label="THM Emblem"
      >
        <rect width="44" height="44" rx="12" fill={variant === "light" ? "rgba(255,255,255,0.12)" : "#702F99"} />
        {/* Heart background shape */}
        <path
          d="M22 34.5S9 26.2 9 17.5C9 13 12.5 9.5 17 9.5C19.5 9.5 21.5 10.7 22 12C22.5 10.7 24.5 9.5 27 9.5C31.5 9.5 35 13 35 17.5C35 26.2 22 34.5 22 34.5Z"
          fill={goldColor}
        />
        {/* Caring hands overlay inside heart */}
        <path
          d="M17.5 20.5C16.5 19.5 15.5 21 16.5 22L20.5 26C21.3 26.8 22.7 26.8 23.5 26L27.5 22C28.5 21 27.5 19.5 26.5 20.5L22 25L17.5 20.5Z"
          fill={variant === "light" ? "#702F99" : "#FFFFFF"}
        />
      </svg>

      {/* Typography: Brand Name */}
      <div className="flex flex-col justify-center">
        <span
          className="font-poppins text-[17px] font-bold tracking-tight leading-none"
          style={{ color: textColor }}
        >
          THM CARE
        </span>
        <span
          className="font-poppins text-[10px] font-semibold tracking-wider uppercase mt-1 leading-none"
          style={{ color: goldColor }}
        >
          Therapeutic Hands
        </span>
      </div>
    </div>
  );
}
