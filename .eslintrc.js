module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      modules: true
    }
  },
  extends: [
    // '@nuxtjs',
    // 'plugin:prettier/recommended',
    'plugin:vue/essential'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'func-call-spacing': process.env.NODE_ENV !== 'production' ? 'warn' : 'warn',
    'no-case-declarations': 'off'
  }
};
