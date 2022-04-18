module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        // 'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            tsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint'],
    rules: {
       // 强制分号结尾
        'react/react-in-jsx-scope': 'off', // 允许在jsx中使用js语法
        'react/prop-types': 0, 
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/no-explicit-any': ['off'],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
