module.exports = {
  extends: ['next', 'turbo', 'prettier'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'no-unused-vars': 'warn',
  },
}
