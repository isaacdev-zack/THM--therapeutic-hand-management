"use client";

interface DividerProps {
  fillColor?: string;
  className?: string;
}

/**
 * Curved wave divider transition between sections
 */
export function CurveDivider({ fillColor = "#1E082B", className = "" }: DividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-none select-none ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-12 sm:h-16 lg:h-20"
      >
        <path
          d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,60 L1200,120 L0,120 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

/**
 * Angled diagonal divider transition
 */
export function AngleDivider({ fillColor = "#FFFFFF", className = "" }: DividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-none select-none ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-10 sm:h-14 lg:h-16"
      >
        <path d="M1200 0L0 120V120H1200V0Z" fill={fillColor} />
      </svg>
    </div>
  );
}
