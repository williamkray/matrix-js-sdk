module.exports = {
    extends: ["matrix-org"],
    plugins: [
        "babel",
    ],
    env: {
        browser: true,
        node: true,
    },

    rules: {
        "no-var": ["warn"],
        "prefer-rest-params": ["warn"],
        "prefer-spread": ["warn"],
        "one-var": ["warn"],
        "padded-blocks": ["warn"],
        "no-extend-native": ["warn"],
        "camelcase": ["warn"],
        "no-multi-spaces": ["error", { "ignoreEOLComments": true }],
        "space-before-function-paren": ["error", {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "always",
        }],
        "arrow-parens": "off",
        "prefer-promise-reject-errors": "off",
        "quotes": "off",
        "indent": "off",
        "no-constant-condition": "off",
        "no-async-promise-executor": "off",
        // We use a `logger` intermediary module
        "no-console": "error",
    },
    overrides: [{
        "files": ["src/**/*.ts"],
        "extends": ["matrix-org/ts"],
        "rules": {
            // We're okay being explicit at the moment
            "@typescript-eslint/no-empty-interface": "off",
            // While we're converting to ts we make heavy use of this
            "@typescript-eslint/no-explicit-any": "off",
            "quotes": "off",
        },
    }],
};
