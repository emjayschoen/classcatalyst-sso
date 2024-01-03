module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  globals: {
    $: false,
    ActionCable: true,
  },
  extends: ['react-app', 'airbnb', 'plugin:react/recommended', 'plugin:jest/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['filenames', 'jest', 'react'],
  rules: {
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^(css)$',
        argsIgnorePattern: '^_',
      },
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'max-len': ['error', 160],
    'linebreak-style': ['error', 'unix'],
    'arrow-parens': ['error', 'always'],
    'object-curly-newline': ['error', { consistent: true }],
    camelcase: ['warn'],
    semi: ['error', 'always'],
    quotes: ['warn', 'single'],
    'space-in-parens': ['warn', 'never'],
    'new-cap': ['error', { capIsNewExceptions: ['Record'] }],
    'import/extensions': ['error', 'never'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.js', '**/*.stories.js'] }],
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': ['error', 'after'],
    'function-paren-newline': 0,
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/anchor-has-content': 0,
    'filenames/match-regex': [2, '^[a-z_.]+$'],
    'filenames/match-exported': [2, 'snake'],
    'no-warning-comments': 'warn',
    'react/require-extension': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-uses-react': ['error'],
    'react/jsx-uses-vars': ['error'],
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-fragments': ['error', 'element'],
    'react/static-property-placement': ['error', 'static public field'],
  },
  overrides: [
    {
      files: ['*.stories.*'],
      rules: {
        'react/jsx-props-no-spreading': 0,
        'react/prop-types': 0,
      },
    },
  ],
};
