module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      arrowFunctions: true,
      module: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
    webextensions: true
  },
  extends: ["react-app"],
  rules: {
    "linebreak-style": ["error", "unix"],
    "no-console": ["off"],
    "react/display-name": ["off", { ignoreTranspilerName: false }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off"
  }
};
