import { VIDEOS } from "../lib/videos";
import ContactButtons from "./ContactButtons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-canvas pt-28 pb-16 sm:pt-36 lg:pb-24 lg:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[-10%] h-[480px] w-[640px] rounded-full bg-mint/15 blur-[120px] animate-drift-a" />
        <div className="absolute right-[-10%] top-[20%] h-[420px] w-[420px] rounded-full bg-navy/10 blur-[120px] animate-drift-b" />
        <div className="grid-bg absolute inset-0" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div className="text-center lg:text-left">
          <p className="reveal is-visible inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint-soft px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-mint-2">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-mint" />
            Taking new projects
          </p>

          <h1 className="reveal is-visible mt-7 text-balance text-5xl font-bold leading-[1.02] tracking-[-0.035em] text-navy sm:text-6xl lg:text-7xl" style={{ "--delay": "80ms" } as React.CSSProperties}>
            High-retention <br className="hidden sm:block" />
            <span className="text-gradient">short-form video editing.</span>
          </h1>

          <p className="reveal is-visible mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-navy/65 sm:text-lg lg:mx-0" style={{ "--delay": "180ms" } as React.CSSProperties}>
            9:16 Reels and Shorts cut to hold attention — hook in 3 seconds, zero dead air, word-by-word captions, and sound you can feel.
          </p>

          <div className="reveal is-visible mt-10" style={{ "--delay": "280ms" } as React.CSSProperties}>
            <ContactButtons size="lg" align="center" className="lg:justify-start" />
          </div>

          <p className="reveal is-visible mt-5 text-sm text-navy/45" style={{ "--delay": "360ms" } as React.CSSProperties}>
            Replies within a few hours · Pricing discussed directly in chat
          </p>
        </div>

        {/* 9:16 preview */}
        <div className="reveal is-visible relative mx-auto w-fit" style={{ "--delay": "300ms" } as React.CSSProperties}>
          <div aria-hidden="true" className="absolute -inset-10 -z-10 rounded-full bg-mint/20 blur-3xl" />
          <div className="animate-float w-[240px] rounded-[2.6rem] bg-navy p-2.5 shadow-[0_40px_90px_-30px_rgba(11,25,44,0.55)] sm:w-[280px]">
            <div className="relative aspect-[9/16] overflow-hidden rounded-[2rem] bg-black">
              <video
                className="h-full w-full object-cover"
                src={VIDEOS.work1}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Craftnew Studio latest short"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="pointer-events-none absolute inset-x-4 bottom-4 text-white">
                <p className="text-[11px] font-semibold">@craftnew.studio</p>
                <p className="mt-0.5 text-[10px] text-white/60">1080×1920 · 60fps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
