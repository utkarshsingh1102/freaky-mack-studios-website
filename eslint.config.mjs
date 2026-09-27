import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const config = [
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Logos are small static PNGs sized exactly as on the boards; plain <img> keeps that 1:1.
      "@next/next/no-img-element": "off",
    },
  },
  { ignores: [".next/**", "out/**", "node_modules/**", "design/**", "Documentation/**", "next-env.d.ts"] },
];

export default config;
