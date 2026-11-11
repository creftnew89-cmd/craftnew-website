import { useEffect, useState } from "react";
import { LogoLockup } from "./Logo";
import { CONTACT } from "../lib/contact";
import { WhatsAppIcon, MailIcon } from "./ContactButtons";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-light border-b border-navy/5" : "bg-transparent"
      }`}
    >
      {/* Flex row: logo | links | actions — all vertically centered */}
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-[72px]"
      >
        {/* Logo wrapper: flex + items-center, no negative margins */}
        <div className="flex h-full items-center">
          <a
            href="#top"
            aria-label="Craftnew Studio home"
            className="flex items-center rounded-lg transition-opacity duration-300 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint"
          >
            <LogoLockup />
          </a>
        </div>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-lg px-3.5 py-2 text-sm font-medium text-navy/75 transition-colors hover:text-navy after:absolute after:bottom-1 after:left-3.5 after:right-3.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-mint after:transition-transform after:duration-400 hover:after:scale-x-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={CONTACT.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sheen hidden h-10 items-center gap-2 rounded-xl bg-mint px-4 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(16,185,129,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-mint-2 sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {CONTACT.whatsapp.label}
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="ml-1 grid h-10 w-10 place-items-center rounded-xl border border-navy/10 bg-white text-navy md:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span className={`absolute left-0 h-0.5 w-5 rounded-full bg-navy transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-navy transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-0.5 w-5 rounded-full bg-navy transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`glass-light mx-3 overflow-hidden rounded-2xl transition-all duration-400 md:hidden ${
          open ? "mt-1 max-h-[420px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col p-3">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 text-base font-medium text-navy/80 hover:bg-canvas-2 hover:text-navy">
                {l.label}
              </a>
            </li>
          ))}
          <li className="grid grid-cols-2 gap-2 p-2">
            <a href={CONTACT.whatsapp.url} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-mint px-3 py-3 text-sm font-semibold text-white">
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp
            </a>
            <a href={CONTACT.gmail.url} onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-xl border border-navy/15 bg-white px-3 py-3 text-sm font-semibold text-navy">
              <MailIcon className="h-4 w-4" /> Email
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
