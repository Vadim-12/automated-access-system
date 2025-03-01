// export default [
//   {
//     files: ['**/*.ts'],
//     ignores: ['.eslintrc.js'],
//     languageOptions: {
//       parser: '@typescript-eslint/parser',
//       parserOptions: {
//         project: 'tsconfig.json',
//         tsconfigRootDir: __dirname,
//         sourceType: 'module',
//       },
//     },
//     plugins: {
//       '@typescript-eslint': '@typescript-eslint/eslint-plugin',
//       prettier: require('eslint-plugin-prettier'),
//     },
//     rules: {
//       ...require('@typescript-eslint/eslint-plugin').configs.recommended.rules,
//       ...require('eslint-plugin-prettier').configs.recommended.rules,
//       '@typescript-eslint/interface-name-prefix': 'off',
//       '@typescript-eslint/explicit-function-return-type': 'off',
//       '@typescript-eslint/explicit-module-boundary-types': 'off',
//       '@typescript-eslint/no-explicit-any': 'off',
//     },
//     settings: {
//       prettier: true,
//     },
//     env: {
//       node: true,
//       jest: true,
//     },
//   },
// ];
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    /* BEST PRACTICES */

    semi: ['error', 'always'],

    'eol-last': ['error', 'always'],

    'no-unused-expressions': 'error',

    // require let or const instead of var
    'no-var': 'error',

    // disallow use of eval()
    // https://eslint.org/docs/rules/no-eval
    'no-eval': 'error',

    // disallow fallthrough of case statements
    // https://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': 'error',

    // disallow var and named functions in global scope
    // https://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'off',

    // disallow use of new operator for Function object
    // https://eslint.org/docs/rules/no-new-func
    'no-new-func': 'error',

    // disallow creating new instances of String, Number and Boolean
    // https://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 'error',

    // disallow redundant `return await`
    // https://eslint.org/docs/rules/no-return-await
    'no-return-await': 'error',

    // disallow self assignment
    // https://eslint.org/docs/rules/no-self-assign
    'no-self-assign': [
      'error',
      {
        props: true
      }
    ],

    // disallow comparisons where both sides are exactly the same
    // https://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 'error',

    // restrict what can be thrown as an exception
    // https://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 'error',

    // disallow unmodified conditions of loops
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'off',

    // disallow unnecessary catch clauses
    // https://eslint.org/docs/rules/no-useless-catch
    'no-useless-catch': 'error',

    // disallow useless string concatenation
    // https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',

    // disallow unnecessary string escaping
    // https://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'error',

    // disallow redundant return; keywords
    // https://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'error',

    // disallow use of void operator
    // https://eslint.org/docs/rules/no-void
    'no-void': 'error',

    // require or disallow Yoda expressions
    // https://eslint.org/docs/rules/yoda
    'yoda': 'error',

    /* NODEJS */

    // disallow use of the Buffer() constructor
    // https://eslint.org/docs/rules/no-buffer-constructor
    'no-buffer-constructor': 'error',

    // disallow use of process.env
    // https://eslint.org/docs/rules/no-process-env
    'no-process-env': 'off',

    // disallow process.exit()
    // https://eslint.org/docs/rules/no-process-exit
    'no-process-exit': 'off',

    /* ERRORS */

    // enforce "for" loop update clause moving the counter in the right direction
    // https://eslint.org/docs/rules/for-direction
    'for-direction': 'error',

    // disallow use of console
    // https://eslint.org/docs/rules/no-console
    'no-console': 'error',

    // disallow empty statements
    // https://eslint.org/docs/rules/no-empty
    'no-empty': 'error',

    // disallow double-negation boolean casts in a boolean context
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'error',

    // disallow unreachable statements after a return, throw, continue or break statements
    // https://eslint.org/docs/rules/no-unreachable
    'no-unreachable': 'error',
  },
};
