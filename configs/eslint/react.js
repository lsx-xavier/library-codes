import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import testingLibraryPlugin from "eslint-plugin-testing-library";
import baseConfig from "./base.js";

const reactConfig = [
  ...baseConfig,
  reactPlugin.configs.flat.recommended,
  {
    name: "@library-codes/react-rules",
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      "react-hooks": reactHooksPlugin,
      "testing-library": testingLibraryPlugin,
      react: reactPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
      ...testingLibraryPlugin.configs["flat/react"].rules,

      "react/react-in-jsx-scope": "off",

      "no-console": "error",
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-undef-init": "warn",
      "no-undef-init": "warn",

      "import/no-named-as-default": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",

      "react-hooks/exhaustive-deps": "warn",
    },
  },
];

export default reactConfig;
