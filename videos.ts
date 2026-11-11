/**
 * Single source of truth for all portfolio video URLs.
 *
 * To self-host instead: drop the MP4s into `public/videos/` and change the
 * values below to "/videos/work-1.mp4", "/videos/work-2.mp4", etc.
 */
export const VIDEOS = {
  work1: "https://files.catbox.moe/5md6ql.mp4",
  work2: "https://files.catbox.moe/uuhnko.mp4",
  work3: "https://files.catbox.moe/ht75qu.mp4",
  work4: "https://files.catbox.moe/vroo5l.mp4",
  work5: "https://files.catbox.moe/6vkimd.mp4",
} as const;
