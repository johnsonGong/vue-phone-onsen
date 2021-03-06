module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential"],
  rules: {
    "space-before-function-paren": ["off", "always"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
