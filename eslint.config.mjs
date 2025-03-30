import { FlatCompat } from "@eslint/eslintrc";
import pluginQuery from "@tanstack/eslint-plugin-query";
import fsdPlugin from "eslint-plugin-fsd-lint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...pluginQuery.configs["flat/recommended"],
  eslintPluginPrettierRecommended,
  {
    plugins: {
      "unused-imports": unusedImports,
      "simple-import-sort": simpleImportSort,
      "fsd-plugin": fsdPlugin,
    },
    rules: {
      "fsd-plugin/forbidden-imports": "error",
      "fsd-plugin/no-relative-imports": "error",
      "fsd-plugin/no-cross-slice-dependency": "error",
      "fsd-plugin/no-ui-in-business-logic": "error",
      "fsd-plugin/no-global-store-imports": "error",
      "fsd-plugin/ordered-imports": "warn",
      "simple-import-sort/imports": "error",
      "@typescript-eslint/no-unused-vars": "warn", // or "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
];

export default eslintConfig;
