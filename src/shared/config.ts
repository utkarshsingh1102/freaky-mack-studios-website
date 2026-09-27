/**
 * Pitch-only UI: the floating theme / accent picker on the homepage.
 * Set NEXT_PUBLIC_PITCH_MODE=off (or make this false) once the client has locked in a look.
 */
export const PITCH_MODE = process.env.NEXT_PUBLIC_PITCH_MODE !== "off";

/** Absolute site URL for metadata (Open Graph, sitemap). On Vercel the production domain is used automatically. */
/** The blob mark as the mouse cursor (desktop only). Set false to go back to the normal cursor. */
export const LOGO_CURSOR = true;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const CONTACT = {
  email: "freakymackstudios@gmail.com",
  phone: "+91 97115 42274",
  phoneHref: "tel:+919711542274",
  whatsapp: "https://wa.me/919711542274",
};

/**
 * Showreel media. Leave empty until the client sends files; the [ PLACEHOLDER ] blocks show meanwhile.
 * loopSrc: 10–15s muted loop (mp4). poster: still for the loop. fullEmbedUrl: YouTube/Vimeo embed URL.
 */
export const REEL = {
  loopSrc: "",
  poster: "",
  fullEmbedUrl: "",
  /** Running time of the full reel (Freaky Mack_Showreel.mov). */
  duration: "1:30",
};

/** Social profiles. The client still owes the real handles, so these point at the platforms for now. */
export const SOCIAL = {
  instagram: "https://instagram.com",
  youtube: "https://youtube.com",
  vimeo: "https://vimeo.com",
  linkedin: "https://linkedin.com",
  founderInstagram: "https://instagram.com",
  founderLinkedin: "https://linkedin.com",
};
