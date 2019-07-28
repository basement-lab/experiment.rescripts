module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-prettier',
    // './node_modules/prettier-stylelint/config.js',
    'stylelint-config-styled-components',
  ],
  ignoreFiles: ['**/*.min.css'],
  processors: ['stylelint-processor-styled-components'],
  rules: {
    'block-no-empty': null,
    'no-duplicate-selectors': null,
    'property-no-vendor-prefix': null,
  },
  syntax: 'scss',
};
