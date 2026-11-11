import { useReveal } from "../lib/useReveal";
import { WhatsAppButton } from "./ContactButtons";

const stats = [
  {
    value: "1+ Year",
    label: "Professional Video Editing & AI Workflow Experience",
    icon: "M12 8v4l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  },
  {
    value: "5+ Projects",
    label: "High-Retention Client Edits Delivered",
    icon: "M4 6h16v12H4zM4 10l4-3M20 10l-4-3M9 13l2 2 4-4",
  },
  {
    value: "AI Specialization",
    label: "AI Video Generation, Prompt Engineering & Viral Hook Design",
    icon: "M12 3l1.8 4.6L18.5 9l-4.7 1.4L12 15l-1.8-4.6L5.5 9l4.7-1.4L12 3ZM19 16l.8 2 2.2.7-2.2.7-.8 2-.8-2-2.2-.7 2.2-.7.8-2ZM5 15l.6 1.5 1.6.5-1.6.5L5 19l-.6-1.5-1.6-.5 1.6-.5L5 15Z",
  },
];

export default function About() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="about" ref={ref} className="relative scroll-mt-24 bg-canvas-2 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="reveal inline-flex items-center rounded-full bg-mint px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-[0_8px_20px_-8px_rgba(16,185,129,0.7)]">
            About Craftnew Studio
          </span>
          <h2
            className="reveal mt-6 text-balance text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-navy sm:text-4xl lg:text-5xl"
            style={{ "--delay": "80ms" } as React.CSSProperties}
          >
            Transforming Concepts into High-Retention Videos with AI & Modern Editing
          </h2>
          <p
            className="reveal mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-navy/65 sm:text-lg"
            style={{ "--delay": "160ms" } as React.CSSProperties}
          >
            Craftnew Studio specialises in high-retention short-form content — Instagram Reels and YouTube Shorts engineered to go viral. We combine modern editing technique with AI video generation and prompt-engineered visuals to turn a raw idea into a scroll-stopping 9:16 video that holds attention from the first frame to the last.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {stats.map((s, i) => (
            <article
              key={s.value}
              className="reveal card card-hover group rounded-3xl p-7"
              style={{ "--delay": `${200 + i * 100}ms` } as React.CSSProperties}
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-mint-soft text-mint-2 transition-all duration-400 group-hover:bg-mint group-hover:text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={s.icon} />
                </svg>
              </div>
              <p className="mt-6 text-2xl font-bold tracking-tight text-navy sm:text-3xl">{s.value}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-navy/60">{s.label}</p>
            </article>
          ))}
        </div>

        <div className="reveal mt-12 text-center" style={{ "--delay": "500ms" } as React.CSSProperties}>
          <WhatsAppButton label="Discuss Your Project" size="lg" />
        </div>
      </div>
    </section>
  );
}
