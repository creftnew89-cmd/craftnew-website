import { CONTACT } from "../lib/contact";

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35ZM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88Zm8.41-18.29A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.33.16 11.89c0 2.1.55 4.14 1.59 5.94L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.16-3.48-8.4Z" />
    </svg>
  );
}

export function MailIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

/** Mint WhatsApp button — the primary CTA used everywhere. */
export function WhatsAppButton({
  label = CONTACT.whatsapp.label,
  size = "md",
  className = "",
}: {
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const pad = size === "lg" ? "px-7 py-4 text-base" : size === "sm" ? "px-4 py-2.5 text-sm" : "px-6 py-3.5 text-[15px]";
  const icon = size === "sm" ? "h-4 w-4" : "h-5 w-5";
  return (
    <a
      href={CONTACT.whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-sheen group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-mint font-semibold text-white shadow-[0_18px_40px_-14px_rgba(16,185,129,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-mint-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint ${pad} ${className}`}
    >
      <WhatsAppIcon className={`${icon} transition-transform duration-300 group-hover:scale-110`} />
      {label}
    </a>
  );
}

/** WhatsApp + Email, side by side (stacked on very small screens). */
export default function ContactButtons({
  size = "md",
  align = "start",
  onDark = false,
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  align?: "start" | "center";
  onDark?: boolean;
  className?: string;
}) {
  const pad = size === "lg" ? "px-7 py-4 text-base" : size === "sm" ? "px-4 py-2.5 text-sm" : "px-6 py-3.5 text-[15px]";
  const icon = size === "sm" ? "h-4 w-4" : "h-5 w-5";
  const emailStyle = onDark
    ? "border border-white/25 bg-white/5 text-white hover:bg-white/10 hover:border-white/40"
    : "border border-navy/15 bg-white text-navy hover:border-mint hover:text-mint-2 hover:bg-mint-soft/40";

  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${align === "center" ? "items-center justify-center" : ""} ${className}`}>
      <WhatsAppButton size={size} className="w-full sm:w-auto" />
      <a
        href={CONTACT.gmail.url}
        className={`group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint sm:w-auto ${pad} ${emailStyle}`}
      >
        <MailIcon className={`${icon} transition-transform duration-300 group-hover:scale-110`} />
        {CONTACT.gmail.label}
      </a>
    </div>
  );
}
