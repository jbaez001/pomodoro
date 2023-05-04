/* eslint-env node */
module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    parser: '@typescript-eslint/parser',
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
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        "no-else-return": "error",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error"
    }
};
