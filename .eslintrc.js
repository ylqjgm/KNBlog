/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es6: true
  },
  globals: {
    defineEmits: true,
    document: true,
    localStorage: true,
    GLOBAL_VAR: true,
    window: true,
    defineProps: true,
    defineExpose: true,
    $ref: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
    './.eslintrc-auto-import.json'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@babel/eslint-parser',
    sourceType: 'module'
  },
  plugins: ['html', 'vue', 'import', 'node', 'promise'],
  rules: {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-unused-vars': [
      2,
      {
        vars: 'local',
        args: 'none'
      }
    ],
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    semi: [2, 'never'],
    quotes: [2, 'single'],
    eqeqeq: [2, 'always'],
    'key-spacing': [
      0,
      {
        singleLine: {
          beforeColon: false,
          afterColon: true
        },
        multiLine: {
          beforeColon: true,
          afterColon: true,
          align: 'colon'
        },
        'no-multiple-empty-lines': [0, { max: 100 }],
        'no-mixed-spaces-and-tabs': [0],
        indent: [1, 2]
      }
    ],
    'space-before-function-paren': [0, 'always']
  }
}
