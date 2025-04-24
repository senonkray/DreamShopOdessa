module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'unused-imports/no-unused-imports': 'warn',
    // Дополнительные правила...
  },
  scripts: {
    lint: "eslint . --ext .js,.jsx,.ts,.tsx"
  }
};