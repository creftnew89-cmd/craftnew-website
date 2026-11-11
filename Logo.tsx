/**
 * Craftnew logo — traced from the brand artwork.
 *
 * Geometry (100×100 viewBox, centre 50,50):
 *  • Blue ring: outer R=50, inner r=30, opening ±34° on the right (butt-cut ends)
 *  • White play triangle: flat left edge at x=51, tip at x=99.5 (reaches the outer edge)
 *  • Wordmark: heavy geometric sans, white on dark / navy on light
 */

const BLUE = "#2F6BFF";

export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      {/* C ring, long arc through the left, gap centred on the right */}
      <path
        d="M 91.45 22.04 A 50 50 0 1 0 91.45 77.96 L 74.87 66.77 A 30 30 0 1 1 74.87 33.23 Z"
        fill={BLUE}
      />
      {/* Play triangle */}
      <path d="M 51 22.5 L 51 77.5 L 99.5 50 Z" fill="#ffffff" />
    </svg>
  );
}

export function LogoMark({ light = false }: { light?: boolean }) {
  if (light) {
    return <Mark className="h-9 w-9 shrink-0 md:h-10 md:w-10" />;
  }
  // On white backgrounds the mark sits on its black tile, exactly as in the brand file
  return (
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-black md:h-10 md:w-10">
      <Mark className="h-[72%] w-[72%]" />
    </span>
  );
}

export function LogoLockup({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5 leading-none" role="img" aria-label="Craftnew Studio">
      <LogoMark light={light} />
      <span
        className={`font-wordmark text-[16px] font-extrabold uppercase tracking-[0.01em] md:text-[17px] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        CRAFTNEW
      </span>
    </span>
  );
}
