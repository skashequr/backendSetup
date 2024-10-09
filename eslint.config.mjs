import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    ignores: ["node_modules/", "dist/", "build/"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        process: "readonly", // Move process here
      },
    },
  },
  {
    rules: {
      eqeqeq: "off",
      "no-unused-vars": "error",
      "no-unused-expressions": [
        "error",
        { allowShortCircuit: true, allowTernary: true },
      ],
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
      "no-console": ["warn"],
      "no-undef": "error",
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
