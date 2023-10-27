module.exports = {
    root: true,
    env: {
        node: true,
        'vue/setup-compiler-macros': true
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        '@vue/typescript/recommended',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-underscore-dangle': ['error', {allow: ['foo_']}],
        'no-new-object': 'warn',
        // 'func-names': 'off',
        'vue/no-v-text-v-html-on-component': 'error',
        'vue/no-unused-components': 'error',
        'vue/require-v-for-key': 'error',
        'vue/no-deprecated-events-api': 'error',
        'vue/v-on-event-hyphenation': 'warn',
        'vue/component-name-in-template-casing': [
            'error',
            'kebab-case',
            {
                registeredComponentsOnly: false,
                ignores: []
            }
        ],
        'vue/script-setup-uses-vars': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-unused-expressions': 'warn',
        '@typescript-eslint/no-for-in-array': 'error',
        'no-duplicate-imports': 'error',
        'no-array-constructor': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-duplicate-enum-values': 'error',
        'no-unused-vars': 'off', //['error', {vars: 'all', args: 'after-used', ignoreRestSiblings: false}],
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'default',
                format: null
            },
            {
                selector: 'function',
                format: ['camelCase']
            },
            {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE']
            },
            {
                selector: 'parameter',
                format: ['camelCase'],
                leadingUnderscore: 'allow'
            },
            {
                selector: 'memberLike',
                modifiers: ['private'],
                format: ['camelCase'],
                leadingUnderscore: 'allow'
            },
            {
                selector: 'typeLike',
                format: ['PascalCase', 'UPPER_CASE']
            },
            {
                selector: 'interface',
                format: ['PascalCase', 'UPPER_CASE'],
                custom: {
                    regex: '^I[A-Z]',
                    match: true
                }
            }
        ],
        'max-len': [
            'error',
            {
                code: 150,
                ignoreComments: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true
            }
        ], // prettier의 printWidth 옵션 대신 사용
        'prettier/prettier': [
            'error',
            {
                printWidth: 150,
                tabWidth: 4,
                semi: true,
                singleQuote: true,
                bracketSpacing: false,
                arrowParens: 'always',
                trailingComma: 'none',
                endOfLine: 'auto'
            }
        ]
    }
};
