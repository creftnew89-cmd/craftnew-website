import { LogoLockup } from "./Logo";
import { CONTACT } from "../lib/contact";
import ContactButtons from "./ContactButtons";
import { useReveal } from "../lib/useReveal";

export default function Footer() {
  const ref = useReveal<HTMLElement>();
  return (
    <>
      {/* Contact */}
      <section id="contact" ref={ref} className="relative scroll-mt-24 bg-canvas-2 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="reveal relative isolate overflow-hidden rounded-[36px] bg-navy px-6 py-16 text-center text-white shadow-[0_40px_100px_-40px_rgba(11,25,44,0.6)] sm:px-16 sm:py-20">
            <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-mint/25 blur-[120px] animate-drift-a" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 right-0 -z-10 h-[360px] w-[360px] rounded-full bg-mint/15 blur-[110px] animate-drift-b" />

            <p className="reveal inline-flex items-center rounded-full bg-mint px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white">Contact</p>
            <h2 className="reveal mx-auto mt-6 max-w-3xl text-balance text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-6xl" style={{ "--delay": "80ms" } as React.CSSProperties}>
              Let's Talk <span className="text-mint">Pricing & Strategy.</span>
            </h2>
            <p className="reveal mx-auto mt-6 max-w-xl text-base text-white/70 sm:text-lg" style={{ "--delay": "160ms" } as React.CSSProperties}>
              Send your footage or a reference, and tell me the goal. I'll reply with a plan and a quote — directly in chat.
            </p>

            <div className="reveal mt-10" style={{ "--delay": "240ms" } as React.CSSProperties}>
              <ContactButtons size="lg" align="center" onDark />
            </div>

            <div className="reveal mt-8 flex flex-col items-center justify-center gap-2 text-sm text-white/55 sm:flex-row sm:gap-6" style={{ "--delay": "300ms" } as React.CSSProperties}>
              <a href={CONTACT.gmail.url} className="transition-colors hover:text-mint">{CONTACT.email}</a>
              <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
              <a href={CONTACT.whatsapp.url} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-mint">{CONTACT.phoneDisplay}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer — Deep Navy */}
      <footer className="bg-navy text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-6">
          <a href="#top" className="flex items-center transition-opacity duration-300 hover:opacity-80" aria-label="Craftnew Studio home">
            <LogoLockup light />
          </a>
          <nav aria-label="Footer" className="flex items-center gap-6 text-sm text-white/65">
            <a href="#about" className="transition-colors hover:text-mint">About</a>
            <a href="#work" className="transition-colors hover:text-mint">Work</a>
            <a href="#contact" className="transition-colors hover:text-mint">Contact</a>
          </nav>
          <p className="text-xs text-white/45">© {new Date().getFullYear()} {CONTACT.studio}. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
