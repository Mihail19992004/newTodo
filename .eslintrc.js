module.exports = {
    root: true,

    parser: '@typescript-eslint/parser',

    parserOptions: {
        project: ['./tsconfig.json'],
    },

    plugins: [
        '@typescript-eslint',
    ],


    extends: [
        'airbnb-typescript/base',
        "plugin:import/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
    ],

    rules: {
       "no-console": "error",
        "computed-property-spacing": "error",
    },
    ignorePatterns: ['src/react-app-env.d.ts', 'src/i18n.tsx']
};