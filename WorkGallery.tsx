import { useCallback, useEffect, useRef, useState } from "react";
import { VIDEOS } from "../lib/videos";
import { useReveal } from "../lib/useReveal";

type Work = { id: string; title: string; tag: string; src: string };

const works: Work[] = [
  { id: "w1", title: "Work 01", tag: "Reel", src: VIDEOS.work1 },
  { id: "w2", title: "Work 02", tag: "Short", src: VIDEOS.work2 },
  { id: "w3", title: "Work 03", tag: "Ad", src: VIDEOS.work3 },
  { id: "w4", title: "Work 04", tag: "Talking head", src: VIDEOS.work4 },
  { id: "w5", title: "Work 05", tag: "Story", src: VIDEOS.work5 },
];

/* ---------- On-page Lightbox modal ---------- */

function Lightbox({ work, onClose }: { work: Work; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const [closing, setClosing] = useState(false);

  // Stop playback immediately, animate out, then unmount.
  const close = useCallback(() => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.removeAttribute("src");
      v.load();
    }
    setClosing(true);
    window.setTimeout(onClose, 220);
  }, [onClose]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [close]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Now playing: ${work.title}`}
    >
      {/* Backdrop — click outside closes */}
      <div
        onClick={close}
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm ${closing ? "animate-backdrop-out" : "animate-backdrop-in"}`}
        aria-hidden="true"
      />

      {/* Player frame — optimized for 9:16 */}
      <div className={`relative w-full max-w-[420px] ${closing ? "animate-fade-out" : "animate-fade-up"}`}>
        <button
          ref={closeBtnRef}
          type="button"
          onClick={close}
          aria-label="Close video"
          className="absolute -top-12 right-0 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-xl leading-none text-white backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-mint focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint sm:-right-12 sm:top-0"
        >
          ✕
        </button>

        <video
          ref={videoRef}
          src={work.src}
          controls
          autoPlay
          playsInline
          preload="auto"
          className="max-h-[80vh] w-full rounded-[1.6rem] bg-black object-contain shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8)] ring-1 ring-white/10"
        />

        <div className="mt-3 flex items-center justify-between px-1 text-sm text-white/80">
          <p>
            <span className="text-white/50">{work.tag} · </span>
            {work.title}
          </p>
          <span className="text-xs text-white/40">Esc to close</span>
        </div>
      </div>
    </div>
  );
}

/* ---------- Portfolio ---------- */

export default function WorkGallery() {
  const ref = useReveal<HTMLElement>();
  const [active, setActive] = useState<Work | null>(null);
  const [playing, setPlaying] = useState<Record<string, boolean>>({});
  const previews = useRef<Record<string, HTMLVideoElement | null>>({});

  const play = (id: string) => {
    previews.current[id]?.play().catch(() => {});
    setPlaying((p) => ({ ...p, [id]: true }));
  };
  const pause = (id: string) => {
    previews.current[id]?.pause();
    setPlaying((p) => ({ ...p, [id]: false }));
  };
  const open = (w: Work) => {
    works.forEach((x) => pause(x.id));
    setActive(w);
  };

  return (
    <section id="work" ref={ref} className="relative scroll-mt-24 bg-canvas py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="reveal inline-flex items-center rounded-full border border-mint/30 bg-mint-soft px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-mint-2">
              Portfolio
            </p>
            <h2 className="reveal mt-4 text-balance text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-navy sm:text-4xl lg:text-5xl" style={{ "--delay": "80ms" } as React.CSSProperties}>
              Vertical work, <span className="text-navy/40">built for the feed.</span>
            </h2>
          </div>
          <p className="reveal text-sm text-navy/50" style={{ "--delay": "160ms" } as React.CSSProperties}>
            Hover to preview · Tap to watch with sound
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {works.map((w, i) => (
            <button
              key={w.id}
              type="button"
              onClick={() => open(w)}
              onMouseEnter={() => play(w.id)}
              onMouseLeave={() => pause(w.id)}
              onFocus={() => play(w.id)}
              onBlur={() => pause(w.id)}
              aria-label={`Watch ${w.title} — ${w.tag}`}
              className="reveal card card-hover group relative block w-full overflow-hidden rounded-[1.6rem] bg-black p-0 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint"
              style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <video
                ref={(el) => {
                  previews.current[w.id] = el;
                }}
                className="aspect-[9/16] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                src={w.src}
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/5 to-transparent" />
              <span
                className={`absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-navy shadow-lg transition-all duration-400 group-hover:bg-mint group-hover:text-white ${
                  playing[w.id] ? "scale-75 opacity-0" : "opacity-100 group-hover:scale-110"
                }`}
              >
                <svg className="ml-0.5 h-4 w-4" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                  <path d="M2 1.2v9.6a.6.6 0 0 0 .92.5l7.6-4.8a.6.6 0 0 0 0-1L2.92.7A.6.6 0 0 0 2 1.2Z" />
                </svg>
              </span>
              <span className="absolute inset-x-0 bottom-0 p-4 text-white">
                <span className="block text-[10px] uppercase tracking-[0.16em] text-mint">{w.tag}</span>
                <span className="mt-0.5 block text-sm font-semibold tracking-tight">{w.title}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {active && <Lightbox work={active} onClose={() => setActive(null)} />}
    </section>
  );
}
