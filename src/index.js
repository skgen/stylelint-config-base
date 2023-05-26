module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
  ],
  rules: {
    indentation: [4, { baseIndentLevel: 0 }],
    'unit-allowed-list': ['px', '%', 'vh', 'vw', 'deg', 'fr', 'ms', 'em'],
    'value-no-vendor-prefix': [true, { ignoreValues: ['box'] }],
    'alpha-value-notation': 'number',
    'max-line-length': 150,
    'selector-class-pattern': [/[_\-a-zA-Z0-9]+/, { resolveNestedSelectors: true }],
  },
  ignoreFiles: [
    '**/dist/**/*.scss',
    '**/dist/**/*.css',
  ],
};
