/** Studio board content: timeline, beliefs, services, process and client stickers. */
export const TIMELINE = [
  { label: "Chapter 1 · [Year]", text: "Freaky Mack begins, making advertising films for brands.", h: 300, tilt: -1.5, tone: "surface" },
  { label: "Chapter 2 · [Year]", text: "McDonald’s, Google and Adidas Originals come on board.", h: 340, tilt: 1, tone: "surface" },
  { label: "Chapter 3 · [Year]", text: "Mercedes-Benz, Fila, PC Jewellers, Times of India — and many more.", h: 380, tilt: -0.8, tone: "inverse" },
  { label: "Chapter 4 · 2026", text: "Freaky Mack Studios — originals, series, documentaries and a podcast, alongside the brand work.", h: 420, tilt: 1.6, tone: "accent" },
] as const;

export const BELIEFS = [
  { no: "01", title: "Precision", text: "Six years of commercial sets taught us discipline: on time, on brief, on brand." },
  { no: "02", title: "Appetite", text: "The creative ambition of independent cinema, brought to every brief we take on." },
  { no: "03", title: "Story", text: "A home for filmmakers, creators and ideas that deserve to become films." },
];

export const SERVICES = [
  { name: "Ad films", text: "Commercials and brand films for TV, digital and cinema." },
  { name: "Music videos", text: "For artists and labels, from concept to final cut." },
  { name: "Fashion films", text: "Campaign and lookbook films for fashion labels." },
  { name: "Event films", text: "Launches and events, captured and cut to last." },
  { name: "Documentaries", text: "Long-form stories for brands and cultural platforms." },
  { name: "Short films & web series", text: "Original narratives and digital series." },
  { name: "Podcast & YouTube", text: "Studio-produced episodes and channel content." },
  { name: "Post-production", text: "Edit, grade, sound and finishing." },
];

export const PROCESS = [
  { no: "01", title: "Development & direction", text: "Idea, treatment and script — the story before the camera rolls.", tilt: -1, lift: false },
  { no: "02", title: "Production", text: "Crew, camera and the discipline of commercial sets.", tilt: 1, lift: true },
  { no: "03", title: "Post-production", text: "Edit, grade, sound and delivery — cut for every platform.", tilt: -0.6, lift: false },
];

/** Client stickers inside a 1248×300 box (Studio board). */
export const CLIENT_TAGS = [
  { name: "McDonald’s", left: 20, top: 30, rot: -6 },
  { name: "Google", left: 280, top: 120, rot: 4, accent: true },
  { name: "Adidas Originals", left: 450, top: 10, rot: -3 },
  { name: "Mercedes-Benz", left: 700, top: 150, rot: 7 },
  { name: "Fila", left: 840, top: 20, rot: -8, accent: true },
  { name: "PC Jewellers", left: 990, top: 130, rot: 3 },
  { name: "Times of India", left: 130, top: 220, rot: -2 },
  { name: "+ many more", left: 540, top: 235, rot: 5, more: true },
];
