import callstackConfig from "@callstack/eslint-config/react-native.flat.js";

export default [
  {
    ignores: ["babel.config.js", "eslint.config.mjs"],
  },
  ...callstackConfig,
];
