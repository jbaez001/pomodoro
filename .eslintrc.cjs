/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  "parserOptions": { 
    "project": [
      "./tsconfig.json"
    ] 
  },
  plugins: [
    '@typescript-eslint',
    'simple-import-sort'
  ],
  root: true,
  env: {
    node: true
  },
  rules: {
    "@typescript-eslint/comma-dangle": [
      "error",
      {
        arrays: "only-multiline",
        objects: "only-multiline",
        imports: "only-multiline",
        functions: "only-multiline",
        enums: "only-multiline"
      },
    ],
    "@typescript-eslint/strict-boolean-expressions": [
      2,
      {
        "allowString": false,
        "allowNumber": false
      }
    ],
    "@typescript-eslint/consistent-type-definitions": [
      "error",
      "type"
    ],
    "no-else-return": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "no-console": 1,
    "no-tabs": 2,
    "indent": [
      "error",
      2
    ],
    "max-len": [
      1,
      {
        "code": 80 
      }
    ]
  },
  "ignorePatterns": [
    "*.config.js",
    "*.config.ts",
    "dist"
  ]
};
