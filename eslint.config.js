const js = require("@eslint/js");
const globals = require("globals");
const prettier = require("eslint-config-prettier");

module.exports = [
  {
    ignores: ["build/**", "dist/**", "public/**", "**/vendor/**"],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "no-console": "warn",
      "no-duplicate-imports": "error",
      "no-var": "error",
      "no-unused-vars": "warn",
      "prefer-const": "error",
      "no-sparse-arrays": "off",
    },
  },
  {
    files: ["site/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        BABYLON: "readonly",
        process: "readonly",
        zzfx: "readonly",
        zzfxX: "readonly",
        zzfxM: "readonly",
        zzfxP: "readonly",
      },
    },
  },
  prettier,
];
