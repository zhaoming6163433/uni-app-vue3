module.exports = {
    "env": {
        "browser": true,
        "es6": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
			"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
			"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/no-explicit-any": ["off"],
			"@typescript-eslint/no-unused-vars": ["off"],
			"vue/multi-word-component-names": ["off"],
			"vue/custom-event-name-casing": "off",
			"no-undef": "off"
    },
};