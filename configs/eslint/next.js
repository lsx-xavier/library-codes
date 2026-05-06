import nextPlugin from "@next/eslint-plugin-next";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

import reactConfig from "./react.js";

const nextConfig = [
  ...reactConfig,
  ...nextVitals,
  ...nextTs,
  {
    name: "@library-codes/next-rules",
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "src/generated/**",
  ]),
];

export default nextConfig;
