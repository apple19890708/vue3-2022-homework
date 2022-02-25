module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: 'off',
    semi: 'off',
    'comma-dangle': 'off',
    'newline-per-chained-call': 'off',
    'max-len': [1, 120],
    "no-unused-vars": "off",
    "import/prefer-default-export": "off",
  },
}
