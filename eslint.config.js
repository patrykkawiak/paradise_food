// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    ignores: ["**/dist"],
  },
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "accessor-pairs": "warn",
      camelcase: "warn",
      curly: ["warn", "multi-line", "consistent"],
      "default-case-last": "warn",
      eqeqeq: ["error", "smart"],
      "func-style": ["warn"],
      "grouped-accessor-pairs": "warn",
      "logical-assignment-operators": "warn",
      "no-array-constructor": "warn",
      "no-console": "warn",
      "no-duplicate-imports": "warn",
      "no-else-return": "warn",
      "no-lonely-if": "warn",
      "require-await": "warn",
      yoda: "warn",

      "@typescript-eslint/explicit-member-accessibility": [
        "warn",
        {
          overrides: {
            constructors: "no-public",
          },
        },
      ],
      "@typescript-eslint/member-ordering": [
        "warn",
        {
          default: [
            "public-readonly-field",
            "protected-readonly-field",
            "private-readonly-field",

            "public-field",
            "protected-field",
            "private-field",

            "constructor",

            "public-method",
            "protected-method",
            "private-method",

            "public-static-method",
            "protected-static-method",
            "private-static-method",
          ],
        },
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/prefer-nullish-coalescing": "off",

      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
