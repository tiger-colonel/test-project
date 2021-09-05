module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  plugins: ['prettier'],
  env: {
    browser: true,
    node: true,
  },
  globals: {
    SERVER_BASE_PATH: false,
    PUBLIC_PATH: false,
    PEAR_PROJECT_ID: false,
  },
  rules: {
    'prettier/prettier': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
