/**
 * Pitch-only UI: the floating "← All options · A B C D" switcher and Option A's accent picker.
 * Set to false (or NEXT_PUBLIC_PITCH_MODE=off) once the client has picked an option.
 */
export const PITCH_MODE = process.env.NEXT_PUBLIC_PITCH_MODE !== "off";

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
};

export const OPTIONS = [
  { letter: "A", href: "/option-a/" },
  { letter: "B", href: "/option-b/" },
  { letter: "C", href: "/option-c/" },
  { letter: "D", href: "/option-d/" },
] as const;

export type OptionLetter = (typeof OPTIONS)[number]["letter"];
