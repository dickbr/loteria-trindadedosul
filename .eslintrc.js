module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'next/core-web-vitals'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname
  },
  plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'prettier'],
  rules: {
    'react/require-default-props': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-undef': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never'
      }
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx']
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image']
      }
    ],
    'import/no-absolute-path': 'off',
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'react/jsx-props-no-spreading': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      typescript: {}
    }
  }
};
