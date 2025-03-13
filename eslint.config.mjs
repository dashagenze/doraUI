import react from 'eslint-plugin-react';
import promise from 'eslint-plugin-promise';
import security from 'eslint-plugin-security';
import _import from 'eslint-plugin-import';
import arrayFunc from 'eslint-plugin-array-func';
import sonarjs from 'eslint-plugin-sonarjs';
import eslintComments from 'eslint-plugin-eslint-comments';
import noUseExtendNative from 'eslint-plugin-no-use-extend-native';
import ext from 'eslint-plugin-ext';
import * as putout from 'eslint-plugin-putout';
import regexp from 'eslint-plugin-regexp';
import noUnsanitized from 'eslint-plugin-no-unsanitized';
import unusedImports from 'eslint-plugin-unused-imports';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import perfectionist from 'eslint-plugin-perfectionist';
import stylistic from '@stylistic/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';
import js from '@eslint/js';
import unicorn from 'eslint-plugin-unicorn';
import nestedif from 'eslint-plugin-nested-if';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import ts from 'typescript-eslint';

const config = ts.config(js.configs.recommended, ...ts.configs.recommended, {
  plugins: {
    react,
    reactRefreshPlugin,
    promise,
    security,
    _import,
    'array-func': arrayFunc,
    sonarjs,
    unicorn,
    'eslint-comments': eslintComments,
    'no-use-extend-native': noUseExtendNative,
    ext,
    putout,
    regexp,
    'no-unsanitized': noUnsanitized,
    'unused-imports': unusedImports,
    'simple-import-sort': simpleImportSort,
    perfectionist,
    '@stylistic': stylistic,
    nestedif,
    'react-hooks': reactHooksPlugin,
    prettier
  },
  rules: {
    'no-console': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'prettier/prettier': 'error',
    ...prettierConfig.rules
  },
  languageOptions: {
    globals: {
      ...globals.browser
    },
    parserOptions: {
      projectService: {
        allowDefaultProject: [
          '*.{ts,tsx, d.ts}'
        ]
      }
    }
  },
  files: ['**/*.ts', '**/*.tsx'],
  ignores: ['node_modules/', 'dist/', 'vite-env.d.ts', 'vite.config.ts']
});

export default config;
