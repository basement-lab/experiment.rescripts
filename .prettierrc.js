module.exports = {
  parser: 'typescript',
  proseWrap: 'never',
  singleQuote: true,
  trailingComma: 'es5',
  overrides: [
    {
      files: '*.json',
      options: {
        parser: 'json',
      },
    },
    {
      files: '*.graphql',
      options: {
        parser: 'graphql',
      },
    },
  ],
};
