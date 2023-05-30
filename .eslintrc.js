module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ["@typescript-eslint", "simple-import-sort", "prettier"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
    "airbnb",
    "prettier",
  ],

  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "react/jsx-uses-react": "off", // 关闭旧模式校验
    "react/react-in-jsx-scope": "off", // 关闭旧模式校验
    "react/jsx-props-no-spreading": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src"],
      },
    },
  },
};
