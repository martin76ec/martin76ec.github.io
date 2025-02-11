import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import typeScriptEsLintPlugin from "@typescript-eslint/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginAstro from "eslint-plugin-astro";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import globals from "globals";
import path from "path";
import tseslint from "typescript-eslint";
import { fileURLToPath } from "url";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: typeScriptEsLintPlugin.configs["recommended"],
});

const jsxRules = {
  "react/react-in-jsx-scope": "off",
};

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  ...pluginAstro.configs["jsx-a11y-recommended"],
  ...compat.extends(".eslintrc"),
  eslintConfigPrettier,
  { rules: { ...jsxRules } },
  {
    /** use this for shadcn based projects */
    files: ["**/components/ui/*.tsx", "**/components/magicui/*.tsx"],
    rules: {
      "react/prop-types": [
        2,
        { ignore: ["className", "orientation", "decorative", "id", "value", "sideOffset", "checked"] },
      ],
      "@typescript-eslint/no-empty-object-type": "warn",
      "@typescript-eslint/consistent-type-imports": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "import/no-unresolved": "warn",
      "react/prop-types": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "unused-imports/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "consistent-return": "warn"
    },
  },
];
