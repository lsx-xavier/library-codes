import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierRecommended from "eslint-plugin-prettier/recommended";

const baseConfig = [
  ...tseslint.configs.recommended,
  js.configs.recommended,
  prettierRecommended,
  {
    name: "@library-codes/base-rules",
    files: ["**/*.{js,ts,jsx,tsx}"],
    rules: {
      "no-console": "error",
      "no-undef": "warn",
      "no-undef-init": "warn",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "warn",

      "prettier/prettier": [
        "error",
        {
          printWidth: 120,
          singleQuote: true,
          semi: true,
          tabWidth: 2,
        },
      ],
    },
  },
];

export default baseConfig;
