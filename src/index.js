module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
  ],
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      rules: {
        'unit-allowed-list': ['px', '%', 'vh', 'vw', 'deg', 'fr', 'ms', 'em'],
        'value-no-vendor-prefix': [true, { ignoreValues: ['box'] }],
        'alpha-value-notation': 'number',
        'max-line-length': 150,
        'selector-class-pattern': [/[_\-a-zA-Z0-9]+/, { resolveNestedSelectors: true }],
      },
    },
  ],
  rules: {
    indentation: [4, { baseIndentLevel: 0 }],
  },
  ignoreFiles: [
    '**/dist/**/*.scss',
    '**/dist/**/*.css',
  ],
};
