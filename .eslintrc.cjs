module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
    },
    extends: ["@nuxtjs/eslint-config-typescript"],
    plugins: [],
    rules: {
        // разрешает использовать инкремента в виде ++
        "no-plusplus": "off",

        // устанавливает размер отступов в пробелах 4
        indent: ["error", 4],

        // устанвливает размер отступов в пробелах 4 для vue темплейтов
        "vue/html-indent": ["error", 4],

        // использование только ""
        quotes: ["error", "double"],

        // варнинг на пустую функцию
        "no-empty-function": "warn",

        // требует точку с запятой
        semi: ["error", "always"],

        // не требует пустую строку в конце файла
        "eol-last": ["error", "never"],

        "vue/multi-word-component-names": "off",
        "vue/ignoreWhenNoAttributes": "off",
    },
};